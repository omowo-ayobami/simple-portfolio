//console.log(`hello`);
//console.log("i like pizza");




//window.alert(`this is an alert`);
//window.alert(`i like pizza`);


//document.getElementById("myh1").textContent = "hello";
//document.getElementById("myp").textContent = "i love Pizza";



//this is a comment



//variables = A container that stores a value.
//              Behaves as if it were the value it cont


// 1. declaration let x;
// 2. assignment   x=100;

//let age = 25;
//let price = 10.99;
//let gpa = 3.5;

//STRINGS

//let firstName = "Ayobami";


//console.log(typeof firstName);
//console.log(`Your name is ${firstName}`);
//console.log(`you are ${age} years old `);
//console.log(`the price is ${price} `);
//console.log(`your gpa is ${gpa}`);


//BOOlEANS

//let online = true;
//let forsale = false;

//console.log(typeof online)
//console.log(`ayobami is online: ${online}`)
//console.log(`is this car for sale : ${forsale}`)


//let fulname = 'ayobami';
//let age = 25;
//let student = true;

//document.getElementById("p1").textContent =` My name is ${fulname} `;
//document.getElementById("p2").textContent =`I am ${age}  `;
//document.getElementById("p3").textContent =` i am a student ${student} ` ;


//ARITHMETIC OpERATOR = operands (values, variables, etc.)
 //                           operators (+ . * /)
  //                          export. 11 = x + 5;

  //let student = 30;

     //student = student + 1;
      //student = student - 1;
      // student = student * 500000000;
      //student = student / 2;
      //student = student ** 2;
     //let extrastudent = student % 3;

     //student += 1;
     //student -= 1;
     //student *= 2;
     //student /= 2;
      //student **= 2;
      //student %= 2;

//student++;
//student--;

  //console.log(student);





  //operator precendence
  //1.  parenthesis
  //2.  exponents
  //3.  muliplication
  //4.  addition and subtraction


  //let result = 6 /128;

  //console.log(result)







  //HOW TO ACCEPT USER INPUT

  //1. EASY WAY = window prompt
  //2.  PROFESSIONAL WAY = HTML textbox


/*let username;

  username = window.prompt("what's Your username");

  console.log(username);*/

  /*let username;

document.getElementById("mysubmit").onclick = function(){
  username = document.getElementById("mytext").value;
  console.log(username);
}*/

/*let username;

document.getElementById("mysubmit").onclick = function(){
  username = document.getElementById("mytext").value;
  document.getElementById("myh1").textContent = ` hell0 ${username}`
  console.log(username);

}*/

//type conversion = change the datatype of a value to another (strings, number, boolean)


// cons = a variable that can't be changed

/*const   PI = 3.14159;
let radius;
let circumference;


 





document.getElementById("mysubmit").onclick = function(){
radius = document.getElementById("mytext").value
radius =Number(radius);
circumference = 2 * PI * radius;
document.getElementById("myh3").textContent = circumference + "cm";
}*/

// cons = a variable that can't be changed
/*const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");

let count = 0;

increasebtn.onclick = function(){
  count++;
  countlabel.textContent = count;
}

decreasebtn.onclick = function(){
  count--;
  countlabel.textContent = count;
}

resetbtn.onclick = function(){
  count = 0;
  countlabel.textContent = count;
}*/



//math = built in object thatp rovides a collection of properties and methods

//console.log(Math.PI);

//let x = 3.99;
//let y = 2;
//slet z;

//z = Math.round(x);
/*z = Math.floor(x);
z = Math.trunc(x);
z = Math.sqrt(x);
z = Math.round(x);
z = Math.log(x);
z = Math.cos(x);
let max = Math.max(x, y, z)
let max = Math.min(x, y, z)

console.log(z);
console.log(max);
console.log(min);
*/



//RANDOM NUMBER GENERATORSS

//let randomNum = Math.floor(Math.random() * 6) + 1;

//console.log(randomNum);


/*const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const max = 6;
const min = 1;
let randomNum1;
let randomNum2;
let randomNum3;

myButton .onclick = function(){
  randomNum1 = Math.floor(Math.random() * max) + min;
   randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
}*/




//IF  STATEMENTs = if a condition is true, execute some code 
 //                 if Not, do something else
/*const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");
 let age;

mysubmit.onclick = function(){

  age = mytext.value;
  age = Number(age);

if(age >= 100){
  resultElement.textContent = `you are too old to enter this site`;
 }

 else if(age == 0){
    resultElement.textContent = `your can't enter you are just born.`;
 }

  if (mytext.value.trim() === "" || isNaN(age)) {
  resultElement.textContent = "Please Insert your age.";
}

 else if(age >= 18){
   resultElement.textContent = `you are old enough to enter this site`;
 }

 else if(age < 0){
  resultElement.textContent = `you age can't be below 0`;
 }

 else {
  resultElement.textContent = `you must be 18+ to enter this site`;
 }
}*/





/*const mycheckbox = document.getElementById("mycheckbox");
const  visabtn = document.getElementById("visabtn")
const  mastercardbtn = document.getElementById("mastercardbtn")
const  paypalbtn = document.getElementById("paypalbtn")
const  mysubmit = document.getElementById("mysubmit")
const  subresult = document.getElementById("subresult")
const  paymentresult = document.getElementById("paymentresult")

mysubmit.onclick = function(){

  if(mycheckbox.checked){
    subresult.textContent = `You are subscribed`;
  }
   else{
    subresult.textContent = `You are not subscribed`;
  }

   if(visabtn.checked){
    paymentresult.textContent = `You are paying with visa`;
  }
  else if(mastercardbtn.checked){
    paymentresult.textContent = `You are paying with mastercard`;
  }
  else if(paypalbtn.checked){
    paymentresult.textContent = `You are paying with paypal`;
  }

  else{
    paymentresult.textContent = `You must select a payment type`
  }
}*/


//ternary operator = a shortcut to if{} and else{} Statement
                //  helps to assign a variable based on a Condition
                  //condition ? codeiftrue : codeiffalse;


    //let age = 12;
    //let message = age >= 18 ? "you're an adult" : "yor're a minor";
    //console.log(message);

    /*let time = 16
    let greeting = time < 12 ? "goddmorning" : "good afternoon"
    console.log(greeting);*/
 



    //SWITH = can be use to replace else if statement
    

    /*let day = 'pizza';

    switch(day){
      case 1:
      console.log("it is monday");
      break;
       case 2:
       console.log("it is tuesday");
       break;
       default:
        console.log(`${day} is not a day`);
    }*/


        /*let testscore = 90;
        let lettergrade;

        switch(true){
          case testscore >= 90:
          lettergrade = "A";
          break;
          case testscore >= 80:
          lettergrade = "B";
          break;
        }

        console.log(lettergrade);*/






        //STRING METHOD allows you to manipulate and work with text (strings)

        //let userName = "Ayobami";

        //console.log(userName.charAt(0));



       // String slicing = is creating a substring from a portion of another String

                          //String.slice(StaticRange, end)


        /*const fullName = "Ayo bami";

        let firstName = fullName.slice(0, 3);
        let lastName = fullName.slice(4, 8);


         
        console.log(firstName);
        console.log(lastName);*/


        //Method chaining = calling one method after another in one continuous
                            //line of code.

        // .......NO METHOD CHAINING.........
//too longer 



        // ...... METHOD CHAINING.........





//logical operator = used to combine or manipulate boolean values
  //(true or false)
      //              AND = &&
       //             OR = ||
        //            NOT = ! change true to be false and false to be true

       /* const temp = 250;

        if(temp <= 0 || temp > 30){
          console.log("The weather is BAD");
        }
        else{
          console.log("The weather is GOOD");
        }*/






// = assignment operator
// == camparison operator (compare if values are equal)
// === strict equality operator (compare  if values & datatype are equal)
// != inequality operator
// !== strict inequality operator


// while loop = repeat some code WHIlE some CONDITION is true
//meaning it will not go away until a user press the information

/*let username = "";

while(username === "" || username === null){
  
username = window.prompt(`You didn't enter your user name`);
}

console.log(`Hello ${username}`);*/


/*let loggedin = false;
let username;
let password;

while(!loggedin){
  username = window.prompt(`Enter your UserName`);
  password = window.prompt(`Enter your Password`);

  if(username === "myusername" && password === "mypassword"){
    loggedin = true;
    alert("You are logged in!");
    }

else{
  alert("incorrect credentials");
}
}*/




//NUMBER GUESSING GAMES 

/*const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minimum} - ${maximum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  }
  else if (guess < minimum || guess > maximum) {
    window.alert("Please enter a valid number");
  }
  else {
    attempts++;
    if (guess < answer) {
      window.alert("Too low, try again");S
    }
    else if (guess > answer) {
      window.alert("Too high, try again");
    }
    else {
      window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
      running = false;
    }
  }  
}*/




// FUNCTION is a section of reusable code


/*function happybirthday(username, age){
  console.log(`happy birthday to you Dear ${username}`);
  console.log(`you are ${age} years old`);
}

happybirthday("me", "25");*/





//variable scope = where a variable is recognised and accessible 
//                  (local vs global)

/*function1();

function function1 (){
  let x = 1;
  console.log(x);
}

function function2 (){
  let x = 2;
  console.log(x);
}*/

/*let x = 3;

function1();

function function1(){
  let x = 1
  console.log(x);
}

function function2(){
  let x = 2
  console.log(x);
}*/




//TEMPERATURE CONVERTER

/*const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp


function convert(){
    if(tofahrenheit.checked){
     temp = Number(textbox.value);
     temp = temp * 9 / 5 + 32;
     result.textContent = temp.toFixed(1) + "F"
    }
    else if(tocelsius.checked){
     temp = Number(textbox.value);
     temp = (temp - 32) * (5/9);
     result.textContent = temp.toFixed(1) + "C"
    }
    else{
      result.textContent = "Select a unit"
    }
}
    */







//ARRAY = a variable like structure that can hold more than 1 value

/*let fruits = ["apple", "orange" , "banana" , "coconut"];

fruits.sort().reverse();

for(let fruit of fruits){
  console.log(fruit);
}*/








//spread operator = ... allows an iterable such as an Array
 //                 or string to be expanded into seperate 
  //                elements (unpacks the element)

  /*let numbers = [1, 2, 3, 4, 5];
  let maximum = Math.max(...numbers);
   let minimum = Math.min(...numbers);
  console.log(minimum);*/

  /*let username = "ayobami"
  let letter = [...username].join("-");

  console.log(letter)*/







/*rest parameters =(...rest) allow a function work a variable
                  numbers of argument by bundling them together
                  then into an Array 

                  spread = expand an array into seperate Elements
                  rest = bundles seperate element into an array*/






// DICE ROlLER PROGRAM

/*function rolldice(){
  const numofdice = document.getElementById("numofdice").value;
  const diceresult = document.getElementById("diceresult");
  const diceimage = document.getElementById("diceimage");
  const values = [];
  const images = [];
  
for(let i = 0; i <numofdice; i++){
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="dice-images/${value}.png" alt="dice ${value}">`);
    }

  diceresult.textContent = `dice: ${values.join(', ')}`;
  diceimage.innerHTML = images.join('');
}*/





//RANDOM PASSWORD GENERATOR

/* function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "-=+!@$%^#*:";

let allowedChars = "";
let password = "";


allowedChars += includeLowercase ? lowercaseChars : "";
allowedChars += includeUppercase ? uppercaseChars : "";
allowedChars += includeNumbers ? numberChars : "";
allowedChars += includeSymbols ? symbolChars : "";


if(length <= 0){
  return `(password lenght must be atleast 1)`;
}
if(allowedChars.length === 0){
  return `(At least 1 set of character need to be selected)`;
}

for(let i = 0; i < length; i++){
  const randomindex = Math.floor(Math.random() * allowedChars.length);
  password += allowedChars(randomindex);
}


  return '';
}


const passwordlength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
                 
const password =  generatePassword(passwordlength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols);  
                                  
console.log (`generated password: ${password}` );
*/





// callback = is a function that is passed as an argument to another function

              //used to handle asynchronuos operation;
              // 1 reading a file
              //2 network request
              //3 interacting with database

//  "hey, when you're done, call this next. "


/*sum(displaypage, 1, 2)


function sum(callback, x, y){
  let result = x + y;
  callback(result);
}

function displayConsole(result){
  console.log(result);
}

function displaypage(result){
  document.getElementById("myh1").textContent = result;
}*/



//.reduce() = reduce the element of an array to a single value


/*const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
  return accumulator + element;
}*/


// function declaration = define a reusable block of code that performance
// a specific Task

// function expressions = a way to define function as value or variables 


/*setTimeout(function(){
  console.log("hello");
}, 7000);*/


//arrow function = a concise way to write function expression good
//for simple function that you use only once 
//(parameters) => some code

//const hello = (name) => {console.log(`hello ${name}`);
 //                       console.log(`you are old`)                              }
//hello("Ayo");



