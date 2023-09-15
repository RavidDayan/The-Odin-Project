const myLibrary = [];
const library = document.getElementById("library");
const addButton = document.getElementById("addButton")
const removeButton = document.getElementById("removeButton")
const cancelButton = document.getElementById("cancelButton")
const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");
const bookRead = document.getElementById("read");
const addBookForm = document.getElementById("addBookForm");
let currentBook;

addBookForm.style.display = "none";
addButton.addEventListener("click",()=>{
    addBookForm.style.display = "block";
})
cancelButton.addEventListener("click",()=>{
    addBookForm.style.display = "none";
})
function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
    this.book = document.createElement("div");
    this.book.classList.add("book");
    this.book.addEventListener("click", () => {
        currentBook = this;
        bookName.textContent = "Name: " + name;
        bookAuthor.textContent = "Author: " + author;
        bookRead.textContent = "Reading status: " + read;
    })
}
function clearShelf() {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
}
function displayBooks() {
    clearShelf();
    myLibrary.forEach(book => {
        library.appendChild(book.book);
    });
}
function addNewBook(book) {
    myLibrary.push(book);
    displayBooks();
}
function handleSubmit(event) {
    const formName = document.getElementById("bookName").value;
    const formAuthor = document.getElementById("bookAuthor").value;
    const formRead = document.getElementById("bookRead").value;
    const newBook = new Book(formName, formAuthor, formRead);
    addNewBook(newBook);
    console.log(newBook);
}