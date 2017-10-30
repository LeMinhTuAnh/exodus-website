import { Router } from "express";

const router = new Router();

router.get("/:release", require("./release").default);

export default router;
