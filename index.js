function isPalindrome(word) {
  // Write your algorithm here
  let spliting = word.split("");
  let reversWord = spliting.reverse();
  let joined = reversWord.join("");
  if (word === joined) {
    return true;
  } else {
    return false;
  }

}

// isPalindrome("mom");

/* 
  Add your pseudocode here
  if the word === to word
  spliting letters
  revers them
  joined them
  compere word with joined

*/

/*
  Add written explanation of your solution here
  assign the word letters in array using split method to splite the letters,
  and using revers mothod to revers letters, and using join method to rejoin 
  what has been reversed and compers word with the end joined array or word 
  using if condition.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
