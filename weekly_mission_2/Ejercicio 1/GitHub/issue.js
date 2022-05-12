const issue = {
    title: "Error",
    repositoryNameAssociated: "LaunchX",
    status: "Unfixed",
    numberOfComments: 20,
    labels: 10,
    author: "Isaac",
    dateCreated: "April 25th 2022",
    lastUpdated: "Today",
    getTitleAndAuthor: function(){
        return `This issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
        return `This issue ${this.title} was updated ${this.lastUpdated} but the actual status is ${this.status}`
    }
}

console.log("Titulo del issue:" + issue.title)
console.log("Titulo y nombre del autor: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())