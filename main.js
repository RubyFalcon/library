const myLibrary  = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages){
    console.log("new book added");
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function displayBook () {
    const bookContainer = document.querySelector(".books-container");
    bookContainer.innerHTML = "";
    for (item of myLibrary){
        const book = document.createElement("div");
        book.className = "book";
        book.innerHTML= "";
        
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
}
addBookToLibrary("The lion, the witch and the wardrobe",  "Tupay", 4);


const bookContainer = document.querySelector(".books-container");





const addBook = document.querySelector(".addBook");
const bookDialog = document.querySelector(".bookDialog");


addBook.addEventListener("click", ()=> bookDialog.showModal())

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (e)=> {
    e.preventDefault();
    console.log(e.value);
    const name = document.querySelector("input#name");
   
    
    const author = document.querySelector("input#author");
    const pages = document.querySelector("input#pages");
    addBookToLibrary(name.value, author.value, parseInt(pages.value));
    console.table(myLibrary);
    displayBook();
    bookDialog.close();
})




displayBook();