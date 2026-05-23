// Find is given number is odd or even

function findOddEvenBrute(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


console.log(findOddEvenBrute(16))