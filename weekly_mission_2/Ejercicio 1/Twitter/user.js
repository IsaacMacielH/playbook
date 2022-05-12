const user = {
    user: "Isaac",
    username: "IsaacM00",
    bio: "...",
    age: 22,
    getUserAndAge: function(){
        return `${this.user} has ${this.age}`
    }
}
console.log(user.getUserAndAge())