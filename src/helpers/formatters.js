export const creditCardFormat = (value) => {
  var cardNumber = value.split(" ").join("");
  if (cardNumber.length > 0) {
    cardNumber = cardNumber.match(new RegExp(".{1,4}", "g")).join(" ");
  }

  return cardNumber.substring(0, 19);
};


export const creditCardExpiryFormat = (value) => {
    var expiryDate = value.split(" ").join("");
    if (expiryDate.length > 0) {
        expiryDate = expiryDate.replace(/([0-9]{2})([0-9]{2})/, "$1/$2");
    }
  
    return expiryDate.substring(0,5);
  };

  export const cvcFormat = (value) => {
    var cvc = value.split(" ").join("");
    if (cvc.length > 0) {
        cvc = cvc.replace(/([0-9]{2})([0-9]{2})([0-9]{2})/, "$1$2$3");
    }
  
    return cvc.substring(0,3);
  };