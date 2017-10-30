import { Router } from "express";

const router = new Router();

// Upload Image to MR CDN (proxy through MR Reader)
router.post("/countTwitter", require("./countTwitter").default);

export default router;
