const yearValidation = (year) => {
  const currentdate = new Date();
  const currentyear = currentdate.getFullYear();
  try {
    if (typeof year != "number") {
      throw new Error("Year must be a number");
    }
    if (year < 1896 && year > currentyear) {
      throw new Error(`Year must be between 1896 and ${currentyear}, with those included`)
    }
    return {
      isValid: true
    }
  } catch (e) {
    return {
      isValid: false,
      message: e.message
    };
  }
};

module.exports = yearValidation;
