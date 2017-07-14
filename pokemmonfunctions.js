//Create an array of the alphabet
//Create a function where it calls a random index and prints out the connected string
//Create a function to call a random number of indexes.

var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function rand(num) {
    var randomDec= Math.random() * num;
    var randInt = Math.floor(randomDec);
    return randInt
}

var b = rand(26)

function randLetter(){
    console.log(alphabet[b])
}

randLetter();

