const someObject = {
    name: 'Nickita',
    surname: 'Shamenkov',
    age: 25,
    position: 'developer',
    language: 'JS'
  };
  let someStr = 'language'
  function showProperty(obj, str){
    console.log(someStr in obj)
  }
  showЗroperty(someObject)
