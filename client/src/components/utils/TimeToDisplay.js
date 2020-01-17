const timeToDisplay = slot => {
  switch (slot) {
    case "1":
      return "08:00";
    case "2":
      return "09:00";
    case "3":
      return "10:00";
    case "4":
      return "11:00";
    case "5":
      return "13:00";
    case "6":
      return "14:00";
    case "7":
      return "15:00";
    default:
      return;
  }
};

export default timeToDisplay;
