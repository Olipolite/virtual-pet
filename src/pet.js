const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age =  0; 
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if ((this.fitness + 4) <= 10 ) {
      this.fitness +=4;
    } else {
      this.fitness = 10;
    };
};

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if ((this.hunger - 3) >= 0 ) {
        this.hunger -= 3; 
    } else {
        this.hunger = 0;
    };
};

Pet.prototype.checkUp = function () {
    if (this.fitness <= 3 && this.hunger >= 5) {
        return "I am hungry AND I need a walk";
    } else if (this.fitness > 3 && this.hunger < 5) {
        return "I feel great";
    } else if (this.fitness <= 3) {
        return "I need a walk"
    } else { (this.hunger >= 5) 
        return "I am hungry"
    };
};



const pet = new Pet('Fido');

module.exports = Pet;