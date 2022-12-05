let people = [];
//button
let submit = document.querySelector('#submit');
let display = document.querySelector('#display');

// Add event listener

submit.addEventListener('click', (e)=> {
    e.preventDefault();
    let firstName = document.querySelector('#firstName').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;

    // Push an object into an array
    people.push(
        {
            firstName,
            surname,
            email
        }
    )
     console.table(people);

     localStorage.setItem('data', JSON.stringify(people));
})

display.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log(
        JSON.parse(localStorage.getItem('data'))
    );
})