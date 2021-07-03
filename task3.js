
let string = 'Hello my friend.';
let newString = '' 
len = string.length

while (len) {
  len -= 1
  newString += string[len]
}
  
console.log(newString);

