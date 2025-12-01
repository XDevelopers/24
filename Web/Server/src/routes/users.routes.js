import { Router } from "express";
import {InActiveRegister, InactiveToActive, Login} from "../controllers/Register.js";
import { IsAuthenticated } from "../meddleWare/Authenticated.js";

const router = Router();

// router.route("/inactiveToActive").get(InactiveToActive);
// router.route("/otpValidation").post(IsAuthenticated, verifyOTP);
// router.route("/activeRegister").post(IsAuthenticated);
// router.route("/otpValidation").post(IsAuthenticated, verif);
router.route("/register").post(InActiveRegister);
router.route("/login").post(Login);
router.route("/changeusertypeadmin").post(Login);
// router.route("/logout").post(logoutUser)

export default router;
