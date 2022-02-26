const pageHeader = document.querySelector("#booksTotal");
const nameInput = document.getElementById("text");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInputYes = document.getElementById("readYes");
const readInputNo = document.getElementById("readNo");
const displayBook = document.getElementById("displayBook");
const bookCounter = document.createElement("div");

let myLibrary = [];


function Book(name, author, pages, readYet) {
    this.name = nameInput.value;
    this.author = authorInput.value;
    this.pages = pagesInput.value;
    this.readYet = readInputYes.checked;
};

function addBookToLibrary() {
    formValidation()
    if(answer === true) {
        let newBook = new Book();
        myLibrary.push(newBook);
        displayLibrary()
    } else if (answer === false) {
        return;
    }
};

let answer;
function formValidation() {
    if(nameInput.value === "" || authorInput.value === "" || pagesInput.value === "") {
        alert("please fill in required fields")
        return answer = false;
    } else return answer = true
};

const addBook = document.getElementById("submitBook");
addBook.addEventListener("click", addBookToLibrary);

function displayLibrary() {   
        let book = myLibrary[myLibrary.length - 1];
            const bookBox = document.createElement("div");
            const btnBox = document.createElement("div");
            btnBox.classList = "btnBox"
            bookBox.appendChild(btnBox);

            const removeBtn = document.createElement("button");
            removeBtn.id = "removeBtn";
            removeBtn.dataset.num = myLibrary.indexOf(book);
            removeBtn.innerText = "Remove Book";
            removeBtn.addEventListener("click", function() {
                if(removeBtn.dataset.num === bookBox.dataset.num)
                    displayBook.removeChild(bookBox)
            })
            btnBox.appendChild(removeBtn);   

            const statusUpdate = document.createElement("button");
            statusUpdate.classList = "statusUpdate"
            statusUpdate.dataset.num = myLibrary.indexOf(book);
            statusUpdate.innerText = "Read Status";
            statusUpdate.addEventListener("click", function() {
                if(readYetHeader.innerText === "Read: " + "No") {
                    readYetHeader.innerText = "Read: " + "Yes";
                    bookBox.appendChild(readYetHeader);
                    readInputYes.checked = true;
                } else if (readYetHeader.innerText = "Read: " + "Yes") {
                    readYetHeader.innerText = "Read: " + "No";
                    bookBox.appendChild(readYetHeader);
                    readInputYes.checked = false;
                }
            })
            btnBox.appendChild(statusUpdate);
            bookBox.classList = "bookBox";
            bookBox.dataset.num = myLibrary.indexOf(book);
            displayBook.appendChild(bookBox)
    
            const nameHeader = document.createElement("h3");
            nameHeader.innerText = "Name: " + book.name; 
            bookBox.appendChild(nameHeader);
    
            const authorHeader = document.createElement("h3");
            authorHeader.innerText = "Author: " + book.author;
            bookBox.appendChild(authorHeader);
    
            const pagesHeader = document.createElement("h3");
            pagesHeader.innerText = "Pages: " + book.pages;
            bookBox.appendChild(pagesHeader);
    
            const readYetHeader = document.createElement("h3");
            if(readInputYes.checked === true) {
                readYetHeader.innerText = "Read: " + "Yes";
                bookBox.appendChild(readYetHeader);
            } else {
                readYetHeader.innerText = "Read: " + "No";
                bookBox.appendChild(readYetHeader);
            }

            let bookNumber = 0;
            function counter() {
                for(book of myLibrary) {
                bookNumber++
                }
                console.log(bookNumber)
            }
            counter()
            bookCounter.innerText =+ bookNumber
            pageHeader.appendChild(bookCounter)
};




