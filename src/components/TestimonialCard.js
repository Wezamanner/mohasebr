import Card from "../ui/Card.js";

export default function TestimonialCard(item) {

    return Card(`
        <article class="testimonial">

            <div class="testimonial-quote">
                “
            </div>

            <div class="testimonial-content">
                <p>${item.text}</p>
            </div>

            <footer class="testimonial-person">

                <div class="testimonial-avatar">
                    ${item.name.charAt(0)}
                </div>

                <div>
                    <strong>${item.name}</strong>
                    <span>${item.country}</span>
                </div>

            </footer>

        </article>
    `, "testimonial-card");

}