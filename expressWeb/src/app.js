const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');





const viewspath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//public static path
const staticpath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.set('views',viewspath)
app.use(express.static(staticpath));

hbs.registerPartials(partialsPath)


// routing
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/about', (req, res) => {
    res.render('about', {});
})
app.get('/weather', (req, res) => {
    res.render('weather')
});
app.get('*', (req, res) => {
    res.render('404error',{
        errormessege:'OOPS Page Not Found !!'
    })
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

