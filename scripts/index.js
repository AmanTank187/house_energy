fetch(`https://epc.opendatacommunities.org/api/v1/domestic/search?address=Cottesbrooke close`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Basic YW1hbnRhbmsxODdAZ21haWwuY29tOjA4YjY1OTlmNzc1NzYwMDdmZjA0NmIwNTJiYzFiOTYwYWExMDFiZmM=',
    },
  })
  .then(response => response.json())
  .then(data => {
    const houseData = data.rows;
    var mainContainer = document.getElementById("house-feed");
    const list = new Houselist();
    houseData.forEach(function(house) { 
      const houseArticle = new House(house.address, house.postcode);
      list.add(houseArticle);
      
    });
    list.list.forEach(function(house){
      var div = document.createElement("LI");
      div.innerHTML = `${house.createTitle()}`
      mainContainer.appendChild(div);

    });
  });
 