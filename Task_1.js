const someObject = {
    name: 'Nickita',
    surname: 'Shamenkov',
    age: 25,
    position: 'developer',
  };
  function showKeys(obj){
    for(let key in someObject){
      if(someObject.hasOwnProperty(key)){
        console.log(key)
      }
    }
  };
  showKeys(someObject);