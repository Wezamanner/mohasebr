(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const r={name:"MOHASEBR",tagline:"Overseas Employment Agency",whatsapp:"251940928282",email:"info@mohasebr.com",phone:"+251 940 928 282",address:"Ethiopia",workingHours:"Monday - Friday, 8:00 AM - 5:00 PM"},i=[{title:"Home",link:"index.html"},{title:"About",link:"about.html"},{title:"Services",link:"services.html"},{title:"Gallery",link:"gallery.html"},{title:"Contact",link:"contact.html"}],c={heading:"Connecting People With Global Opportunities",subHeading:"MOHASEBR connects qualified workers with trusted international employment opportunities through a transparent and professional recruitment process.",primaryButton:"Find Opportunities",secondaryButton:"Contact Us"},p=[{number:"10+",title:"Years Experience"},{number:"1,000+",title:"Workers Placed"},{number:"15+",title:"Countries"},{number:"95%",title:"Client Satisfaction"}];function d(){return` <header class="header"> 
     <div class="container header-inner">
      <a href="index.html" class="logo">
      <div class="logo-mark">M</div>
       <div class="logo-text"> 
       <strong>${r.name}</strong> 
       <span>Overseas Employment Agency</span>
        </div> </a>
         <nav class="main-nav"> ${i.map(n=>` <a href="${n.link}">
            ${n.title}</a>
             `).join("")} </nav>
              <a class="header-whatsapp" href="https://wa.me/${r.whatsapp}" target="_blank" rel="noreferrer"> WhatsApp </a>
               </div>
                </header> `}function m(){return`
        <footer class="site-footer">

            <div class="container footer-grid">

                <!-- Brand -->
                <div class="footer-brand">

                    <a href="index.html" class="footer-logo">

                        <span class="footer-logo-mark">
                            M
                        </span>

                        <span>
                            <strong>${r.name}</strong>
                            <small>${r.tagline}</small>
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
                        ${i.map(n=>`
                            <a href="${n.link}">
                                ${n.title}
                            </a>
                        `).join("")}
                    </nav>

                </div>


                <!-- Contact -->
                <div class="footer-contact">

                    <h3>Contact Us</h3>

                    <p>
                        <strong>Phone</strong><br>

                        <a href="tel:${r.phone.replace(/\s+/g,"")}">
                            ${r.phone}
                        </a>
                    </p>

                    <p>
                        <strong>Email</strong><br>

                        <a href="mailto:${r.email}">
                            ${r.email}
                        </a>
                    </p>

                    <p>
                        <strong>Location</strong><br>

                        ${r.address}
                    </p>

                </div>

            </div>


            <!-- Bottom -->

            <div class="footer-bottom">

                <div class="container footer-bottom-inner">

                    <p>
                        © ${new Date().getFullYear()}
                        ${r.name}.
                        All rights reserved.
                    </p>

                    <p>
                        Overseas Employment Agency
                    </p>

                </div>

            </div>

        </footer>
    `}export{m as F,d as H,r as a,c as h,p as s};
