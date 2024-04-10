const common = {
  validator: {
    invalid: "Invalid field",
    required: "Please enter value",
    password: "Password is invalid",

    // yup string
    stringMin: "Field must be at least {{min}} characters",
    stringMax: "Field must be at most {{max}} characters",
    stringMatches: 'Field must match the following: "{{regex}}"',
    stringEmail: "Email invalid",
    stringUrl: "Field must be a valid URL",
    stringUuid: "Field must be a valid UUID",
    stringTrim: "Field must be a trimmed string",
    stringLowercase: "Field must be a lowercase string",
    stringUppercase: "Field must be a upper case string",

    // yup number
    numberMin: "Field must be greater than or equal to {{min}}",
    numberMax: "Field must be less than or equal to {{max}}",
    numberLessThan: "Field must be less than {{less}}",
    numberMoreThan: "Field must be greater than {{more}}",
    numberPositive: "Field must be a positive number",
    numberNegative: "Field must be a negative number",
    numberInteger: "Field must be an integer",
  },
};
export default common;
