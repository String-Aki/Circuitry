import express from "express";
import {
  getServices,
  createService,
  deleteService,
} from "../Controller/serviceController";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.use(requireAuth());

router.route("/").get(getServices).post(createService);

router.route("/:id").delete(deleteService);

export default router;
