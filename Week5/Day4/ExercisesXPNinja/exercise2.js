// Add an input that has a type="email" to your form.
// Write your own javascript validation function to check if the entered value is a
// valid email address. The address should contain some valid characters, and the @ sign,
// more characters then a . (period) and some more characters.
// On “submit”, the validation function should run and validate the email address.
// Try to do this exercise twice : with and without regex.
var form = document.getElementById("form"),
  emailValue;
form.addEventListener("submit", (e) => {
  emailValue = form.email.value;
  console.log(
    "Regex validation: Is email correct?:",
    !!validateEmail(emailValue)
  );
  console.log(
    "Custom validation: Is email correct?:",
    validateEmailCustom(emailValue)
  );
  e.preventDefault();
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateEmailCustom = (email) => {
  isValid = true;
  if (email.indexOf("@") < 0) isValid = false;
  var name = email.slice(0, email.indexOf("@"));
  var domainName = email.slice(email.indexOf("@") + 1);
  if (domainName.indexOf(".") <= 0) isValid = false;
  var domain = domainName.slice(domainName.indexOf(".") + 1);
  if (domain.length < 2) isValid = false;
  return isValid;
};
