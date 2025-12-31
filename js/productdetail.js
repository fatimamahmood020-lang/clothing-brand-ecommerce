// ===== PRODUCT DETAIL JS =====

// Image change
function changeImage(el) {
    document.getElementById("mainProductImage").src = el.src;

    document.querySelectorAll(".thumbnail").forEach(img => {
        img.classList.remove("active");
    });
    el.classList.add("active");
}

// Quantity buttons
function increaseQty() {
    const qty = document.getElementById("quantity");
    qty.value = parseInt(qty.value) + 1;
}

function decreaseQty() {
    const qty = document.getElementById("quantity");
    if (qty.value > 1) qty.value--;
}

// Tabs
function openTab(evt, tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });

    document.querySelectorAll(".tab-header").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}