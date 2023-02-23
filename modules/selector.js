const bookList = document.querySelector('#list');
const addBook = document.querySelector('#add-new');
const contact = document.querySelector('#contact');
const addSection = document.querySelector('#adds');
const contactSection = document.querySelector('#contacts');
const displayArea = document.querySelector('#lists');

export const onload = () => {
  bookList.classList.add('active');
  contact.classList.remove('active');
  addBook.classList.remove('active');
  displayArea.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export const addBookToList = () => {
  bookList.classList.remove('active');
  contact.classList.remove('active');
  addBook.classList.add('active');
  displayArea.style.display = 'none';
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
};

export const displayContact = () => {
  addBook.classList.remove('active');
  bookList.classList.remove('active');
  contactSection.style.display = 'flex';
  addSection.style.display = 'none';
  displayArea.style.display = 'none';
  contact.classList.add('active');
};

window.addEventListener('load', onload);
