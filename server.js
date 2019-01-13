const express = require('express');
const app = express();
const chalk = require('chalk');
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var data = {
    items: [
        {title: "Something something blah blah something", completed: false},
        {title: "Blah blah todo something blah", completed: true},
        {title: "Maybe tomorrow something due this day", completed: false},
    ]
};

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});*/

app.get('/api/data', (req, res) => {
    console.log(chalk.blue("REQUEST DATA"));
    res.jsonp(data);
});

const port = 1337;
app.listen(port, () => console.log(chalk.blue.bold.italic(`Listening on port ${port}`)));