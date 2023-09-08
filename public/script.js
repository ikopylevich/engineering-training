(async function () {
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
    const jiraTitles = [
        "Create a public repository under your GitHub account",
        "Create a new script file, and import it into index.html and add a console log",
        "JavaScript: Variables",
        "JavaScript: Event Listeners - Add Toggle Button Inside of Modal",
        "JavaScript: Functions - Write a function to toggle hidden class on modal",
    ];
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const jiraTemplate = {
        icon: "bi bi-check-circle-fill"
    };
    const errorJiraTemplate = {
        icon: "bi bi-x-circle"
    };
    class JiraHandler {
        constructor(links, titles) {
            this.links = links;
            this.titles = titles;
            this.jirasObject = [];
            this.createJiraObject();
        }
        createJiraObject() {
            this.links.forEach((link, index) => {
                const template = getRandomIntInclusive(0, 2) > 0 ? jiraTemplate : errorJiraTemplate;
                const jira = {
                    ...template,
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
                <i class="${icon}"></i>${title}</a>
                </li>`;
                });
                resolve(response);
            });
        },
        loadData: function (callback) {
            let gridContainer = document.querySelector(".grid-container");
            setTimeout(() => {
                console.log("Data Loaded");
                utils.renderData().then((response) => {
                    callback();
                    gridContainer.innerHTML = response;
                    modalContainer.classList.toggle("hidden");
                });

            }, 1000);
        },
    };

    function initModalButton() {
        let dataLoaded = false;
        modalButton.addEventListener("click", async () => {
            console.log("Open Modal button is clicked!!!");
            await fetch('/getJiraTickets')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
            if (dataLoaded == false) {
                modalContainer.classList.toggle("hidden");
                utils.loadData(() => {
                    dataLoaded = true;
                });
            }
        });
    }

    initModalButton();

    closeModalButton[0].addEventListener("click", () => {
        modalContainer.classList.toggle("hidden");
    });
    console.log("BEFORE initModalButton is called");
    await initModalButton().then((value) => {
        console.log(value);
    });
    console.log("AFTER initModalButton is called");
})();
