const myLibrary = [];

function Book (title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info =   () => {
      return `Title: ${this.title} Author:${this.author} Pages:${this.pages} Status:${this.status}`
    }
  }

  createTable()
  function createTable () {
    let headingNames = ["Title", "Author", "Pages", "Status"]
    let table = document.querySelector('table.library');
    let rows = document.createElement("tr")
      headingNames.forEach((arr) => {
        let tableHeader = document.createElement('th');
        tableHeader.textContent = arr;
        rows.appendChild(tableHeader);
      });

      table.appendChild(rows)

      // table.appendChild(tableHeader)

  }

  function addBookToLibrary (title, author, pages, status) {
    myLibrary.push(new Book(title, author, pages, status))
  }

  function insertBook () { //adds books to library dom maniputlation 
    

    for (book in myLibrary){
      
    }

  }
  

  //TEST BOOKS//
  addBookToLibrary ("Dune", "Frank Herbert", 800, "haven't read")

  addBookToLibrary ("The Name of the wind", "Patrick Rothfuss", 600, "have read")

  addBookToLibrary ("The Wise Mans Fear", "Patrick Rothfuss", 700, "curently reading")

  addBookToLibrary ("The Guest List", "Gillian Flynn", 320, "haven't read")



