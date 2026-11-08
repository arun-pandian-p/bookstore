
// Select popup, overlay and button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopup = document.getElementById("popupbutton")

// Open popup
addpopup.addEventListener("click", function() {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

// Cancel popup
var cancelbtn = document.getElementById("cencel-book")

cancelbtn.addEventListener("click", function(event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

// Select container and input elements
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")

var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description-input")

// Add book
addbook.addEventListener("click", function(event) {

    event.preventDefault()

    var div = document.createElement("div")

    div.setAttribute("class", "book-container")

    div.innerHTML = `
        <h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${bookdescription.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `

    container.append(div)

    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

// Delete book
function deletebook(event) {
    event.target.parentElement.remove()
}
