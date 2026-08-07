import { agency, hero, statistics } from "../config/config.js";
import Button from "../ui/Button.js";
import VerificationSeal from "./VerificationSeal.js";

export default function Hero() {
    return `
        <section class="hero reveal">

            <div class="container hero-grid">

                <div class="hero-copy">

                    <p class="eyebrow">
                        ${agency.name}
                    </p>

                    <h1>
                        ${hero.heading}
                    </h1>

                    <p class="hero-text">
                        ${hero.subHeading}
                    </p>

                    <div class="hero-actions">
                        ${Button(hero.primaryButton, "contact.html", "primary")}
                        ${Button(hero.secondaryButton, "contact.html", "secondary")}
                    </div>

                    <ul class="hero-meta">
                        <li>Licensed Agency</li>
                        <li>Saudi Arabia Recruitment</li>
                        <li>Transparent Process</li>
                    </ul>

                </div>

                <div class="hero-visual">

                    <img
                        src="assets/images/hero/hero.jpg"
                        alt="MOHASEBR workers preparing for overseas employment"
                    >

                    ${VerificationSeal()}

                </div>

            </div>

            <div class="hero-stats container">

                ${statistics.map(stat => `
                    <div class="hero-stat">
                        <strong>${stat.number}</strong>
                        <span>${stat.title}</span>
                    </div>
                `).join("")}

            </div>

        </section>
    `;
}