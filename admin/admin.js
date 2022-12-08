localStorage.setItem('shoesPalace', JSON.stringify([
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
]));

let shoes = JSON.parse(localStorage.getItem('shoesPalace'));
localStorage.setItem('shoesPalace', JSON.stringify(shoes));


let ShoeList = document.querySelector("#shoe-list");
    let ShoeOut = "";
    for(let details of shoes){
        ShoeOut +=`
    <tr>
    <td>${details.ID}</td>
    <td>${details.Name}</td>
    <td>${details.Brand}</td>
    <td>${details.Price}</td>
    <td>${details.img}</td>
    <td>
    <a href="#" class="btn btn-dark btn-sm" id="addCart">Edit</a>
    <a href="#" class="btn btn-primary btn-sm" onsubmit="delShoe(td)">Delete</a>
    </tr>`;

    // localStorage.setItem('shoesPalace', JSON.stringify(shoes));
    }
    

    ShoeList.innerHTML = ShoeOut;

    let submit = document.querySelector('#submit');


    function add() {
        let ID = document.querySelector('#ID').value;
        let Name = document.querySelector('#Name').value;
        let Brand = document.querySelector('#Brand').value;
        let Price = document.querySelector('#Price').value;
        let img = document.querySelector('#img').value;
    
        shoes.push(
            {
                ID,
                Name,
                Brand,
                Price,
                img
            }
        )
         let tableData = "";
         shoes.map((details) =>{
             tableData+=`
             <tr>
             <td>${details.ID}</td>
             <td>${details.Name}</td>
             <td>${details.Brand}</td>
             <td>${details.Price}</td>
             <td>${details.img}</td>
             <td>
             <a href="#" class="btn btn-dark btn-sm">Edit</a>
             <a href="#" class="btn btn-primary btn-sm">Delete</a>
             </tr>`;
         })
         document.getElementById("shoe-list").innerHTML=tableData;
         localStorage.setItem('shoesPalace', JSON.stringify(shoes));
        //  location.reload();
     }
     localStorage.setItem('shoesPalace', JSON.stringify(shoes));


     
     function delShoe(td){
        row = td.parentElement.parentElement;
        document.getElementById("shoe-list").deleteRow(row.rowIndex);
     }

    
        
          