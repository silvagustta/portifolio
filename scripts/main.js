// Mobile navigation

const menuToggle = document.querySelector("#menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

// Open and close the menu
menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );
});

// Close the menu after clicking a navigation link
primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        primaryNav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});