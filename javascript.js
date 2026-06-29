class Book{
  name;
  author;
  pages;
  status;
  id;

  constructor(name, author, pages, status){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = crypto.randomUUID();
  }

}

class Library{
  myLibrary;

  constructor(){
    this.myLibrary = [];
  }

  addBookToLibrary(name, author, pages, status){
    let book = new Book(name, author, pages, status);
    this.myLibrary.push(book);
    console.log("livre ajouté : ", {book});
    this.printBook();
  }

  removeBook(Id){
    this.myLibrary = this.myLibrary.filter(book => book.id !== Id);
    this.printBook;
    console.log("fini")
  }

  printBook(){
  const container = document.querySelector('.content');
  container.innerHTML = ""; // remet à zéro  
  for (const book of this.myLibrary) {
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
    removeBtn.addEventListener('click', () => this.removeBook(book.id));

    infoDiv.appendChild(removeBtn);
    container.appendChild(card)
  }
}
}

function main(){
  let library = new Library;
  
  const add_btn = document.querySelector('.add-book')
  add_btn.addEventListener('click', () => {
  // récupère les valeurs des inputs
  const name = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const status = document.querySelector('#status').value;

  library.addBookToLibrary(name, author, pages, status);
  });
}

main()