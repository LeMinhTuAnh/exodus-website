import { Router } from "express";

import * as genre from "../../model/genre";

const router = new Router();

// router.get("/nano", require("./getNanoList").default);
// router.get("/:genreId", require("./getGenreDetail").default);

// router.put('/:objectId/read_all', require('./markReadAll'))
// router.get('/:objectId/user', require('./userActivity'))
// router.get('/:objectId/subscribed', require('./userSubscribedActivity'))

let genreListItems = [];

export async function getGenreListItems() {
  if (genreListItems.length <= 0) {
    genreListItems = await genre.getAllNanoGenreList();
  }
  return genreListItems;
}

setInterval(() => {
  genreListItems = [];
}, 60000);

export default router;
