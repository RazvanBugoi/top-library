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


let removeIcons;




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
  removeImage.className = "remove-icons"
  removeImage.id = `remove-icon${counter}`

  newTdTitle.textContent = `${myLibrary[myLibrary.length - 1].title}`
  newTdAuthor.textContent = `${myLibrary[myLibrary.length - 1].author}`
  newTdPages.textContent = `${myLibrary[myLibrary.length - 1].noOfPages}`
  newTdStatus.textContent = `${myLibrary[myLibrary.length - 1].status}`

  newTr.append(newTdTitle, newTdAuthor, newTdPages, newTdStatus, removeImage);
  

  newTr.dataset.index = counter;


  document.getElementById('table').appendChild(newTr);

  removeIcons = document.getElementsByClassName('remove-icons')


  for (let i=0; i<removeIcons.length; i++) {
    removeIcons[i].onclick = () => {
    console.log(removeIcons[i])
    console.log(removeIcons[i].id)
    let bookId = removeIcons[i].id
    const removeTr = document.getElementById(`${bookId}`)
    removeBook(removeTr)
    }
  }
}

function removeBook(book) {
  book.parentElement.remove()
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


let counter = 0;
submitButton.onclick = (event) => {
  event.preventDefault();
  

  const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);
  myLibrary.push(book);
  counter = myLibrary.indexOf(book)

  // counter ++
  console.log(counter)

  addBookToLibrary(counter)
}