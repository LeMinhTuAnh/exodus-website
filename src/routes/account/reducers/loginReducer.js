// import update from "react-addons-update";

// import * as ACTION from "../../../constants/actions";
// import * as REDUCER from "../../../constants/reducers";

// export default function loggedUser(
//   state = {
//     lastFetched: null,
//     isLoading: false,
//     error: null,
//     user: {},
//   },
//   action,
// ) {
//   switch (action.type) {
//     case ACTION.ACTION_USER_LOGIN_REQUEST: {
//       return update(state, {
//         isLoading: { $set: true },
//         error: { $set: null },
//       });
//     }
//     case ACTION.ACTION_USER_LOGIN_SUCCESS: {
//       return update(state, {
//         user: { $set: action.body.data },
//         lastFetched: { $set: action.lastFetched },
//         isLoading: { $set: false },
//       });
//     }
//     case ACTION.ACTION_USER_LOGIN_FAILURE:
//       return update(state, {
//         error: { $set: action.error },
//         isLoading: { $set: false },
//       });
//     default:
//       return state;
//   }
// }

// // export const REDUCER_NAME = REDUCER.REDUCER_LOGGED_USER;
// export const REDUCER_NAME = REDUCER.REDUCER_USER;
