// git add .
// git commit -m "commit message"
// git push origin main
//1
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  //2
  function isAdult(age) {
    if (age >= 18) {
      return 'Adult';
    } else {
      return 'Minor';
    }
  }
  
  console.log('Exercise 2 Result:', isAdult(21));
  
  //3
  function isCharAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
  }
  
  console.log('Exercise 3 Result:', isCharAVowel("a"));
  
  //4
  function generateEmail(name, domain) {
    return `${name}@${domain}`;
  }
  
  console.log('Exercise 4 Result:', generateEmail("shirosara19", "gmail.com"));
  
  //5
  function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
  }
  
  console.log('Exercise 5 Result:', greetUser("Sara", "morning"));
  
  //6
  function maxOfThree(e, f, g) {
    return Math.max(e, f, g);
  }
  
  console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
  
  //7
  function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100;
  }
  
  console.log('Exercise 7 Result:', calculateTip(50, 20));
  
  //8
  function convertTemperature(temp, scale) {
    if (scale === 'C') {
      return (temp * 9/5) + 32; 
    } else if (scale === 'F') {
      return (temp - 32) * 9/5; 
    } else {
      return 'Invalid scale';
    }
  }
  
  console.log('Exercise 8 Result:', convertTemperature(32, "C"));
  
  //9
  function basicCalculator(num1, num2, operation) {
    if (operation === 'add') {
      return num1 + num2;
    } else if (operation === 'subtract') {
      return num1 - num2;
    } else if (operation === 'multiply') {
      return num1 * num2;
    } else if (operation === 'divide') {
      if (num2 === 0) {
        return 'Cannot divide by zero';
      }
      return num1 / num2;
    } else {
      return 'Invalid operation';
    }
  }
  
  console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
  