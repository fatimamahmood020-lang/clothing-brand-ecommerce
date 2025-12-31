document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".cart-item").forEach(item => {

    const minusBtn = item.querySelector(".qty-btn:first-child");
    const plusBtn = item.querySelector(".qty-btn:last-child");
    const qtyInput = item.querySelector("input[type='number']");
    const priceText = item.querySelector(".item-price").innerText
      .replace("₨", "")
      .replace(/,/g, "");
    const totalEl = item.querySelector(".item-total");

    const price = parseInt(priceText);

    function updateTotal() {
      totalEl.innerText = "₨" + (price * qtyInput.value).toLocaleString();
      updateSummary();
    }

    plusBtn.addEventListener("click", () => {
      qtyInput.value = parseInt(qtyInput.value) + 1;
      updateTotal();
    });

    minusBtn.addEventListener("click", () => {
      if (qtyInput.value > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
        updateTotal();
      }
    });

    qtyInput.addEventListener("change", updateTotal);
  });

  // Remove item
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".cart-item").remove();
      updateSummary();
    });
  });

  // Clear cart (safe)
  const clearBtn = document.getElementById("clearCart");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      document.querySelectorAll(".cart-item").forEach(item => item.remove());
      updateSummary();
    });
  }

  function updateSummary() {
    let subtotal = 0;

    document.querySelectorAll(".cart-item").forEach(item => {
      const total = item.querySelector(".item-total").innerText
        .replace("₨", "")
        .replace(/,/g, "");
      subtotal += parseInt(total);
    });

    const shipping = subtotal > 10000 ? 0 : 500;
    const tax = subtotal > 0 ? 1000 : 0;
    const grandTotal = subtotal + shipping + tax;

    document.querySelector(".summary-row span:last-child").innerText =
      "₨" + subtotal.toLocaleString();
    document.querySelectorAll(".summary-row")[1].children[1].innerText =
      "₨" + shipping.toLocaleString();
    document.querySelectorAll(".summary-row")[2].children[1].innerText =
      "₨" + tax.toLocaleString();
    document.querySelector(".summary-row.total span:last-child").innerText =
      "₨" + grandTotal.toLocaleString();
  }

});