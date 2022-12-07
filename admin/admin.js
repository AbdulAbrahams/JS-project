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


let submit = document.querySelector('#submit');

fetch("./admin.json").then(function(response){
    return response.json();
}).then(function(Shoes){
    let placeholder = document.querySelector("#shoe-list");
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
    <a href="#" class="btn btn-primary btn-sm">Delete</a>
    </tr>`;
    }

    placeholder.innerHTML = ShoeOut;
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
    document.getElementById("shoe-list").innerHTML=tableData;
 })

     localStorage.setItem('./admin.json', JSON.stringify(people));




