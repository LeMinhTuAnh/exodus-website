/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */

// const AJAX_MRAPI_ROOT = "http://localhost:8088";
// const AJAX_MRAPI_ROOT = "http://mrapi.vn.nabstudio.com";
const AJAX_MRAPI_ROOT = "https://api.mangarockhd.com";
const AJAX_MRAPI_VERSION = "web400";
export const AJAX_MRSOURCE_MSID = 71;
export const AJAX_API_SEPARATOR = ";";

export const AJAX_GET_HOME_BANNERS = "/ajax/home/banners";

export const AJAX_GET_HOME_READ_RIGHT_NOW = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/realtime?msid=${AJAX_MRSOURCE_MSID}&country={{country}}`;
export const AJAX_GET_HOME_LATEST_UPDATES = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/mrs_home_latest?country={{country}}`;
export const AJAX_GET_HOME_HOT_UPDATES = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/mrs_home_hot_updates?country={{country}}`;
export const AJAX_GET_LATEST_UPDATES = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/mrs_latest?country={{country}}`;
export const AJAX_GET_ALL_SERIE = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/mrs_filter?country={{country}}`;

// export const AJAX_QUICK_SEARCH = "/ajax/search/quick";
export const AJAX_QUICK_SEARCH = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/mrs_quick_search?country={{country}}`;
export const AJAX_SEARCH = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/mrs_search?country={{country}}`;
// export const AJAX_SEARCH_SERIE = "/ajax/search/serie";
// export const AJAX_SEARCH_AUTHOR = "/ajax/search/author";
// export const AJAX_SEARCH_CHARACTER = "/ajax/search/character";

export const AJAX_GET_MANGA_DETAIL = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/info?oid={{serieId}}&last=0&country={{country}}`;
export const AJAX_GET_MANGA_LIST_DETAIL = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/multi_info?country={{country}}`;
export const AJAX_GET_MANGA_SUGGESTION = `${AJAX_MRAPI_ROOT}/suggest/${AJAX_MRSOURCE_MSID}/{{mangaID}}?country={{country}}`;
export const AJAX_GET_MANGA_CHAPTER_PAGES = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/pages?oid={{chapterId}}&country={{country}}`;

export const AJAX_GET_ALL_CHARACTER = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/mrs_all_character?country={{country}}`;
export const AJAX_GET_CHARACTER_DETAIL = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/character?oid={{characterId}}`;
export const AJAX_GET_CHARACTER_RELATED_SERIES = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/mrs_serie_related_character?oid={{characterId}}&country={{country}}`;

export const AJAX_GET_ALL_AUTHOR = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/mrs_all_author?country={{country}}`;
export const AJAX_GET_AUTHOR_DETAIL = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/author?oid={{authorId}}`;
export const AJAX_GET_GENRE_DETAIL = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/genre?oid={{genreId}}`;
export const AJAX_GET_AUTHOR_RELATED_SERIES = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/mrs_serie_related_author?oid={{authorId}}&country={{country}}`;

export const AJAX_GET_COLLECTION_DETAIL = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/collection?oid={{collectionId}}&country={{country}}`;

export const AJAX_META_SERVICE = `${AJAX_MRAPI_ROOT}/meta`;
export const AJAX_GET_SERIE_OTAKUMO_IDS = `${AJAX_MRAPI_ROOT}/query/${AJAX_MRAPI_VERSION}/oids?type=serie`;

export const AJAX_FACEBOOK_SHARE_COUNT = "https://graph.facebook.com/{{url}}";
export const AJAX_TWITTER_SHARE_COUNT = "https://opensharecount.com/count.json?url={{url}}";
export const AJAX_TWITTER_SHARE_COUNT_LOCAL = "/ajax/share/countTwitter";

export const AJAX_POST_LOGIN_USER = "/ajax/login";
export const AJAX_POST_FACEBOOK_LOGIN_USER = "/ajax/login/facebook";
export const AJAX_LOGOUT_USER = "/ajax/account/logout";
export const AJAX_CHECK_EXISTED_USER = "/ajax/account/checkExistedUser";
export const AJAX_SIGNUP_USER = "/ajax/account/signup";
export const AJAX_RESET_PASSWORD = "/ajax/account/resetPassword";
export const AJAX_REQUEST_EMAIL_VERIFIED = "/ajax/account/requestEmailVerify";

export const AJAX_GET_ISSUE_TYPE = `${AJAX_MRAPI_ROOT}/issue/types`;
export const AJAX_CREATE_ISSUE = `${AJAX_MRAPI_ROOT}/issue/create`;
export const AJAX_GET_ISSUES = `${AJAX_MRAPI_ROOT}/issue/list`;
export const AJAX_GET_ISSUE = `${AJAX_MRAPI_ROOT}/issue/info`;
export const AJAX_UNRESOLVE_ISSUE = `${AJAX_MRAPI_ROOT}/issue/unresolve`;

export const AJAX_UPLOAD_IMAGE = "/ajax/upload/image";

export const AJAX_GET_DEEPLINK = `${AJAX_MRAPI_ROOT}/deeplink/{{linkType}}`;
export const AJAX_REDIRECT_DEEPLINK = `${AJAX_MRAPI_ROOT}/deeplink/{{linkType}}/redirect`;

export const AJAX_GET_WEB_RELEASE = `${AJAX_MRAPI_ROOT}/client/webrelease`;
