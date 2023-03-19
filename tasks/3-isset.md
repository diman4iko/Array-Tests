# Проверка существования значения

Реализуйте и экспортируйте по функцию `get()`, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:

- Массив
- Индекс
- Значение по умолчанию (равно `null`)

```js
import { get } from '../solutions/3-isset.js';

const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];
 
get(cities, 1); // 'london'
get(cities, 4); // null
get(cities, 10, 'paris'); // 'paris'
get(cities, -1, 'oops'); // 'oops'
get(cities, 5, 'oops'); // Null
get(cities, 6, 'oops'); // undefined
```

## Подсказки

Для параметров функции можно указывать значения по умолчанию прямо при объявлении: `(param = 'default value')`.