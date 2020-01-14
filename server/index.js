const express =require('express'),
    booksCtrl = require('./controllers/books_controller'),
    app=(express()),
    cors=require('cors');

app.use(express.static(__dirname + "/../build"));
app.use(cors());
app.use(express.json());

//endpoints
app.get('/api/books', booksCtrl.read);
app.post('/api/books', booksCtrl.create);
app.put('/api/books/:id', booksCtrl.update);
app.delete('/api/books/:id', booksCtrl.delete);

const port=4000;
app.listen(port, ()=> console.log(`server running on ${port}`));