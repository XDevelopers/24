import { Router } from "express";

const router = Router();

router.route("/addproduct").post();
router.route("/viewproductadmin").get();
router.route("/addedproductbyseller").get();
router.route("/productstatuschange").get();

export default router;
