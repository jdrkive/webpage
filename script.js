let cart = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartTotal += price;

    // Find the product image element
    const productImage = document.querySelector(`[alt="${productName}"]`);
    
    // Add the "added-to-cart" class to trigger the animation
    productImage.classList.add('added-to-cart');

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${formatAsCurrency(item.price)}`;
        cartItems.appendChild(li);
    });
    total.textContent = formatAsCurrency(cartTotal);
}

function checkout() {
    const confirmation = confirm(`Proceed to checkout? Total: ${formatAsCurrency(cartTotal)}`);
    if (confirmation) {
        alert('Checkout successful! Thank you for your order.');
        cart = [];
        cartTotal = 0;
        updateCart();
    } else {
        alert('Checkout canceled.');
    }
}

function formatAsCurrency(number) {
    return `Php ${number.toFixed(2)}`;
}

function navigateToCV() {
    // Replace 'path/to/your/curriculum_vitae.html' with the actual path or URL of your curriculum vitae page
    const cvPageUrl = 'cv.html';
    window.location.href = cvPageUrl;
}
