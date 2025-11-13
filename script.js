document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const minusBtn = counter.querySelector(".minus");
        const plusBtn = counter.querySelector(".plus");
        const number = counter.querySelector(".number");

        let count = parseInt(number.textContent);

        plusBtn.addEventListener("click", () => {
            count++;
            number.textContent = count;
        });

        minusBtn.addEventListener("click", () => {
            if (count > 1) {
                count--;
                number.textContent = count;
            }
        });
    });
});

  document.addEventListener("DOMContentLoaded", () => {
    // Har bir pizza uchun alohida size selector topamiz
    const sizeSelectors = document.querySelectorAll(".size-selector");

    sizeSelectors.forEach(selector => {
      const buttons = selector.querySelectorAll(".size-btn");

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          // Avval hammasidan aktiv rangni olib tashlaymiz
          buttons.forEach(btn => {
            btn.classList.remove("bg-orange-500");
            btn.classList.add("bg-transparent", "border", "border-gray-400");
          });

          // Tanlangan tugmaga aktiv rang beramiz
          button.classList.add("bg-orange-500");
          button.classList.remove("bg-transparent", "border", "border-gray-400");
        });
      });
    });
  });