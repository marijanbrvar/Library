const hid = document.querySelector('.bt')
const addForm = document.querySelector('.form')

// hid.onclick = function() {
//     addForm.setAttribute('style','left: 10px');
// }
console.log(addForm)


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary() {
    //get value from form
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').Value;
    var pages = document.getElementById('pages').Value;
    var read = document.getElementById('title').Value;
     
    //append data in the array
   let boo =[title, author, pages, read]
    myLibrary.push(boo);
    var pval ="";
    for (i = 0; i < myLibrary.length; i++) 
      {
          pval = pval + myLibrary[i] + "<br/>";
      }

      //display array data
      document.getElementById('show').innerHTML = pval;


}

