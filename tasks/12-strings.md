# Обработка строк через преобразование в массив

Реализуйте и экспортируйте по умолчанию функцию `makeCensored()`, которая заменяет каждое вхождение указанных слов в предложении на последовательность `$#%!` и возвращает полученную строку. Аргументы:

- Текст
- Набор стоп-слов

Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).

## Примеры

```js
import makeCensored from '../solutions/12-strings.js';
 
const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%!
 
const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
// '$#%! chicken? chicken! $#%!';
```

## Подсказки

- Тернарный оператор может сослужить вам хорошую службу в этом задании
- Также может очень пригодиться метод [`includes()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)