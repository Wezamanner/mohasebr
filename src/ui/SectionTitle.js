export default function SectionTitle(title, subtitle = "") {

    return `
        <div class="section-title">

            <h2>${title}</h2>

            ${
                subtitle
                    ? `<p>${subtitle}</p>`
                    : ""
            }

        </div>
    `;
}