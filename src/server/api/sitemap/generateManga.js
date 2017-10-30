import { generateEntitySitemap } from "../../helper/sitemapHelper";
import { cacheGet, cacheSetEx } from "../../helper/cache";
import { ENTITY_TYPE_SERIE } from "../../constants/type";

export default async (req, res) => {
  res.header("Content-Type", "application/xml");
  const cKey = "sitemap:manga";
  const result = await cacheGet(cKey);
  if (result != null) {
    res.send(result);
    return;
  }
  const sitemap = await generateEntitySitemap("/manga/", ENTITY_TYPE_SERIE);
  const oneDayInSecs = 60 * 60 * 24;
  cacheSetEx(cKey, oneDayInSecs, sitemap);
  res.send(sitemap);
};
