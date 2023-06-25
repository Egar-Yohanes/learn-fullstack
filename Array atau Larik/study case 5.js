// Tentukan score max dan min, dari sebuah Array,
// contoh:
// let scores = [77, 2, 30, 15, 35 ]

// result:
// max: 77
// min: 2

let scores = [77, 2, 30, 15, 35];

let max = Math.max(...scores);
let min = Math.min(...scores);

console.log("max: " + max);
console.log("min: " + min);