const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 5000;

const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
    process.env.COSTUMER_ID,
    process.env.CONTUMER_SECRET_KEY
);

oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

const calendar = google.calendar({version: 'v3', auth: oAuth2Client});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});