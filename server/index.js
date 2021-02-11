const express = require('express');
const ejs = require ('ejs');
const path = require('path');

const clientPath = path.join(_dirname,'../client');
const staticPath = path.join(clientPath,'/static');
const viewsPath =  path.join(clientPath,'/views');

const app = express();

app.set('views-engine','ejs');
app.set('views', viewsPath);

app.get('/', function(req, res){
    res.render('index');
});

app.get('/famous', function(req, res){
    res.render('famous');
});

app.use(express.static(staticPath));


app.listen(2000);
