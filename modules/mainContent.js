const title = document.querySelector('#title');
const author = document.querySelector('#author');
const displayArea = document.querySelector('#book-list');

export default class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static storeData() {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const book = new Books(bookTitle, bookAuthor);
    if (localStorage.getItem('books') === null) {
      const bookShelf = [];
      bookShelf.push(book);
      localStorage.setItem('books', JSON.stringify(bookShelf));
    } else {
      const bookShelfStr = localStorage.getItem('books');
      const bookArray = JSON.parse(bookShelfStr);
      bookArray.push(book);
      localStorage.setItem('books', JSON.stringify(bookArray));
    }
    title.value = '';
    author.value = '';
    this.displayBooks();
  }

  static displayBooks() {
    const wrapper = document.createElement('div');
    const line = document.createElement('hr');
    const bookShelfStr = localStorage.getItem('books');
    const tits = document.createElement('div');
    tits.innerText = this.author;
    const bookArray = JSON.parse(bookShelfStr);
    bookArray.forEach((element, index) => {
      const displayTitle = document.createElement('p');
      const displayAuth = document.createElement('p');
      const deleteBtn = document.createElement('div');
      const container = document.createElement('div');
      const words = document.createElement('div');
      displayTitle.innerText = `"${element.title}" by`;
      displayAuth.innerText = element.author;
      deleteBtn.innerHTML = `<button class="btn borders removeButton" 'removeBook (${index})'>Remove</button>`;
      deleteBtn.classList.add('deleteBook');
      container.classList.add('flexing', 'centers');
      words.classList.add('flexing');
      displayAuth.classList.add('word');
      words.appendChild(displayTitle);
      words.appendChild(displayAuth);
      container.appendChild(words);
      container.appendChild(deleteBtn);
      wrapper.appendChild(container);
    });
    line.classList.add('line');
    displayArea.appendChild(wrapper);
    displayArea.appendChild(line);
  }

  static removeBook(index) {
    const bookShelfStr = localStorage.getItem('books');
    const bookArray = JSON.parse(bookShelfStr);
    bookArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookArray));
    displayArea.innerHTML = '';
    this.displayBooks();
  }
}
document.addEventListener('DOMContentLoaded', Books.displayBooks);
