class House {
    constructor(address, postcode){
        this.address = address;
        this.postcode = postcode;
    }

    createTitle() {
        return `<h3>Address: ${this.address}, Postcode: ${this.postcode} </h2>`
    }
}