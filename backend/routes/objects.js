const express = require("express");

const ObjectController = require("../controllers/objects");

const router = express.Router();

router.get("", ObjectController.getDummyObjects);

router.get("/:id", ObjectController.getObject);

router.post("", ObjectController.postObject);

module.exports = router;
