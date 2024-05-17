//create web server and listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

// import comments.js
const comments = require('./comments.js');

// when user access the root of the website
app.get('/', (req, res) => {
    res.send('Welcome to our website!');
});

// when user access the /comments route
app.get('/comments', (req, res) => {
    res.json(comments);
});

// when user access the /comments/:id route
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    res.json(comment);
});

// start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// Path: comments.js
//create a list of comments
module.exports = [
    {
        id: 1,