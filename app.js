const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/html/resume.html');
});

app.get('/edu.html', function(req, res){
    res.sendFile(__dirname + '/public/html/edu.html');
});

app.get('/skills.html', function(req, res){
    res.sendFile(__dirname + '/public/html/skills.html');
});

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
});