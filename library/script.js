const myLibrary=[];
const shelf=document.getElementById("library");
const addButton=document.getElementById("addButton")
const removeButton=document.getElementById("removeButton")
const bookName=document.getElementById("name");
const bookAuthor=document.getElementById("author");
const bookRead=document.getElementById("read");

function Book(name,author,read){
    this.name=name;
    this.author=author;
    this.read=read;
    this.book = document.createElement("div");
    this.book.classList.add("book");
    this.book.addEventListener("click",()=>{

        bookName.textContent= name;
        bookAuthor.textContent= author;
        bookRead.textContent= read;
    })
}
function clearShelf(){
    while (shelf.firstChild) {
        shelf.removeChild(shelf.firstChild);
      }
}
function displayBooks(){
    clearShelf();
    myLibrary.forEach(book => {
        shelf.appendChild(book.book);
    });
}
function addNewBook(book){
    myLibrary.push(book);
    displayBooks()
}
function processForm(){
    const formName = document.getElementById(bookName);
    const formAuthor = document.getElementById(bookAuthor);
    const formRead = document.getElementById(bookRead);
    const newBook=new Book(formName,formAuthor,formRead);

}