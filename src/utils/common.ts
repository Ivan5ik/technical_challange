export const onlyLetter = new RegExp(/^[a-zA-Z]{8,}$/);
export const hasLetter = new RegExp(/[a-zA-Z]/);
export const hasSpecialSymbol = new RegExp(
  /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
);
export const hasNumber = new RegExp(/\d/);
export const hasLettersNumbersSymbols = new RegExp(
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&/.,_-])[A-Za-z\d@$!%*?&/.,_-]{8,}$/
);
