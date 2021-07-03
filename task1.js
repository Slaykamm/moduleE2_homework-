let checkSymb = prompt();
let test = +checkSymb

if (typeof test === "number" && test === test){
  if (test % 2) {console.log('Thats odd number')}
  else {console.log('Thats even number')}
}
if (test !== test){console.log('Thats not a number')}

