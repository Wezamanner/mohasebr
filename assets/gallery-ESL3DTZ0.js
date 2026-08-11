import{H as t,F as a,n as s,i as n,a as o,b as c}from"./navbar-B7tihyXE.js";/* empty css             */const e=[];function l(){return!e||e.length===0?`
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
        `:`
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

                    ${e.map((i,r)=>`
                        <figure class="gallery-item">

                            <img
                                src="${i}"
                                alt="MOHASEBR recruitment activity ${r+1}"
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
    `}document.body.innerHTML=`
    ${t()}

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

        ${l()}

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

    ${a()}
`;s();n();o();c();
