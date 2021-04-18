// 用 Node.js 写一个小的服务端，提交至 GitHub

const http = require('http');

http.createServer((request,response)=>{
 let body = [];
 request.on('error',err=>{
     console.error(err)
 }).on('data',chunk=>{
     body.push(chunk.toString());
 }).on('end',()=>{
     body = Buffer.concat(body).toString();
     console.log('bady:',body);
     response.writeHead(200,{'Content-Type':'text/html'});
     response.end('hello word')
 })
}).listen(8088)
console.log('server started')

