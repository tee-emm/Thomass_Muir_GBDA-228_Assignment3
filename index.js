// typed.js animation (first page)
$(function () {
    $(".animated-type").typed({
        strings: ["a student at the Univesity of Waterloo",
            "a digital artist and", "an aspiring UX Designer. <br> Welcome to my site."
        ],
        typeSpeed: 11,
        backSpeed: 5,
        loop: false,
        backDelay: 800
    });
});

// Code copied from: https://codepen.io/cristaleonard/pen/QYyQrM
// Author: Crista Leonard
// Name: Go Go Coding Rangers
// Description: Displays a scrolling progress indicator
// Date retrieved: Sunday, December 6, 2020

// Copied Code Starts
// Scroll Indicator
// scroll indicator
var sections = document.querySelectorAll('section')
var currentPage = 0;
var currentPage = 0;
function reset() {
    for (var i = 0; i < scrollIndicator.children.length; i++) {
        scrollIndicator.children[i].classList.remove('current-page')
    }
}

// copied code ends

// copied code ends

window.addEventListener('scroll', function () {
    let docHeight = ((document.height !== undefined) ? document.height : document.body.offsetHeight / window.innerHeight)
    if (!docHeight) return

    const scrollTop = window.scrollY
    let scroll = Math.floor(scrollTop / window.innerHeight)
    if (currentPage !== scroll) {
        let oldPage = currentPage
        console.log(oldPage)
        currentPage = scroll
        var scrollIndicator = document.querySelector('.scroll-indicator')
        scrollIndicator.children[oldPage].classList.remove("current-page")
        scrollIndicator.children[currentPage].classList.add("current-page")
        scrollIndicator.children[scrollIndicator.children.length - 1].innerHTML = "<span class='text-detail'>" + 
        String(currentPage + 1).padStart(2, "0") + ".</span> &nbsp;&nbsp;| &nbsp; " + 
        ["Welcome", "About Me", "Poetry", "Other Art", "Contact Me"][currentPage] + ""
    }
})

// end scroll indicator


// scrolls to certain section on page
function scrollToSection(id) {
    let element = document.getElementById(id)
    element.scrollIntoView();

}