let randomArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 55, 55, 89, 144, 89, 77, 0, 0, 4, null, "2", 2, "weqrasdf", NaN, NaN, undefined, true, false];
let zeroItem = 0;
let oddItem = 0;
let evenItem = 0;


randomArray.forEach(function(item, index, array) {
  
  if(typeof item === "number" && item === item){
  
    if (item === 0) { zeroItem++}
    else if (item % 2) { oddItem++}
    else {evenItem++}

  }
});

console.log(`Zero items in array are ${zeroItem}, odd items in array are ${oddItem}, even items in array are ${evenItem}`)

