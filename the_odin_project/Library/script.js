const myLibrary = [
  new Book("The Lightning Thief", "Rick Riordan", "428", true),
  new Book(
    "The Autobiography of Malcolm X as Told to Alex Haley",
    "Malcolm X",
    "544",
    false
  )
];

// display books in the array
myLibrary.forEach((book) => render(book));

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "Read" : "Not Read";
}

// List the books after they are submitted
function render(book) {
  const display = document.querySelector("#list");
  const bookList = document
    .querySelector("#book-list")
    .getElementsByTagName("tbody")[0];
  const newRow = bookList.insertRow(bookList.rows.length);
  newRow.innerHTML = `
  <tr>
    <th scope="row">${book.title}</th>    
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.read}</td>
    <td><button class="btn btn-danger fa fa-times icon-4x" aria-label="remove"></i></button></td>
  </tr>`;
}

// add book to library array and add it to the display table
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("page-number").value;
  const read = document.getElementById("read").checked;

  if (title === "" || author === "" || pages === "" || read === undefined) {
    alert("Please enter text in input fields");
  } else {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render(newBook);
  }
});

function removeBook(e) {
  var targetRow = e.target.parentNode.parentNode;
  if (e.target.tagName === "BUTTON") {
    targetRow.parentNode.removeChild(targetRow);
  }
}

document.querySelector("#book-list").addEventListener("click", removeBook);
