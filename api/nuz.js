const express = require('express');
const router = express.Router()
const jokes = require("../public/jokes/jokes.json")

router.get('/',async (req,res)=>{
    const joke = jokes[Math.floor(Math.random() *jokes.length)];
    res.status(200).send({
        id:joke.id,
        nuzhdik: joke.nuzhdik,
    });
});

module.exports = router;