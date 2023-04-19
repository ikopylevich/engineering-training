console.log("Engineering Training");

const modalButton = document.getElementById('modalButton');
const modalContainer = document.getElementById('modalContainer');
const closeModalButton = document.getElementsByClassName("close-modal-button");
let dataLoaded = true;

const jiraLinks = [
    "https://totalwine.atlassian.net/browse/TT-2",
    "https://totalwine.atlassian.net/browse/TT-16",
    "https://totalwine.atlassian.net/browse/TT-17",
    "https://totalwine.atlassian.net/browse/TT-18",
    "https://totalwine.atlassian.net/browse/TT-19",
];
const jiraTitles = [
    "Create a public repository under your GitHub account",
    "Create a new script file, and import it into index.html and add a console log",
    "JavaScript: Variables",
    "JavaScript: Event Listeners - Add Toggle Button Inside of Modal",
    "JavaScript: Functions - Write a function to toggle hidden class on modal",
];

const jirasArray = [];

for (let i = 0; i < jiraLinks.length; i++) {
    jirasArray.push({
        link: jiraLinks[i],
        title: jiraTitles[i],
    });
}
function renderData() {
    jirasArray.forEach((element) => {
        console.log("jira: ", element);
        let listItem = document.createElement("li");
        let listElement = document.querySelector(".grid-container");

        const myLiterals = `<li class="item">
     <a href=${element.link}>
     <i class="bi bi-check-circle-fill"></i>${element.title}</a></li>`;

        listItem.innerHTML = myLiterals; // Assigning myLiterals to innerHTML of listItem
        listElement.append(listItem); // Appending listItem to listElement
    });
}

function loadData() {
    setTimeout(() => {
        console.log("Data Loaded");
        modalContainer.classList.toggle("hidden");
        if (dataLoaded == true) {
            renderData();
            dataLoaded = false;
        }

    }, 1000);
}

modalButton.addEventListener("click", () => {
    console.log("clicked button!!");
    modalContainer.classList.toggle("hidden");
    loadData();
});

closeModalButton[0].addEventListener("click", () => {
    modalContainer.classList.toggle("hidden");
});
console.log("modalButton : ", modalButton);
console.log("closeModalButton : ", closeModalButton);
