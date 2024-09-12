let contenedor = document.getElementById("contenedor");

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
.catch(err => console.log(err));