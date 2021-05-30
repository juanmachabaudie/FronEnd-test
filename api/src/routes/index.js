const { Router } = require("express");

const apiRoute = require("./items");

const router = Router();

router.use("/api", apiRoute);

module.exports = router;
