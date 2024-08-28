document.addEventListener("DOMContentLoaded", function() {
    const cartItems = [];
    const cartItemsList = document.getElementById("cart-items");

    document.querySelectorAll(".add-to-cart").forEach(function(button) {
        button.addEventListener("click", function() {
            const productName = this.getAttribute("data-product");
            cartItems.push(productName);
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = "";
        cartItems.forEach(function(item) {
            const li = document.createElement("li");
            li.textContent = item;
            cartItemsList.appendChild(li);
        });
    }
});
