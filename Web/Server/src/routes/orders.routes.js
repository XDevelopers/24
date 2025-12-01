import { Router } from "express";

const router = Router();

router.route("/addorders").post();
router.route("/viewordersdmin").get();
router.route("/viewordersbyuser").get();
router.route("/changedeleveryboy").get();

export default router;
