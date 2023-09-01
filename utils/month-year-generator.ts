export const MonthGenerator = () => {
  function createMonths() {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }

  const monthsInYear = createMonths();

  const monthsArray = monthsInYear.map((month) => {
    return { value: month.toLowerCase(), label: month };
  });

  return { monthsArray };
};

export const YearGenerator = () => {
  function countToArray() {
    let num = 2023;
    let resultArray = [];

    for (let i = num; i >= 1990; i--) {
      resultArray.push(i.toString());
    }

    return resultArray;
  }

  const result = countToArray();

  const yearArray = result.map((year) => {
    return { value: year, label: year };
  });

  return { yearArray };
};
