require('dotenv').config();
let express = require('express');
let app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.send('Hello Express');
})

let absolutePath = __dirname + '/views/index.html';
app.get('/',(req,res)=>{
    res.sendFile(absolutePath)
})

app.use('/public', express.static(path.join(__dirname, 'public')))

// console.log(process.env.MESSAGE_STYLE)
app.get('/json',(req,res)=>{
    jsonResponse = {"message":"help json"};

    if(process.env.MESSAGE_STYLE === 'uppercase'){
        jsonResponse.message = jsonResponse.message.toUpperCase();
    }
    console.log(process.env.MESSAGE_STYLE);
    res.json(jsonResponse)
});





























 module.exports = app;
