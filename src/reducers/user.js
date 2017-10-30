// export default function user(state = {}, action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }
import update from "react-addons-update";
import * as ACTION from "../constants/actions";
import * as REDUCER from "../constants/reducers";

export default function user(
  state = {
    lastFetched: null,
    isLoading: false,
    error: null,
    user: {},
  },
  action,
) {
  switch (action.type) {
    case ACTION.ACTION_USER_LOGIN_REQUEST: {
      return update(state, {
        isLoading: { $set: true },
        error: { $set: null },
      });
    }
    case ACTION.ACTION_USER_LOGIN_SUCCESS: {
      return update(state, {
        user: { $set: action.body.data },
        lastFetched: { $set: action.lastFetched },
        isLoading: { $set: false },
      });
    }
    case ACTION.ACTION_USER_LOGIN_FAILURE:
      return update(state, {
        error: { $set: action.error },
        isLoading: { $set: false },
      });
    // FACEBOOK LOGIN
    case ACTION.ACTION_FACEBOOK_LOGIN_REQUEST: {
      return update(state, {
        isLoading: { $set: true },
        error: { $set: null },
      });
    }
    case ACTION.ACTION_FACEBOOK_LOGIN_SUCCESS: {
      return update(state, {
        user: { $set: action.body.data },
        lastFetched: { $set: action.lastFetched },
        isLoading: { $set: false },
      });
    }
    case ACTION.ACTION_FACEBOOK_LOGIN_FAILURE:
      return update(state, {
        error: { $set: action.error },
        isLoading: { $set: false },
      });
      // SIGN UP
    case ACTION.ACTION_USER_SIGNUP_REQUEST: {
      return update(state, {
        isLoading: { $set: true },
        error: { $set: null },
      });
    }
    case ACTION.ACTION_USER_SIGNUP_SUCCESS: {
      return update(state, {
        user: { $set: action.body.data },
        lastFetched: { $set: action.lastFetched },
        isLoading: { $set: false },
      });
    }
    case ACTION.ACTION_USER_SIGNUP_FAILURE:
      return update(state, {
        error: { $set: action.error },
        isLoading: { $set: false },
      });
    default:
      return state;
  }
}

export const REDUCER_NAME = REDUCER.REDUCER_USER;
