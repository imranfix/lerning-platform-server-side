const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


const couuses = require('./data/courses.json');
const courseInfo = require('./data/courseInfo.json');



app.get('/', (req, res)=>{
    res.send('Best Code is Running now');
});


app.get('/programme-courses', (req, res) =>{
    res.send(couuses);
})


app.get('/programme-courseInfo', (req, res) =>{
    res.send(courseInfo);
})



app.listen(port, () =>{
    console.log('The server is running', port);
})