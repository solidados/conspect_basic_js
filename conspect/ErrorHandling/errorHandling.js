// window.onerror = function (msg, url, lineNo, columnNo, error) {
//   console.log(msg, url, lineNo, columnNo, error);
//   return true;
// }

// AuthorisationFailed
// PD3212
// 234
// NOT_FOUND

class CustomError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

class GoogleApiError extends CustomError {
  constructor(message, statusCode, code) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
  }
}

class NotFoundError extends GoogleApiError {
  constructor(message, statusCode, code) {
    super(message, statusCode, code);
  }
}

class DatabaseError extends CustomError {
  constructor(message, code) {
    super();
    this.message = message;
    this.code = code;
  }
}

const googelApi = async () => { throw { statusCode: 404, code: 'NOT_FOUND' } }

const callGoogleApi = async () => {
  try {
    const result = await googelApi();
    return result;
  } catch (error) {
    throw new GoogleApiError(error.message, error.statusCode, error.code)
  }
}

const database = async () => { throw { message: 'Server is shutdown', code: 'SERVER_SHUTDOWN' } }

const callDatabase = async () => {
  try {
    const result = await database();
    return result;
  } catch (error) {
    throw new DatabaseError(error.message, error.code)
  }
}

const main = async () => {
  try {
    // await callGoogleApi();
    await callDatabase();
    // func2();
  } catch (error) {
    if (error instanceof GoogleApiError) {
      return console.log(error.statusCode, 'There was some problem with google api: ', error.code);
    };
    if (error instanceof DatabaseError) {
      return console.log('Database Error: ', error.code);
    };
    
    console.log(500, 'Something went wrong', error.toString());
  }
}
main();