const express = require('express');
const hbs = require('hbs');

var app = express();

app.use((req, res, next) => {
    res.render('maintenance.hbs');
});

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.get('/', (req, res) => {
    res.render('home.hbs',{
        pageHeader:'This is Home Page',
        welcomeMessage:'Welcome to my home page',       
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        welcomeMessage: 'Welcome to my About page'
    });
});

app.get('/bad', (req, res) => {
    res.send('This is a bad request.');
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});
