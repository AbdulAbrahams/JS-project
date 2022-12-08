let shoes = JSON.parse(localStorage.getItem('shoesPalace'));
let addCart = document.querySelector('#addCart');


addCart = function addCart() {
    let cart = document.querySelector("#shoe-cart");
    let shoeCart = "";
    for(let Data of shoes){
        shoeCart +=`
        <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 class="my-0">${Data.Name}</h6>
                      <small class="text-muted">${Data.Brand}</small>
                    </div>
                    <span class="text-muted">${Data.Price}</span>
                  </li> `;
    }

    cart.innerHTML = shoeCart;

    localStorage.setItem('shoesPalace', JSON.stringify(shoes));
}
