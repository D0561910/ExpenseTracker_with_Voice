const startMonth = () => {
  let d = new Date();
  let month = `${d.getMonth() + 1}`;
  let day = "1";
  const year = d.getFullYear();

  return [year, month, day].join("-");
};

export default startMonth;
