const addForm = document.querySelector('.add')
console.log(addForm.title.value)

const addBookToLibrary = book => {
    const html = `

    `
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const book = new Book(
        addForm.title.value.trim(),
        addForm.author.value.trim(),
        addForm.pages.value.trim(),
        addForm.readed.checked
    )

    addBookToLibrary(book)

})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

