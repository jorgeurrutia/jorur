const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const favicon = require("serve-favicon");

//settings
// app.set("port", 80);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));

//static files
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// listening the server
app.listen(PORT, () => {
    console.log("Escuchando el puerto", PORT);
});