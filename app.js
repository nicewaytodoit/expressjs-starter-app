const http = require('http');
const express = require('express');
const moment = require('moment');
const app = express();

// console.log('process.argv', process.argv);
const [,,appName] = process.argv;

app.use('/', (req, res) => {
    const date = moment().format('DD/MM/YYYY HH:mm');
    res.send(`Hello World ExpressJS: App ${appName?` <b>"${appName}"</b>`: ''} : ${date}`);
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(`${port}`, () => {
    console.log(`Listening on port ${port}${appName?` : ${appName}`: ''} `);
});
