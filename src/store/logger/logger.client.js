import { createLogger } from "redux-logger";

export default function () {
  return createLogger({
    collapsed: true,
    duration: true,
  });
}
