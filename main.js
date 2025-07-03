const myLibrary = [];

function Book(name, author, numPages, read) {
  if (!new.target) {
    throw console.error(
      "No NEW keyword used when creating an instance of Book Object."
    );
  }
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

function addBookToLibrary(name, author, numPages, read) {
  let newBook = new Book(name, author, numPages, read);
  myLibrary.push(newBook);
}

function displayAllBooks() {}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-btn");
const closeButton = document.querySelector(".dialog-close-btn");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

const submitFormBtn = document.querySelector(".form-btn");
submitFormBtn.addEventListener("click", (event) => {
  
});