console.log("   Hey there!");
console.log("");
console.log("   Do you know whether to ask a girl on a date or not? Do you doubt your chances?");
console.log("   Maybe she likes you? Or maybe not.");
console.log(""); 
console.log("   I'll help you, let's figure it out."); 
console.log(""); 
console.log("   Always answer  'yes' or 'no'"); 

const prompt = require('prompt-sync')();
 
const question1 = prompt('   yes? ');

var first = "   You have every chance, just do it!"; 
var second = "   Take the risk, but be prepared for the worst";

const health = [first, second]; 


console.log("   So...First question");



const qw1 = prompt("   Do you communicate a lot? ");

if (qw1 == "yes"){
    health.push(first);  // + 1 point
}
else if (qw1 == "no"){
    health.push(second); // - 1 point
};

const qw2 = prompt("   Do you often go out together? ");

if (qw2 == "yes"){
    health.push(first);  // + 1 point
}
else if (qw2 == "no"){
    health.push(second); // - 1 point
};

const qw3 = prompt("   Do you cheer her up? ");
if (qw3 == "yes"){
    health.push(first, first, first);  // + 3 point
}
else if (qw3 == "no"){
    health.push(second, second); // - 2 point
};

const qw4 = prompt("   Does she feel comfortable with you? "); 
if (qw4 == "yes"){
    health.push(first, first, first);  // + 3 point
}
else if (qw4 == "no"){
    health.push(second, second, second); // - 3 point
};

const qw5 = prompt("   Do you have common interests? ");
if (qw5 == "yes"){
    health.push(first, first);  // + 2 point
}
else if (qw5 == "no"){
    health.push(second, second); // - 2 point
};

console.log("") // mooore space 
console.log("") // mooore space 

const random = Math.floor(Math.random()* health.length);
console.log(health[random],);
