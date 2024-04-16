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

  function addBookToLibrary () {
    myLibrary.push(new Book)
  }

  function searchBook () {
    for (Array.length in myLibrary){

    }

  }
  
  myLibrary.push( new Book ("Dune", "Frank Herbert", 800, "haven't read"))
  console.log(myLibrary[0].info())
  console.log (myLibrary[0].valueOf())

  myLibrary.push(new Book ("The Name of the wind", "Patrick Rothfuss", 600, "have read"))

  myLibrary.push(new Book ("The Wise Mans Fear", "Patrick Rothfuss", 700, "curently reading"))



