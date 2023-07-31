class Ninja {
    constructor(name) {
        this.name = name,
        this.health = 90,
        this.speed = 3,
        this.strength = 3
    }
    
    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("name: " + this.name + ", strength: " + this.strength + ", speed: " + this.speed + ", health: " + this.health)
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("insert wise message here")
    }
}

