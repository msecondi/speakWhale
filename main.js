var input = "TURPENTINE AND TURTLES";

const vowels = ["a", "e", "i", "o", "u"];
var resultArray = [];

var counter = 1;

for (let i = 0; i < input.length; i++) {
    // console.log(input[i]);
    if(input[i].toLowerCase() === "u" || input[i].toLowerCase() === "e"){
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
        console.log(`${j} --- Iteration #${counter}`);
        counter++;
        if (input[i].toLowerCase() === vowels[j]) {
            resultArray.push(input[i].toLowerCase());
        }
    }
}
console.log(resultArray);

var resultString = (resultArray.join('')).toUpperCase();

console.log(resultString);

// var whaleTalk = function(phrase) {

//     const length = phrase.length;


//     for (let i = 0; i < length; i++) {
//         let char = phrase.at(i);
//         char.toLowerCase();
//         if (char === "a", "e", "i", "o", "u", "y") {

//         }
//         else {
//             phrase.replace(char, "");
//         }
//     }
// }
