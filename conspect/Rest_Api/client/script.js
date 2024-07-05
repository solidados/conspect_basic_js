fetch('http://localhost:3000/employees/')
  .then(response => response.json())
  .then(json => console.log(json))