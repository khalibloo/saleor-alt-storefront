export default class Logger {
  static log = (message?: any, ...optionalParams: any[]) => {
    if (process.env.NODE_ENV === "development") {
      // tslint:disable-next-line: no-console
      console.log.call(console, message, ...optionalParams);
    }
  };
  static error = (message?: any, ...optionalParams: any[]) => {
    if (process.env.NODE_ENV === "development") {
      // tslint:disable-next-line: no-console
      console.error.apply(message, ...optionalParams);
    }
  };
  static warn = (message?: any, ...optionalParams: any[]) => {
    if (process.env.NODE_ENV === "development") {
      // tslint:disable-next-line: no-console
      console.warn.apply(message, ...optionalParams);
    }
  };
}
