/* let contenedor = document.getElementById("contenedor");

fetch("https://fakestoreapi.com/products")
.then(resp => resp.json())
.then(data => {
    data.forEach(products => {
        contenedor.innerHTML += `<div class="card">
                                    <h2>${products.title}</h2>
                                    <p>${products.category}</p>
                                    <img src="${products.image}" alt="image of ${products.title}">
                                    <h4>Precio: $ ${products.price.toFixed(2)}</h4> 
                                </div>`        // Agregue toFixed(2) para que los precios queden con decimales
    })
})
.catch(err => console.log(err)); */

let contenedor = document.getElementById("contenedor");

async function traerData(url) {
    const resp = await fetch(url);  // si no espero a fetch, no me toma los datos
    return resp.json();  
}

async function mostrarData() {
    try {
        const datos = await traerData("https://fakestoreapi.com/products");  
        datos.forEach(products => {  
            contenedor.innerHTML += `<div class="card">
                                        <h2>${products.title}</h2>
                                        <p>${products.category}</p>
                                        <img src="${products.image}" alt="image of ${products.title}">
                                        <h4>Precio: $ ${products.price.toFixed(2)}</h4> 
                                    </div>`;
        });
    } catch (error) {
        /* console.log(`El error es ` + error);  */
        /* document.write(`El error es ` + error); */
        alert(`El error es ` + error);
    }
}
mostrarData();