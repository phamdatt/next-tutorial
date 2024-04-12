import * as yup from "yup";

const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/;
const REGEX_ONLY_NUMBER = /^\d+$/;

yup.setLocale({
  mixed: {
    required: "validator.required",
  },
  string: {
    email: "validator.stringEmail",
    min: ({ min }: any) => ({ key: "validator.stringMin", values: { min } }),
    max: ({ max }: any) => ({ key: "validator.stringMax", values: { max } }),
  },
});

yup.addMethod(
  yup.string,
  "isValidPassword",
  function isValidPassword(message?: string) {
    return this.matches(REGEX_PASSWORD, {
      message: message ?? "validator.password",
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

const testScheme = yup.object({
  email: yup.string().email().required(),
});

export { homeScheme, testScheme };
