let shoes = JSON.parse(localStorage.getItem('shoesPalace'));
// localStorage.setItem('shoesPalace', JSON.stringify(shoes));

var selectedRow = null;


let ShoeList = document.querySelector("#shoe-list");
    let ShoeOut = "";
    shoes.forEach((details,index) => {
        ShoeOut +=`
    <tr>
    <td>${details.id}</td>
    <td>${details.Name}</td>
    <td>${details.Brand}</td>
    <td>${details.Price}</td>
    <td>${details.img}</td>
    <td>
    <a href="#" class="btn btn-dark btn-sm edit" data-bs-toggle="modal" data-bs-target="#editModal" id="addCart">Edit</a>
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add a Shoe</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form autocomplete="off">
              <input class="col-12 my-3" id="ID" type="text" value="${details.id}" required>
                <input class="col-12 my-3" id="Name" type="text" value="${details.Name}" required>
                <input class="col-12 my-3" id="Brand" type="text" value="${details.Brand}" required>
                <input class="col-12 my-3" id="Price" type="text" value="${details.Price}" required>
                <input class="col-12 my-3" id="img" type="text" value="${details.img}" required>
                <div class="modal-footer">
                    <button type="Submit" class="btn btn-primary" data-bs-dismiss="modal" id="submit" value="submit">Edit Shoe</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
    <a href="#" id="${index}" class="btn btn-primary btn-sm delete" onsubmit="delShoe(td)">Delete</a>
    </tr>`;
        console.log(details)
    // localStorage.setItem('shoesPalace', JSON.stringify(shoes));
    })
    

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
             <td>${details.id}</td>
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
         location.reload();
     }

     
     localStorage.setItem('shoesPalace', JSON.stringify(shoes));


     
    document.getElementById("shoe-list").addEventListener('click', (e) => {
        shoeDelete = e.target;
        if(shoeDelete.classList[3] == "delete"){
            let testarr = JSON.parse(localStorage.getItem('shoesPalace'))
            let newArr = testarr.splice(testarr[shoeDelete.id] ,1)
            console.log(newArr)
            shoeDelete.parentElement.parentElement.remove(); 
            localStorage.removeItem('shoesPalace', JSON.stringify(shoes.details));
            console.log(shoes.details)
        }

        localStorage.setItem('shoesPalace', JSON.stringify(shoes));
    })

    localStorage.setItem('shoesPalace', JSON.stringify(shoes));


    document.getElementById("shoe-list").addEventListener('click', (e) => {
        shoeEdit = e.target;
        if(shoeEdit.classList.contains("edit")){
            shoeEditRow = shoeEdit.parentElement.parentElement;
                document.querySelector('#ID').value;
                document.querySelector('#Name').value;
                document.querySelector('#Brand').value;
                document.querySelector('#Price').value;
                document.querySelector('#img').value;
        }
    })


    


