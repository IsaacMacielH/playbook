class Pokemon {
    constructor (name){
        this.name = name;
    }

    sayHello(){
        console.log("El pokemon "+this.name+" te saluda!");
    }

    sayMessage(){
        console.log("El pokemon "+this.name+" dice: Heey!")
    }
}

module.exports = Pokemon