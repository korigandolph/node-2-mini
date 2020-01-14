let books =[]
let id=0;

module.exports={
    read: (req, res) => {
        res.status(200).send(books);
    }, 
    create: (req, res)=>{
        const {title, author}=req.body;
        let book ={
            id,
            title,
            author
        }
        books.push(book);
        id++;
        res.status(200).send(books);
    }, 
    update: (req, res)=>{
        let index = null;
        books.forEach((book, i) => {
            if(book.id === +req.params.id){
                index = i
            }
        });
        books[index]={
            id: books[index].id,
            title: req.body.title || books[index].title,
            author: req.body.author || books[index].author
        }
        res.status(200).send(books);
    }, 
    delete: (req, res)=>{
        let index = books.findIndex(element=>element.id===+req.params.id);
        books.splice(index, 1);
        res.status(200).send(books);
    }
};