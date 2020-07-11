const express = require("express");
const {
    getUsers,
    getUser,
    signUp,
    updateUser
} = require("../controllers/user");
const { validateAddBody, validateUpdateBody } = require("../validation/users");

const router = express.Router();

router.get("/", getUsers);
router.get("/:userId", getUser);
router.post("/", validateAddBody, signUp);
router.put("/:userId", validateUpdateBody, updateUser);

module.exports = router;
