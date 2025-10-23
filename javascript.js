function addBook2(){//nevermind

  document.getElementById("book-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("book-title").value.trim();
    if (!title) return;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}`)
      .then(response => response.json())
      .then(data => {
        if (data.totalItems > 0) {
          const book = data.items[0].volumeInfo;
          const imageUrl = book.imageLinks?.thumbnail || "default.jpg";
          document.getElementById("book-img").src = imageUrl;
        } else {
          alert("Livre non trouvé !");
        }
      })
      .catch(error => {
        console.error("Erreur API Google Books :", error);
      });
  });
}


const myLibrary = [];

function Book(name, author, ) {
  this.name = name
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}