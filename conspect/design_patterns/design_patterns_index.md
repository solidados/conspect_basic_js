# Паттерны проектирования
[Doka link](https://doka.guide/tools/design-patterns-creational/)  
  
• [Порождающие](./Creational_Patterns.md)  
+ [Синглтон](./Creational_Patterns.md#синглтон-или-одиночка)
+ ["Фабрика"](./Creational_Patterns.md#«фабрика») 
+ ["Фабричный метод"](./Creational_Patterns.md#«фабричный-метод»)  
+ ["Абстрактная фабрика"](./Creational_Patterns.md#«абстрактная-фабрика»)  
+ [Прототип](./Creational_Patterns.md#прототип)  
+ ["Строитель"](./Creational_Patterns.md#строитель)  

• [Структурные](#структурные)  
+ "Адаптер"
+ ["Декоратор"](./Structural_Patterns.md#декоратор)
+ "Фасад"
+ "Прокси"

• [Поведенческие](#поведенческие)  

Некоторые проблемы слишком малы для выделения в архитектурный подход, но достаточно часто встречаются, чтобы породить стандартные решения. Такие стандартные решения называются паттернами или шаблонами.  

Например, сервер присылает нам данные в виде:
```javascript
{ 
  some_data: ['Name', 'Lastname'] 
}
```  
А мы хотим их видеть такими:
```javascript
{ 
  some_data: ['Name', 'Lastname'] 
}
```  
```javascript
function serverToClientAdapter(data) {
  return {
    someData: data.some_data.join(' ')
  }
}
console.log(serverToClientAdapter({ some_data: ['Name', 'Lastname'] }))
```  
Таких стандартных решений много. Мы можем разделить их на несколько групп.
