const travel = {
    from: "House",
    destination: "Forum Tlaquepaque",
    timeAprox: "30 min",
    paymentMethod: "Credit card",
    driver: "Jose",
    tripRate: "5 stars",
    getGeneralInfo: function(){
        return `the trip was from ${this.from} to ${this.destination} and it took ${this.timeAprox}`
    }
}
console.log(travel.getGeneralInfo())