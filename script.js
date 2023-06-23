console.log("Engineering Training");

const modalButton = document.getElementById('modalButton');
const modalContainer = document.getElementById('modalContainer');
const closeModalButton = document.getElementsByClassName("close-modal-button");
let dataLoaded = false;

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
class JiraHandler {
    constructor(links, titles) {
        this.links = links;
        this.titles = titles;
        this.jirasObject = [];
        this.createJiraObject();
    }
    createJiraObject() {
        this.links.forEach((link, index) => {
            const jira = {
                link: this.links[index],
                title: this.titles[index],
            }
            this.jirasObject.push(jira);
        })
        return this.jirasObject;
    }
}
const jiraHandler = new JiraHandler(jiraLinks, jiraTitles);

const utils = {
    renderData: function () {
        return new Promise((resolve, reject) => {
            let response = "";
            jiraHandler.jirasObject.forEach((jira) => {
                const { link, icon, title } = jira;
                response += `<li class="item">
                <a href=${link}>
                <i class="bi bi-check-circle-fill">${title}</i>
                </a>
        </li>`;
            });
            resolve(response);
        });
    },
    loadData: function () {
        let gridContainer = document.querySelector(".grid-container");
        setTimeout(() => {
            console.log("Data Loaded");
            utils.renderData().then((response) => {
                dataLoaded = true;
                gridContainer.innerHTML = response;
                modalContainer.classList.toggle("hidden");
            });

        }, 1000);
    },
};

modalButton.addEventListener("click", () => {
    console.log("clicked button!!");
    if (dataLoaded == false) {
        modalContainer.classList.toggle("hidden");
        utils.loadData();
    }
});

closeModalButton[0].addEventListener("click", () => {
    modalContainer.classList.toggle("hidden");
});
console.log("modalButton : ", modalButton);
console.log("closeModalButton : ", closeModalButton);
