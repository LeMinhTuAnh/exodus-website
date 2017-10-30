/* eslint
    max-len: "off"
*/
import { Router } from "express";
// import twitterClient from "../../helper/twitterClient";

const router = new Router();


router.post("/signup", require("./signup").default);

router.put("/resetPassword", require("./resetPassword").default);

router.get("/checkExistedUser/:email", require("./checkExistedUser").default);
router.get("/me", require("./getCurrentUserInfo").default);
router.get("/logout", require("./logout").default);

router.get("/requestEmailVerify", require("./requestEmailVerify").default);

export default router;
