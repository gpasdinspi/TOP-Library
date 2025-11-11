let myLibrary = [];

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pages, status) {
  // take params, create a book then store it in the array
  const book = new Book(name, author, pages, status);
  myLibrary.push(book)
  console.log("Livre ajouté :", book);// test
  printBook()
}

function RemoveBook(Id){
  myLibrary = myLibrary.filter(book => book.id !== Id)
  printBook()
}

function printBook(){
  const container = document.querySelector('.content');
  console.log("Container trouvé :", container); //test
  container.innerHTML = ""; // remet à zéro  
  for (const book of myLibrary) {
    console.log("Affichage du livre :", book.name); // test
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', book.id);
    card.innerHTML = `<img src="/images/book-cover-default.png" alt="book's image" class="book-img">
                <div class="info">
                    <h3 class="title"> ${book.name}</h3>
                    <p class="author">by ${book.author}</p>
                    <p class="pages-status">${book.pages} pages</p>
                    <label for="status">Status : </label>
                    <select id="status" placeholder="status" name="status" required >
                        <option value="Read">Read</option>
                        <option value="Not-read">Not read</option>
                        <option value="Will-read">Will read</option>
                    </select>
                </div>   `

    // bouton de suppression
    const infoDiv = card.querySelector('.info');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('rmv-btn');
    removeBtn.addEventListener('click', () => RemoveBook(book.id));

    infoDiv.appendChild(removeBtn);
    container.appendChild(card)
  }
}

function main(){
  const add_btn = document.querySelector('.add-book')
  add_btn.addEventListener('click', () => {
  // récupère les valeurs des inputs
  const name = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const status = document.querySelector('#status').value;

  addBookToLibrary(name, author, pages, status);
});
}

main()