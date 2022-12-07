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
}).then(function(products){
    let placeholder = document.querySelector("#shoe-output");
    let out = "";
    for(let product of products){
        out +=`
        <div class="col">
        <div class="card shadow-sm">
        <img src="${product.img}">
        <div class="card-body">
          <p class="card-text" value="Nike">${product.Name}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">${product.Brand}</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted" value="R1000-R1500">${product.Price}</small>
          </div>
        </div>
      </div>
    </div>
    </div>
        `;
    }

    placeholder.innerHTML = out;
})