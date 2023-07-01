const router = require("express").Router();

router.use("/federates", require("./federate.routes"));

module.exports = router;
