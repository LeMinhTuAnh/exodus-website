import { Router } from "express";

const multipart = require("connect-multiparty");

const multipartMiddleware = multipart();
const router = new Router();

// Upload Image to MR CDN (proxy through MR Reader)
router.post("/image", multipartMiddleware, require("./uploadImage"));

export default router;
