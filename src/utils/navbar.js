export default function navbar() {

    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}
export function initNavbar() {

    const button = document.querySelector(".menu-btn");

    const menu = document.querySelector(".mobile-nav");

    if (!button || !menu) return;

    button.addEventListener("click", () => {

        menu.classList.toggle("open");

        button.classList.toggle("active");

    });

    const links = menu.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("open");

            button.classList.remove("active");

        });

    });

}
const currentPage = location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});