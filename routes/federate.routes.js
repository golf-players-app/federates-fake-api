const router = require("express").Router();
const federateController = require("../controllers/federate.controller");

// C(R)UD
router.get("/by-name", federateController.listByPlayer);
router.get("/by-id", federateController.listByFederatedNumber);

module.exports = router;
