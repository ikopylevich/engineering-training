const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const router = express.Router();
const { Router } = require('express');
const dataHandler = require('./dataHandler.js');
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
router.get('/getJiraTickets', (req, res) => {
    let jirasObject = { jirasObject: dataHandler.jirasObject };
    res.json({ "jirasObject": [] });
})
app.use('/', router);
app.use(express.static('public'))
app.listen(port, () => {
    console.log(`This app listening on port ${port}`);
}); 