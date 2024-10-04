import { Router } from "express";
import * as rh from "./requestHandler.js";
import Auth from "./middleware/auth.js";

const router=Router()
router.route("/adddonor").post(rh.addDonors);
router.route("/getdonors").get(Auth,rh.getDonors);
router.route("/getdonor/:_id").get(rh.getDonor)
router.route("/updatedonor/:_id").put(rh.updateDonor)
router.route("/deletedonor/:_id").delete(rh.deleteDonor)
// user authentification
router.route("/signup").post(rh.signUp)
router.route("/signin").post(rh.signIn)


export default router;