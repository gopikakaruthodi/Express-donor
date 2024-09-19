import { Router } from "express";
import { addDonors } from "./requestHandler.js";

const router=Router()
router.route("/adddonor").post(addDonors);

export default router;