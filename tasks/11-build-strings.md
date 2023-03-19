# Генерация строки в цикле

Реализуйте функцию `buildDefinitionList()`, которая генерирует HTML список определений (теги `<dl>`, `<dt>` и `<dd>`) и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

## Параметры функции

- Список определений следующего формата:

```js
const definitions = [
  ['definition1', 'description1'],
  ['definition2', 'description2']
];
```

- То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.

## Пример использования

```js
import buildDefinitionList from '../solutions/11-build-strings.js';

const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];
buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
```

## Подсказки

- Описания тэгов: [dl](https://developer.mozilla.org/ru/docs/Web/HTML/Element/dl), [dt](https://developer.mozilla.org/ru/docs/Web/HTML/Element/dt), [dd](https://developer.mozilla.org/ru/docs/Web/HTML/Element/dd)