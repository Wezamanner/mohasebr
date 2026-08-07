export function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

export function scrollToSection(id) {

    const section = document.querySelector(id);

    if (!section) return;

    section.scrollIntoView({

        behavior: "smooth"

    });

}