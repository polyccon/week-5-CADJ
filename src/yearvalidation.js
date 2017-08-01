const yearValidation = (year) => {
  const currentdate = new Date();
  const currentyear = currentdate.getFullYear();
  const years = Number(year);
  try {
    if (typeof years != "number") {
      throw new Error("Year must be a number");
    }
    if (years < 1896 || years > currentyear) {
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