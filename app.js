// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი
// ეს რიცხვი!!

//asnwer:
let num = -5;
if (num < 0) {
  console.log("რიცხვი უარყოფითია");
} else {
  console.log("რიცხვი დადებითია");
}

//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს

//asnwer:

num1 = prompt("choose number");
op = prompt("choose [+, -, /, *]");
num2 = prompt("choose number");

a = Number(num1);
b = Number(num2);


switch (op) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
}

//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

//asnwer:

num1 = prompt("choose number");
op = prompt("choose [+, -, /, *]");
num2 = prompt("choose number");

a = Number(num1);
b = Number(num2);
let total = 0;

if (op === "+") {
  total = a + b;
} else if (op === "-") {
  total = a - b;
} else if (op === "*") {
  total = a * b;
} else if (op === "/") {
  total = a / b;
}

console.log(total);

//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

//asnwer:

let firstName = prompt('name');
let lastName = prompt('lastname');
let email = prompt('email');
let password = prompt('password');
let phoneNumber = prompt('phone number');

if(firstName === "" || lastName === "" || email === "" || password === "" || phoneNumber === "") {
    alert('არცერთი ველი უნდა იყოს შევსებული!');
} else {
    alert("რეგისტრაცია წარმატებით დასრულდა");
}
