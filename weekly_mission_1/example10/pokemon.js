export default class Pokemon {
  constructor(name){
    this.name = name;
  }
  sayHello(){
    console.log("El pokemon "+this.name+ " te saluda!")
  }
}