import { Router } from "express";

const router = Router();

router.route("/addcomplain").post();
router.route("/viewcomplainadmin").get();
router.route("/viewcomplainbyuser").get();
router.route("/updatecomplainstatus").get();

export default router;
