const http = require("http");

const port = 3000;

const serverr = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');

    const style = `<style>
        body { font-family:arial;
        background-color:green;
        padding:20px;
        h1{ color : #333;}
        p{color: #555};}
    </style>`;

    if(req.url==='/' && req.method === 'GET'){
        res.writeHead(200);
        res.end(`${style}<h1> Welcome to my server</h1>`)
    }else if(req.url ==='/about' && req.method==='GET'){
        res.writeHead(200)
        res.end(`${style}<h1>Contact</h1><p>Email:mansikuraria39424@gmail.com</p>`)
    }else{
        res.writeHead(404);
        res.end(`${style}<h1>page not found</h1>`)
    }
})

serverr.listen(port,()=>{
    console.log("server running")
})