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

  function addBookToLibrary {
    
  }
  
//   const book1 = new Book ("The name of the wind", "Patrick Rothfuss", 500, "have read")
//   console.log(book1.info())
//   console.log (book1.valueOf())