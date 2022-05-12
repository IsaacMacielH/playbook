class Twitter {
    constructor(user, country, hashtag){
        this.user = user;
        this.country = country;
        this.hashtag = hashtag;
    }
    getInfo(){
        return console.log(`The user ${this.user} is from ${this.country} and says ${this.hashtag}`)
    }
}
const twitterUser = new Twitter("Isaac", "Mexico", "#HolaMundo!")
console.log(twitterUser.getInfo())

class Facebook {
    constructor(name, bio, post){
        this.name = name;
        this.bio = bio;
        this.post = post;
    }
    getInfo(){
        return console.log(`The user ${this.name} has ${this.bio} as bio and their last post is  ${this.post}`)
    }
}
const facebookUser = new Facebook("Isaac", "...", "Hola Facebook!")
console.log(facebookUser.getInfo())

class Uber {
    constructor(name, email, lastTrip){
        this.name = name;
        this.email = email;
        this.lastTrip = lastTrip;
    }
    getInfo(){
        return console.log(`The user ${this.name} made a trip to ${this.lastTrip}`)
    }
}
const uberUser = new Uber("Isaac", "isaac.m@gmail.com", "Forum")
console.log(uberUser.getInfo())