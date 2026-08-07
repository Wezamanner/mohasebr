export default function Card(content, className = "") {
    return `
        <article class="card ${className}">
            ${content}
        </article>
    `;
}