const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


const couuses = require('./data/courses.json');



app.get('/', (req, res)=>{
    res.send('Best Code is Running now');
});


app.get('/programme-courses', (req, res) =>{
    res.send(couuses);
})



app.listen(port, () =>{
    console.log('The server is running', port);
})