const validateCardDetails = (fieldname, value) => {
    const nameRegex = /([A-Z])/g;

    if (fieldname === 'cardholdername' && !value.trim()) {
      return "Please fill in your name";
    }

    if (fieldname === 'cardholdername' && !nameRegex.test(value.trim())) {
        return "Please fill in valid name";
      }
  
    if (fieldname === 'cardnumber' && !value.trim()) {
        return "Please enter a valid credit card number";
    }

    if (fieldname === 'expirationdate' && !value.trim()) {
        return "Please enter a valid expiry date";
    }

    if (fieldname === 'cvccode' && !value.trim()) {
        return "Please enter a valid security code";
    }

    return null;
  };
  
  export default validateCardDetails;
  