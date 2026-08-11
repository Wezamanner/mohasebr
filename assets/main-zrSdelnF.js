import{a as r,h as e,s as n,H as o,F as c}from"./Footer-1h9cNQyF.js";/* empty css             */import{S as l}from"./ServicesSection-HI2lGq5I.js";import{T as d}from"./Timeline-CPB9vhfR.js";import{C as m}from"./CTA-Kw0r2QHr.js";function s(a,i,t=""){return`
        <a
            href="${i}"
            class="btn ${t}"
        >
            ${a}
        </a>
    `}function p(){return`
        <div class="verification-seal">

            <div class="verification-seal-inner">

                <span class="verification-check">✓</span>

                <strong>VERIFIED</strong>

                <span>MOHASEBR</span>

                <small>TRUSTED AGENCY</small>

            </div>

        </div>
    `}function v(){return`
        <section class="hero reveal">

            <div class="container hero-grid">

                <div class="hero-copy">

                    <p class="eyebrow">
                        ${r.name}
                    </p>

                    <h1>
                        ${e.heading}
                    </h1>

                    <p class="hero-text">
                        ${e.subHeading}
                    </p>

                    <div class="hero-actions">
                        ${s(e.primaryButton,"contact.html","primary")}
                        ${s(e.secondaryButton,"contact.html","secondary")}
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

                    ${p()}

                </div>

            </div>

            <div class="hero-stats container">

                ${n.map(a=>`
                    <div class="hero-stat">
                        <strong>${a.number}</strong>
                        <span>${a.title}</span>
                    </div>
                `).join("")}

            </div>

        </section>
    `}function u(a,i=""){return`
        <article class="card ${i}">
            ${a}
        </article>
    `}function h(a){return u(`
        <article class="testimonial">

            <div class="testimonial-quote">
                “
            </div>

            <div class="testimonial-content">
                <p>${a.text}</p>
            </div>

            <footer class="testimonial-person">

                <div class="testimonial-avatar">
                    ${a.name.charAt(0)}
                </div>

                <div>
                    <strong>${a.name}</strong>
                    <span>${a.country}</span>
                </div>

            </footer>

        </article>
    `,"testimonial-card")}const $=[{name:"Amina",country:"Saudi Arabia",text:"Everything was transparent from registration until my arrival."},{name:"Mohammed",country:"Employer",text:"The agency provided professional workers and excellent communication."},{name:"Sara",country:"Saudi Arabia",text:"I felt supported throughout the entire recruitment process."}];document.body.innerHTML=`
    ${o()}

    <main>

        ${v()}

        ${l()}

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

                    ${$.map(a=>h(a)).join("")}

                </div>

            </div>

        </section>

        ${d()}

        ${m()}

    </main>

    ${c()}
`;
