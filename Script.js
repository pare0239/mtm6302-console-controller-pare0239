const pageTitle = document.getElementById("title");
const pageDescription = document.getElementById("description");
const body = document.querySelector("body");

function setTitle(newTitle) {
    pageTitle.innerText = newTitle;
}

function setDescription(newDescription) {
    pageDescription.innerText = newDescription;
}
