// UI variables
const titleInput = document.querySelector('#title'),
    authorInput = document.querySelector('#author'),
    isbnInput = document.querySelector('#isbn'),
    submitBtn = document.querySelector('input[value=submit]'),
    bookForm = document.querySelector('#book-form'),
    bookList = document.querySelector('#book-list');

main();

function main() {
    loadEventListeners();
}

function loadEventListeners() {
    bookForm.addEventListener('submit', addBook);
    bookList.addEventListener('click', removeBook);
}

function addBook(e) {

    // get fields from the form
    const title = titleInput.value,
        author = authorInput.value,
        isbn = isbnInput.value;

    // check the values
    if (!title || !author || !isbn) {
        UI.showMessage('Please fill in all fields', true);
        return;
    }

    // instantiate a new book
    let book = new Book(title, author, isbn);

    // add the book to the book list
    UI.addBookToList(book);

    // clear input fields
    UI.clearInputs();

    // show success message
    UI.showMessage('Book Added', false);

    // add book to the list
    e.preventDefault();
}

function removeBook(e) {

    // check if the client is clicking the delete button
    if (!e.target.classList.contains('delete')) {
        return;
    }

    e.target.parentElement.parentElement.remove();

    // show success message
    UI.showMessage('Book Removed', false);
}

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    constructor() {}

    static addBookToList(book) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</td>
        `;
        bookList.appendChild(row);
    }

    static clearInputs() {
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    }

    static showMessage(msg, isDanger) {

        // clear previous message first
        if (document.querySelector('.alert') !== null) {
            UI.clearMessage();
        }

        // Create a div
        const errorDiv = document.createElement('div');

        // Add class
        errorDiv.className = isDanger ? 'alert alert-danger' : 'alert alert-success';

        // Create text node and append to div
        errorDiv.appendChild(document.createTextNode(msg));

        // Insert error above heading
        bookForm.insertBefore(errorDiv, bookForm.firstChild);

        // Clear error after 3 seconds
        setTimeout(UI.clearMessage, 3000);
    }

    static clearMessage() {
        document.querySelector('.alert').remove();
    }
}