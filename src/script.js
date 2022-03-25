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

function addBookToLibrary(counter) {
  const newTr = document.createElement("tr")
  const newTdTitle = document.createElement("td")
  const newTdAuthor = document.createElement("td")
  const newTdPages = document.createElement("td")
  const newTdStatus = document.createElement("td")
  const newTdRemove = document.createElement("td")
  const removeImage = new Image()
  removeImage.src = "../assets/trash-can-outline.png"
  removeImage.alt = "Remove Book Icon"
  removeImage.className = "remove-icon"

  newTdTitle.textContent = `${myLibrary[myLibrary.length - 1].title}`
  newTdAuthor.textContent = `${myLibrary[myLibrary.length - 1].author}`
  newTdPages.textContent = `${myLibrary[myLibrary.length - 1].noOfPages}`
  newTdStatus.textContent = `${myLibrary[myLibrary.length - 1].status}`

  newTr.append(newTdTitle, newTdAuthor, newTdPages, newTdStatus, removeImage);
  

  newTr.dataset.index = counter;


  document.getElementById('table').appendChild(newTr);
}

function removeBookFromLibrary() {
  myLibrary.forEach((book) => console.log(book))
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


let counter = 1;
submitButton.onclick = (event) => {
  event.preventDefault();
  counter ++
  const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);
  myLibrary.push(book);

  addBookToLibrary(counter)
}