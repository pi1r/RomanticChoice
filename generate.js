var first = "Come on... Take her out on a date freak!";
var second = "You can only communicate with your computer. Do not even dream";
var third = "Firstly, look at the mirror.Maybe u need more beautiful girl? ^^";
// добавили переменные

const variant = [first, second, third] 
// поместили их в массив 

const prompt = require('prompt-sync')();
 
const question1 = prompt('do you communicate a lot? (enter yes or no)');

if (question1 == "yes"){
    variant.push(first);
}
else if (question1 == "no"){
    variant.push(second)
}
else{
    alert("freak"); 
}

const question2 = prompt('do you often go out together?');


if (question2 == "yes"){
    variant.push(first);
}
else if (question2 == "no"){
    variant.push(second)
}
else{
    console.log("STOP!"); 
}
const random = Math.floor(Math.random()* variant.length);
console.log(variant[random],);

