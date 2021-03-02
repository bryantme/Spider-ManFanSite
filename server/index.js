const express = require('express');
const ejs = require ('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

//Navigation

const clientPath = path.join(__dirname,'../client/');
const staticPath = path.join(clientPath,'/static/');
const viewsPath =  path.join(clientPath,'/views/');

//Basic server

const app = express();
app.use(express.static(staticPath));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
        name: 'spider-man',
        secret: 'webhead2000',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000*60*60*24*3,
        }
}));

app.listen(2000);

// Setting Views

app.set('view engine','ejs');
app.set('views',viewsPath);

// Routes


app.get('/', function(req, res) {
    res.render('index', {nomen: req.session.username});
});

app.get('/famous', function(req, res) {
    res.render('famous', {nomen: req.session.username});
});

app.post('/welcome', (req, res) => {
    req.sassion.username=req.body.visitorname;
    res.redirect('/');
});