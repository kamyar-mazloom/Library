// Array
let myLibrary = [
  {title: 'CATCH-22', author: 'Joseph Heller', pages: '453', read: 'read'},
  {title: "Cat's Cradle", author: 'Kurt Vonnegut', pages: '304', read: 'read'}
];
// Object to array
function addBookToLibrary() {
  let books = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value,
    read: document.getElementById('read').value,
  }
  if (books.title=="" || books.author=="" || books.pages=="") {
    alert("please fill all the required information")
  }
  else{
    let domBody = document.getElementById("body-id");
    removeAllChildNodes(domBody)
  myLibrary.push(books); 
  document.forms[0].reset();
  cardCreation()
  }
};
// event listener for form submit button 
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('submitBtn-id').addEventListener('click', addBookToLibrary);
});
//on-off switch for the overlay [Add Book form]
function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
} 
//close function
event
// Card creation 
function cardCreation (){
for (let i=0; i<myLibrary.length; i++){
  let domBody = document.getElementById("body-id")
  
  let domCard = document.createElement("div")
  domCard.setAttribute("class","card")
  domCard.setAttribute("id", i)
  domBody.append(domCard)

  let domTitle = document.createElement("H2")
  domTitle.setAttribute("class","book-title")
  domTitle.innerHTML = myLibrary[i].title;
  domCard.append(domTitle)

  let domAuthor = document.createElement("span")
  domAuthor.setAttribute("class","book-author")
  domAuthor.innerHTML = "<span>By: </span>" + myLibrary[i].author;
  domCard.append(domAuthor)

  let domPages = document.createElement("span")
  domPages.setAttribute("class","book-page")
  domPages.innerHTML = "<span>Number of pages: </span>" + myLibrary[i].pages;
  domCard.append(domPages)

  let domStatus = document.createElement("span")
  domStatus.setAttribute("class","status")
  domStatus.innerHTML = "<span>toggle as read<span>"
  domCard.appendChild(domStatus)

  let domSwitch = document.createElement("label")
  domSwitch.setAttribute("class","switch")
  domCard.appendChild(domSwitch)

  let domCheckbox = document.createElement("input")
  domCheckbox.setAttribute("type","checkbox")
  domSwitch.appendChild(domCheckbox)

  let domSlider = document.createElement("span")
  domSlider.setAttribute("class","slider round")
  domSwitch.appendChild(domSlider)

  let domClose = document.createElement("button")
  domClose.setAttribute("class","closeBtn")
  domClose.setAttribute("id", i)
  domClose.innerHTML = "x";
  domCard.append(domClose)
}}
window.onload = cardCreation()
//Remove child nodes 
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

let buttons = document.getElementsByTagName("button");
let buttonsCount = buttons.length;
for (let i = 0; i < buttonsCount; i++) {
    buttons[i].onclick = function(e) {
        alert(this.id);
    };
}