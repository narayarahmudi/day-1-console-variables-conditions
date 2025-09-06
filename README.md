# day-1-console-variables-conditions
I already know HTML and CSS. This is my first day learning JavaScript, and it's giving me a headache to be honest, but I'm still enthusiastic and won't give up

### English Version Translate
# Day 1 - Console, Variables, Conditions

I already know HTML and CSS. This is my first day learning JavaScript, and it's giving me a headache to be honest, but I'm still enthusiastic and won't give up.

---

## English Version

```javascript
let number1 = 12;
let number2 = 5;

console.log("Addition", number1 + number2);
console.log("Subtraction", number1 - number2);
console.log("Multiplication", number1 * number2);
console.log("Division", number1 / number2);
console.log("Modulus", number1 % number2);

let examScore = number1 * number2;

console.log('Greater than or equal to 80.', examScore >= 80);
console.log('Less than or equal to 60', examScore <= 60);
console.log('Between 60 and 80', examScore >= 60 && examScore <= 80);

console.log('Can enter university?');
if (examScore >= 70) {
    console.log('Eligible to enter university');
} else {
    console.log('Not enough to enter university');
}

let result = (examScore >= 60) ? 'Pass' : 'Fail';
console.log(result);

// NEXT
let age = 19;
if (age >= 17) {
    console.log('Allowed to have a driving license');
} else {
    console.log('Not allowed to have a driving license');
}

// NEXT
let score = 92;
if (score >= 90) {
    console.log('Grade A');
} else if (score >= 80) {
    console.log('Grade B');
} else if (score >= 70) {
    console.log('Grade C');
} else {
    console.log('Grade D');
}

    console.log('Grade D');
}

