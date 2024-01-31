checkRequired = inputArr => {
    inputArr.forEach(input => {
      if (input.value.trim() === "") {
        showError(
          input,
          `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required.`
        );
      } else {
        showSuccess(input);
      }
    });
  };
  
  checkLength = (password, min, max) => {
    if (password.value.length < min || password.value.length > max) {
      showError(
        password,
        `Password should be of between ${min} to ${max} characters`
      );
    }
  };
  
  checkPassword2 = (password, password2) => {
    if (password.value !== password2.value) {
      showError(password2, `Password must be same`);
    }
  };
  
  checkEmail = email => {
    if (!isValidEmail(email)) {
      showError(email, `It is not a right Email`);
    }
  };