const addForm = document.querySelector('.add');
const list = document.querySelector('.books');
const search = document.querySelector('.search input');
const newBook = document.querySelector('.newbook');
const hideForm = document.querySelector('.hideform');

let books = [{title: "The Lord of the Rings", author: "J. R. R. Tolkien", pages: 1197, read: false, id: 1}]

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id
}

const addBookToLibrary = () => {
  list.innerHTML = `<div></div>`
    books.forEach(book => {
     list.innerHTML += `
      <div class="list-group-item">
          <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 title"><small>Title: </small><br>${book.title}</h5>
          <small class="pages">#pages: (${book.pages})</small>
          </div>
          <p class="mb-1 author"><small>Author: </small><br>${book.author}</p>
          <small class="status" onCLick="toggle(${book.id})">${book.read ? 'Read' : 'To Read'}</small>
          <small class="float-end remove">Remove</small>
      </div>
      `;
    })
    console.log(books)
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(
    addForm.title.value.trim(),
    addForm.author.value.trim(),
    addForm.pages.value.trim(),
    addForm.read.checked,
    id = books.length + 1
  );

  books.push(book);
  addBookToLibrary()
  addForm.reset();
});

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    let title = e.target.parentElement.querySelector('.title').textContent.replace(/Title: /, '')
    books.splice(books.findIndex(b => b.title === title), 1 )
    e.target.parentElement.remove();
  }
});

const filterBooks = (term) => {
  Array.from(list.children)
    .filter((book) => !book.textContent.includes(term))
    .forEach((book) => book.classList.add('d-none'));

  Array.from(list.children)
    .filter((book) => book.textContent.includes(term))
    .forEach((book) => book.classList.remove('d-none'));
};

search.addEventListener('keyup', () => {
  const term = search.value.trim();
  filterBooks(term);
});

newBook.addEventListener('click', () => {
  addForm.classList.remove('d-none');
});

readStatusToggle.addEventListener('click', (e) => {
  if (e.target.textContent === 'To Read') {
    e.target.innerText = 'Read';
  } else {
    e.target.innerText = 'To Read';
  }
});

hideForm.addEventListener('click', () => {
  addForm.classList.add('d-none');
});
