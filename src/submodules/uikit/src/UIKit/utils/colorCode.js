const colorCode = code => {
  const color = code ? code.toLowerCase() : code;

  switch (color) {
    case "primary":
      return "#29B6F6";
    case "warning":
      return "#FF5722";
    case "danger":
      return "#FF3333";
    case "black87":
      return "rgba(0, 0, 0, 0.87)";
    case "black54":
      return "rgba(0, 0, 0, 0.54)";
    case "black38":
      return "rgba(0, 0, 0, 0.38)";
    case "black12":
      return "rgba(0, 0, 0, 0.12)";
    case "black08":
      return "rgba(0, 0, 0, 0.08)";
    case "white70":
      return "rgba(255, 255, 255, 0.70)";
    case "white50":
      return "rgba(255, 255, 255, 0.50)";
    case "white12":
      return "rgba(255, 255, 255, 0.12)";
    case "neutral-1":
      return "#FAFAFA";
    case "neutral-2":
      return "#F5F5F5";
    case "neutral-3":
      return "#EEEEEE";
    case "neutral-4":
      return "#BDBDBD";
    case "neutral-5":
      return "#212121";
    default:
      return color;
  }
};

export default colorCode;
