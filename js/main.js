// ===== MOBILE MENU =====
const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });
}