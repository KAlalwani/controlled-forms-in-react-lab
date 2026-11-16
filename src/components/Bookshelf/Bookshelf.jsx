import { useState } from 'react';

function BookShelf(){
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState([
        {
            title: '',
            author: ''
        }
    ])

    function handleInputChange(event){
        setNewBook({...newBook,[event.target.name]:event.target.value})
    }
    function handleSubmit(event){
    event.preventDefault()//stops the form form refreshing
    setBooks([...books,newBook])
    setNewBook({
        title:'',
        author:''
    })
    }
    return(
        <>
            <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input 
                type="text" 
                value={newBook.title}
                id="title"
                name="title"
                onChange={handleInputChange}
                />
                <label htmlFor="author">Author:</label>
                <input 
                type="text" 
                value={newBook.author}
                id="author"
                name="author"
                onChange={handleInputChange}
                />
                <br />
                <button type="submit">Create Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                <h2>All Books</h2>
                {books.map((book)=>
                <div key={`${book.title} ${book.author}`}>
                    <p>{book.title} by {book.author}</p>
                </div>
                )}
            </div>
            </div>
        </>
    )
}

export default BookShelf