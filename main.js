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

function displayAllBooks() {
  let tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  for (let book of myLibrary) {
    let newRow = document.createElement("tr");
    newRow.setAttribute("class", "book-unit");

    let nameRow = document.createElement("td");
    nameRow.textContent = book.name;
    nameRow.className = "book-name";
    newRow.appendChild(nameRow);

    let authorRow = document.createElement("td");
    authorRow.textContent = book.author;
    authorRow.className = "author-name";
    newRow.appendChild(authorRow);

    let numPagesRow = document.createElement("td");
    numPagesRow.textContent = book.numPages;
    numPagesRow.className = "num-pages";
    numPagesRow.style.textAlign = "center";
    newRow.appendChild(numPagesRow);

    let readCheckRow = document.createElement("td");
    readCheckRow.className = "read-check";
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = book.read;
    readCheckRow.appendChild(checkBox);
    newRow.appendChild(readCheckRow);

    let removeBtnRow = document.createElement("td");
    removeBtnRow.setAttribute("class", "remove-btn");
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("data-id", `${book.id}`);
    removeBtn.setAttribute("class", "actual-remove-btn");
    removeBtnRow.appendChild(removeBtn);
    newRow.appendChild(removeBtnRow);

    tableBody.appendChild(newRow);
  }
}

function addBookToLibrary(name, author, numPages, read) {
  let newBook = new Book(name, author, numPages, read);
  myLibrary.push(newBook);
  displayAllBooks();
}

//addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 395, true);

const submitFormBtn = document.querySelector(".form-btn");
submitFormBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const bookName = document.querySelector('[name="bookName"]');
  const authorName = document.querySelector('[name="authorName"]');
  const numPages = document.querySelector('[name="numPages"]');
  const readCheck = document.querySelector('[name="read"]');

  addBookToLibrary(
    bookName.value,
    authorName.value,
    numPages.value,
    readCheck.checked
  );

  const dialog = document.querySelector("dialog");
  dialog.close();
});

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-btn");
const closeButton = document.querySelector(".dialog-close-btn");

showButton.addEventListener("click", () => {
  console.log("Show Button working");
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

// By using Event Delegation (got to know about that for the first time)
document.querySelector("tbody").addEventListener("click", (event) => {
  if (event.target && event.target.className == "actual-remove-btn") {
    console.log("Remove Button event listener working.");

    let idToRemove = event.target.getAttribute("data-id");

    let indexToDelete = myLibrary.findIndex((element) => {
      return element.id === idToRemove;
    });

    if (indexToDelete === -1) {
      console.log("idToRemove isn't working.");
      return;
    }

    myLibrary.splice(indexToDelete, 1);
    displayAllBooks();
  }
});
