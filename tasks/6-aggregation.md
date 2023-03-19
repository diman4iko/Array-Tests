# Агрегация

Реализуйте и экспортируйте функцию `calculateSum()`. Она должна высчитывать сумму всех элементов массива, которые делятся без остатка на три:

```js
import { calculateSum } from '../solutions/6-aggregation.js';

const coll1 = [8, 9, 21, 19, 18, 22, 7];
calculateSum(coll1); // 48
 
const coll2 = [2, 0, 17, 3, 9, 15, 4];
calculateSum(coll2); // 27
```

В случае пустого массива функция должна вернуть `0` (для этого в коде можно использовать **guard expression**):

```js
const coll = [];
calculateSum(coll); // 0
```
