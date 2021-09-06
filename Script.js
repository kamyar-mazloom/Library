// Array
let myLibrary = [
  {title: 'CATCH-22', author: 'Joseph Heller', pages: '453', read: 'read'},
  {title: "Cat's Cradle", author: 'Kurt Vonnegut', pages: '304', read: 'read'}
];
//Remove child nodes 
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
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

// Card creation 
function cardCreation (){
for (let i=0; i<myLibrary.length; i++){
  let domBody = document.getElementById("body-id")
  
  let domCard = document.createElement("div")
  domCard.setAttribute("class","card")
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

  let domClose = document.createElement("button")
  domClose.setAttribute("class","closeBtn")
  domClose.setAttribute("id", i)
  domClose.setAttribute("onclick","closeFnc(this.id)")
  domClose.innerHTML = "x";
  domCard.append(domClose)
}}
window.onload = cardCreation()
window.onload = off()
///close function 
function closeFnc(clicked_id) {
  myLibrary.splice(clicked_id,1)
    let domBody = document.getElementById("body-id");
    removeAllChildNodes(domBody)
  cardCreation()
  }
///check-uncheck function 
