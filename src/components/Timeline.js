export default function Timeline() {

    const steps = [
        {
            number: "01",
            title: "Application",
            text: "Submit your application and provide your basic personal and employment information."
        },
        {
            number: "02",
            title: "Screening",
            text: "Our recruitment team reviews your qualifications and verifies your eligibility."
        },
        {
            number: "03",
            title: "Training",
            text: "Selected candidates receive the necessary preparation and orientation."
        },
        {
            number: "04",
            title: "Documentation",
            text: "We assist with the required employment and travel documentation."
        },
        {
            number: "05",
            title: "Medical Examination",
            text: "Candidates complete the required medical examination and health checks."
        },
        {
            number: "06",
            title: "Visa Processing",
            text: "We guide you through the visa and employment authorization process."
        },
        {
            number: "07",
            title: "Departure",
            text: "Once everything is approved, you are prepared for your journey and departure."
        }
    ];

    return `
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

                    ${steps.map((step, index) => `
                        
                        <div class="process-step">

                            <div class="process-marker">
                                <span>${step.number}</span>
                            </div>

                            <div class="process-content">

                                <span class="process-step-label">
                                    STEP ${step.number}
                                </span>

                                <h3>
                                    ${step.title}
                                </h3>

                                <p>
                                    ${step.text}
                                </p>

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>

        </section>
    `;
}