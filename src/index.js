'use strict'

console.log("В задание написано от 1 до 100, но 1 это не простое число, но я его выведу таким образом: ");

console.log("1 is prime")

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} is prime`);
    }
}
    