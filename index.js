const json_server=require('json-server')

//server creation
const clickServer = json_server.create()

//create a middleware to convert json to js
const middleware = json_server.defaults()

//create a router to get all requests of index.js to db.json
const router = json_server.router('db.json')

//import cors - is a library to connect frontend with server
const cors=require('cors')
clickServer.use(cors())

//apply middleware
clickServer.use(middleware)

//use router by server
clickServer.use(router)

const PORT =8000
clickServer.listen(PORT,()=>{
    console.log(`_______Click.com server starts at port number ${PORT}____________ `);
})