const formatToday = (date) => {
  const shortMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(date);
  let day = `${d.getDate()}`;
  let month = shortMonth[d.getMonth()];
  const year = d.getFullYear();

  return [day, month, year].join("-");
};

export default formatToday;
