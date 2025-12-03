document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const minusBtn = counter.querySelector(".minus");
        const plusBtn = counter.querySelector(".plus");
        const number = counter.querySelector(".number");
        const priceEl = counter.querySelector("span:not(.number)"); // Narxni olamiz

        let count = parseInt(number.textContent);

        // Asl narxni toza son shaklida olish (6,55$ -> 6.55)
        let basePrice = parseFloat(
            priceEl.textContent.replace(",", ".").replace("$", "")
        );

        function updatePrice() {
            let total = basePrice * count;

            // Narxni 6,55$ formatida chiqarish
            priceEl.textContent = total.toFixed(2).replace(".", ",") + "$";
        }

        plusBtn.addEventListener("click", () => {
            count++;
            number.textContent = count;
            updatePrice();
        });

        minusBtn.addEventListener("click", () => {
            if (count > 1) {
                count--;
                number.textContent = count;
                updatePrice();
            }
        });
    });
});


// SIZE SELECTOR – o'zgartirmadim
document.addEventListener("DOMContentLoaded", () => {
    const sizeSelectors = document.querySelectorAll(".size-selector");

    sizeSelectors.forEach(selector => {
      const buttons = selector.querySelectorAll(".size-btn");

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          buttons.forEach(btn => {
            btn.classList.remove("bg-orange-500");
            btn.classList.add("bg-transparent", "border", "border-gray-400");
          });

          button.classList.add("bg-orange-500");
          button.classList.remove("bg-transparent", "border", "border-gray-400");
        });
      });
    });
});