let myLibrary = [];

class Book{
  constructor(title, author, pages, status) {

    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    
  }

  info(){
    return `Title: ${this.title} Author:${this.author} Pages:${this.pages} Status:${this.status}`
  }
}

  insertHeader()
  function insertHeader() {
    
    let rows = document.createElement('tr')
    let tableNode = document.querySelector('table.library');
    tableNode.appendChild(rows)

  
  let info = ['Title', 'Author', 'Pages', 'Status', 'Remove']
    info.forEach((arr) => {

      let tableHeader = document.createElement('th');
      tableHeader.textContent = arr;
      rows.appendChild(tableHeader);
    }); 
  }


  function insertTable() { 
    
    let table = document.createElement('table')
    table.classList.add('library')
    let bodyNode = document.querySelector('body')
    bodyNode.insertBefore(table, bodyNode.firstChild)
    
    insertHeader()
  }

  function insertValues(book, i) { 
    let table = document.querySelector('table.library');
      let newRow = table.insertRow(i+1);
        table.appendChild(newRow)
        
        Object.values(book).forEach((infoBit) => {
          
          let tableCell = document.createElement('td');

          if(typeof(infoBit) != 'function'){
            
            tableCell.textContent = infoBit;
            newRow.append(tableCell);

          }
        });

        addStatusClass()
        removeStatusContent()
        createStatusBtn(book.status) 
        addStatusListeners()
        createRemoveBtn()
        addRemoveListeners()
        
    }


    function addStatusClass() {
      let element = document.querySelectorAll('td:nth-child(4)')
      element.forEach((key) => key.classList.add('status'))
    }

    function removeStatusContent() {
      let statusCell = document.querySelector('td.status:last-child')

      statusCell.textContent = '';
    
    }

    function createStatusBtn(status) {
      let statusColumn = document.querySelectorAll('td.status');
      let btnNode = document.createElement('button')
      
      statusColumn.forEach((element) => {
        element.appendChild(btnNode)
        btnNode.textContent = status
      });

    }
    

    function addStatusListeners() { 
    

      let statusBtn = document.querySelector('td.status:last-child > button')
      statusBtn.addEventListener('click', () => { 
        
        event.target.textContent
        let index = event.target.closest('tr').rowIndex
        let btnSelector = ('td.status  button')

        if (statusBtn.textContent === 'read'){
          statusBtn.textContent= 'unread'
        }else if (statusBtn.textContent === 'unread'){
          statusBtn.textContent= 'read'
        }
      });
    }

    function createRemoveBtn(element) {
      let lastColumn = document.querySelector('tr:last-child');
      let btnNode = document.createElement('button')
      
      lastColumn.appendChild(btnNode)
      btnNode.textContent = '-'
      lastColumn.append(btnNode)
      
    }

    function addRemoveListeners() {
    

      let table = document.querySelector('table.library')
      let removeBtn = document.querySelector('tr:last-child > button')
      
        removeBtn.addEventListener('click', () => { 
          myLibrary.splice(0, 1) 
          console.log(event.target.closest('tr').rowIndex)
          table.deleteRow((event.target.closest('tr').rowIndex))

      });


    }
    

    function clearTable(){ 
      let table = document.querySelector('table');    
      table.remove('td')
      myLibrary = []


      insertTable()
    }

   

    function toggleForm() {
      let form = document.querySelector('form')
      const formVisibility = window.getComputedStyle(form).visibility; 

        if (formVisibility === 'hidden') { 
          form.style.visibility = 'visible'; 
      } else { 
          form.style.visibility = 'hidden'; 
      } 
    } 
    

  function addBookToLibrary(title, author, pages, status) {
    myLibrary.push(new Book(title, author, pages, status))
  }

  
  function getUserInput(event){ 
    let titleValue= document.getElementById('title').value;
    let authorValue= document.getElementById('author').value;
    let pagesValue= document.getElementById('pages').value;
    let statusValue= document.getElementById('status').value;
    event.preventDefault()

    let rowIndex = myLibrary.length
    

    addBookToLibrary(titleValue, authorValue, pagesValue, statusValue)
    insertValues(myLibrary[rowIndex], rowIndex)
    
  }

  

  //TEST BOOKS//
  addBookToLibrary('Dune', 'Frank Herbert', 800, 'unread')
  insertValues(myLibrary[0], 0)



