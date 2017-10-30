// import * as cacheHelper from "./cache";
// import * as EXPIRE from "../constants/expire";

// import {
//     getAllMangaForListing,
// } from "../model/serie";


// let cacheMetaMangaInfo = {};
// let cacheMangaOrderByName = [];
// let cacheMangaOrderByRank = [];

// let isCaching = false;

// function arrayToMap(data) {
//   const results = {};
//   if (!data || !(data instanceof Array)) {
//     return results;
//   }
//   data.forEach((item) => {
//     results[item] = true;
//   }, this);
//   return results;
// }

// async function generateCache() {
//   if (isCaching) {
//     return;
//   }

//   isCaching = true;
//   console.log("generateCache allManga");
//   const cKey = "mangaListing";
//   let series = {};
//   const result = await cacheHelper.cacheGet(cKey);

//   if (result && result.length > 0) {
//     series = cacheHelper.decode(result);
//   } else {
//     const _series = await getAllMangaForListing();
//     _series.forEach((serie) => {
//       let genres = [];
//       if (serie.genres) {
//         genres = serie.genres.split(",");
//       }

//       // let authors = [];
//       // if (serie.authors) {
//       //   authors = serie.authors.split(",");
//       // }

//       series[serie.eid] = {
//         name: serie.name,
//         rank: serie.rank,
//         status: parseInt(serie.status),
//                 // totalChapter: parseInt(serie.total_chapter),
//         genres: arrayToMap(genres),
//                 // authors: arrayToMap(authors)
//       };
//     }, this);

//     cacheHelper.cacheSetEx(cKey, EXPIRE.EXPIRE_GENERAL, cacheHelper.encode(series));
//   }

//   const _cacheMangaOrderByName = Object.keys(series);
//   const _cacheMangaOrderByRank = Object.keys(series);
//   _cacheMangaOrderByName.sort(
//     // eslint-disable-next-line no-nested-ternary,no-confusing-arrow
//     (a, b) => (series[a].name > series[b].name) ? 1 : (series[a].name === series[b].name ? 0 : -1),
//     );

//   _cacheMangaOrderByRank.sort(
//     // eslint-disable-next-line no-nested-ternary,no-confusing-arrow
//     (a, b) => (series[a].rank > series[b].rank) ? 1 : (series[a].rank === series[b].rank ? 0 : -1),
//     );

//   cacheMetaMangaInfo = series;
//   cacheMangaOrderByName = _cacheMangaOrderByName;
//   cacheMangaOrderByRank = _cacheMangaOrderByRank;
//   console.log("generateCache allManga done count=", Object.keys(series).length);
//   isCaching = false;
// }


// export function getMetaMangaOrderByName() {
//   return cacheMangaOrderByName;
// }

// export function getMetaMangaOrderByRank() {
//   return cacheMangaOrderByRank;
// }

// export function getMetaMangaInfo() {
//   return cacheMetaMangaInfo;
// }

// generateCache();
// setInterval(() => {
//   generateCache();
// }, 10 * 60 * 1000);
