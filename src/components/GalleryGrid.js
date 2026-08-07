import { gallery } from "../data/gallery.js";

export default function GalleryGrid() {

    if (!gallery || gallery.length === 0) {
        return `
            <section class="gallery-section">
                <div class="container">

                    <div class="section-title">
                        <p class="eyebrow">Our Activities</p>
                        <h2>Gallery</h2>
                        <p>
                            Explore our recruitment activities and
                            overseas employment services.
                        </p>
                    </div>

                    <div class="gallery-empty">
                        <div class="gallery-empty-icon">◎</div>

                        <h3>Gallery Coming Soon</h3>

                        <p>
                            Our gallery is currently being prepared.
                            Photos of our recruitment activities will
                            be available here soon.
                        </p>
                    </div>

                </div>
            </section>
        `;
    }

    return `
        <section class="gallery-section">

            <div class="container">

                <div class="section-title">
                    <p class="eyebrow">Our Activities</p>

                    <h2>Recruitment & Employment</h2>

                    <p>
                        A look at the people and activities behind
                        our recruitment services.
                    </p>
                </div>

                <div class="gallery-grid">

                    ${gallery.map((image, index) => `
                        <figure class="gallery-item">

                            <img
                                src="${image}"
                                alt="MOHASEBR recruitment activity ${index + 1}"
                                loading="lazy"
                                onerror="this.parentElement.classList.add('image-error')"
                            >

                            <figcaption>
                                <h3>Recruitment Activity</h3>
                                <p>
                                    MOHASEBR overseas employment services
                                </p>
                            </figcaption>

                        </figure>
                    `).join("")}

                </div>

            </div>

        </section>
    `;
}