import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ServicesSection from "../components/ServicesSection.js";

document.body.innerHTML = `
    ${Header()}

    <main>
        <section class="page-hero">
            <div class="container">
                <p class="eyebrow">Our Services</p>
                <h1>Professional Recruitment Services</h1>
                <p>
                    Reliable overseas employment solutions for workers and
                    employers, with a transparent recruitment process from
                    registration to placement.
                </p>
            </div>
        </section>

        ${ServicesSection()}
    </main>

    ${Footer()}
`;