import{c as t,H as r,F as n,n as p,i as s,a as l,b as d}from"./navbar-B7tihyXE.js";import{C as c}from"./CTA-CP8DhSOF.js";document.body.innerHTML=`
    ${r()}

    <main>

        <!-- PAGE HERO -->

        <section class="page-hero apply-hero">

            <div class="container">

                <p class="eyebrow">
                    WORK WITH MOHASEBR
                </p>

                <h1>
                    Apply for an International Opportunity
                </h1>

                <p>
                    Take the first step toward finding a trusted
                    overseas employment opportunity. Submit your
                    information and our recruitment team will
                    contact you.
                </p>

            </div>

        </section>


        <!-- APPLICATION SECTION -->

        <section class="apply-section">

            <div class="container apply-grid">

                <!-- INFORMATION -->

                <div class="apply-info">

                    <p class="eyebrow">
                        HOW IT WORKS
                    </p>

                    <h2>
                        Start Your Application
                    </h2>

                    <p>
                        Our recruitment process is designed to be
                        clear, professional, and transparent from
                        registration to placement.
                    </p>


                    <div class="apply-steps">

                        <div class="apply-step">

                            <span>01</span>

                            <div>
                                <h3>
                                    Submit Your Details
                                </h3>

                                <p>
                                    Provide your basic information
                                    and employment preferences.
                                </p>
                            </div>

                        </div>


                        <div class="apply-step">

                            <span>02</span>

                            <div>
                                <h3>
                                    Candidate Review
                                </h3>

                                <p>
                                    Our team reviews your information
                                    and available opportunities.
                                </p>
                            </div>

                        </div>


                        <div class="apply-step">

                            <span>03</span>

                            <div>
                                <h3>
                                    Recruitment Process
                                </h3>

                                <p>
                                    Qualified candidates proceed
                                    through the required recruitment
                                    and verification stages.
                                </p>
                            </div>

                        </div>


                        <div class="apply-step">

                            <span>04</span>

                            <div>
                                <h3>
                                    Placement Support
                                </h3>

                                <p>
                                    We support successful candidates
                                    through the next steps toward
                                    overseas employment.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                <!-- APPLICATION FORM -->

                <div class="application-card">

                    <div class="application-header">

                        <p class="eyebrow">
                            APPLICATION FORM
                        </p>

                        <h2>
                            Candidate Registration
                        </h2>

                        <p>
                            Please provide accurate information.
                        </p>

                    </div>


                    <form
                        class="application-form"
                        id="applicationForm"
                    >

                        <div class="form-group">

                            <label for="fullName">
                                Full Name
                            </label>

                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Enter your full name"
                                required
                            >

                        </div>


                        <div class="form-row">

                            <div class="form-group">

                                <label for="phone">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+251 ..."
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label for="email">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                >

                            </div>

                        </div>


                        <div class="form-row">

                            <div class="form-group">

                                <label for="country">
                                    Preferred Country
                                </label>

                                <select
                                    id="country"
                                    name="country"
                                    required
                                >

                                    <option value="">
                                        Select country
                                    </option>

                                    <option value="saudi-arabia">
                                        Saudi Arabia
                                    </option>

                                    <option value="uae">
                                        United Arab Emirates
                                    </option>

                                    <option value="qatar">
                                        Qatar
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>

                                </select>

                            </div>


                            <div class="form-group">

                                <label for="position">
                                    Desired Position
                                </label>

                                <input
                                    type="text"
                                    id="position"
                                    name="position"
                                    placeholder="e.g. Driver, Housekeeper"
                                    required
                                >

                            </div>

                        </div>


                        <div class="form-group">

                            <label for="experience">
                                Work Experience
                            </label>

                            <textarea
                                id="experience"
                                name="experience"
                                rows="4"
                                placeholder="Tell us briefly about your work experience..."
                            ></textarea>

                        </div>


                        <div class="form-group">

                            <label for="message">
                                Additional Information
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="3"
                                placeholder="Anything else you would like us to know?"
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            class="btn btn-primary application-submit"
                        >
                            Submit Application
                        </button>


                        <p class="form-note">
                            By submitting this form, you agree that
                            ${t.name} may contact you regarding
                            employment opportunities.
                        </p>

                    </form>

                </div>

            </div>

        </section>


        ${c()}

    </main>

    ${n()}
`;const a=document.querySelector("#applicationForm");a.addEventListener("submit",o=>{o.preventDefault();const e=new FormData(a),i={fullName:e.get("fullName"),phone:e.get("phone"),email:e.get("email"),country:e.get("country"),position:e.get("position"),experience:e.get("experience"),message:e.get("message")};console.log("Application submitted:",i),alert(`Thank you, ${i.fullName}! Your application has been received.`),a.reset()});p();s();l();d();
