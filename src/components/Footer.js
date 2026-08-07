import { agency, navigation } from "../config/config.js";

export default function Footer() {
    return `
        <footer class="site-footer">

            <div class="container footer-grid">

                <!-- Brand -->
                <div class="footer-brand">

                    <a href="index.html" class="footer-logo">

                        <span class="footer-logo-mark">
                            M
                        </span>

                        <span>
                            <strong>${agency.name}</strong>
                            <small>${agency.tagline}</small>
                        </span>

                    </a>

                    <p>
                        Connecting qualified workers with trusted
                        international employment opportunities
                        through a transparent and professional
                        recruitment process.
                    </p>

                </div>


                <!-- Navigation -->
                <div class="footer-links">

                    <h3>Quick Links</h3>

                    <nav>
                        ${navigation.map(item => `
                            <a href="${item.link}">
                                ${item.title}
                            </a>
                        `).join("")}
                    </nav>

                </div>


                <!-- Contact -->
                <div class="footer-contact">

                    <h3>Contact Us</h3>

                    <p>
                        <strong>Phone</strong><br>

                        <a href="tel:${agency.phone.replace(/\s+/g, "")}">
                            ${agency.phone}
                        </a>
                    </p>

                    <p>
                        <strong>Email</strong><br>

                        <a href="mailto:${agency.email}">
                            ${agency.email}
                        </a>
                    </p>

                    <p>
                        <strong>Location</strong><br>

                        ${agency.address}
                    </p>

                </div>

            </div>


            <!-- Bottom -->

            <div class="footer-bottom">

                <div class="container footer-bottom-inner">

                    <p>
                        © ${new Date().getFullYear()}
                        ${agency.name}.
                        All rights reserved.
                    </p>

                    <p>
                        Overseas Employment Agency
                    </p>

                </div>

            </div>

        </footer>
    `;
}