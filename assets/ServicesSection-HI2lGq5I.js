const i=[{title:"Housemaids",description:"Professionally screened and trained Ethiopian housemaids ready for overseas employment.",image:"assets/images/services/housemaid.jpg"},{title:"Visa Processing",description:"Complete assistance with documentation, visa applications and legal procedures.",image:"assets/images/services/visa.jpg"},{title:"Medical Examination",description:"Guidance through the mandatory medical examination before departure.",image:"assets/images/services/medical.jpg"},{title:"Pre-Departure Training",description:"Workers receive orientation and practical training before travelling abroad.",image:"assets/images/services/training.jpg"},{title:"Employer Recruitment",description:"Helping employers find trustworthy Ethiopian domestic workers.",image:"assets/images/services/employer.jpg"}];function s(e){return`
        <article class="card service-card">

            <div class="service-icon">
                ${e.icon||"✓"}
            </div>

            <h3>${e.title}</h3>

            <p>${e.description}</p>

        </article>
    `}function t(){return`
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
                    ${i.map(e=>s(e)).join("")}
                </div>

            </div>
        </section>
    `}export{t as S};
