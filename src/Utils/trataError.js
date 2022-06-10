const cleanError = (err, word) => {
  if (err) {
    const result = err.replace(word, '');
    return result;
  } else {
    return err;
  }
};

export default cleanError;
