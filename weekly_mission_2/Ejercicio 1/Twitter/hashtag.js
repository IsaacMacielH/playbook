const hashtag = {
    character: "#",
    hashtagInTrending: "#BTS",
    yourLastHashtagUsed: "#JavaScript",
    getGeneralInfo: function(){
        return `The most used # is ${this.hashtagInTrending} and your last # used was ${this.yourLastHashtagUsed}`
    }
}

console.log(hashtag.getGeneralInfo())