# Error handling
## How to throw and Error?
There several ways:  
• `Promise.reject()` – **falling in any async code**  
• `throw`  
• `Syntax` / `TypeErrors`, and so on  

• Async way use of `Promise.reject()`  
```javascript
new Promise((res, rej) => {
  rej('Error')
}).then(); // Uncought Error: Error
```  
or another async way if you do know beforehand about the reject on Promise:
```javascript
Promise.reject('This is an Error'); // Promise Error
```  
in this case the code will continue  

Sync way to throw an Error:  
```javascript
throw new Error('error has occured') // Uncought Error: error has occured
```  
in this case the code may stop working  

• Syntax / Type errors
```javascript
let isTrue = true;
isTrue[0][0] // Uncought TypeError: Cannot reade property of '0' of undefined
```  
or:  
```javascript
let a = 1;
let a = 2; // Uncought SyntaxError: Identifier 'a' has already been declared
```  

## How to catch an Error?
There are several ways:  
• `try..catch..finally` (**for any JS-code**)  
```javascript
const main = async () => {
  try {
    await new Promise((res, rej) => {
      rej('Error!')
    })
  } catch (error) {
    console.log('Error', error.toString());
  } finally {
    console.log('Cleaning cache...');
  }
}
// Error Error: Error has occured
// Cleaning cache...

main();
```  
 – `catch` works when there is an Error occured  
 – `finally` works always in either way it is `try` or `catch`  


• `Promise.prototype.catch` / `Promise.prototype.then` – **for aync code**  
```javascript
const main = async () => {
    await new Promise((res, rej) => {
      rej('Error!')
    }).then(null, (error) => console.log(`Hello: ${error.toString()}`))
}
main(); // Hello: Error!
```  
**or:**  
```javascript
const main = async () => {
    await new Promise((res, rej) => {
      rej('Error!')
    })
      .then(null)
      .then(null)
      .then(null)
      .catch((error) => console.log(`Hello: ${error.toString()}`))
}
main(); // Hello: Error!
```  
You can add `catch()` once at the end of all Promises, or use it after eveery specific ones, if you require to catch the error in some certain Promise.  
Promises also has `.finally()` used after all.

• `element.onError` / `addEventListener('error', callback)` – **for async code on callbacks**  
```javascript

```  
• `window.onError`  
```javascript
window.onerror = function (msg, url, lineNo, columnNo, error) {
  console.log(msg, url, lineNo, columnNo, error);
  return true;
}
```  

```javascript
const img = new Image();
img.onerror = () => console.log('Image Error...');
img.src = 'https://kangax.github.io/compat-table/logo.png';
img.style.width = '200px'
document.body.appendChild(img);
```  

## How to create custom Errors?
[read about Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)  
For example, while fetch we receive dofferent error codes (4xx, 5xx, etc), and would like to customize the Error messages
```javascript
class CustomError extends Error{
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}
const main = async () => {
  try {
    throw new CustomError('This is a customized Error', 400)
  } catch (error) {
    console.log('Failed with an error: ' + error.message + ' and status code: ', error.statusCode);
  }
}
main();
```  
## How to handle all error and manage error handling in an application?  
### Error Boundry + Custom Errors
There is a pattern called **Error Boundry**.  
```javascript
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
```  