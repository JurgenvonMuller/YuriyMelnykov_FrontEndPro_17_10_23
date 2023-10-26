"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*  HOMEWOKR 7

Створити скрипт який має визначити середнє арифметичне 
трьох чисел з насутпними умовами:
отримати від користувача через три prompt три числа
показати через alert середнє арифметичне цих чисел

                Variant 1  - simple;               */

var firstNum1 = +prompt('put your forst number, please', '10');
var secondNum1 = +prompt('Put your second number, please', '20');
var thirdNum1 = +prompt('Put you third number, please', '40');
var quantityNumbers1 = 3;
var arithmeticMean1 = (firstNum1 + secondNum1 + thirdNum1) / quantityNumbers1;
alert("Your arithmeticMean is equal ".concat(arithmeticMean1));

// // Variant 2 advanced; (Это так, для себя для тренировки)

var firstNum2 = +prompt('Enter your forst number, please', '20.9');
if (isNaN(firstNum2)) {
  alert('Please put a NUMBER', 'for exaple 12.5');
}
var secondNum2 = +prompt('Put your second number, please', '20.4');
if (isNaN(secondNum2)) {
  alert('Please put a NUMBER', 'for exaple 12.5');
}
var thirdNum2 = +prompt('Put you third number, please', '45');
if (isNaN(thirdNum2)) {
  alert('Please put a NUMBER', 'for exaple 12.5');
}
var arithmeticMean2 = (firstNum2 + secondNum2 + thirdNum2) / quantityNumbers1;
var decimalQuantity = +prompt('What level of precision do you require for rounding?', '0 - 3');
var arithmeticMean;
if (decimalQuantity === 0) {
  // toFixed возвращает СТРОКУ!!!
  arithmeticMean = +arithmeticMean2.toFixed(0); // не явное преобразование строки в number.
  console.log(_typeof(arithmeticMean), arithmeticMean);
  alert("Your arithmeticMean is equal ".concat(arithmeticMean));
} else if (decimalQuantity === 1) {
  arithmeticMean = +arithmeticMean2.toFixed(1);
  alert("Your arithmeticMean is equal ".concat(arithmeticMean));
} else if (decimalQuantity === 2) {
  arithmeticMean = +arithmeticMean2.toFixed(2);
  alert("Your arithmeticMean is equal ".concat(arithmeticMean));
} else if (decimalQuantity === 3) {
  arithmeticMean = +arithmeticMean2.toFixed(3);
  alert("Your arithmeticMean is equal ".concat(arithmeticMean));
} else {
  alert('Please put correct level of precision', '0 -3');
}

/*  HOMEWORK 8 (two parts!!!)

Частина №1
Створити скрипт яки повинен виконувати наступне:
запитати у користувача рік народження;
запитати в нього, в якому місті він живе;
запитати його улюблений вид спорту.

При натисканні на ОК показуємо вікно, 
де має бути відображена наступна інформація:
його вік;
якщо користувач вкаже Київ, Вашингтон чи Лондон, 
то показати йому повідомлення - "Ти живеш у столиці..." 
і на місце точок підставляємо країну, столицею якої є місто. 
Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

Частина №2
Вибираємо самі три види спорту та три чемпіони у цих видах. 
Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому 
повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок
 ім'я та прізвище чемпіона.
Все це має бути відображено в одному вікні (алерті).
Якщо в якомусь випадку він не захоче вводити інформацію і
 натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” 
 і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .*/

//  Частина №1 i 2

var userYearOld;
var userTown;
var userSport;
var currentYear = 2023;
var userBithText = 'year of your Birthday';
var userResidenceText = 'your town where do you live';
var userFavSportText = 'you favorite sport';
var townIndicate = 'you live in';
var capitIndicate = "".concat(townIndicate, " the capital of");
var userAwesome = 'AWESOME! Do you want to become like ';
var userAgree = confirm('Would you like to answer our questions about your age, place of residence, and favorite sport?', '');
if (userAgree === true) {
  console.log(userAgree);
  var userBirthYear = +prompt("Enter, please, year of your birthday", 'yyyy / 1995');
  userYearOld = currentYear - userBirthYear;
  var userTownAnswer = prompt('Enter the name of the town where do you live', ' Lion');
  if (userTownAnswer === 'London') {
    userTown = capitIndicate + ' England';
  } else if (userTownAnswer === 'Kiev') {
    userTown = capitIndicate + ' Ukraine';
  } else if (userTownAnswer === 'Washington') {
    userTown = capitIndicate + ' USA';
  } else {
    userTown = townIndicate + userTownAnswer;
  }
  var userFavSport = prompt('What is your favorite sport?', 'sprint / tennis / swimming');
  if (userFavSport === 'sprint') {
    userSport = "".concat(userAwesome, " Usain Bolt?");
  } else if (userFavSport === 'tennis') {
    userSport = "".concat(userAwesome, " Serena Williams?");
  } else if (userFavSport === 'swimming') {
    userSport = "".concat(userAwesome, " Michael Phelps?");
  } else {
    userSport = "Your favorite sport is ".concat(userFavSport);
  }
  alert("You have ".concat(userYearOld, " years old,\n  and ").concat(userTown, "\n  ").concat(userSport, " "));
} else if (userAgree === false) {
  alert("I'm sorry that you don't want to tell us about \n  ".concat(userBithText, " \n  ").concat(userResidenceText, " \n  and ").concat(userFavSportText));
}

/*  HOMEWORK 9 
Переписати код нижче з використанням конструкції switch…case*/

/*   ИСХОДНЫЙ КОД:

let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}

        РЕШЕНИЕ ДОМАШНЕГО ЗАДАНИЯ С ИСПОЛЬЗОВАНИЕМ switch     */

var numOrStr = prompt('input number or string');
console.log(numOrStr);
switch (numOrStr) {
  case null:
    console.log('ви скасували');
    brake;
  case '':
    console.log('Empty String');
    brake;
  case NaN:
    console.log(' number is Ba_NaN');
    brake;
  default:
    console.log('OK!');
    brake;
}

// Hometask "Check - list"
//FALSE
/*
console.log(Boolean(0));         // false
console.log(Boolean(+0));        // false
console.log(Boolean(-0));        // false
console.log(Boolean(null));      // false
console.log(Boolean(''));        // false
console.log(Boolean(NaN));       // false
console.log(Boolean(undefined)); // false
          // TRUE

console.log(Boolean('string'));   // true
console.log(Boolean(+Infinity));  // true  
console.log(Boolean(-Infinity));  // true
console.log(Boolean('number'));   // true

//  ACHTUNG!!!

console.log(Boolean('0'));         // true
console.log(Boolean('false'));     // true
console.log(Boolean('NaN'));       // true
console.log(Boolean('null'));      // true
console.log(Boolean('undefined')); // true
*/