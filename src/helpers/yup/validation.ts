import * as yup from "yup";

const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/;
const REGEX_ONLY_NUMBER = /^\d+$/;

yup.setLocale({
  mixed: {
    required: "${path} is a required fields",
  },
  string: {
    email: "validator.email",
  },
});

yup.addMethod(
  yup.string,
  "isValidPassword",
  function isValidPassword(message?: string) {
    return this.matches(REGEX_PASSWORD, {
      message: message ?? "Password is invalid",
      excludeEmptyString: true,
    });
  }
);

yup.addMethod(yup.string, "onlyNumber", function onlyNumber(message: string) {
  return this.matches(REGEX_ONLY_NUMBER, {
    message,
    excludeEmptyString: true,
  });
});

const homeScheme = yup.object({
  account: yup.string().min(6).max(255).required(),
  password: yup.string().isValidPassword().min(6).max(255).required(),
});

export { homeScheme };
