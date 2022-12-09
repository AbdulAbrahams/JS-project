// localStorage.setItem('shoesPalace', JSON.stringify([
//     {"ID": 0,
//     "Name": "Air Forces",
//     "Brand": "Nike",
//     "Price": "R2800",
//     "img": "https://i.postimg.cc/SKBrHCGy/Nike-sb.jpg"
//     },

//     {"ID": 1,
//     "Name": "Grey Retro 4s",
//     "Brand": "Jordan",
//     "Price": "R3000",
//     "img": "https://i.postimg.cc/BQk7rmGK/grey-4s.jpg"
//     },

//     {"ID": 2,
//     "Name": "Off-White Retro 1s",
//     "Brand": "Nike",
//     "Price": "R5000",
//     "img": "https://i.postimg.cc/bw1gK8T7/offwhite-jordan.jpg"
//     },

//     {"ID": 3,
//     "Name": "Retro 1 SpongeBob",
//     "Brand": "Nike",
//     "Price": "R1300",
//     "img": "https://i.postimg.cc/q7jsT7C5/canary.jpg"
//     },

//     {"ID": 4,
//     "Name": "Eminem Carhartt x Air Jordan 4",
//     "Brand": "Jordan",
//     "Price": "R4000",
//     "img": "https://i.postimg.cc/m2YVnBV0/jordan-4.jpg"
//     },

//     {"ID": 5,
//     "Name": "Jordan Retro 1 Baby-Blue",
//     "Brand": "Jordan",
//     "Price": "R2000",
//     "img": "https://i.postimg.cc/TPzDGW3Q/nelson-ndongala-k-KObh7t-UPNc-unsplash.jpg"
//     }
// ]));

// let x = JSON.parse(localStorage.getItem('shoesPalace'));
// console.log(x);

// Object.keys(x).forEach(data => {
//     console.log(x[d].Name);
// });


let Shoes = [
    {"ID": 0,
    "Name": "Air Forces",
    "Brand": "Nike",
    "Price": "R2800",
    "img": "https://i.postimg.cc/SKBrHCGy/Nike-sb.jpg"
    },

    {"ID": 1,
    "Name": "Grey Retro 4s",
    "Brand": "Jordan",
    "Price": "R3000",
    "img": "https://i.postimg.cc/BQk7rmGK/grey-4s.jpg"
    },

    {"ID": 2,
    "Name": "Off-White Retro 1s",
    "Brand": "Nike",
    "Price": "R5000",
    "img": "https://i.postimg.cc/bw1gK8T7/offwhite-jordan.jpg"
    },

    {"ID": 3,
    "Name": "Retro 1 SpongeBob",
    "Brand": "Nike",
    "Price": "R1300",
    "img": "https://i.postimg.cc/q7jsT7C5/canary.jpg"
    },

    {"ID": 4,
    "Name": "Eminem Carhartt x Air Jordan 4",
    "Brand": "Jordan",
    "Price": "R4000",
    "img": "https://i.postimg.cc/m2YVnBV0/jordan-4.jpg"
    },

    {"ID": 5,
    "Name": "Jordan Retro 1 Baby-Blue",
    "Brand": "Jordan",
    "Price": "R2000",
    "img": "https://i.postimg.cc/TPzDGW3Q/nelson-ndongala-k-KObh7t-UPNc-unsplash.jpg"
    }
];

// let ShoeStorage = JSON.parse(localStorage.getItem("ShoeStorage"))
// ? JSON.parse(localStorage.getItem("ShoeStorage"))

// : [
    
// ]



let submit = document.querySelector('#submit');

fetch("./admin.json").then(function(response){
    return response.json();
}).then(function(Shoes){
    let ShoeList = document.querySelector("#shoe-list");
    let ShoeOut = "";
    for(let Data of Shoes){
        ShoeOut +=`
    <tr>
    <td>${Data.ID}</td>
    <td>${Data.Name}</td>
    <td>${Data.Brand}</td>
    <td>${Data.Price}</td>
    <td>
    <a href="#" class="btn btn-dark btn-sm">Edit</a>
    <a href="#" class="btn btn-primary btn-sm" onclick="Delete()">Delete</a>
    </tr>`;
    }

    ShoeList.innerHTML = ShoeOut;
    localStorage.setItem('shoePalace', JSON.stringify(shoePalace));
})




submit.addEventListener('click', (e)=> {
    e.preventDefault();
    let ID = document.querySelector('#ID').value;
    let Name = document.querySelector('#Name').value;
    let Brand = document.querySelector('#Brand').value;
    let Price = document.querySelector('#Price').value;

    Shoes.push(
        {
            ID,
            Name,
            Brand,
            Price
        }
    )


    localStorage.setItem('ShoeStorage', JSON.stringify([ {
        ID,
        Name,
        Brand,
        Price
    }]));
    
     let tableData = "";
     Shoes.map((data) =>{
         tableData+=`
         <tr>
         <td>${data.ID}</td>
         <td>${data.Name}</td>
         <td>${data.Brand}</td>
         <td>${data.Price}</td>
         <td>
         <a href="#" class="btn btn-dark btn-sm">Edit</a>
         <a href="#" class="btn btn-primary btn-sm">Delete</a>
         </tr>`;
     })
     let list = document.getElementById("shoe-list");
     document.getElementById("shoe-list").innerHTML=tableData;

 })

        function Delete(del){
        if(confirm("Do you want to delete this Shoe?")){
           let del = Shoes.splice(del, 1);
            localStorage.setItem('ShoeStorage', JSON.stringify([ {
                del
            }]));
        }
      }
      localStorage.setItem('ShoeStorage', JSON.stringify(sho));


      for (let i = 0; i < localStorage.length; i++) {

      }





      // fetch('./admin/admin.json').then((data) =>{
//     return data.json();
// }).then((objectData) =>{
//     console.log(objectData[0].firstName);
//     let tableData="";
//     objectData.map((values) =>{
//         tableData= `
//         <div class="card shadow-sm">
//         <svg src="${values.img}"class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

//         <div class="card-body">
//           <p class="card-text" value="Nike">${values.Name}</p>
//           <div class="d-flex justify-content-between align-items-center">
//             <div class="btn-group">
//               <button type="button" class="btn btn-sm btn-outline-secondary">${values.Brand}</button>
//               <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//             </div>
//             <small class="text-muted" value="R1000-R1500">${values.Price}</small>
//           </div>
//         </div>
//       </div>
//     </div>`;
//     })
//     document.getElementById("card").innerHTML=tableData;
// })

fetch("./admin/admin.json").then(function(response){
    return response.json();
}).then(function(Shoes){
    let card = document.querySelector("#shoe-output");
    let ShoeOut = "";
    for(let Data of Shoes){
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
    localStorage.setItem('ShoeStorage', JSON.stringify(ShoeStorage));
})



function shoeAdd(){
    Object.keys(shoes).forEach((keyShoe) => {
      let ShoeOut = document.querySelector("#shoe-output");
      let Data = shoes[keyShoe];

    })
  }