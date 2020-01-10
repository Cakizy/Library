let error = document.getElementById(`error`);
let title = document.getElementById(`title`);
let isbn = document.getElementById(`isbn`);
let author = document.getElementById(`author`);
let genre = document.getElementById(`genre`);
let yearOfPublish = document.getElementById(`yearOfPublish`);
let numberOfPages = document.getElementById(`numberOfPages`);
let btn = document.getElementById(`btn`);
let tbody = document.getElementById(`tbody`);

function Book(id, title, isbn, author, genre, yearOfPublish, numberOfPages) {
    this.bookId = id;
    this.bookTitle = title;
    this.bookIsbn = isbn;
    this.bookAuthor = author;
    this.bookGenre = genre;
    this.bookYearOfPublish = yearOfPublish;
    this.bookNumberOfPages = numberOfPages;
    this.bookAge = function() {
        let date = new Date().getFullYear();
        let calculator = date - this.bookYearOfPublish
        this.bookAge = calculator;
    };
    this.bookAge();
}
let titans = new Book(1, "Titans", `0 - 2830 - 2924 - 2`, "Caki", "Action", 2020, 165);
let animans = new Book(2, "Animans", `0-2830-2924-2`, "Caki", "comedy", 1096, 532);

let booksArray = [titans, animans]
console.log(booksArray);

function bookToArray(element) {
    booksArray.push(element);
}

function printInConsole() {
    for (let i = 0; i < booksArray.length; i++) {
        console.log(booksArray[i])
    }
}

function clear(input1, input2, input3, input4, input5, input6) {
    input1.value = ``;
    input2.value = ``;
    input3.value = ``;
    input4.value = ``;
    input5.value = ``;
    input6.value = ``;
}
let counter = 2;
btn.addEventListener(`click`, function() {
    if (title.value === '' || isbn.value === '' || author.value === '' || genre.value === '' || yearOfPublish.value === '' || numberOfPages.value === '' || title.value.length < 2) {
        if (title.value === '') {
            title.style.borderColor = 'red';
        } else {
            title.style.borderColor = 'unset';
        }
        if (isbn.value === '') {
            isbn.style.borderColor = 'red';
        } else {
            isbn.style.borderColor = 'unset';
        }
        if (author.value === '') {
            author.style.borderColor = 'red';
        } else {
            author.style.borderColor = 'unset';
        }
        if (genre.value === '') {
            genre.style.borderColor = 'red';
        } else {
            genre.style.borderColor = 'unset';
        }
        if (yearOfPublish.value === '') {
            yearOfPublish.style.borderColor = 'red';
        } else {
            yearOfPublish.style.borderColor = 'unset';
        }
        if (numberOfPages.value === '') {
            numberOfPages.style.borderColor = 'red';
        } else {
            numberOfPages.style.borderColor = 'unset';
        }
        error.innerHTML = '<p style="color: red;">* Please fill in the required fields!</p>';
    } else {
        title.style.borderColor = 'unset';
        author.style.borderColor = 'unset';
        genre.style.borderColor = 'unset';
        yearOfPublish.style.borderColor = 'unset';
        numberOfPages.style.borderColor = 'unset';
        isbn.style.borderColor = 'unset';
        title.style.borderColor = 'unset';
        error.innerHTML = ``;
        counter++;
        let element = new Book(counter, title.value, isbn.value, author.value, genre.value, yearOfPublish.value, numberOfPages.value);
        bookToArray(element);
        printInConsole();
        clear(title, isbn, author, genre, yearOfPublish, numberOfPages)
    }
})