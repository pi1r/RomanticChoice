function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
getRandomInt(3);     // generates a random number from 0 to 2 , but  u can do more... 


 
if (getRandomInt(3) == 0){
    console.log("Come on... Take her out on a date freak!");
}
else if (getRandomInt(3) == 1){
    console.log("You can only communicate with your computer. Do not even dream");
}
else {
    console.log("Firstly, look at the mirror.Maybe u need more beautiful girl? ^^");
}
