### Functions
Functions are a key concept and one of the fundamental blocks in Javascript.  
It is similar to precedure – meaning a set of statements that perfoms a task or calculate a value.  

Functions accept arguments, work with them and return something.  
To use a function it must be declared somewhere in the scope and then called out there.  

#### Function declaration
Function definition (or declaration, or statement) consist of:  
- `function`  
- its name (or unnamed while function )  
- a list if parameters (which is unilimited actually, but practically it is better to devide big functions into smaller ones)  
- then use of curly brackets where the code is parenthesised (here comes definition of Scope and Closures)  

## Scopes
Области видимости в JavaScript определяют доступность и видимость переменных в разных частях кода. В JavaScript есть три основные области видимости: глобальная, функциональная и блочная.

### Глобальная область видимости:
Глобальная область видимости охватывает весь JavaScript-код за пределами функций. Переменные, объявленные в глобальной области видимости, могут быть доступны из любого места в коде.  
Например:
```javascript
// Глобальная область видимости
const globalVariable = "Глобальная переменная";

function globalFunction() {
  console.log(globalVariable); // Можно обратиться к глобальной переменной внутри функции
}

console.log(globalVariable); // Выведет "Глобальная переменная"
globalFunction(); // Вызов функции
```  

### Функциональная область видимости:
Функциональная область видимости охватывает переменные, объявленные внутри функции, включая параметры функции. Переменные, объявленные внутри функции, не являются доступными за пределами функции.  
Например:
```javascript
function outerFunction() {
  const outerVariable = "Внешняя переменная";

  function innerFunction() {
    const innerVariable = "Внутренняя переменная";
    console.log(outerVariable); // Можно обратиться к переменной внешней функции
  }

  console.log(outerVariable); // Выведет "Внешняя переменная"
  console.log(innerVariable); // Ошибка: innerVariable не доступна внешней функции
  innerFunction(); // Вызов внутренней функции
}

outerFunction();
```  

### Блочная область видимости (с ES6):
Блочная область видимости появилась в JavaScript с введением стандарта *ECMAScript 6* (ES6).  
Область видимости ограничивается блоком кода, обычно определяемым фигурными скобками `{}`. Переменные, объявленные в блочной области видимости с использованием ключевых слов `let` и `const`, видимы только внутри этого блока и подблоков.  
Например:
```javascript{
  const blockVariable = "Переменная блока";
  console.log(blockVariable); // Выведет "Переменная блока"
}

console.log(blockVariable); // Ошибка: blockVariable не доступна во внешней области
```  

Область видимости блока также применяется к циклам `for` и условным операторам `if`.

Области видимости позволяют организовывать переменные таким образом, чтобы они были доступны только в нужном контексте и не конфликтовали с другими частями кода.  
Правильное использование областей видимости помогает избегать конфликтов имён переменных и способствует чистому и структурированному коду.