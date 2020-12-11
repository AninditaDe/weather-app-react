import moment from "moment";

function FormatDate(date) {
  return moment(date * 1000).format("DD-MMM-YYYY");
}

function ConvertKelvinTemp(temp) {
  return Math.round(temp - 273.15);
}

export { FormatDate, ConvertKelvinTemp };
