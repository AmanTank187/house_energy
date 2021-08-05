function validatingForm(){
  var addressParam = document.getElementById("address").value; 
  var postcodeParam = document.getElementById("postcode").value; 

  if ((addressParam == '' && postcodeParam == '') || (addressParam == 'Address' && postcodeParam == 'Postcode') ) {
    alert("Please enter house details")
    return false
  } else {
    getHouseData();
  }
}

function getHouseData() {
  var addressParam = document.getElementById("address").value; 
  var postcodeParam = document.getElementById("postcode").value; 
  
const list = new Houselist();

fetch(`https://epc.opendatacommunities.org/api/v1/domestic/search?address=${addressParam}&postcode=${postcodeParam}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Basic YW1hbnRhbmsxODdAZ21haWwuY29tOjA4YjY1OTlmNzc1NzYwMDdmZjA0NmIwNTJiYzFiOTYwYWExMDFiZmM=',
    },
  })
  .then(response => response.json())
  .then(data => {
    const houseData = data.rows;
    let output = ''
    
    houseData.forEach(function(house) { 
      const houseArticle = new House(house.address, house.postcode, house["current-energy-efficiency"],house["potential-energy-efficiency"]);
      list.add(houseArticle);

      output += `
    <div class="house-item" id="${list.housesArray.length-1}"> 
      ${houseArticle.createTitle()}  
      ${houseArticle.createModal()}
    </div>`;
   
  document.getElementById("house-feed").innerHTML = output;
  
  triggerModals();

      
    });
    
  }).catch(function() {
    alert("Address or Postcode is not valid");
});
  

}

const triggerModals = () => {
  const triggers = document.getElementsByClassName("trigger");
  const triggerArray = Array.from(triggers).entries();
  const modals = document.getElementsByClassName("modal");
  const closeButtons = document.getElementsByClassName("btn-close");

    for (let [index, trigger] of triggerArray) {
      const toggleModal = () => {
        modals[index].classList.toggle("show-modal");
      };

      trigger.addEventListener("click", toggleModal);
      closeButtons[index].addEventListener("click", toggleModal);
  }
}




 