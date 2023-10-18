//1
function greet(name) {
  console.log(`Welcome ${name}`);
}
greet("Jo");

//2
function add(e, f) {
  return e + f;
}
console.log(add(54, 20));

//3
function subtract(g, h) {
  return g - h;
}
console.log(subtract(20, 40));

//4
function multiply(i, j) {
  return i * j;
}
console.log(multiply(-20000, -30000));

//5
function divide(k, l) {
  return l / k;
}
console.log(divide(3, 30));

//6
function isEven(m) {
  return Math.floor(m / 2) * 2 === m;
}
console.log(isEven(200));

//7
function isOdd(n) {
  return Math.floor(n / 2) * 2 !== n;
}
console.log(isOdd(500));

//8
// program to check if a number is prime or not

// take input from the user
const primenumber = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if prime number is equal to 1
if (primenumber === 1) {
  console.log("1 is neither prime nor composite number.");
}

// check if prime number is greater than 1
else if (primenumber > 1) {
  // looping through 2 to number-1
  for (let i = 2; i < primenumber; i++) {
    if (primenumber % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${primenumber} is a prime number`);
  } else {
    console.log(`${primenumber} is a not prime number`);
  }
}
// check if prime number is less than 1
else {
  console.log("The number is not a prime number.");
}

//Part 2

//1
const integer = parseInt(prompt("Enter a number: "));
if (integer > 0) {
  console.log("Number is a postive number");
} else if (integer < 0) {
  console.log("Number is a negative number");
}

// 2 is the same as part 1, so skipped

//3
function GreaterOrLess(s, t) {
  if (s > t) {
    console.log(`${s} is greater`);
  } else if (s < t) {
    console.log(`${t} is greater`);
  }
}
console.log(GreaterOrLess(30, 40));

//4(come back to this later)
let userGrade = parseInt(prompt("Enter your grade: "));
let num = String.fromCharCode(97 + userGrade);
console.log(userGrade);

//5
let TicketAge = prompt("How old are you? ");
console.log(TicketAge);
if (TicketAge < 12) {
  alert("Ticket price is 5");
} else if (TicketAge >= 12 && TicketAge <= 18) {
  alert("Ticket price is 10");
} else if (TicketAge < 60) {
  alert("Ticket price is 20");
} else if (TicketAge > 60) {
  alert("Ticket price is 15");
} else {
  alert("Try again");
}

function LeapYear(year) {
  if (year % 400 === 0 && year % 100 === 0 && year % 4 === 0) {
    alert(`${year} is a Leap year`)
  } else {
    console.log(`${year} is not a leap year `)
  }
}
LeapYear(2020)

function TimeOfDay(greet)