// TODO: Refactor all the validation rules in a separate file
// Only check for the current field without going through the entire set

const validateCardDetails = (fieldname, value) => {
  const cardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2}|[0-9]{2})$/;
  const cvcRegex = /^([0-9][0-9][0-9])/;

  if (fieldname === "cardholdername" && !value.trim()) {
    return "Please fill in your name";
  }
  if (
    fieldname === "cardnumber" &&
    !cardNumberRegex.test(value.split(" ").join(""))
  ) {
    return "Please enter a valid credit card number";
  }

  if (
    fieldname === "expirationdate" &&
    !expiryDateRegex.test(value.replace(/([0-9]{2})([0-9]{2})/, "$1/$2"))
  ) {
    return "Please enter a valid expiry date";
  }

  if (fieldname === "cvccode" && !cvcRegex.test(value.trim())) {
    return "Please enter a valid security code";
  }

  return null;
};

export default validateCardDetails;
