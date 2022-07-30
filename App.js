console.log("pag Loaded")

class Product {
    constructor(name, price, date) {
        this.name = name;
        this.price = price;
        this.date = date;
    }
}

class UI {
    addProduct(product){
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML =` 
            <div class="card text-cente mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Date</strong>: ${product.date}
                </div>
            </div>
    `;
    productList.appendChild(element);
    }

    deleteProduct(){

    }

    showMessage(){

    }
}

//DOM EVENTS
document.getElementById("product-form")
    .addEventListener("submit", function (e) {
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const date = document.getElementById("date").value;

        const product = new Product(name, price, date );

        const ui = new UI();
        ui.addProduct(product)

        e.preventDefault();
}) 
