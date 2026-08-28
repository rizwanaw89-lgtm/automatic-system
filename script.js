// 1. Print 1 to 10
function print1To10() {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }

    alert(result);
}


// 2. Print 10 to 1
function print10To1() {
    let result = "";

    for (let i = 10; i >= 1; i--) {
        result += i + " ";
    }

    alert(result);
}


// 3. Print 1 to 20
function print1To20() {
    let result = "";

    for (let i = 1; i <= 20; i++) {
        result += i + " ";
    }

    alert(result);
}


// 4. Even numbers 1 to 20
function printEven() {
    let result = "";

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            result += i + " ";
        }
    }

    alert(result);
}


// 5. Odd numbers 1 to 20
function printOdd() {
    let result = "";

    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    alert(result);
}


// 6. Numbers divisible by 5
function divisibleBy5() {
    let result = "";

    for (let i = 1; i <= 50; i++) {
        if (i % 5 === 0) {
            result += i + " ";
        }
    }

    alert(result);
}


// 7. Hello World 10 times
function helloWorld() {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += "Hello World\n";
    }

    alert(result);
}


// 8. Your name 5 times
function printName() {
    let name = prompt("Enter your name:");
    let result = "";

    for (let i = 1; i <= 5; i++) {
        result += name + "\n";
    }

    alert(result);
}


// 9. Sum 1 to 10
function sum1To10() {
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += i;
    }

    alert("Sum = " + sum);
}


// 10. Sum 1 to 100
function sum1To100() {
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        sum += i;
    }

    alert("Sum = " + sum);
}


// 11. Table of 2
function table2() {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += "2 x " + i + " = " + (2 * i) + "\n";
    }

    alert(result);
}


// 12. Table of 5
function table5() {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += "5 x " + i + " = " + (5 * i) + "\n";
    }

    alert(result);
}


// 13. Table of 10
function table10() {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += "10 x " + i + " = " + (10 * i) + "\n";
    }

    alert(result);
}


// 14. User's table
function userTable() {
    let number = Number(prompt("Enter a number:"));
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += number + " x " + i + " = " + (number * i) + "\n";
    }

    alert(result);
}


// 15. Tables 1 to 5
function tables1To5() {
    let result = "";

    for (let table = 1; table <= 5; table++) {

        result += "Table of " + table + "\n";

        for (let i = 1; i <= 10; i++) {
            result += table + " x " + i + " = " + (table * i) + "\n";
        }

        result += "\n";
    }

    alert(result);
}