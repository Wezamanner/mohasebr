(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const i={name:"MOHASEBR",tagline:"Overseas Employment Agency",whatsapp:"251940928282",email:"info@mohasebr.com",phone:"+251 940 928 282",address:"Ethiopia"},d=[{title:"Home",link:"index.html"},{title:"About",link:"about.html"},{title:"Services",link:"services.html"},{title:"Gallery",link:"gallery.html"},{title:"Contact",link:"contact.html"}],n={heading:"Connecting People With Global Opportunities",subHeading:"MOHASEBR connects qualified workers with trusted international employment opportunities through a transparent and professional recruitment process.",primaryButton:"Find Opportunities",secondaryButton:"Contact Us"},p=[{number:"10+",title:"Years Experience"},{number:"1,000+",title:"Workers Placed"},{number:"15+",title:"Countries"},{number:"95%",title:"Client Satisfaction"}];function m(){return` <header class="header"> 
     <div class="container header-inner">
      <a href="index.html" class="logo">
      <div class="logo-mark">M</div>
       <div class="logo-text"> 
       <strong>${i.name}</strong> 
       <span>Overseas Employment Agency</span>
        </div> </a>
         <nav class="main-nav"> ${d.map(e=>` <a href="${e.link}">
            ${e.title}</a>
             `).join("")} </nav>
              <a class="header-whatsapp" href="https://wa.me/${i.whatsapp}" target="_blank" rel="noreferrer"> WhatsApp </a>
               </div>
                </header> `}function l(e,a,r=""){return`
        <a
            href="${a}"
            class="btn ${r}"
        >
            ${e}
        </a>
    `}function u(){return`
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
                        ${i.name}
                    </p>

                    <h1>
                        ${n.heading}
                    </h1>

                    <p class="hero-text">
                        ${n.subHeading}
                    </p>

                    <div class="hero-actions">
                        ${l(n.primaryButton,"contact.html","primary")}
                        ${l(n.secondaryButton,"contact.html","secondary")}
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

                    ${u()}

                </div>

            </div>

            <div class="hero-stats container">

                ${p.map(e=>`
                    <div class="hero-stat">
                        <strong>${e.number}</strong>
                        <span>${e.title}</span>
                    </div>
                `).join("")}

            </div>

        </section>
    `}const h=[{title:"Housemaids",description:"Professionally screened and trained Ethiopian housemaids ready for overseas employment.",image:"assets/images/services/housemaid.jpg"},{title:"Visa Processing",description:"Complete assistance with documentation, visa applications and legal procedures.",image:"assets/images/services/visa.jpg"},{title:"Medical Examination",description:"Guidance through the mandatory medical examination before departure.",image:"assets/images/services/medical.jpg"},{title:"Pre-Departure Training",description:"Workers receive orientation and practical training before travelling abroad.",image:"assets/images/services/training.jpg"},{title:"Employer Recruitment",description:"Helping employers find trustworthy Ethiopian domestic workers.",image:"assets/images/services/employer.jpg"}];function g(e){return`
        <article class="card service-card">

            <div class="service-icon">
                ${e.icon||"✓"}
            </div>

            <h3>${e.title}</h3>

            <p>${e.description}</p>

        </article>
    `}function f(){return`
        <section class="services">
            <div class="container">

                <div class="section-title">
                    <p class="eyebrow">What We Do</p>

                    <h2>
                        Complete Employment Solutions
                    </h2>

                    <p>
                        We support candidates and employers throughout
                        the overseas recruitment process.
                    </p>
                </div>

                <div class="service-grid">
                    ${h.map(e=>g(e)).join("")}
                </div>

            </div>
        </section>
    `}function y(){return`
        <section class="process reveal">

            <div class="container">

                <div class="section-title process-heading">

                    <p class="eyebrow">
                        OUR PROCESS
                    </p>

                    <h2>
                        How the Process Works
                    </h2>

                    <p>
                        A clear and professional step-by-step journey
                        from application to international employment.
                    </p>

                </div>

                <div class="process-timeline">

                    ${[{number:"01",title:"Application",text:"Submit your application and provide your basic personal and employment information."},{number:"02",title:"Screening",text:"Our recruitment team reviews your qualifications and verifies your eligibility."},{number:"03",title:"Training",text:"Selected candidates receive the necessary preparation and orientation."},{number:"04",title:"Documentation",text:"We assist with the required employment and travel documentation."},{number:"05",title:"Medical Examination",text:"Candidates complete the required medical examination and health checks."},{number:"06",title:"Visa Processing",text:"We guide you through the visa and employment authorization process."},{number:"07",title:"Departure",text:"Once everything is approved, you are prepared for your journey and departure."}].map((a,r)=>`
                        
                        <div class="process-step">

                            <div class="process-marker">
                                <span>${a.number}</span>
                            </div>

                            <div class="process-content">

                                <span class="process-step-label">
                                    STEP ${a.number}
                                </span>

                                <h3>
                                    ${a.title}
                                </h3>

                                <p>
                                    ${a.text}
                                </p>

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>

        </section>
    `}function $(e,a=""){return`
        <article class="card ${a}">
            ${e}
        </article>
    `}function b(e){return $(`
        <article class="testimonial">

            <div class="testimonial-quote">
                “
            </div>

            <div class="testimonial-content">
                <p>${e.text}</p>
            </div>

            <footer class="testimonial-person">

                <div class="testimonial-avatar">
                    ${e.name.charAt(0)}
                </div>

                <div>
                    <strong>${e.name}</strong>
                    <span>${e.country}</span>
                </div>

            </footer>

        </article>
    `,"testimonial-card")}function E(){return`
        <section class="cta reveal">

            <div class="container">

                <div class="cta-card">

                    <div class="cta-content">

                        <p class="eyebrow">
                            TAKE THE NEXT STEP
                        </p>

                        <h2>
                            Ready to Start Your Journey?
                        </h2>

                        <p>
                            Contact ${i.name} today to begin your
                            overseas employment process or request
                            qualified Ethiopian workers.
                        </p>

                        <div class="cta-actions">

                            <a
                                href="contact.html"
                                class="cta-primary"
                            >
                                Apply Today
                            </a>

                            <a
                                href="https://wa.me/${i.whatsapp}"
                                target="_blank"
                                rel="noreferrer"
                                class="cta-whatsapp"
                            >
                                Chat on WhatsApp
                            </a>

                        </div>

                    </div>

                    <div class="cta-decoration">

                        <div class="cta-circle cta-circle-one"></div>

                        <div class="cta-circle cta-circle-two"></div>

                        <div class="cta-icon">
                            →
                        </div>

                    </div>

                </div>

            </div>

        </section>
    `}function w(){return`
        <footer class="site-footer">

            <div class="container footer-grid">

                <!-- Brand -->
                <div class="footer-brand">

                    <a href="index.html" class="footer-logo">

                        <span class="footer-logo-mark">
                            M
                        </span>

                        <span>
                            <strong>${i.name}</strong>
                            <small>${i.tagline}</small>
                        </span>

                    </a>

                    <p>
                        Connecting qualified workers with trusted
                        international employment opportunities
                        through a transparent and professional
                        recruitment process.
                    </p>

                </div>


                <!-- Navigation -->
                <div class="footer-links">

                    <h3>Quick Links</h3>

                    <nav>
                        ${d.map(e=>`
                            <a href="${e.link}">
                                ${e.title}
                            </a>
                        `).join("")}
                    </nav>

                </div>


                <!-- Contact -->
                <div class="footer-contact">

                    <h3>Contact Us</h3>

                    <p>
                        <strong>Phone</strong><br>

                        <a href="tel:${i.phone.replace(/\s+/g,"")}">
                            ${i.phone}
                        </a>
                    </p>

                    <p>
                        <strong>Email</strong><br>

                        <a href="mailto:${i.email}">
                            ${i.email}
                        </a>
                    </p>

                    <p>
                        <strong>Location</strong><br>

                        ${i.address}
                    </p>

                </div>

            </div>


            <!-- Bottom -->

            <div class="footer-bottom">

                <div class="container footer-bottom-inner">

                    <p>
                        © ${new Date().getFullYear()}
                        ${i.name}.
                        All rights reserved.
                    </p>

                    <p>
                        Overseas Employment Agency
                    </p>

                </div>

            </div>

        </footer>
    `}const S=[{name:"Amina",country:"Saudi Arabia",text:"Everything was transparent from registration until my arrival."},{name:"Mohammed",country:"Employer",text:"The agency provided professional workers and excellent communication."},{name:"Sara",country:"Saudi Arabia",text:"I felt supported throughout the entire recruitment process."}];document.body.innerHTML=`
    ${m()}

    <main>

        ${v()}

        ${f()}

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

                    ${S.map(e=>b(e)).join("")}

                </div>

            </div>

        </section>

        ${y()}

        ${E()}

    </main>

    ${w()}
`;
