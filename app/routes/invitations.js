const express = require("express");
const {
    addInvitation,
    checkInvitationInDB
} = require("../controllers/invitation");
const { validateBody } = require("../validation/invitations");

const router = express.Router();

router.head("/:id", checkInvitationInDB);
router.post("/", validateBody, addInvitation);

module.exports = router;
