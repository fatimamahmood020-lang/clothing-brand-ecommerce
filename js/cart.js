document.addEventListener("DOMContentLoaded", () => {

  // Update item total and summary
  function updateItemTotal(item) {
    const price = Number(item.querySelector(".item-price").innerText.replace(/₨|,/g, ""));
    const qty = Number(item.querySelector("input[type='number']").value);
    const totalEl = item.querySelector(".item-total");
    totalEl.innerText = "₨" + (price * qty).toLocaleString();
    updateSummary();
  }

  // Update order summary
  function updateSummary() {
    const items = document.querySelectorAll(".cart-item");
    let subtotal = 0;

    items.forEach(item => {
      const total = Number(item.querySelector(".item-total").innerText.replace(/₨|,/g, ""));
      subtotal += total;
    });

    const shipping = subtotal > 10000 ? 0 : 500;
    const tax = subtotal > 0 ? 1000 : 0;
    const grandTotal = subtotal + shipping + tax;

    const summaryRows = document.querySelectorAll(".summary-row");
    if(summaryRows.length >= 4){
      summaryRows[0].children[1].innerText = "₨" + subtotal.toLocaleString();   // Subtotal
      summaryRows[1].children[1].innerText = "₨" + shipping.toLocaleString();   // Shipping
      summaryRows[2].children[1].innerText = "₨" + tax.toLocaleString();        // Tax
      summaryRows[3].children[1].innerText = "₨" + grandTotal.toLocaleString(); // Total
    }
  }

  // Initialize cart items
  document.querySelectorAll(".cart-item").forEach(item => {
    const minusBtn = item.querySelector(".qty-btn:first-child");
    const plusBtn = item.querySelector(".qty-btn:last-child");
    const qtyInput = item.querySelector("input[type='number']");

    // Buttons
    plusBtn.addEventListener("click", () => {
      qtyInput.value = Number(qtyInput.value) + 1;
      updateItemTotal(item);
    });

    minusBtn.addEventListener("click", () => {
      if (qtyInput.value > 1) {
        qtyInput.value = Number(qtyInput.value) - 1;
        updateItemTotal(item);
      }
    });

    // Input change
    qtyInput.addEventListener("change", () => {
      if (qtyInput.value < 1) qtyInput.value = 1;
      updateItemTotal(item);
    });
  });

  // Remove item
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".cart-item");
      item.remove();
      updateSummary();
    });
  });

  // Clear cart
  const clearBtn = document.getElementById("clearCart");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      document.querySelectorAll(".cart-item").forEach(item => item.remove());
      updateSummary();
    });
  }

});
