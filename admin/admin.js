let Shoes = [
    {ID: 0,
    Name: 'Air Forces',
    Brand: 'Nike',
    Price: 'R1300'
}
];

let submit = document.querySelector('#submit');


submit.addEventListener('click', (e)=> {
    e.preventDefault();
    let ID = document.querySelector('#ID').value;
    let Name = document.querySelector('#Name').value;
    let Brand = document.querySelector('#Brand').value;
    let Price = document.querySelector('#Price').value;

    if(ID == "" ||Name == "" ||Brand == "" ||Price == "" ){
        return
    }

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





