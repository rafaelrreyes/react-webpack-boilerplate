import express from "express";

// use this as a template
import EndpointController from "./EndpointController";

const router = express.Router();

router.route(`/data/get`).get(EndpointController.getData);

export default router;