//FOR STRINGS
var password = "";
var word = "Daniel";

var rand = Math.floor(Math.random() * word.length);
console.log(rand);
password += word.substring(rand, rand + 1);


console.log(password);


//FOR ARRAYS
var password2 = [];
var arr1 = ["apple", "banana", "orange", "grape"];

var rand2 = Math.floor(Math.random() * arr1.length);
console.log(rand2);
password2 += arr1[rand2];

console.log(password2);


//Example
var combo = [];
var vegetables = ["Potato", "Broccoli", "Spinach", "Beet", "Corn", "Peas"];
console.log(vegetables);
console.log(vegetables.length);

for(var i = 0; i < 3; i++) {
    var rand = Math.floor(Math.random() * vegetables.length);
    combo[i] = vegetables[rand];
}

console.log(combo);
console.log(combo.length);