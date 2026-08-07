import { agency } from "../config/config.js";

export default function ContactCard() {
    return `
        <section class="contact-card reveal">

            <div class="container contact-grid">

                <div>
                    <h2>Contact Information</h2>

                    <p>
                        <strong>Phone:</strong>
                        ${agency.phone}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${agency.email}
                    </p>

                    <p>
                        <strong>Address:</strong>
                        ${agency.address}
                    </p>

                    <p>
                        <strong>Hours:</strong>
                        ${agency.workingHours}
                    </p>
                </div>

                <div class="contact-actions">

                    <a
                        class="btn btn-primary"
                        href="tel:${agency.phone.replace(/\s+/g, "")}"
                    >
                        Call Now
                    </a>

                    <a
                        class="btn btn-secondary"
                        href="https://wa.me/${agency.whatsapp}"
                        target="_blank"
                        rel="noreferrer"
                    >
                        WhatsApp
                    </a>

                    <a
                        class="btn btn-secondary"
                        href="mailto:${agency.email}"
                    >
                        Email Us
                    </a>

                </div>

            </div>

        </section>
    `;
}