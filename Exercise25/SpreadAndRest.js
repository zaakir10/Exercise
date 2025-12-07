
// spread
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];

console.log(`the combined array ${combined}`);


// rest
console.log("------------------------------");


function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}


console.log(multiply(2, 3));          // 6
console.log(multiply(2, 3, 4));       // 24
console.log(multiply(1, 2, 3, 4, 5)); // 120
