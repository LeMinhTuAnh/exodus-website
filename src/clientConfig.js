let host;

export function getHost() {
  if (process.env.BROWSER && typeof window !== "undefined") {
    return window.location.origin;
  }
  return host;
}

export function setHost(rootUrl) {
  host = rootUrl;
}

export default {
  parse: {
    parseAppId: "DOTecsAUU0hHsVe50hQqCltNmpzx5hbwJB60FfyM",
    parseJsKey: "WQl2v6Rdlx4NNhLcsyCEEs4aYOlEzKjpkBtTG7Yc",
    // parseUrl: "http://localhost:10102/parse/",
    parseUrl: "https://api.mangarockhd.com/parse/",
  },
  firebase: {
    apiKey: "AIzaSyDE6An9uQWaxeAfusscqH9Ez3wJsjhDVS4",
    authDomain: "test-project-c56a9.firebaseapp.com",
    databaseURL: "https://test-project-c56a9.firebaseio.com",
    storageBucket: "test-project-c56a9.appspot.com",
  },
};
