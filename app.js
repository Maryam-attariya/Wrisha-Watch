
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank You! Your message has been sent.");

    form.reset();
});



// Cart Counter
let cartCount = 0;

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        document.getElementById("cart-count").textContent = cartCount;
    });
});


// Wishlist
const wishlist = document.querySelector(".fa-heart");

wishlist.addEventListener("click", () => {
    wishlist.classList.toggle("text-danger");

    if (wishlist.classList.contains("text-danger")) {
        alert("Added to Wishlist ❤️");
    } else {
        alert("Removed from Wishlist");
    }
});



// Search Watches
const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase();

    document.querySelectorAll(".menWatch").forEach(card => {
        let watchName = card.querySelector(".company")
            .textContent.toLowerCase();

        if (watchName.includes(value)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {

    const subscribeForm = document.getElementById("subscribeForm");

    subscribeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = this.querySelector("input").value;

        if (email === "") {
            alert("Please enter your email!");
            return;
        }

        alert("Thank you for subscribing: " + email);
        this.reset();
    });

});

// Design & Order Button
document.getElementById("designBtn").addEventListener("click", function () {
    document.getElementById("man").scrollIntoView({
        behavior: "smooth"
    });
});

// Request Virtual Button
document.getElementById("virtualBtn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});