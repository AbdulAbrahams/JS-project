localStorage.setItem('shoesPalace', JSON.stringify([
  {"id": 0,
  "Name": "Air Forces",
  "Brand": "Nike",
  "Price": "R2800",
  "img": "https://i.postimg.cc/SKBrHCGy/Nike-sb.jpg"
  },

  {"id": 1,
  "Name": "Grey Retro 4s",
  "Brand": "Jordan",
  "Price": "R3000",
  "img": "https://i.postimg.cc/BQk7rmGK/grey-4s.jpg"
  },

  {"id": 2,
  "Name": "Off-White Retro 1s",
  "Brand": "Nike",
  "Price": "R5000",
  "img": "https://i.postimg.cc/bw1gK8T7/offwhite-jordan.jpg"
  },

  {"id": 3,
  "Name": "Retro 1 SpongeBob",
  "Brand": "Nike",
  "Price": "R1300",
  "img": "https://i.postimg.cc/q7jsT7C5/canary.jpg"
  },

  {"id": 4,
  "Name": "Eminem Carhartt x Air Jordan 4",
  "Brand": "Jordan",
  "Price": "R4000",
  "img": "https://i.postimg.cc/m2YVnBV0/jordan-4.jpg"
  },

  {"id": 5,
  "Name": "Jordan Retro 1 Baby-Blue",
  "Brand": "Jordan",
  "Price": "R2000",
  "img": "https://i.postimg.cc/TPzDGW3Q/nelson-ndongala-k-KObh7t-UPNc-unsplash.jpg"
  }
]));

let checkout = JSON.parse(localStorage.getItem('checkoutShoe'));

let shoes = JSON.parse(localStorage.getItem('shoesPalace'));
localStorage.setItem('checkoutShoe', JSON.stringify(checkout))


Object.keys(shoes).forEach((keyShoe) => {
let ShoeOut = document.querySelector("#checkout-shoe");
checkout.forEach((shoe) => {
  if(checkout[shoe]= [""]){
let Data = shoes[keyShoe];
        ShoeOut.innerHTML +=`
        <li class="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h6 class="my-0">${Data.Name}</h6>
                            <small class="text-muted">${Data.Brand}</small>
                          </div>
                          <span class="text-muted">${Data.Price}</span>
                        </li>
        `;
  }
  })
})

let total = document.getElementById('total');

