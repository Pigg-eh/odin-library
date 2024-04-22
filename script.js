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



  insertHeader ()
  function insertHeader () {
    
    
      let rows = document.createElement("tr")
      let table = document.querySelector('table.library');
      table.appendChild(rows)

    
    let info = ["Title", "Author", "Pages", "Status"]
      info.forEach((arr) => {
        
        let tableHeader = document.createElement('th');
        tableHeader.textContent = arr;
        rows.appendChild(tableHeader);
      }); 
  }

  function populateTable (myLibrary, length) {

    let table = document.querySelector('table.library');
    for (i=0; i < length; i++){
      let newRow = table.insertRow(i+1);
        table.appendChild(newRow)

        Object.values(myLibrary[i]).forEach((key) => {
          if(typeof(key) != "function"){
            

            console.log(typeof(key))
            let tableCell = document.createElement('td');
            tableCell.textContent = key;
            newRow.append(tableCell);
          }
        });
      } 
    }

    function clearTable (){
      let table = document.querySelector('table.library');
      table.remove('td')
    }
  

  function addBookToLibrary (title, author, pages, status) {
    myLibrary.push(new Book(title, author, pages, status))
  }





  

  //TEST BOOKS//
  addBookToLibrary ("Dune", "Frank Herbert", 800, "haven't read")

  addBookToLibrary ("The Name of the wind", "Patrick Rothfuss", 600, "have read")

  addBookToLibrary ("The Wise Mans Fear", "Patrick Rothfuss", 700, "curently reading")

  addBookToLibrary ("The Guest List", "Gillian Flynn", 320, "haven't read")

  populateTable (myLibrary, myLibrary.length)


  clearTable ()

