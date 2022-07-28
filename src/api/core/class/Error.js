class ApplicationError extends Error {
  constructor(message, code, title) {
    super(message);
    this.code = code;
    this.title = title;
  }
}

export default ApplicationError;
