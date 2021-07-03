
let randomArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 55, 55, 89, 144, 89];
let i = 0;

while ( i<randomArray.length){
  if (i != randomArray.length-1){
    if (randomArray.includes(randomArray[i], i+1)){
      console.log(`item: ${randomArray[i]} duplicates `)
    }
  }
i++;  
}


