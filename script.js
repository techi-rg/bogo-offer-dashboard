const boxes = document.querySelectorAll(".offer-box");
const radios = document.querySelectorAll('input[name="offer"]');
const totalPrice = document.getElementById("totalPrice");

const priceMap = {
  1: 10.0,
  2: 18.0,
  3: 24.0,
};

function updateExpanded(selectedValue) {
  boxes.forEach((box) => {
    const radio = box.querySelector("input[type=radio]");
    if (radio.value === selectedValue) {
      box.classList.add("expanded");
    } else {
      box.classList.remove("expanded");
    }
  });
}

function updateTotal(selectedValue) {
  totalPrice.textContent = `Total : $${priceMap[selectedValue].toFixed(2)} USD`;
}

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    updateExpanded(radio.value);
    updateTotal(radio.value);
  });
});

// Initialize default state on load
document.addEventListener("DOMContentLoaded", () => {
  const checkedRadio = document.querySelector('input[name="offer"]:checked');
  if (checkedRadio) {
    updateExpanded(checkedRadio.value);
    updateTotal(checkedRadio.value);
  }
});
