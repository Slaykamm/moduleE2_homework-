
function getRandomIntFromRange(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min)) + min; 
  }
  
  randomNumber = getRandomIntFromRange(0, 100)
  
  console.log(randomNumber)
  
  


  