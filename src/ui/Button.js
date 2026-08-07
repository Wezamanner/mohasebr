export default function Button(text, href, className = "") {

    return `
        <a
            href="${href}"
            class="btn ${className}"
        >
            ${text}
        </a>
    `;
}