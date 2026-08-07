import { services } from "../data/services.js";
import ServiceCard from "./ServiceCard.js";

export default function ServicesSection() {
    return `
        <section class="services">
            <div class="container">

                <div class="section-title">
                    <p class="eyebrow">What We Do</p>

                    <h2>
                        Complete Employment Solutions
                    </h2>

                    <p>
                        We support candidates and employers throughout
                        the overseas recruitment process.
                    </p>
                </div>

                <div class="service-grid">
                    ${services.map(service => ServiceCard(service)).join("")}
                </div>

            </div>
        </section>
    `;
}