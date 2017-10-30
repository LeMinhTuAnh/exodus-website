/* eslint-disable */

const pattern = (type) => {
  type = type ? type.toLowerCase() : type;

  switch (type) {
    case "number":
      return "-?[0-9]*(\.[0-9]+)?";
    case "email":
      return "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
    default:
      return null;
  }
}

export default pattern;
