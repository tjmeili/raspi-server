const express = require('express');
const app = express();
const chalk = require('chalk');
const path = require('path');

app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("BOOOOOOOOM!");
});

const port = 1337;
app.listen(port, () => console.log(chalk.blue `Listening on port ${port}`));