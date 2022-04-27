const express = require('express');
const fs = require('fs'); 
const app = express();
const PORT = process.env.PORT || 6969;

const jokesjson = fs.readFileSync("./public/jokes/jokes.json","utf-8");
const jokes = JSON.parse(jokesjson);

app.use(express.json());
app.use(express.static('public'));

app.listen(
    PORT,
    () => console.log(`http://localhost:${PORT}`)
);

app.get('/',(req,res)=>{
    res.status(200).send({
        msg: "тут ты найдешь хуй да нихуя. вот так вот. юзай /help."
    });
});

app.get('/nuzhdiki',(req,res)=>{
    
    const joke = jokes[Math.floor(Math.random() *jokes.length)];
    res.status(200).send({
        id:joke.id,
        nuzhdik: joke.nuzhdik
    });
});

app.get('/help',(req,res)=>{
    res.status(200).send({
        help: "Запросы: '/nuzhdiki' - запросить мощный нуждик. Все."
    });
});