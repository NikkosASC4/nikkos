function superhero(realName, ability, gender, archEnemy ) {
    this.realName = realName,
    this.ability = ability,
    this.gender = gender,
    this.archEnemy = archEnemy;

    this.newAbility = function(ability2) {
        this.ability = ability2;
    }

    }
var batman = new superhero('bruce wayne', 'money', 'male', 'joker');
var staticShock = new superhero('virgil','electricity', 'male', 'Ebon');

console.log(batman.ability);
batman.newAbility('drop kick');
console.log(batman.ability)