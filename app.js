const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);
app.use(express.static('public'))
app.listen(port, () => {
    console.log(`This app listening on port ${port}`);
}); 