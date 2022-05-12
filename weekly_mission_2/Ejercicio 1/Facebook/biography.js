const biography = {
    bio: "...",
    studiedAt: "Computer Science at UDG",
    workplace: "UDG",
    from: "Guadalajara, Jalisco",
    getGeneralInfo: function(){
        return `The user has ${this.bio} as bio, studied ${this.studiedAt} and is from ${this.from}`
    }
}
console.log(biography.getGeneralInfo())