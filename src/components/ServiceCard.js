export default function ServiceCard(service) {
    return `
        <article class="card service-card">

            <div class="service-icon">
                ${service.icon || "✓"}
            </div>

            <h3>${service.title}</h3>

            <p>${service.description}</p>

        </article>
    `;
}