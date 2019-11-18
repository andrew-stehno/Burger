const express = require("express");
const router = express.Router();

const burger = require("../models/burgers.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

module.exports = router;