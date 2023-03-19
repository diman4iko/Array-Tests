# Теория Множеств

Реализуйте и экспортируйте по умолчанию функцию `countUniqChars()`, которая получает на вход строку и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке. Например, в строке *yy8* используется всего один символ — *y*. А в строке *111yya!* — используется четыре символа: *1*, *y*, *a* и *!*:

```js
import countUniqChars from '../solutions/14-set.js'

const text1 = 'yyab'; // y, a, b
countUniqChars(text1); // 3
 
const text2 = 'You know nothing Jon Snow';
countUniqChars(text2); // 13
 
// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
countUniqChars(text3); // 0
```

## Подсказки

- [includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) – проверяет есть ли такой элемент в массиве