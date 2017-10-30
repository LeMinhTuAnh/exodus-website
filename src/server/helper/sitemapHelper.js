import sm from "sitemap";
import { readQuery } from "../helper/sqlHelper";

import { host } from "../../config";

export async function generateEntitySitemap(beforeURLPath, entityType) {
  try {
    const currentTime = new Date().toISOString();
    const sitemap = sm.createSitemap({
      hostname: host,
      cacheTime: 600000, // 600 sec (10 min) cache purge period
    });
    const rows = await readQuery(
      `
        SELECT e.oid
        FROM entity e
        WHERE e.published = 1
        AND e.removed = 0
        AND e.type = ?`,
      [entityType],
    );
    if (!rows || rows.length <= 0) {
      return "";
    }
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      sitemap.add({ url: `${beforeURLPath}${row.oid}`, lastmodISO: currentTime });
    }
    return sitemap.toString();
  } catch (error) {
    console.log(error);
    return "";
  }
}
