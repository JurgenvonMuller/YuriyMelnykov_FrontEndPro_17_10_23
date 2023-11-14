/*

 ====================       ДЗ 18. Рекурсивне зведення в ступінь ========

Реалізувати рекурсивну функцію, яка зводить число в ступінь.

Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функціюpow (num, degree).
*/
let goToExpo = (num, degree) => {
  if (degree === 0) {
    return 1;
  } else {
    return num * goToExpo(num, degree - 1);
  }
};
console.log(goToExpo(2, 3)) // 2 в степени 3  возвратит 8.

/*  ============== NOTES =======================
ИТЕРАЦИИ   1.      2 * (goToexp(2,2));
                    2 * (2 * (goToExp(2, 1)));
                    2 * (2 * (2 * (goToExp (2,0)))); degree === 0 return 1.
                                  --------------------------------------
         RESULT :   2 *  2 *  2 *   1      = 2^3.  
*/   