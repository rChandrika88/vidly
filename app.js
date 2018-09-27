const express = require('express')
const app = express()
const bodyParser = require('body-parser');
let genres = require('./routes/genres')

app.use(express.json());
app.get('/', (req,res)=>{
    res.send("Welcome to Vidly!")
})
app.use('/api/genres',genres);
//app.use('/',express.static('api'))
app.use(bodyParser.json())

let port = process.env.port || 8000 
app.listen(port, ()=>{
    console.log(`Server listening at port: ${port}`)
})