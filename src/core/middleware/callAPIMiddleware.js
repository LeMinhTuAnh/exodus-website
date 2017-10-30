function triggerSuccess(
  successCallback,
  body,
  payload,
  dispatch,
  successType,
  doneCallback,
) {
  let result = null;
  if (successCallback) {
    result = successCallback(body, dispatch);
  } else {
    result = dispatch(
      Object.assign({}, payload, {
        body,
        lastFetched: Date.now(),
        type: successType,
      }),
    );
  }
  if (doneCallback) {
    doneCallback(result);
  }
  return result;
}

function triggerFailure(
  errorCallback,
  error,
  errorCode,
  payload,
  dispatch,
  failureType,
  doneCallback,
) {
  let result = null;
  if (errorCallback) {
    result = errorCallback(error, dispatch);
  } else {
    result = dispatch(Object.assign({}, payload, { error, code: errorCode, type: failureType }));
  }
  if (doneCallback) {
    doneCallback(result);
  }
  return result;
}

export function callAPIMiddleware(request = null) {
  return function ({ dispatch, getState }) { /* eslint func-names:"off" */
    return next => action => {
      const {
        types,
        callAPI,
        shouldCallAPI = () => true,
        payload = {},
        successCallback = null,
        errorCallback = null,
        doneCallback = null,
      } = action;
      if (!types) {
        // Normal action: pass it on
        return next(action);
      }
      if (
        !Array.isArray(types) ||
          types.length !== 3 ||
          !types.every(type => typeof type === "string")
      ) {
        throw new Error("Expected an array of three string types.");
      }

      if (typeof callAPI !== "function") {
        throw new Error("Expected fetch to be a function.");
      }

      if (!shouldCallAPI(getState())) {
        if (doneCallback) {
          doneCallback();
        }
        return null;
      }
      const [requestType, successType, failureType] = types;

      dispatch(Object.assign({}, payload, { type: requestType }));
      return callAPI(request, getState())
        .then(response => response.json())
        .then(
          response => {
            if (response.code && response.code !== 0) {
              return triggerFailure(
                errorCallback,
                response.data,
                response.code,
                payload,
                dispatch,
                failureType,
                doneCallback,
              );
            }
            return triggerSuccess(
              successCallback,
              response,
              payload,
              dispatch,
              successType,
              doneCallback,
            );
          },
          error =>
            triggerFailure(
              errorCallback,
              error,
              100,
              payload,
              dispatch,
              failureType,
              doneCallback,
            ),
        );
    };
  };
}

export default function () {}
