
export const getDateFomated = (data) => {
  const [yearB, dayB, monthB] = data?.split("-");
  const date = new Date(yearB, monthB - 1, dayB);
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
  const [yearB, dayB, monthB] = data?.split("-");
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

export const timeCalculator = (dateInMm) => {
  const date = new Date(dateInMm);
  const dateNow = new Date();
  const diff = dateNow.getTime() - date.getTime();
  const diffDays = Math.floor(diff / 86400000);
  const diffHours = Math.floor(diff / 3600000);
  const diffSeconds = Math.floor(diff / 1000);
  const diffMinutes = Math.floor(diff / 60000);
  const timePassed = [diffDays, diffHours, diffMinutes, diffSeconds];
  const time = ["Dia(s)", "Hora(s)", "Minuto(s)", "Segundos"]
  let i = 0
  let response;
  while (i < timePassed.length) {
    if (timePassed[i] > 0) {
      response = `${timePassed[i]} ${time[i]} atrás`
      i = 5;
      return response;
    } else i++

  }
}
