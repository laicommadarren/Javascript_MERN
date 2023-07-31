class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res += -this.power;
        console.log(this.name + " has dealt " + this.power + " damage to " + target.name + ".");
        console.log(target.name + "'s res is now " + target.res + ".")
    }

    
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play( target ) {
        if( target instanceof Unit ) {
            console.log(target[this.stat]);
            target.this.stat
            target[this.stat] += this.magnitude;
            
            if (this.magnitude > 0) {console.log(" +" + this.magnitude + " to " + target.name + "'s " + this.stat + ".")
            }
            else {
                console.log(this.magnitude + " to " + target.name + "'s " + this.stat + ".")
            }
            console.log(target.name + "'s " + this.stat + " is now " + target[this.stat] + ".")
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja =  new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", +3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);

console.log(redBeltNinja)
hardAlgorithm.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
