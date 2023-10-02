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
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
const jiraTemplate = {
    icon: "bi bi-check-circle-fill",
};
const errorJiraTemplate = {
    icon: "bi bi-x-circle",
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
            const template =
                getRandomIntInclusive(0, 2) > 0 ? jiraTemplate : errorJiraTemplate;
            const jira = {
                ...template,
                link: this.links[index],
                title: this.titles[index],
            };
            this.jirasObject.push(jira);
        });
        return this.jirasObject;
    }
}

const jiraHandler = new JiraHandler(jiraLinks, jiraTitles);

module.exports = jiraHandler; 