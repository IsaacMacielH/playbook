const pullRequest = {
    title: "Fixed",
    branchName: "main",
    dateCreated: "April 29th 2022",
    author: "Isaac",
    status: "Accepted",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
        return this.status
    },
    getTitleAndAuthor: function(){
        return `The pull request is titeled ${this.title} and the author is ${this.author}`
    }
}

console.log("Titulo del pull request:" + pullRequest.title)
console.log("Titulo y nombre del autor: " + pullRequest.getTitleAndAuthor())
console.log(pullRequest.getStatus())