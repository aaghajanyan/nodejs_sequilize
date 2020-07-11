const express = require("express");
const users = require("./users");
const invitations = require("./invitations");

const router = express.Router();
router.use("/users", users);
router.use("/invitations", invitations);

module.exports = router;
