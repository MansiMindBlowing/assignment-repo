const http = require('http')
const fs = require('fs');

const server = http.createServer((req,res)=>{

    const url = req.url;
    const method = req.method;

    if(url==='/'){
        res.write('<html>');
        res.write('<head><title> Enter message </title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">SEND</button></form></body>')
        res.write('</html>')
        return res.end()
    }

 
    if(url==='/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
            
        });

        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            // console.log(parseBody);

            fs.writeFileSync('message.txt',message);
             res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
           
            
        });
        

        
      
        
    }
})

server.listen(3000,()=>{
    console.log("running");
    
})