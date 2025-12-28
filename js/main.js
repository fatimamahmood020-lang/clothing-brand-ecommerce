// Mobile Menu
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.style.display =
        mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// Featured Products (Dummy)
const productGrid = document.querySelector('.featured-products .product-grid');

if (productGrid) {
    productGrid.innerHTML = `
        <div class="product-card">
            <img src="images/jackets.jpg">
            <h4>Urban Jacket</h4>
            <p>₨2,999</p>
        </div>
        <div class="product-card">
            <img src="images/shirts-category.jpg">
            <h4>Cotton Shirt</h4>
            <p>₨2,499</p>
        </div>
    `;
}