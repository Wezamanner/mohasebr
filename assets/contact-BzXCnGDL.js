import{a,H as o,F as t}from"./Footer-1h9cNQyF.js";/* empty css             */import{C as e}from"./CTA-Kw0r2QHr.js";function n(){return`
        <section class="contact-card reveal">

            <div class="container contact-grid">

                <div>
                    <h2>Contact Information</h2>

                    <p>
                        <strong>Phone:</strong>
                        ${a.phone}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${a.email}
                    </p>

                    <p>
                        <strong>Address:</strong>
                        ${a.address}
                    </p>

                    <p>
                        <strong>Hours:</strong>
                        ${a.workingHours}
                    </p>
                </div>

                <div class="contact-actions">

                    <a
                        class="btn btn-primary"
                        href="tel:${a.phone.replace(/\s+/g,"")}"
                    >
                        Call Now
                    </a>

                    <a
                        class="btn btn-secondary"
                        href="https://wa.me/${a.whatsapp}"
                        target="_blank"
                        rel="noreferrer"
                    >
                        WhatsApp
                    </a>

                    <a
                        class="btn btn-secondary"
                        href="mailto:${a.email}"
                    >
                        Email Us
                    </a>

                </div>

            </div>

        </section>
    `}console.log("contact page loaded");document.body.innerHTML=`
        ${o()}

        <main>

            <section class="page-hero contact-hero">

                <div class="container">

                    <p class="eyebrow">
                        CONTACT MOHASEBR
                    </p>

                    <h1>
                        Let's Start a Conversation
                    </h1>

                    <p>
                        Whether you are looking for international
                        employment opportunities or need qualified
                        workers, our team is ready to assist you.
                    </p>

                </div>

            </section>

            ${n()}

            ${e()}

        </main>

        ${t()}
    `;
