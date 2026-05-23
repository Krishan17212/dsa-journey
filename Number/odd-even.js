// Find is given number is odd or even

function findOddEvenBrute(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function cleanApprochß(num) {
    return num % 2 == 0 ? "Even" : "Odd";
}

function bitApproach(num) {
    return num & 1 == 0 ? "Even" : "Odd"; ß
}


console.log(bitApproach(16))