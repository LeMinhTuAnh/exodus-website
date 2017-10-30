/* eslint max-len: "off" */
import { Router } from "express";

const router = new Router();

router.get("/twitter", require("./twitterLogin").default);
router.get("/twitterCallback", require("./twitterCallback").default);
router.post("/facebook", require("./facebookLogin").default);
router.post("/", require("./login").default);

export default router;
