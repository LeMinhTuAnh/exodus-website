import { Router } from "express";

const router = new Router();

router.get("/banners", require("./getBanners").default);
// router.get("/hotUpdate", require("./getHotUpdate").default);
// router.get("/latestUpdate", require("./getLatestUpdate").default);
// router.get("/topPopular", require("./getTopPopular").default);
// router.get("/readRank", require("./getReadRightNow").default);
// router.put('/:objectId/read_all', require('./markReadAll'))
// router.get('/:objectId/user', require('./userActivity'))
// router.get('/:objectId/subscribed', require('./userSubscribedActivity'))

export default router;
