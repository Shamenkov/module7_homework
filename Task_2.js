const someObject = {
    name: 'Nickita',
    surname: 'Shamenkov',
    age: 25,
    position: 'developer',
    language: 'JS'
  };
  let someStr = 'I like JS'
  function showЗroperty(obj, str){
    console.log('language' in obj)
  }
  showЗroperty(someObject)