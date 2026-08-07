import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ContactCard from "../components/ContactCard.js";
import CTA from "../components/CTA.js";

console.log("contact page loaded");
document.body.innerHTML= `
        ${Header()}

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

            ${ContactCard()}

            ${CTA()}

        </main>

        ${Footer()}
    `;
