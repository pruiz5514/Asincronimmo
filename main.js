// console.log("uno");
// console.log("dos");
// console.log("tres");
// setTimeout(()=>{
//     alert("hola mundo")
// },10000)
// console.log("cuatro");
// console.log("cinco");

const tbody = document.querySelector("tbody");
const btnNew = document.querySelector("#btn-enviar");

async function llamadoApi(){
    const respuesta =  await fetch("https://api.escuelajs.co/api/v1/categories") //llamamos datos
    const datos = await respuesta.json() // transformanos los datos JSON a codigo JS

    datos.forEach(dato => {
        tbody.innerHTML += `
            <tr>
                <th scope="row">${dato.id}</th>
                <td>${dato.name}</td>
                <td> <img src=${dato.image} class="w-50"> </td>
            </tr>
        `
    });
};

llamadoApi()

const newCategory = {
    name:"lenguajes programacion------",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOtMv7HgEgIYeIvlRJqcraTi8TKgJ8D0oS8jSY2rv9g&s"
}


btnNew.addEventListener("click", eliminar)

function enviarDatosAlaAPI(){
    fetch("https://api.escuelajs.co/api/v1/categories",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newCategory)
    })
}

function eliminar(){
    let id = prompt("Ingresa el ID de la categoria a eliminar");
    fetch(`https://api.escuelajs.co/api/v1/categories/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
}

// fetch("https://api.escuelajs.co/api/v1/categories")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(category => {
//             tbody.innerHTML += `
//                 <tr>
//                     <th scope="row">${category.id}</th>
//                     <td>${category.name}</td>
//                     <td> <img src=${category.image}></td>
//                 </tr>
//             `;
//         });
//     })



