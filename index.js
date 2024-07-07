document.addEventListener('DOMContentLoaded', () => {

    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.querySelector('.total-price');
    let cart = [];

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.innerHTML = `${item.name} -$${item.price} x ${item.quantity} <button class="remove-from-cart-btn" data-id='${item.id}">Remove</button>`;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });
totalPrice.textContent = total.toFixed(2);

document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
    button.addEventListener('click', removeFromCart);
});
    }


    function addToCart(event) {
        const button = event.target;
        const productElement = button.closest('.product');
        const id = productElement.dataset.id;
        const name = productElement.dataset.name;
        const price = parseFloat(productElement.dataset.price);
        const exisitingItem = cart.find(item => item.id === id);

        if (exisitingItem) {
            exisitingItem.quantity += 1;
        }else {
            cart.push({id, name, price, quanity: 1});
        }
        updateCart();
    }

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });

});