const getAge = (birthDate) => {
  const today = new Date();
  const birthDateString = birthDate.split('/');
  const birthDateObject = new Date(
    birthDateString[2],
    birthDateString[1] - 1,
    birthDateString[0]
  );
  const age = today.getFullYear() - birthDateObject.getFullYear();
  const m = today.getMonth() - birthDateObject.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDateObject.getDate())) {
    return age - 1;
  }
  return age;
};

export default getAge;
