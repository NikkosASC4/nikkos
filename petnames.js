function pet(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

var myPets = [new pet("Charlotte", 5, "brown"), new pet("Zoe", 10, "black"), new pet("Max", 2, "white")];

// Write a function that prints out the name of each of my pets
function petnames(){
    for (i=0; i<3; i++){
    console.log(myPets[i].name)
    }
}

petnames();
