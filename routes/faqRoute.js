const express = require("express");
const { createFAQ, getFAQs } = require("../FAQ-API/controllers/faqController");

const router = express.Router();

router.post("/", createFAQ);
router.get("/", getFAQs);

module.exports = router;
