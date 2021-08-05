class House {
    constructor(address, postcode){
        this.address = address;
        this.postcode = postcode;
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
        return `<p>${this.postcode}</p>`
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