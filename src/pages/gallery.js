import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import GalleryGrid from "../components/GalleryGrid.js";

document.body.innerHTML = `
    ${Header()}

    <main>

        <section class="page-hero gallery-hero">
            <div class="container">

                <p class="eyebrow">Our Gallery</p>

                <h1>
                    Our Work In Pictures
                </h1>

                <p>
                    Explore moments from our recruitment activities,
                    candidate preparation and overseas employment journey.
                </p>

            </div>
        </section>

        ${GalleryGrid()}

        <section class="gallery-cta">
            <div class="container">

                <div class="gallery-cta-inner">

                    <div>
                        <p class="eyebrow">Have Questions?</p>

                        <h2>
                            Want to Learn More About Our Services?
                        </h2>

                        <p>
                            Our team is ready to answer your questions
                            and guide you through the recruitment process.
                        </p>
                    </div>

                    <a href="contact.html" class="btn primary">
                        Contact Us
                    </a>

                </div>

            </div>
        </section>

    </main>

    ${Footer()}
`;