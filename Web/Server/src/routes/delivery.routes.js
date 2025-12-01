import { Router } from "express";

const router = Router();

router.route("/updatedeliverystatus").post();
router.route("/viewdeliverystatusadmin").get();
router.route("/viewdeliverystatususer").get();

export default router;
