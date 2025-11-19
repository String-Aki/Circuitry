import express from "express";
import { getClients, createClient } from "../Controller/clientController.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();
router.use(requireAuth);

router.route("/").get(getClients).post(createClient);

export default router;
