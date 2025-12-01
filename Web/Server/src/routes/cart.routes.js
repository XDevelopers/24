import { Router } from "express";

const router = Router();

router.route("/addtocart").post();
router.route("/viewcartadmin").get();
router.route("/viewcartbyuser").get();

export default router;
