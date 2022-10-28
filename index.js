const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors ());
// data-1:
const courses = require('./data/courses.json');
// data-2:
const news = require('./data/news.json');



app.get('/', (req, res)=>{
    res.send('Best Code is Running now');
});


// data-1:-
app.get('/news-courses', (req, res) =>{
    res.send(courses);
})


app.get('/catagory/:id', (req, res) =>{
    const id = req.params.id;
    if(id === '07'){
        res.send(news);
    }
    else{
        const catagory_news = news.filter( n => n.catagory_id === id);
        res.send(catagory_news);
    }
   
})

app.get('/news', (req, res) =>{
    res.send(news);
})


// data:2 
app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    const selected_news = news.find( n => n._id === id);
    res.send(selected_news);
})



app.listen(port, () =>{
    console.log('The server is running', port);
})