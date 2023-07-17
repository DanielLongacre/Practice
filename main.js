//FOR STRINGS
var password = "";
var word = "DanielLongacre";

var rand = Math.floor(Math.random() * word.length);
password += word.substring(rand, rand + 1);
console.log(password);


//FOR ARRAYS
var password2 = [];
var arr1 = ["apple", "banana", "orange", "grape"];

var rand2 = Math.floor(Math.random() * arr1.length);
password2 += arr1[rand2];

console.log(password2);

//-----------------------------------------------------------------------------


//Example1
var combo = [];
var vegetables = ["Potato", "Broccoli", "Spinach", "Beet", "Corn", "Peas"];
console.log(vegetables);

for(var i = 0; i < 3; i++) {
    var rand = Math.floor(Math.random() * vegetables.length);
    combo[i] = vegetables[rand];
    vegetables.splice(rand, 1);
}

console.log(combo);

//-----------------------------------------------------------------------------

//Example2
var pass = [];
var numArr = [1, 2, 3, 4, 5, 6, 7, 8];

for(var i = 0; i < 5; i++) {
    var rand = Math.floor(Math.random() * numArr.length);
    pass[i] = numArr[rand];
    numArr.splice(rand, 1);
}
console.log(pass);
