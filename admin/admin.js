let people = [];
let submit = document.querySelector('#submit');
let display = document.querySelector('#display');


submit.addEventListener('click', (e)=> {
    e.preventDefault();
    let Name = document.querySelector('#Name').value;
    let Size = document.querySelector('#Size').value;
    let Brand = document.querySelector('#Brand').value;
    let Price = document.querySelector('#Price').value;

    if(Name == "" ||Size == "" ||Brand == "" ||Price == "" ){
        showAlert('Please fill in details', 'danger');
    }else{
        if(selectedRow == null){
            let list = document.querySelector('#shoe-list');
            let shoe = document.createElement('tr');

            shoe.innerHTML = `
                  <td>${Name}</td>
                  <td>${Size}</td>
                  <td>${Brand}</td>
                  <td>${Price}</td>`

                  list.appendChild(shoe);
                  selectedRow = null;    
        }
    }

    people.push(
        {
            Name,
            Size,
            Brand,
            Price
        }
    )
     document.write(people);

     localStorage.setItem('data', JSON.stringify(people));
})

display.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log(
        JSON.parse(localStorage.getItem('data'))
    );
})