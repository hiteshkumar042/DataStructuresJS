//Q5, Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
//etc and store them in an array

let lastVal;
let firstVal;
let array = new Array();

for (let i = 1; i <= 100; i++) {
    lastVal = i % 10;
    firstVal = Math.floor(i / 10);
    if (firstVal === lastVal) {
        array.push(i);
    }
}
for (const element of array) {
    console.log(element);
}