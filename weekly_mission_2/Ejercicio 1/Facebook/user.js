const user = {
    name: "Isaac Maciel",
    age: 22,
    email: "isaac@gmiail.com",
    joinedIn: 2008,
    getNameAndAge: function(){
        return `${this.name} has ${this.age} and is on Facebook since ${this.joinedIn}`
    }
}
console.log(user.getNameAndAge())