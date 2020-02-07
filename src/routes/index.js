const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.html", { title: "Jorur" });
});

router.get("/contact", (req, res) => {
    res.render("contact.html", { title: "Jorur" });
});

router.get("/portal", (req, res) => {
    res.render("portal.html", {title: "Portal"});
});

module.exports = router;