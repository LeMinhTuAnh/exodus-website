import * as ERROR from "../constants/error";

export function success(response, data) {
  return response.json({
    code: 0,
    data,
  });
}

function errorMessage(e) {
  if (e instanceof Error) {
    return e.message;
  }
  return e;
}

export function error(response, e) {
  if (e instanceof Array && e.length === 2 && typeof e[0] === "number") {
    return response.json({
      code: e[0],
      data: e[1],
    });
  }
  return response.json({
    code: ERROR.CUSTOM_ERROR[0],
    data: errorMessage(e),
  });
}
