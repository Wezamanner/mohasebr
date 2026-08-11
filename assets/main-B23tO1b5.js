import{c as r,h as i,s as n,H as o,F as c,n as l,i as d,a as m,b as v}from"./navbar-B7tihyXE.js";/* empty css             */import{S as p}from"./ServicesSection-HI2lGq5I.js";import{T as u}from"./Timeline-CPB9vhfR.js";import{C as h}from"./CTA-CP8DhSOF.js";function s(a,e,t=""){return`
        <a
            href="${e}"
            class="btn ${t}"
        >
            ${a}
        </a>
    `}function $(){return`
        <div class="verification-seal">

            <div class="verification-seal-inner">

                <span class="verification-check">✓</span>

                <strong>VERIFIED</strong>

                <span>MOHASEBR</span>

                <small>TRUSTED AGENCY</small>

            </div>

        </div>
    `}function f(){return`
        <section class="hero reveal">

            <div class="container hero-grid">

                <div class="hero-copy">

                    <p class="eyebrow">
                        ${r.name}
                    </p>

                    <h1>
                        ${i.heading}
                    </h1>

                    <p class="hero-text">
                        ${i.subHeading}
                    </p>

                    <div class="hero-actions">
                        ${s(i.primaryButton,"contact.html","primary")}
                        ${s(i.secondaryButton,"contact.html","secondary")}
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

                    ${$()}

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
    `}function y(a,e=""){return`
        <article class="card ${e}">
            ${a}
        </article>
    `}function g(a){return y(`
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
    `,"testimonial-card")}const A=[{name:"Amina",country:"Saudi Arabia",text:"Everything was transparent from registration until my arrival."},{name:"Mohammed",country:"Employer",text:"The agency provided professional workers and excellent communication."},{name:"Sara",country:"Saudi Arabia",text:"I felt supported throughout the entire recruitment process."}];document.body.innerHTML=`

    ${o()}


    <main>

        ${f()}


        ${p()}


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

                    ${A.map(a=>g(a)).join("")}

                </div>

            </div>

        </section>


        ${u()}


        ${h()}

    </main>


    ${c()}

`;l();d();m();v();
