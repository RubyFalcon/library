const myLibrary  = [];

class Book {
    constructor(title, author, pages, rating, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.rating = rating;
        this.read = read
    }
    
}

function addBookToLibrary(title, author, pages, rating, read){
    const newBook = new Book(title, author, pages, rating , read);
    myLibrary.push(newBook);
}

function displayBook () {
    const bookContainer = document.querySelector(".books-container");
    bookContainer.innerHTML = "";
    let counter = 0;
    for (item of myLibrary){
        const book = document.createElement("div");
        book.className = "book";
        book.setAttribute("data-", counter);
        counter++;
        
        const bookTitle = document.createElement("div");
        bookTitle.className = "book-title flex";
    
        
        const titleHeading = document.createElement('h4');
        titleHeading.textContent = "Title: "
        const paragraph = document.createElement('p')
        paragraph.textContent = item.title;
    
        bookTitle.appendChild(titleHeading);
        bookTitle.appendChild(paragraph);
    
        const author = document.createElement("div");
        author.className = "author flex";
    
        const authorHeading = document.createElement("h4");
        authorHeading.textContent = "Author:"
    
        authorParagraph = document.createElement("p")
        authorParagraph.textContent = item.author;
        
        author.appendChild(authorHeading);
        author.appendChild(authorParagraph);
    
        const pages = document.createElement("div");
        pages.className = "pages flex";
    
        const pagesHeading = document.createElement("h4");
        pagesHeading.textContent = "Pages: "
    
        pagesText = document.createElement("p");
        pagesText.textContent = item.pages;
    
        pages.appendChild(pagesHeading);
        pages.appendChild(pagesText);
    
        const rating = document.createElement("div");
        rating.className = "rating";

        const ratingHeading = document.createElement("h4");
        ratingHeading.textContent  = "Rating:";

        const ratingText = document.createElement ("p")
        ratingText.textContent =  item.rating;
        rating.appendChild(ratingHeading)
        rating.appendChild(ratingText);

        const readButton = document.createElement("button");
        
        if (item.read) {
            readButton.textContent= "read";
            readButton.className = "read";

        }
        else {
            readButton.textContent = "not Read";
            readButton.className = "notRead";
        }

  

        const delButton = document.createElement("button");
        delButton.className = "delete";
        delButton.innerHTML = "remove"

        
    
    
       
    
        book.appendChild(bookTitle);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(rating);
        book.appendChild(readButton);
        book.appendChild(delButton);
        
        let index = book.getAttribute("data-")
        
        bookContainer.appendChild(book);
        readButton.addEventListener("click", (e)=>{
            if(myLibrary[index].read){
                myLibrary[index].read = false;
                readButton.textContent = 'not Read';
                readButton.className = "notRead";
            }
            else {
                myLibrary[index].read = true;
                readButton.textContent =  "read";
                readButton.className = "read";
            }
            
        })
        delButton.addEventListener("click", (e)=> {
            
            
            myLibrary.splice(index,1);
            displayBook();
        });
    }
}



const bookContainer = document.querySelector(".books-container");





const addBook = document.querySelector(".addBook");
const bookDialog = document.querySelector(".bookDialog");


addBook.addEventListener("click", ()=> bookDialog.showModal())

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (e)=> {
    e.preventDefault();
    const name = document.querySelector("input#name");
    const author = document.querySelector("input#author");
    const pages = document.querySelector("input#pages");
    const rating = document.querySelector("input#rating");
    const read = document.querySelector("input[name='read']:checked");
    

    const isRead = (read.value === 'yes')
    addBookToLibrary(name.value, author.value, parseInt(pages.value), rating.value, isRead);

    //reset form
    document.querySelector("#addBook").reset();

    //propagate page
    displayBook();

    bookDialog.close();
})






displayBook();