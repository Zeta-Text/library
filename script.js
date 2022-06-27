let myLibrary = [];

function Book(title, author, genre, status, id) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.status =  status;
  this.id = id;
  
};

let idCounter = -1;

Book.prototype.toggleStatus = function toggleStatus(book) {
    console.log(book);
    console.log(this);
  
}
  

function display() {
  myLibrary.forEach((book) => {
    let newCard = document.createElement('div');
    newCard.id = "newCard";
    newCard.classList.add('newCard')
    cardcontainer.appendChild(newCard);
    newCard.innerHTML = "Title: " + book.title  + "<br>Author: " + book.author + "<br>Genre: " + book.genre + "<br>Status: " + book.status;

    let removeBook = document.createElement('span');
    removeBook.id = "removeBook";
    removeBook.classList.add('removeBook');
    removeBook.innerHTML = '<button type="button">Remove</button>';
    newCard.appendChild(removeBook); 

    let updateStatus = document.createElement("button");
    updateStatus.innerHTML = "Update Status"; 
    updateStatus.type = "submit";
    updateStatus.name = "updateStatus";
    newCard.appendChild(updateStatus);

    let bookIndex = myLibrary.indexOf(book);
    console.log(bookIndex);

    removeBook.addEventListener("click", function() {
      myLibrary.forEach((book) => {
        if (bookIndex == book.id) {
          delete  myLibrary[bookIndex];
          console.log(myLibrary);
          newCard.remove()
        }

      });
    }); 


    updateStatus.addEventListener("click", function() {
      if (book.status == "Complete") {
        book.status = "Incomplete";
        console.log(book.status);
        cardcontainer.innerHTML = "";
        display()

      } else if (book.status == 'Incomplete') {
        book.status = "Complete"
        console.log(book.status);
        cardcontainer.innerHTML = "";
        display();
      }  
        
        
    });


  });
}



function addBookToLibrary(ev) {

    ev.preventDefault();
  
    var checkedValue = document.querySelector('.status').checked;
    var testValue = (checkedValue) ? "Complete": "Incomplete";
    console.log(checkedValue);
    console.log(testValue);
    
    idCounter = idCounter + 1;
    console.log(idCounter);

    let bookData = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      genre: document.getElementById('genre').value,
      status: testValue,
      id: idCounter,  
    }
    
    //create a Book object from your form data
    let book = new Book(bookData.title, bookData.author, bookData.genre, bookData.status, bookData.id)


    myLibrary.push(book);
    //documents.forms[0].reset();
    console.log(myLibrary);

    let newCard = document.createElement('div');
    newCard.id = "newCard";
    newCard.classList.add('newCard')
    cardcontainer.appendChild(newCard);
    newCard.innerHTML = "Title: " + book.title  + "<br>Author: " + book.author + "<br>Genre: " + book.genre + "<br>Status: " + book.status;


    newCard.setAttribute('data-index', idCounter);

    let removeBook = document.createElement('span');
    removeBook.id = "removeBook";
    removeBook.classList.add('removeBook');
    removeBook.innerHTML = '<button type="button">Remove</button>';
    newCard.appendChild(removeBook); 

    let updateStatus = document.createElement("button");
    updateStatus.innerHTML = "Update Status"; 
    updateStatus.type = "submit";
    updateStatus.name = "updateStatus";
    newCard.appendChild(updateStatus);


    //let toggleSwitch = document.createElement('span');
    //toggleSwitch.id = "toggleSwitch";
    //toggleSwitch.classList.add('toggleSwitch');
    //toggleSwitch.innerHTML = '<div><label for="cardStatus" class="switch"><input class ="cardStatus" type="checkbox" onchange="this." id="cardStatus" name="cardStatus" value="Complete"><span class="slider round"></span></label></div>';
    //toggleSwitch.innerHTML = `<label><input id="mycheckbox" class="switch" type="checkbox" onchange="book.toggleStatus()"><span>Update read status?</span></label>`
    //toggleSwitch.innerHTML = '<input id="myCheckbox" type="checkbox"/>'
    //newCard.appendChild(toggleSwitch); 

    let bookIndex = myLibrary.indexOf(book);
    console.log(bookIndex);

    removeBook.addEventListener("click", function() {
      myLibrary.forEach((book) => {
        if (bookIndex == book.id) {
          delete  myLibrary[bookIndex];
          console.log(myLibrary);
          newCard.remove()
        }

      });
    }); 


    updateStatus.addEventListener("click", function() {
      if (book.status == "Complete") {
        book.status = "Incomplete";
        console.log(book.status);
        cardcontainer.innerHTML = "";
        display()

      } else if (book.status == 'Incomplete') {
        book.status = "Complete"
        console.log(book.status);
        cardcontainer.innerHTML = "";
        display();
      }  
        
        
    });

    
}





document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click', addBookToLibrary);
});




