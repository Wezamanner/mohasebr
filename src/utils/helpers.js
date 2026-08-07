// ================================
// DOM Helpers
// ================================

export function $(selector){

    return document.querySelector(selector);

}

export function $$(selector){

    return document.querySelectorAll(selector);

}

// ================================
// Create Element
// ================================

export function createElement(tag,className=""){

    const element=document.createElement(tag);

    if(className){

        element.className=className;

    }

    return element;

}

// ================================
// Smooth Scroll
// ================================

export function smoothScroll(id){

    document.querySelector(id).scrollIntoView({

        behavior:"smooth"

    });

}

// ================================
// Current Year
// ================================

export function currentYear(){

    return new Date().getFullYear();

}