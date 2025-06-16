const http = require('http')
const fs = require('fs')

// function checkdata(res, data){
//     res.setHeader('Content-Type', 'application/json');
//     res.write(json.stringify(data))
//     res.end()
// }

const server = http.createServer((req , res)=>{
    const url = req.url;
    const method = req.method;
    const header =req.header;

    if(url==='/'){
        res.write('<html>');
        res.write('<head><title> Enter message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">SEND</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url==='/message' && method==="POST"){
        const body = [];
        req.on('data' , (chunk)=>{
            body.push(chunk)
        });

        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync("message.txt", message || "no message")
            console.log(parseBody);
            res.statusCode = 302;
            res.setHeader('Location','/')
            return res.end();
        });

    }

       if(url === '/message' && method === 'PUT') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1] || parseBody;
            fs.writeFileSync('message.txt', message);
            res.statusCode = 200;
            res.write('Message updated');
            return res.end();
        });
    }

    // Exercise 3--------------------------------

// responses depending upon the request

// if(url==="/"){
//     res.setHeader('Content-Type','application/json')
//     res.write(JSON.stringify({message:'hello'}));
// }



// res.setHeader('Content-Type', 'text/html');
// res.write('<h1>Hello</h1>');


// res.setHeader('Content-Type', 'text/plain');
// res.write('Hello');

})


// common patterns

// if (url === '/json' && method === 'GET') {
//     return sendJSON(res, { name: "Mansi", message: "Welcome to JSON route" });
// }


// checkdata(res, {name:'mansi'})


server.listen(5000, ()=>{
    console.log("running");
    
})
