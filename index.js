const express = require('express');
const app = express();
const PORT = process.env.PORT || 6969;
const nuzhdik = require('./api/nuz.js')

app.use('/api/nuzhdiki',nuzhdik);
app.listen(
    PORT,
    () => console.log(`started on ${PORT}`)
);