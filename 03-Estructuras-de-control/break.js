// factorial de 10 con while-break

let factorial = 1;
let num = 1;
while (true) {
    factorial = factorial * num;
    num++;
    console.log(num)
    if (num === 10) {
        break;
    }
}
console.log(factorial);