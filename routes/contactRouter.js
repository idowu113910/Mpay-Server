const express = require("express");
const submitContact = require("../controllers/contactControlleer");

const router = express.Router();

router.post("/", submitContact);

module.exports = router;
