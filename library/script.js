const myLibrary=[];
const library=document.getElementById("library");
const addButton=document.getElementById("addButton")
const removeButton=document.getElementById("removeButton")
const bookName=document.getElementById("name");
const bookAuthor=document.getElementById("author");
const bookRead=document.getElementById("read");
let currentBook;

function Book(name,author,read){
    this.name=name;
    this.author=author;
    this.read=read;
    this.book = document.createElement("div");
    this.book.classList.add("book");
    this.book.addEventListener("mouseclick",()=>{
        currentBook=this;
        bookName.textContent= name;
        bookAuthor.textContent= author;
        bookRead.textContent= read;
    })
}
function clearShelf(){
    while (library.firstChild) {
        library.removeChild(library.firstChild);
      }
}
function displayBooks(){
    clearShelf();
    myLibrary.forEach(book => {
        library.appendChild(book.book);
    });
}
function addNewBook(book){
    myLibrary.push(book);
    displayBooks();
}

function processForm(){
    const formName = document.getElementById(bookName);
    const formAuthor = document.getElementById(bookAuthor);
    const formRead = document.getElementById(bookRead);
    const newBook=new Book(formName,formAuthor,formRead);

}