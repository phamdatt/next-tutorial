export interface IFormMessageError {
  error?:
    | string
    | {
        key: string; // key in i18n
        values?: { [key: string]: any }; // param in {{}} for key in i18n
      };
}
