let shoes = JSON.parse(localStorage.getItem('shoesPalace'));


let card = document.querySelector("#shoe-output");
    let ShoeOut = "";
    for(let Data of shoes){
        ShoeOut +=`
        <div class="col">
        <div class="card shadow-sm">
        <img src="${Data.img}">
        <div class="card-body">
          <p class="card-text" value="Nike">${Data.Name}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-dark">Add to Cart</button>
            </div>
            <large class="text-muted">${Data.Brand}</large>
            <large class="text-success" value="R1000-R1500">${Data.Price}</large>
          </div>
        </div>
      </div>
    </div>
    </div>
        `;
    }

    card.innerHTML = ShoeOut;

    localStorage.setItem('shoesPalace', JSON.stringify(shoes));

