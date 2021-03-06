class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats(){
        console.log(`\n---Stats---\nName: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}`)
        return this;
    }

    drinkSake(){
        this.health += 10;
        console.log("Delicious~")
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa", 100, 5);
ninja1.drinkSake().sayName().showStats();
