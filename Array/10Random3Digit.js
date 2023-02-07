//Q1. a. generate 10 random 3 digit number
let randomNumbersArray = new Array();
let randomNum;
let temp;
for (let i = 1; i <= 10; i++) {
    randomNum = Math.floor(Math.random() * 900 + 100);
    randomNumbersArray.push(randomNum);
}
console.log("10 random 3 Digit Numbers are : ")
for (let element of randomNumbersArray) {
    console.log(element);
}
console.log("***********Without Sorting Method***********");
for (let i = 0; i < randomNumbersArray.length; i++) {
    for (let j = i + 1; j < randomNumbersArray.length; j++) {
        if (randomNumbersArray[i] < randomNumbersArray[j]) {
            temp = randomNumbersArray[j];
            randomNumbersArray[j] = randomNumbersArray[i]
            randomNumbersArray[i] = temp;
        }
    }
}
console.log("Second Smallest : " + randomNumbersArray[randomNumbersArray.length - 2])
console.log("Second Largest : " + randomNumbersArray[1]);

console.log("***********With Sorting Method***********");
console.log("Sorted Array : " + randomNumbersArray.sort());
console.log("Second Smallest : " + randomNumbersArray[1]);
console.log("Second Largest : " + randomNumbersArray[randomNumbersArray.length - 2])
