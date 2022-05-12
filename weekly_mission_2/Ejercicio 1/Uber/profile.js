const profile = {
    name: "Isaac Maciel",
    hasPicture: "No",
    rating: "4.5 stars",
    totalTrips: 20,
    phoneNumber: 3311223344,
    email: "isaac@gmail.com",
    getGeneralInfo: function(){
        return `${this.name} has ${this.rating} with ${this.totalTrips} trips`
    }
}
console.log(profile.getGeneralInfo())