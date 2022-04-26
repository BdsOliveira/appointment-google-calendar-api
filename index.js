const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 5000;

const { google } = require("googleapis");
const { OAuth } = google.auth;

/* const oAuth2Client = new OAuth2({

}); */

app.get('/', (req, res) => {
    res.status(200).send('GET Request OK');
});


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});