import Books from './modules/mainContent.js';
import Date from './modules/date.js';
import * as module from './modules/selector.js';

const addBook = document.querySelector('#add-new');
const contact = document.querySelector('#contact');
const bookList = document.querySelector('#list');
window.addEventListener('load', Date());
addBook.addEventListener('click', module.addBookToList);
contact.addEventListener('click', module.displayContact);
bookList.addEventListener('click', module.onload);

const form = document.querySelector('#book-form');
const displayArea = document.querySelector('#book-list');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (title.value === '' || author.value === '') {
    title.setAttribute('placeholder', 'title');
    author.setAttribute('placeholder', 'author');
  } else {
    displayArea.innerHTML = '';
    Books.storeData();
  }
});
displayArea.addEventListener('click', (e) => {
  Books.removeBook(e.target);
});
