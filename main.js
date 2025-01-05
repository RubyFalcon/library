const myLibrary  = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages){
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}


addBookToLibrary("Christine farts",  "Tupay", 4);


const bookContainer = document.querySelector(".books-container");


for (item of myLibrary){
    const book = document.createElement("div");
    book.className = "book";

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



    


   

    book.appendChild(bookTitle);
    book.appendChild(author);
    book.appendChild(pages);



    bookContainer.appendChild(book);
}


const addBook = document.querySelector(".addBook");
const bookDialog = document.querySelector(".bookDialog");


addBook.addEventListener("click", ()=> bookDialog.showModal())