import { agency, navigation } from "../config/config.js";
 export default function Header() {
     return ` <header class="header"> 
     <div class="container header-inner">
      <a href="index.html" class="logo">
      <div class="logo-mark">M</div>
       <div class="logo-text"> 
       <strong>${agency.name}</strong> 
       <span>Overseas Employment Agency</span>
        </div> </a>
         <nav class="main-nav"> ${navigation.map(item => ` <a href="${item.link}">
            ${item.title}</a>
             `).join("")} </nav>
              <a class="header-whatsapp" href="https://wa.me/${agency.whatsapp}" target="_blank" rel="noreferrer"> WhatsApp </a>
               </div>
                </header> `; }