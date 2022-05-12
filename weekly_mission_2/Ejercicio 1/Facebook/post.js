const post = {
    content: "Hello world!",
    date: "24 April",
    status: "Only friends can see it",
    hasMultimedia: "no",
    reactions: "5 likes, 1 love and 1 care",
    getGeneralInfo: function(){
        return `The post content is ${this.content}, was created on ${this.date} and has ${this.reactions}`
    }
}
console.log(post.getGeneralInfo())