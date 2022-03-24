let myLibrary = [];

function Book(title, author, noOfPages, status) {
  this.title = title
  this.author = author
  this.noOfPages = noOfPages
  this.status = status
  
  this.info = () => {
    return `${title} by ${author}, ${noOfPages} pages, ${status}`
  }
}

function displayBook() {
  const newTr = document.createElement("tr")
  const newTdTitle = document.createElement("td")
  const newTdAuthor = document.createElement("td")
  const newTdPages = document.createElement("td")
  const newTdStatus = document.createElement("td")

  newTdTitle.textContent = `${myLibrary[0].title}`
  newTdAuthor.textContent = `${myLibrary[0].author}`
  newTdPages.textContent = `${myLibrary[0].noOfPages}`
  newTdStatus.textContent = `${myLibrary[0].status}`

  newTr.append(newTdTitle, newTdAuthor, newTdPages, newTdStatus);

  document.getElementById('table').appendChild(newTr);
}

const startLibraryButton = document.getElementById('start-library')
const formContainer = document.getElementsByClassName('form-container')
const closeButton = document.getElementById('close-button')
const submitButton = document.getElementById('submit-button')

// Input Values 
const bookTitle = document.getElementById('title')
const bookAuthor = document.getElementById('author')
const bookPages = document.getElementById('pages')
const bookStatus = document.getElementById('checkbox')

startLibraryButton.onclick = () => {
  formContainer[0].style.display = 'block';
}

closeButton.onclick = () => {
  formContainer[0].style.display = 'none';
}

submitButton.onclick = (event) => {
  event.preventDefault();

  const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);
  myLibrary.push(book);

  displayBook()
}