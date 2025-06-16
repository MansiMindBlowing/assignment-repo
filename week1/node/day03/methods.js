const http = require("http");
const url = require("url");

const server = http.createServer((req, res)=>{
    const parsedUrl = url.parse(req.url, true);
    const{pathname, query} = parsedUrl;

    const method = req.method;
    console.log(`incoming ${method} request to ${pathname}`);


    if(pathname==='/api/data'){
        switch(method){

            case 'GET':
            res.writeHead(200,{'content-type': 'application/json'});
            res.end(JSON.stringify({message:'Get successful', query}));
            break;
           
            case 'Post':
            parseBody(req, (body)=>{
                res.writeHead(201,{'Content-Type':'application/json'});
                res.end(JSON.stringify({message:'post done', date:body}))
            })
            break;

            case 'PUT':
                parseBody(req, (body)=>{
                    res.writeHead(200,{'content-type':'application/json'})
                    res.end(json.stringify({message:'put successful', date:body}))
                })
                break;
                
        }
    }
    
})

server.listen(3000,()=>{
    console.log(("server is running"));
    
})

