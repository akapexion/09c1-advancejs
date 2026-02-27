fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(data => {
    console.log(data.products);
    let product = "";
    data.products.forEach(element => {
        product += `
        <p>${element.title}</p>
        <i>${element.category}</i>
        `;

        document.getElementById("data").innerHTML = product;
    });
});