class ApplicationError extends Error {
  constructor(code, message, title) {
    super(message);
    this.code = code;
    this.title = title;
  }
}

export default ApplicationError;
