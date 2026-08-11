(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const o={name:"MOHASEBR",tagline:"Overseas Employment Agency",whatsapp:"251940928282",email:"info@mohasebr.com",phone:"+251 940 928 282",address:"Ethiopia",workingHours:"Monday - Friday, 8:00 AM - 5:00 PM"},l=[{title:"Home",link:"index.html"},{title:"About",link:"about.html"},{title:"Services",link:"services.html"},{title:"Gallery",link:"gallery.html"},{title:"Contact",link:"contact.html"}],d={heading:"Connecting People With Global Opportunities",subHeading:"MOHASEBR connects qualified workers with trusted international employment opportunities through a transparent and professional recruitment process.",primaryButton:"Find Opportunities",secondaryButton:"Contact Us"},u=[{number:"10+",title:"Years Experience"},{number:"1,000+",title:"Workers Placed"},{number:"15+",title:"Countries"},{number:"95%",title:"Client Satisfaction"}];function p(){return`
        <header class="site-header">

            <div class="container nav-container">

                <a href="index.html" class="logo">

                    <div class="logo-mark">
                        MS
                    </div>

                    <div class="logo-text">

                        <strong>
                            ${o.name}
                        </strong>

                        <span>
                            ${o.tagline}
                        </span>

                    </div>

                </a>


                <nav class="desktop-nav">

                    ${l.map(e=>`
                        <a href="${e.link}">
                            ${e.title}
                        </a>
                    `).join("")}

                </nav>


                <div class="nav-actions">

                    <a
                        class="header-whatsapp"
                        href="https://wa.me/${o.whatsapp}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a>


                    <button
                        class="theme-toggle"
                        type="button"
                        aria-label="Switch to dark mode"
                    >
                        ☾
                    </button>


                    <button
                        class="menu-btn"
                        type="button"
                        aria-label="Open navigation"
                        aria-expanded="false"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>

            </div>


            <nav class="mobile-nav">

                ${l.map(e=>`
                    <a href="${e.link}">
                        ${e.title}
                    </a>
                `).join("")}

            </nav>

        </header>
    `}function m(){return`
        <footer class="site-footer">

            <div class="container footer-grid">

                <!-- Brand -->
                <div class="footer-brand">

                    <a href="index.html" class="footer-logo">

                        <span class="footer-logo-mark">
                            M
                        </span>

                        <span>
                            <strong>${o.name}</strong>
                            <small>${o.tagline}</small>
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
                        ${l.map(e=>`
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

                        <a href="tel:${o.phone.replace(/\s+/g,"")}">
                            ${o.phone}
                        </a>
                    </p>

                    <p>
                        <strong>Email</strong><br>

                        <a href="mailto:${o.email}">
                            ${o.email}
                        </a>
                    </p>

                    <p>
                        <strong>Location</strong><br>

                        ${o.address}
                    </p>

                </div>

            </div>


            <!-- Bottom -->

            <div class="footer-bottom">

                <div class="container footer-bottom-inner">

                    <p>
                        © ${new Date().getFullYear()}
                        ${o.name}.
                        All rights reserved.
                    </p>

                    <p>
                        Overseas Employment Agency
                    </p>

                </div>

            </div>

        </footer>
    `}function h(){const e=document.querySelector(".site-header");if(!e)return;const t=()=>{window.scrollY>30?e.classList.add("scrolled"):e.classList.remove("scrolled")};t(),window.addEventListener("scroll",t)}function f(){const e=document.querySelector(".menu-btn"),t=document.querySelector(".mobile-nav");!e||!t||(e.addEventListener("click",()=>{const s=t.classList.toggle("open");e.classList.toggle("active"),e.setAttribute("aria-expanded",s?"true":"false")}),t.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{t.classList.remove("open"),e.classList.remove("active"),e.setAttribute("aria-expanded","false")})}))}function g(){let e=window.location.pathname.split("/").pop();(!e||e==="")&&(e="index.html"),document.querySelectorAll("nav a").forEach(t=>{t.getAttribute("href")===e&&t.classList.add("active")})}function v(){const e=document.querySelector(".theme-toggle"),t=document.documentElement;localStorage.getItem("theme")==="dark"?t.classList.add("dark"):t.classList.remove("dark"),c(e),e&&e.addEventListener("click",()=>{const r=t.classList.toggle("dark");localStorage.setItem("theme",r?"dark":"light"),c(e)})}function c(e){if(!e)return;const t=document.documentElement.classList.contains("dark");e.textContent=t?"☀":"☾",e.setAttribute("aria-label",t?"Switch to light mode":"Switch to dark mode")}export{m as F,p as H,g as a,v as b,o as c,d as h,f as i,h as n,u as s};
