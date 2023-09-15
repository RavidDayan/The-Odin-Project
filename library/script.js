const myLibrary = [];
const library = document.getElementById("library");
const addButton = document.getElementById("addButton")
const removeButton = document.getElementById("removeButton")
const cancelButton = document.getElementById("cancelButton")
const readStatusButton = document.getElementById("readStatusButton")
const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");
const bookRead = document.getElementById("read");
const addBookForm = document.getElementById("addBookForm");
let currentBook;
//intialize
addBookForm.style.display = "none";
removeButton.disabled = true;
readStatusButton.disabled = true;
//event listners
addButton.addEventListener("click", () => {
    addBookForm.style.display = "block";
})

cancelButton.addEventListener("click", () => {
    addBookForm.style.display = "none";
})
removeButton.addEventListener("click", () => {
    let indexOfBook=myLibrary.indexOf(currentBook);
    library.removeChild(library.children[indexOfBook]);
    myLibrary.splice(indexOfBook,1);
    clearInformation();

})
//constructors
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
        removeButton.disabled = false;
        readStatusButton.disabled = false;
    })
}
//functions
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
}
function clearInformation(){
    currentBook=null;
    bookName.textContent = "Name: "
    bookAuthor.textContent = "Author: "
    bookRead.textContent = "Reading status: "
    removeButton.disabled = true;
    readStatusButton.disabled = true;

}