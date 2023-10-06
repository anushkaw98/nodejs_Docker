const express = require("express");
const req = require("express/lib/request");
const app = express();

app.get("/", (req, res) => {
    res.json({
        message:"you are in root"
    });
});

app.get("/login", (req, res) => {
    res.json({
        message:"you are visiting login page"
    });
});

app.get("/signup", (req, res) => {
    res.json({
        message:"you are visiting sign-up"
    });
});

app.listen(8000, () => {
    console.log("app is running at 8000");
});