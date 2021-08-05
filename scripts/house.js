class House {
    constructor(address, postcode,currentEnergy, potentialEnergy){
        this.address = address;
        this.postcode = postcode;
        this.currentEnergy = currentEnergy;
        this.potentialEnergy = potentialEnergy;
    }

    createTitle() {
        return `<h3>Address: ${this.address}<br> 
        Postcode: ${this.postcode}<br>
        ${this.createModalLink()}`
    }

    createModalLink() {
        return `<h3 class="trigger">Click for more information</h3>`
    }


    createModalSum() {
      return `<h1>Analysis details for ${this.address} </h1> <br>
              <h2> Current energy: ${this.currentEnergy} </h2> <br>
              <h2> Current energy: ${this.potentialEnergy} </h2>`
    }

    createModal() {
        return `<div class="modal">
                  <span class="btn-close">&times;</span>
                    <div class="modal-content">
                      ${this.createModalSum()}
                    </div> 
                </div>`
      }
}