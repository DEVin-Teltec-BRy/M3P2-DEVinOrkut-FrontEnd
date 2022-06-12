import cpfValidator from './validateCpf';

const passwordValidator = (password) => {
  return password.match(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
  );
};

const isEmail = (value) => {
  const emailRegex = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  return emailRegex.test(value);
};

const cpf = new cpfValidator();

// function to validate form

export const validateStepOne = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = 'Campo obrigatório';
  }

  const isCpfValid = cpf.isValid(values.cpf);

  if (!values.cpf) {
    errors.cpf = 'Campo obrigatório';
  } else if (!isCpfValid) {
    errors.cpf = 'CPF inválido';
  }

  if (!values.gender) {
    errors.gender = 'Escolha uma opção';
  }

  if (!values.birthDate) {
    errors.birthDate = 'Escolha uma data';
  }

  return errors;
};

export const validateStepTwo = (values) => {
  const errors = {};

  if (!values.postal) {
    errors.postal = 'Campo obrigatório';
  }

  if (values.city) {
    if (values.city.length < 3) {
      errors.city = 'Mínimo 3 caracteres';
    }
  }

  if (!values.state) {
    errors.state = 'Campo obrigatório';
  }

  if (!values.address) {
    errors.address = 'Campo obrigatório';
  }
  if (!values.number) {
    errors.number = 'Campo obrigatório';
  }

  if (!values.district) {
    errors.district = 'Campo obrigatório';
  }

  return errors;
};

export const validateStepThree = (values) => {
  const errors = {};

  if (!values.relationship) {
    errors.relationship = 'Campo obrigatório';
  }

  if (!values.humor) {
    errors.humor = 'Campo obrigatório';
  }

  if (!values.interests) {
    errors.interests = 'Campo obrigatório';
  }

  if (!values.aboutMe) {
    errors.aboutMe = 'Campo obrigatório';
  }

  return errors;
};

export const validateStepFour = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Campo obrigatório';
  } else if (!isEmail(values.email)) {
    errors.email = 'Email inválido';
  }

  if (!values.password) {
    errors.password = 'Campo obrigatório';
  } else if (!passwordValidator(values.password)) {
    errors.password = 'Senha inválida. Deve possuir pelo menos 8 caracteres com maiúsculas, minúsculas, números e símbolos.';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Campo obrigatório';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Senhas não conferem';
  }

  return errors;
};
