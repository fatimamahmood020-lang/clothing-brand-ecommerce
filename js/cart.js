document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.parentElement.querySelector('input');
        let value = parseInt(input.value);

        if (btn.textContent === '+') value++;
        if (btn.textContent === '-' && value > 1) value--;

        input.value = value;
    });
});

document.getElementById('clearCart')?.addEventListener('click', () => {
    document.querySelector('.cart-items').innerHTML = '';
});