
let myFirstMap = new Map();
myFirstMap.set(1, "first value");
myFirstMap.set('second', 2);
myFirstMap.set('third', true);
myFirstMap.set(false, 'fourth');
myFirstMap.set(5, 5);


for (let key of myFirstMap.keys()){
   console.log(`For key ${key} value is ${myFirstMap.get(key)}`
)}


