/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/*\r\n\r\nВам потрібно зробити конструктор сутності \"Студент\".\r\n\r\nСтудент має ім'я, прізвище, рік народження — це властивості. \r\nЄ масив з оцінками, це також властивість. \r\nІ є можливість отримати вік студента та його середній бал – це методи.\r\n\r\nЩе у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, \r\nспочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається \r\nвідвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє\r\n місце, в масив записується true, коли викликаємо .absent() - записується false.\r\n Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.\r\nМасив – це властивість, present та absent – ​​методи.\r\n\r\nОстанній метод: .summary(), перевіряє середню оцінку і середнє \r\nвідвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, \r\nа середнє відвідування більше 0.9, то метод summary повертає рядок \"Молодець!\", \r\nякщо одне з цих значень менше , то - \"Добре, але можна краще \", \r\nякщо обидва нижче - \"Редиска!\".\r\n\r\nНе забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри \r\n(конкретних студентів) і показати використання цих методів.\r\n\r\n*/\nvar Student = /*#__PURE__*/function () {\n  function Student(firstName, lastName, birthYear) {\n    _classCallCheck(this, Student);\n    this.firstName = firstName;\n    this.lastName = lastName;\n    this.birthYear = birthYear;\n    this.grades = [];\n    this.attendance = new Array(25).fill(undefined); // Масив відвідуваності, спочатку порожній\n  }\n  _createClass(Student, [{\n    key: \"getAge\",\n    value: function getAge() {\n      var currentYear = new Date().getFullYear();\n      return currentYear - this.birthYear;\n    }\n  }, {\n    key: \"getAverageGrade\",\n    value: function getAverageGrade() {\n      if (this.grades.length === 0) {\n        return 0; // Якщо немає оцінок, середня оцінка - 0\n      }\n\n      var sum = this.grades.reduce(function (total, grade) {\n        return total + grade;\n      }, 0);\n      return sum / this.grades.length;\n    }\n  }, {\n    key: \"present\",\n    value: function present() {\n      this.updateAttendance(true);\n    }\n  }, {\n    key: \"absent\",\n    value: function absent() {\n      this.updateAttendance(false);\n    }\n  }, {\n    key: \"updateAttendance\",\n    value: function updateAttendance(status) {\n      if (this.attendance.filter(Boolean).length < 25) {\n        // Перевіряємо, чи є місце для нового запису про відвідуваність\n        var emptyIndex = this.attendance.indexOf(undefined);\n        this.attendance[emptyIndex] = status;\n      } else {\n        console.log('Масив відвідуваності вже заповнений');\n      }\n    }\n  }, {\n    key: \"summary\",\n    value: function summary() {\n      var averageGrade = this.getAverageGrade();\n      var attendanceRatio = this.attendance.filter(Boolean).length / 25;\n      if (averageGrade > 90 && attendanceRatio > 0.9) {\n        return 'Молодець!';\n      } else if (averageGrade > 90 || attendanceRatio > 0.9) {\n        return 'Добре, але можна краще';\n      } else {\n        return 'Редиска!';\n      }\n    }\n  }]);\n  return Student;\n}(); // Створюємо екземпляри\nvar student1 = new Student('John', 'Doe', 1998);\nvar student2 = new Student('Jane', 'Smith', 1999);\nvar student3 = new Student('Bob', 'Johnson', 2000);\n\n// Додаємо оцінки та відвідуваність для прикладу\nstudent1.grades = [95, 85, 92, 88, 97];\nstudent2.grades = [90, 88, 94, 78, 85];\nstudent3.grades = [92, 99, 99, 99, 91];\nstudent1.present();\nstudent1.present();\nstudent1.absent();\n\n// Перевіряємо результати\nconsole.log('Student 1 summary:', student1.summary());\nconsole.log('Student 2 summary:', student2.summary());\nconsole.log('Student 3 summary:', student3.summary());\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;