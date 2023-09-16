const myLibrary = [];
const maxBooksSpace = 40;
const library = document.getElementById("library");
const addButton = document.getElementById("addButton")
const removeButton = document.getElementById("removeButton")
const cancelButton = document.getElementById("cancelButton")
const readStatusButton = document.getElementById("readStatusButton")
const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");
const bookRead = document.getElementById("read");
const addBookForm = document.getElementById("addBookFormDiv");
let currentBook;
//intialize
addBookForm.style.display = "none";
removeButton.disabled = true;
readStatusButton.disabled = true;
//tester
function test() {
    for (let i = 0; i < 40; i++) {
        myLibrary[i] = (new Book(i, i, "Done"));
        addNewBook(myLibrary[i]);
    }
}
test();
//event listners
addButton.addEventListener("click", () => {
    if (checkForBookRoom()) {
        addBookForm.style.display = "block";
    }
    else {
        noRoomForBooksAlert();
    }

})
cancelButton.addEventListener("click", () => {
    addBookForm.style.display = "none";
})
removeButton.addEventListener("click", () => {
    let indexOfBook = myLibrary.indexOf(currentBook);
    console.log(indexOfBook);
    myLibrary.splice(indexOfBook, 1);
    clearShelf();
    displayBooks();
    clearInformation();

})
readStatusButton.addEventListener("click", () => {
    if (currentBook.read == "Done") {
        currentBook.read = "Still reading";
    }
    else {
        currentBook.read = "Done";
    }
    bookRead.textContent = "Reading status:" + currentBook.read;
})
//constructors
function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
    this.color = colorBoxRandomly();
    this.book = document.createElement("div");
    this.book.style.backgroundColor = this.color;
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
    if (checkForBookRoom()) {
        const formName = document.getElementById("bookName").value;
        const formAuthor = document.getElementById("bookAuthor").value;
        const formRead = document.getElementById("bookRead").value;
        const newBook = new Book(formName, formAuthor, formRead);
        addNewBook(newBook);
    }
    else {
        noRoomForBooksAlert();
    }
}
function clearInformation() {
    currentBook = null;
    bookName.textContent = "Name: "
    bookAuthor.textContent = "Author: "
    bookRead.textContent = "Reading status: "
    removeButton.disabled = true;
    readStatusButton.disabled = true;

}
function GenerateRandomColor() {
    return Math.floor(Math.random() * 255);
}
function colorBoxRandomly() {
    let red = GenerateRandomColor();
    let green = GenerateRandomColor();
    let blue = GenerateRandomColor();
    const rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
    return rgbColor;
}
function noRoomForBooksAlert() {
    alert("NO SPACE AVAILABLE");
}
function checkForBookRoom() {
    if (myLibrary.length <= maxBooksSpace) {
        return true;
    }
    return false;
}