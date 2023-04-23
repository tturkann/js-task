// task1
// document.getElementById("button").addEventListener("click", function () { 
//     event.preventDefault(); 
//     let lastName = document.getElementById("lastname").value; 
//     let firstName = document.getElementById("firstname").value; 
//     let email = document.getElementById("email").value; 
   
   
//     const customerString = `${email} - ${lastName} ${firstName}`; 
//     return console.log(customerString); 
//   });

// task2 
// document.getElementById("button").addEventListener("click", function () { 
//     event.preventDefault(); 
//     let kilometres = document.getElementById("kilometres").value; 
   
//   const end =   5 + kilometres * 0.25   
//   return console.log(end) 
  
// })
// task3
// function product() {
//     const productName = ("Enter product name");
//     const unitePrice = ("Enter unite price");
//     const quantity = ("Enter quantity");
//     const participates =("Participates in the promotion or not ");
//     const discount = unitePrice * 0.1
//     if (quantity >= 5) {
//       return (discount);
//     }
//     const discount2 = unitePrice * 0.15;   
// const bothDiscount = unitePrice * 0.25
//     if (participates == "yes") {
//        return (discount2);

//     } else if (participates == "no") {
//        return console.log(unitePrice)
//     }else{
//         return (bothDiscount)
//     }
// }
// product();

// task4
 
// function tables(guestsNumber) {
//   let tableSize;
//     if (guestsNumber <= 2) {
//       return "small table.";
//     } else if (guestsNumber <= 4) {
//       return "medium table.";
//     } else if (guestsNumber <= 8) {
//       return " large table.";
//     } else {
//       return " We don't have a table ";
//     }
//     return ${tableSize};
//   }

// task5 
// function numbers() {
//     const number1 = prompt("Enter first number: ");
//     const number2 = prompt("Enter second number: ");
//     const number3 = prompt("Enter third number: ");
    
//     if(number1 >= number2 && number1 >= number3) {
//         if (number2> number3) {
//             console.log(number1 + "," + number2 + "," + number3 )
//         }else{
//            console.log(number1 + ","  + number3 + "," + number2)
//         }
//     }
//     else if (number2 >= number1 && number2 >= number3) {
//         if (number1>number3) {
//             console.log(number2+ ","  + number1 + "," + number3)
//         }else{
//             console.log(number2+ ","  + number3 + "," + number1)
//         }
//     }
//     else {
//         console.log(number3 + "," + number2 + "," + number1)
//     }
//     }
//     numbers();


// task 6
// function check(customer) {
//     const { name, age, numOrders, orderAmounts } = customer;
//     const total = orderAmounts.reduce((acc, cur) => acc + cur, 0);
  
//     if (age >= 60 || (numOrders >= 4 && total >= 100)) {
//       return `${name}true`;
//     } else {
//       return `${name}  false `;
//     }
//   }
//   const customer = {
//     name: "Turkan",
//     age: 65,
//     numOrders: 5,
//     orderAmounts: [30, 20, 40, 10, 25]
//   };
  
//   console.log(check(customer));


//task7 
// function services() { 
//      const length =parseInt(prompt(" Please enter length")); 
//      const width = parseInt(prompt("Plase enter width")) ; 
//      const height = parseInt(prompt("Please enter height ")); 
//    const weight = prompt("Please enter weight"); 
//       const distDelivery = prompt("Please enter delivery distance"); 
//      const sum = length + width +height; 
 
// if (sum < 150 && length < 100 && width < 100 && height < 100 && weight < 10 
//           && distDelivery < 10 && distDelivery > 3 
//       ) { 
//        console.log("Accepted"); 
//       } else { 
//         console.log("Couldn't accept") 
//     } 
// } 
//  services(); 
 
//task8 
// function textNum() { 
//     const input = prompt("Please enter the number"); 
//     const numSpecial = { 
//       1: "one", 
//       2: "two", 
//       3: "three", 
//       4: "four", 
//       5: "five", 
//       6: "six", 
//       7: "seven", 
//       8: "eight", 
//       9: "nine", 
//       10: "ten", 
//       11: "eleven", 
//       12: "twelve", 
//       13: "thirteen", 
//       14: "fourteen", 
//       15: "fifteen", 
//       16: "sixteen", 
//       17: "seventeen", 
//       18: "eighteen", 
//       19: "nineteen", 
//       20: "twenty", 
//       30: "thirty", 
//       40: "forty", 
//       50: "fifty", 
//       60: "sixty", 
//       70: "seventy", 
//       80: "eighty", 
//       90: "ninety", 
//     }; 
//     if (input < 10) { 
//       console.log(onesPlace[input]); 
//     } 
//     if (input >= 10 && input < 20) { 
//       console.log(numSpecial[input]); 
//     } 
//   const onesDigit = input % 10; 
//       if (onesDigit === 0) { 
//         console.log( numSpecial[input[0]+"0"]); 
         
//       } else { 
//           console.log(`${numSpecial[input[0]+"0"]} ${numSpecial[input[1]]}`) 
//       } 
//   } 
//   textNum();


// task 9
// const input = prompt("enter") 
// let A = "100" 
// for (i = 1 ; i < 1000; i++){ 
// if(i % input == 0 ) { 
// console.log(i)} 
// }


// task10
// function depositAmountt() { 
//     const initialAmount =parseInt (prompt("Please enter the initial amount: ")); 
//     const years = parseInt(prompt(" Please enter the duration in years: ")); 
//     const rate = parseInt(prompt(" Please enter the annual interest rate in %: ")); 
   
//     let depositAmount = initialAmount; 
//     for (let i = 0; i < years; i++) { 
//       const interestAmount = depositAmount * rate / 100; 
//       depositAmount += interestAmount; 
//     } 
   
//     console.log( depositAmount); 
//   } 
//   depositAmountt()
// task 11
// function getLoyalPoints(orderNumber) {

//   let loyalPoints = 0;

//   let previousPoints = 0;

//   let currentPoints = 1;




//   for (let i = 1; i <= orderNumber; i++) {

//     if (i <= 2) {

//       loyalPoints = 1;

//     } else {

//       loyalPoints = previousPoints + currentPoints;

//       previousPoints = currentPoints;

//       currentPoints = loyalPoints;

//     }

//   }



//   return loyalPoints;

// }
// task 12
// function sumDigits(code) {
//     let sum = 0;
//     while (code > 0) {
//       sum += code % 10;
//       code = Math.floor(code / 10);
//     }
//     return sum;
//   }
//   let code = 12345;
// let digitSum = sumDigits(code);
// console.log(digitSum); 
