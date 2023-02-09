console.log("Engineering Training");

const modalButton = document.getElementById('modalButton');
const modalContainer = document.getElementById('modalContainer');
const closeModalButton = document.getElementsByClassName("close-modal-button");

const jiraLinks = [
    "https://totalwine.atlassian.net/browse/TT-2",
    "https://totalwine.atlassian.net/browse/TT-16",
    "https://totalwine.atlassian.net/browse/TT-17",
    "https://totalwine.atlassian.net/browse/TT-18",
    "https://totalwine.atlassian.net/browse/TT-19",
];
const iterateJiraLinks = jiraLinks.forEach((link) => {
    console.log(link);
});
const jiraTitles = [
    "Create a public repository under your GitHub account",
    "Create a new script file, and import it into index.html and add a console log",
    "JavaScript: Variables",
    "JavaScript: Event Listeners - Add Toggle Button Inside of Modal",
    "JavaScript: Functions - Write a function to toggle hidden class on modal",
];

const iterateJiraTitles = jiraTitles.forEach((title) => {
    console.log(title);
});

modalButton.addEventListener("click", function () {
    console.log("clicked button!");
    modalContainer.classList.toggle("hidden");
});
closeModalButton[0].addEventListener("click", function () {
    modalContainer.classList.toggle("hidden");
    console.log("clicked close modal button!");
});
console.log("modalButton ", modalButton);
