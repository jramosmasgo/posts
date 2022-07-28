class Response {
  constructor(res) {
    this.res = res;
  }

  createResponse(
    { message, code, error, data } = { message: "", error: null, data: null }
  ) {
    return this.res.status(code).json({
      message,
      error,
      data,
    });
  }
}

export default Response;
