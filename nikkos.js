function rand(num) {
    var randomDec= Math.random() * num;
    var randInt = Math.floor(randomDec);
    console.log(randInt)
    return randInt
}

rand(57);

//Generates a random number between 0 and an integer of 
// your choosing.