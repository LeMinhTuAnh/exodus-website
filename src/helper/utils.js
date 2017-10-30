import * as constants from "../constants/index";
import { updateTag } from "../core/DOMUtils";
import { getHost } from "../clientConfig";

export async function initFetchAction(context, actions, force = false) {
  if (!process.env.BROWSER || (!window || !window.APP_STATE || force)) {
    const promises = [];
    actions.forEach(action => {
      promises.push(
        new Promise(resolve => {
          action(resolve);
        }),
      );
    }, this);

    if (!process.env.BROWSER) {
      await Promise.all(promises);
    }
  }
}

export function checkRequestInterval(requestState, interval) {
  if (!requestState) {
    return true;
  }
  if (requestState.isLoading) {
    return false;
  }

  const currentTs = new Date().getTime();
  return currentTs - requestState.lastFetched > interval;
}

export function arrayToIntArray(arr) {
  const results = [];
  arr.forEach(data => results.push(parseInt(data)));
  return results;
}

export function formatTextForDisplay(text) {
  const breakTag = "<br />";
  return `${text}`.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, `$1${breakTag}$2`);
}

export function getParameterByName(paramcName, srcUrl = null) {
  let url = srcUrl;
  if (!url && window) {
    url = window.location.href;
  }
  const name = paramcName.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function multiClass(...classes) {
  return classes.length > 0 ? classes.join(" ") : "";
}

export function checkImageCachingURL(url) {
  let imageURL = url;
  if (!imageURL || imageURL.length === 0) {
    return url;
  }

  if (imageURL.indexOf("nabstudio.com") > 0) {
    // if (imageURL.indexOf("?") > 0) {
    //   imageURL += "&";
    // } else {
    //   imageURL += "?";
    // }
    // imageURL += "polish=1";
    imageURL = imageURL.replace("http://", "https://");
  }
  if (imageURL.indexOf("f01.mrcdn.info") > 0) {
    // if (imageURL.indexOf("?") > 0) {
    //   imageURL += "&";
    // } else {
    //   imageURL += "?";
    // }
    // imageURL += "polish=1";
    imageURL = imageURL.replace("f01.mrcdn.info", "f1.mrcdn.info");
  }
  return imageURL;
}

export function secondToMillisecondTime(time = "") {
  const timeInSecond = parseInt(time);
  if (isNaN(timeInSecond)) {
    return "";
  }
  return timeInSecond * 1000;
}

const monthLabel = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};
export function issueReportDateFormat(time = "") {
  const timeInSecond = parseInt(time);
  if (isNaN(timeInSecond)) {
    return "";
  }
  const dateTime = new Date(time);
  const day = dateTime.getDate();
  const month = monthLabel[dateTime.getMonth()];
  const year = dateTime.getFullYear();
  return `${month} ${day},${year}`;
}

export function isValidEmail(email = "") {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(email);
}

export function getObjectUri(object = {}) {
  const otakumoID = object.oid || "";
  const seriesOID = object.series_oid || "";
  const otakumoMetaType = otakumoID.substring(0, otakumoID.lastIndexOf("-"));

  switch (otakumoMetaType) {
    case "mrs-serie":
      return `/manga/${otakumoID}`;
    case "mrs-author":
      return `/author/${otakumoID}`;
    case "mrs-character":
      return `/character/${otakumoID}`;
    case "mrs-chapter":
      return `/manga/${seriesOID}/chapter/${otakumoID}`;
    case "mrs-collection":
      return `/collection/${otakumoID}`;
    case "mrs-genre":
      return `/genre/${otakumoID}`;

    default:
      break;
  }
  return "";
}

export function getAbsoluteObjectUrl(object = {}) {
  return getHost() + getObjectUri(object);
}

export function getRelativeUrl(relativeUrl) {
  if (!relativeUrl || !relativeUrl.startsWith("http")) {
    return getHost() + relativeUrl;
  }
  return relativeUrl;
}

export function updateHtmlMeta(htmlMeta) {
  if (!htmlMeta.title) {
    return;
  }
  document.title = htmlMeta.title;

  if (htmlMeta.metaName && Object.keys(htmlMeta.metaName).length > 0) {
    const keys = Object.keys(htmlMeta.metaName);
    for (let i = 0; i < keys.length; i++) {
      updateTag("meta", "name", keys[i], "content", htmlMeta.metaName[keys[i]]);
    }
  }

  if (htmlMeta.metaProperty && Object.keys(htmlMeta.metaProperty).length > 0) {
    const keys = Object.keys(htmlMeta.metaProperty);
    for (let i = 0; i < keys.length; i++) {
      updateTag(
        "meta",
        "property",
        keys[i],
        "content",
        htmlMeta.metaProperty[keys[i]],
      );
    }
  }

  if (htmlMeta.itemProps && Object.keys(htmlMeta.itemProps).length > 0) {
    const keys = Object.keys(htmlMeta.itemProps);
    for (let i = 0; i < keys.length; i++) {
      updateTag(
        "meta",
        "itemprop",
        keys[i],
        "content",
        htmlMeta.itemProps[keys[i]],
      );
    }
  }
}
