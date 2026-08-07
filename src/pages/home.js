import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import ServicesSection from "../components/ServicesSection.js";
import Timeline from "../components/Timeline.js";
import TestimonialCard from "../components/TestimonialCard.js";
import CTA from "../components/CTA.js";
import Footer from "../components/Footer.js";

import { testimonials } from "../data/testimonials.js";

document.body.innerHTML = `
    ${Header()}

    <main>

        ${Hero()}

        ${ServicesSection()}

        <!-- TESTIMONIALS -->
        <section class="testimonials reveal">

            <div class="container">

                <div class="section-title">

                    <p class="eyebrow">
                        WHAT PEOPLE SAY
                    </p>

                    <h2>
                        Trusted by Workers and Employers
                    </h2>

                    <p>
                        Real experiences from people who worked with MOHASEBR.
                    </p>

                </div>

                <div class="testimonial-grid">

                    ${testimonials
                        .map(testimonial => TestimonialCard(testimonial))
                        .join("")}

                </div>

            </div>

        </section>

        ${Timeline()}

        ${CTA()}

    </main>

    ${Footer()}
`;