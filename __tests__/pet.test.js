const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {  
    expect(new Pet("Fido")).toBeInstanceOf(Object);
    });

  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
  });

  it("has a initial age of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  })
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.age).toEqual(1);
  })
});

describe("hunger", () => {
  it("hunger increased when pet growUp", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.hunger).toEqual(pet.hunger = 5);
  })
});

describe("fitness", () => {
  it("fitness decreases when pet growUp", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  })
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("Fido");

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  })

  it("increases fitness by to a maximun of 10", () => {
    const pet = new Pet("Fido");

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  })
});

describe("feed", () => {
  it("decreases hunger level by 3", () => {
    const pet = new Pet("Fido");

    pet.hunger = 2; 
    pet.feed()

    expect(pet.hunger).toEqual(0);
  })

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe("checkUp", () => {
  it("checks the level of the pet properties", () => {
    const pet = new Pet("Fido");

    pet.fitness = 2;
    pet.hunger = 6;
    pet.checkUp();

    expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
  })

  it("checks the level of the pet properties", () => {
    const pet = new Pet("Fido");

    pet.fitness = 4;
    pet.hunger = 4;
    pet.checkUp();

    expect(pet.checkUp()).toBe("I feel great");
  })

  it("checks the level of the pet properties", () => {
    const pet = new Pet("Fido");

    pet.fitness = 2;
    pet.hunger = 0;
    pet.checkUp();

    expect(pet.checkUp()).toBe("I need a walk");
  })

  it("checks the level of the pet properties", () => {
    const pet = new Pet("Fido");

    pet.fitness = 10;
    pet.hunger = 5;
    pet.checkUp();

    expect(pet.checkUp()).toBe("I am hungry");
  })
});

describe("isAlive", () => {
  it("checks if the pet is alive", () => {
    const pet = new Pet("Fido");

    expect(pet.isAlive).toBeTruthy();
  })

  it("checks if the pet is alive", () => {
    const pet = new Pet("Fido");

    pet.age = 31;
    pet.hunger = 0;
    pet. fitness = 10;

    expect(pet.isAlive).toBeFalsy();
  })

  it("checks if the pet is alive", () => {
    const pet = new Pet("Fido");

    pet.age = 25;
    pet.hunger = 12;
    pet. fitness = 10;

    expect(pet.isAlive).toBeFalsy();
  })

  it("checks if the pet is alive", () => {
    const pet = new Pet("Fido");

    pet.age = 15;
    pet.hunger = 3;
    pet. fitness = -4;

    expect(pet.isAlive).toBeFalsy();
  })
});
