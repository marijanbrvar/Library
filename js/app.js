const addForm = document.querySelector('.add');
const list = document.querySelector('.books');
const search = document.querySelector('.search input');
const newBook = document.querySelector('.newbook');
const hideForm = document.querySelector('.hideform');

const books = [
  { title: 'The Lord of the Rings', author: 'J. R. R. Tolkien', pages: 1197, read: false, id: 1 },
];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

const addBookToLibrary = () => {
  list.innerHTML = '<div></div>';
  books.forEach((book) => {
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
  });
};

// eslint-disable-next-line no-unused-vars
function toggle(id) {
  const idx = books.findIndex((x) => x.id === id);
  if (books[idx].read) {
    books[idx].read = !books[idx].read;
  } else {
    books[idx].read = !books[idx].read;
  }
  addBookToLibrary();
}

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(
    addForm.title.value.trim(),
    addForm.author.value.trim(),
    addForm.pages.value.trim(),
    addForm.read.checked,
    books.length + 1,
  );

  books.push(book);
  addBookToLibrary();
  addForm.reset();
});

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const title = e.target.parentElement.querySelector('.title').textContent.replace(/Title: /, '');
    books.splice(books.findIndex((b) => b.title === title), 1);
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

hideForm.addEventListener('click', () => {
  addForm.classList.add('d-none');
});
