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

function displayAllBooks() {
  for (let book in myLibrary) {
    const bookTable = document.querySelector(".book-table");
    let newRow = document.createElement("tr");

    let nameRow = document.createElement("td");
    nameRow.textContent = book.name;
    nameRow.className = "book-name";

    let authorRow = document.createElement("td");
    authorRow.textContent = book.name;
    authorRow.className = "author-name";

    let numPagesRow = document.createElement("td");
    numPagesRow.textContent = book.name;
    numPagesRow.className = "num-pages";

    let readCheckRow = document.createElement("td");
    readCheckRow.className = "read-check";
    
  }
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-btn");
const closeButton = document.querySelector(".dialog-close-btn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const submitFormBtn = document.querySelector(".form-btn");
const bookName = document.querySelector('[name="bookName"]');
const authorName = document.querySelector('[name="authorName"]');
const numPages = document.querySelector('[name="numPages"]');
const readCheck = document.querySelector('[name="read"]');

submitFormBtn.addEventListener("click", (event) => {
  addBookToLibrary(
    bookName.value,
    authorName.value,
    numPages.value,
    readCheck.value
  );
});
