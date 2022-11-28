function ElectroApp(color, watt, name){
  this.corpus = 'plastic',
  this.manufacturer = 'Russia',
  this.colouring = color,
  this.watts = watt,
  this.names = name
};

ElectroApp.prototype.onSocket = function(name){
  console.log(`The ${name} is hook up in the socket`)
};

ElectroApp.prototype.offSocket = function(name){
  console.log(`The ${name} is unplug of the socket`)
};
const hairDryer = new ElectroApp('red', 450, 'hair dryer');

  hairDryer.lowWatt = function(name, watt){
    console.log(`The ${name} has low electricity consumption ${watt} W`)
  };

const electricKettle = new ElectroApp('black', 1000, 'electric kettle');
electricKettle.ownColor = 'Tefal'

  electricKettle.heightWatt = function(name, watt){
    console.log(`The ${name} has height electricity consumption ${watt} W`)
  };

console.log(hairDryer)
hairDryer.lowWatt('hair dryer', 450)
console.log(electricKettle)
electricKettle.heightWatt('electric kettle', 1000)