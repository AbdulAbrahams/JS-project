let people = [];
let submit = document.querySelector('#submit');
let display = document.querySelector('#display');
let Row = null;

function getShoe(){
    var Shoe = {};
    Shoe['Name'] = document.getElementById('Name').value;
    Shoe['Size'] = document.getElementById('Size').value;
    Shoe['Brand'] = document.getElementById('Brand').value;
    Shoe['Price'] = document.getElementById('Price').value;
    return Shoe; 
}

function shoeSubmit(e){
    e.preventDefault();
    var Shoe = getShoe();
    if(Row === null){
        newShoe(Shoe);
    }
}

function newShoe(data){
    let shoeTable = document.getElementById('shoe-list').document.getElementsByTagName('tbody')[0];
    let newRow = shoeTable.insertShoe(shoeTable.length);
    var shoe1 = newRow.insertCell(0);
        shoe1.innerHTML = data.Name;
    var shoe2 = newRow.insertCell(1);
        shoe2.innerHTML = data.Size;
    var shoe3 = newRow.insertCell(2);
        shoe3.innerHTML = data.Brand;
    var shoe4 = newRow.insertCell(3);
        shoe4.innerHTML = data.Price;

}





