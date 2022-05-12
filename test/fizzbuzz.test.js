const fizzbuzz= require('../scripts/fizzbuzz');

test('múltipo de 3 devuelve Fizz', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test('múltipo de 5 devuelve Buzz', () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

test('múltipo de 3 y de  5 devuelve FizzBuzz', () => {
  expect(fizzbuzz(45)).toBe("FizzBuzz");
});

test('Si no es múltimo de 3 ni de 5 devuelve el número', () => {
  expect(fizzbuzz(41)).toBe(41);
});

