import { Router } from "express";
import * as rh from "./requestHandler.js";

const router=Router()
router.route("/adddonor").post(rh.addDonors);
router.route("/getdonors").get(rh.getDonors)

export default router;