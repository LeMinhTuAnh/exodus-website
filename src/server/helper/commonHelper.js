// Copyright (c) 2010-2013 Diego Perini, MIT licensed
// https://gist.github.com/dperini/729294
// see also https://mathiasbynens.be/demo/url-regex
// modified to allow protocol-relative URLs
const reWeburl = new RegExp(
  "^" + // protocol identifier
  "(?:(?:https?|ftp)://)" + // user:pass authentication
  "(?:\\S+(?::\\S*)?@)?" +
  "(?:" + // IP address exclusion
  // private & local networks
  "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
  "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
  "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" + // IP address dotted notation octets
  // excludes loopback network 0.0.0.0
  // excludes reserved space >= 224.0.0.0
  // excludes network & broacast addresses
  // (first & last IP address of each class)
  "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
  "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
  "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
  "|" + // host name
  "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" + // domain name
  "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" + // TLD identifier
  "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + // TLD may end with dot
  "\\.?" +
  ")" + // port number
  "(?::\\d{2,5})?" + // resource path
    "(?:[/?#]\\S*)?" +
    "$",
  "i",
);

export function isValidEmail(email) {
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function isValidUrl(url) {
  return reWeburl.test(url);
}
