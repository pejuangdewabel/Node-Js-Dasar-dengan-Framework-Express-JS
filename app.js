const express = require('express'); // import packages express
const app = express(); //Inisialisasi Express

app.use(express.static('public'));

app.get('/',(req, res) => {
    res.send('Hello World');
});

app.get('/home', (req, res) => {
    res.render('home.ejs');
});

app.listen(8000, () => {
    console.log('running di port localhost:8000');
});
