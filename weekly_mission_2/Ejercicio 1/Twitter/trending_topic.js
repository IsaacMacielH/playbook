const trending_topic = {
    pais: "Mexico",
    no1: "FelizMartes",
    totalTrendings: 29,
    lastTrending: "#Yo",
    updated: "5 seconds ago",
    getGeneralInfo: function(){
        return `There is ${this.totalTrendings} trendings today and the n. 1 is ${this.no1}`
    }
}

console.log(trending_topic.getGeneralInfo())