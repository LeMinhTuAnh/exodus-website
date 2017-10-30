import { Router } from "express";

const router = new Router();

// Upload Image to MR CDN (proxy through MR Reader)
router.get("/sitemap_manga.xml", require("./generateManga").default);
router.get("/sitemap_author.xml", require("./generateAuthor").default);
router.get("/sitemap_character.xml", require("./generateCharacter").default);
router.get("/sitemap_genre.xml", require("./generateGenre").default);

export default router;
