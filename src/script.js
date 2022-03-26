let myLibrary = [];
let removeIcons;
let counter = 0;
let booksStatus;

const startLibraryButton = document.getElementById('start-library')
const formContainer = document.getElementsByClassName('form-container')
const closeButton = document.getElementById('close-button')
const submitButton = document.getElementById('submit-button')

// Input Values 
const bookTitle = document.getElementById('title')
const bookAuthor = document.getElementById('author')
const bookPages = document.getElementById('pages')
const bookStatus = document.getElementById('checkbox')


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
  newTdStatus.className = "status"
  newTdStatus.id = `book-status${counter}`
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

  removeIcons = document.querySelectorAll(".remove-icons")


  for (let i=0; i<removeIcons.length; i++) {
    removeIcons[i].onclick = () => {
    myLibrary.splice(`${removeIcons[i]}`, 1)
    let bookId = removeIcons[i].id
    const removeTr = document.getElementById(`${bookId}`)
    removeBook(removeTr)
    }
  }

  booksStatus = document.querySelectorAll(".status")

  booksStatus.forEach((book, index) => {
    book.onclick = () => {
      console.log(index)
      // const currentIndex = Number(`${book.id}`.match(/\d/gm).join(""))
      // console.log(currentIndex)
      const currentTd = document.getElementById(`${book.id}`)
      console.log(currentTd)
      if (myLibrary[index].status === true) {
          myLibrary[index].status = false
          currentTd.textContent = `${myLibrary[index].status}`
      } else if(myLibrary[index].status === false){
        myLibrary[index].status = true
        currentTd.textContent = `${myLibrary[index].status}`
      }
    }
  })
}

function removeBook(book) {
  book.parentElement.remove()
  console.log(myLibrary)
  console.log(counter)
}


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


  console.log(counter)

  addBookToLibrary(counter)
  counter++
}



// everytime you click delete button , update all books with the new indexes