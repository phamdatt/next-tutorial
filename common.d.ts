import * as yup from "yup";
import "i18next";
declare module "yup" {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    isValidPassword(message?: string): StringSchema<TType, TContext>;
    onlyNumber(message: string): StringSchema<TType, TContext>;
  }
}
declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
