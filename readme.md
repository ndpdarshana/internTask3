How to setup
1. Install nodejs (10.15.2)
2. run following command inside the directory
  `npm install`
3. run program
  `node app`
4. The excluded string is 'query'.

The program should be run at port 3000, client can access the program by
URL: http://localhost:3000/ 

Post request should be as follows:
URL: `POST http://localhost:3000/`
POST / HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 1b5ec0b3-853a-f8c5-e685-6b7f365a4d92
Body:
{"string":"Hello, world"}

Query request should be as follows:
URL: `GET http://localhost:3000/query`
GET /query HTTP/1.1
Host: localhost:3000
Cache-Control: no-cache
Postman-Token: 062e0393-0d80-d4a7-28c9-f70a83be9d73
