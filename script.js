const billingToggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");
const themeBtn = document.getElementById("themeBtn");
const chooseButtons = document.querySelectorAll(".choose-btn");

// Monthly and yearly pricing
billingToggle.addEventListener("change", function () {
    prices.forEach(function (price) {
        const amount = billingToggle.checked
            ? price.dataset.yearly
            : price.dataset.monthly;

        const period = billingToggle.checked ? "/year" : "/month";

        price.innerHTML = `₹${amount}<span>${period}</span>`;
    });
});

// Dark and light mode
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

// Choose a pricing plan
chooseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const plan = button.dataset.plan;

        alert(`You selected the ${plan} plan!`);
    });
});