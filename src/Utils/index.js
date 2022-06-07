
export const getDateFomated = (data) => {
  const [dayB, monthB, yearB] = data?.split("/");

  const date = new Date(`${monthB}/${dayB}/${yearB}`);
  const month = date.getMonth();
  const day = date.getDate();
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${day} de ${months[month]}`;
};
export const getAge = (data) => {
  const [dayB, monthB, yearB] = data?.split("/");
  const dateB = new Date();
  let age = dateB.getFullYear() - yearB;
  if (dateB.getMonth() < monthB) {
    age--
  }
  if (dateB.getMonth() === monthB) {
    age = dateB.getDate() < dayB ? age-- : age
  }
  return age;
};


export const convertDateFromMilliseconds = (mmDate, fullDate = false) => {
  const date = new Date(mmDate);
  if (fullDate) {
    return date
  } else {
    return `${date.getDay() < 10 ? "0" + date.getDay() : date.getDay}/${date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()}/${date.getFullYear()}`
  }
}
