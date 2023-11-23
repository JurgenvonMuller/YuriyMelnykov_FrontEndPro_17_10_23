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

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/*\r\nМережа фастфудів пропонує кілька видів гамбургерів:\r\n\r\nмаленький (50 тугриків, 20 калорій);\r\nвеликий (100 тугриків, 40 калорій).\r\nГамбургер може бути з одним із декількох видів начинок:\r\n\r\nсиром (+ 10 тугриків, + 20 калорій);\r\nсалатом (+ 20 тугриків, + 5 калорій);\r\nкартоплею (+ 15 тугриків, + 10 калорій).\r\nМожна додати добавки:\r\n\r\nпосипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).\r\nНапишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.\r\n\r\n(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)\r\n\r\nПриклад роботи коду:\r\n\r\n// маленький гамбургер з начинкою з сиру\r\nvar hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);\r\n\r\n// добавка з майонезу\r\nhamburger.addTopping(Hamburger.TOPPING_MAYO);\r\n\r\n// запитаємо скільки там калорій\r\nconsole.log(“Calories: “ + hamburger.calculate ());\r\n\r\n// скільки коштує\r\nconsole.log(\"Price: “ + hamburger.calculatePrice());\r\n\r\n// я тут передумав і вирішив додати ще приправу\r\nhamburger.addTopping(Hamburger .TOPPING_SAUCE);\r\n\r\n// А скільки тепер коштує?\r\nconsole.log(\"Price with sauce: “ + hamburger.calculatePrice());\r\n\r\n\r\n*/\n// Клас Гамбургер\nvar Hamburger = /*#__PURE__*/function () {\n  function Hamburger(size, stuffing) {\n    _classCallCheck(this, Hamburger);\n    this.size = size;\n    this.stuffing = stuffing;\n    this.toppings = [];\n  }\n  _createClass(Hamburger, [{\n    key: \"addTopping\",\n    value: function addTopping(topping) {\n      this.toppings.push(topping);\n    }\n  }, {\n    key: \"calculatePrice\",\n    value: function calculatePrice() {\n      var basePrice = this.size.price + this.stuffing.price;\n      var toppingsPrice = this.toppings.reduce(function (total, topping) {\n        return total + topping.price;\n      }, 0);\n      return basePrice + toppingsPrice;\n    }\n  }, {\n    key: \"calculateCalories\",\n    value: function calculateCalories() {\n      var baseCalories = this.size.calories + this.stuffing.calories;\n      var toppingsCalories = this.toppings.reduce(function (total, topping) {\n        return total + topping.calories;\n      }, 0);\n      return baseCalories + toppingsCalories;\n    }\n  }]);\n  return Hamburger;\n}(); // Приклад використання\n_defineProperty(Hamburger, \"SIZE_SMALL\", {\n  price: 50,\n  calories: 20\n});\n_defineProperty(Hamburger, \"SIZE_LARGE\", {\n  price: 100,\n  calories: 40\n});\n_defineProperty(Hamburger, \"STUFFING_CHEESE\", {\n  price: 10,\n  calories: 20\n});\n_defineProperty(Hamburger, \"STUFFING_SALAD\", {\n  price: 20,\n  calories: 5\n});\n_defineProperty(Hamburger, \"STUFFING_POTATO\", {\n  price: 15,\n  calories: 10\n});\n_defineProperty(Hamburger, \"TOPPING_SPICE\", {\n  price: 15,\n  calories: 0\n});\n_defineProperty(Hamburger, \"TOPPING_MAYO\", {\n  price: 20,\n  calories: 5\n});\nvar hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);\nhamburger.addTopping(Hamburger.TOPPING_MAYO);\nconsole.log(\"Calories: \" + hamburger.calculateCalories());\nconsole.log(\"Price: \" + hamburger.calculatePrice());\nhamburger.addTopping(Hamburger.TOPPING_SPICE);\nconsole.log(\"Price with spice: \" + hamburger.calculatePrice());\n\n//# sourceURL=webpack:///./src/js/script.js?");

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