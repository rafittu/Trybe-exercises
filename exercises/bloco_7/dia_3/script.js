const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70


const assert = require('assert');

function division(x, y) {
  return x / y;
}
const expected = division(9, 3);
assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');


const assert = require('assert');

function add(a, b) {
  return a + b;
}
const expected = add(1, 2);
assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)


const assert = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];
assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };
const person3 = { name: 'john', age: 19 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');
assert.notDeepStrictEqual(person1, person2, 'Erro: os valores dos objetos são estritamente iguais');

// 7.3 - Exercício parte I
// Exercicio 1

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}
// implemente seus testes aqui
const expected = sum(4, 5);
assert.strictEqual(expected, 9, 'A soma de 4 mais 5 é igual a 9');

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}
assert.strictEqual(sum(0, 0), 0, 'A soma de 0 mais 0 é igual a 0');

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}
const expected = sum(4, "5");
assert.strictEqual(expected, 9, 'A soma de 0 mais 0 é igual a 0');

// Exercício 2

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);