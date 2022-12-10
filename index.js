let shoes = JSON.parse(localStorage.getItem("shoesPalace"));
let checkout = [];
localStorage.setItem("checkoutShoe", JSON.stringify(checkout));

Object.keys(shoes).forEach((keyShoe) => {
  let ShoeOut = document.querySelector("#shoe-output");
  let Data = shoes[keyShoe];
  ShoeOut.innerHTML += `
        <div class="col">
        <div class="card shadow-sm">
        <img src="${Data.img}">
        <div class="card-body">
          <p class="card-text" value="Nike">${Data.Name}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" data-name="${Data.Name}" data-price="${Data.Price}" data-brand="${Data.Brand}" class="btn btn-sm btn-dark" id="addShoe" onclick="shoeAdd()">Add to Cart</button>
            </div>
            <large class="text-muted">${Data.Brand}</large>
            <large class="text-success" value="R1000-R1500">R${Data.Price}</large>
          </div>
        </div>
      </div>
    </div>
    </div>
        `;
});

// card.innerHTML = ShoeOut;

let checkoutShoe = localStorage.setItem(
  "shoesPalace",
  JSON.stringify(checkoutShoe)
);

function shoeAdd() {
  let checkoutShoe = JSON.parse(localStorage.getItem("shoesPalace"));
  for (let Data of shoes) {
    let Name = Data.Name;
    let Brand = Data.Brand;
    let Price = Data.Price;

    checkout.push({
      Name,
      Brand,
      Price,
    });
    localStorage.setItem(
      "checkoutShoe",
      JSON.stringify([
        {
          Name,
          Brand,
          Price,
        },
      ])
    );
  }
  console.log(checkout);
}

localStorage.setItem("checkoutShoe", JSON.stringify(checkoutShoe));

// let checkoutShoe = JSON.parse(localStorage.getItem('checkoutShoe'))
let addShoe = document.getElementById("addShoe");

Object.keys(addShoe).forEach((shoe) => {
  addShoe(shoe).addEventListener("click", (e) => {
    checkoutShoe.push(Data[shoe]);
    localStorage.setItem("checkoutShoe", JSON.stringify(checkoutShoe));
  });
});




