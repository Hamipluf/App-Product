console.log("pag Loaded")

class Product {
    constructor(name, price, date) {
        this.name = name;
        this.price = price;
        this.date = date;
    }
}
// PRODUCT LIST
class UI {
    addProduct = (product) => {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML =` 
            <div class="card text-cente mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Date</strong>: ${product.date}
                    <a href="#" class= "btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
    `;
    productList.appendChild(element);
    }

    resetForm() {
        document.getElementById("product-form").reset();
    }

    deleteProduct = (element) => {
        if(element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage(`Product Deleted`, `danger`)
        }
    }

    showMessage = (message, cssClass) => {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        // SHOWING IN DOM 
       const container = document.querySelector(".container");
       const app = document.querySelector(`#App`);
       container.insertBefore(div, app);
       setTimeout(() => {
        document.querySelector(`.alert`).remove()
       }, 2000); 
    }
}

//DOM EVENTS
document.getElementById("product-form")
    .addEventListener("submit", (e) => {
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const date = document.getElementById("date").value;

        const product = new Product(name, price, date );

        const ui = new UI();
        ui.addProduct(product)
        ui.resetForm();//RESET 
        ui.showMessage(`Product Added`, `success`);

        e.preventDefault();
        
}) 
document.getElementById("product-list").addEventListener("click", (e) =>{
    const ui = new UI();
    ui.deleteProduct(e.target);
})
