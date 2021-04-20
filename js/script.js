/** @format */

(function (window) {
    "use strict";

    // if(window.location.pathname !=='index.html'){
    //     window.location.href='https://google.com'
    // }

    // declear varables
    const navBar = document.querySelector(".top-header");
    const hamburgerBtn = document.querySelector(".hamburger");
    const navLinks = document.querySelectorAll(
        ".top-header .nav-links .nav-item",
    );
    const navBarMobile = document.querySelector(" .top-header .nav-links");
    const loader = document.querySelector("#loader");
    const hero = document.querySelector(".hero");
    const cursor = document.querySelector(".cursor");
    const container = document.querySelector("#container");

    // remove loader after the page is loaded
    window.addEventListener("load", function () {
        setTimeout(function () {
            loader.classList.toggle("false");
            container.classList.toggle("true");
            document.body.classList.toggle("true");
        }, 200);
    });

    // disable add dragged images
    document.querySelectorAll("img").forEach((img) => {
        img.addEventListener("dragstart", (e) => {
            e.preventDefault();
        });
    });

    // ?toggle menu bar when clicked for mobile versions only
    hamburgerBtn.addEventListener("click", () => {
        navBarMobile.classList.toggle("active");

        navLinks.forEach((link) => {
            link.classList.toggle("active");
        });

        document.querySelectorAll(".hamburger div").forEach((bar) => {
            bar.classList.toggle("change");
        });
    });
    // follow the cursor on mouse move
    window.onmousemove = function (e) {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
    };

    const scroll_guage = document.querySelector(".scroll-guage");
    const moveBtnOnScroll = document.querySelector(".hero .btn");

    let initialPageOffset = window.pageYOffset;
    // window.addEventListener('mousemove',(e)=>{
    // moveBtnOnScroll.addEventListener('mousemove',()=>{
    //  moveBtnOnScroll.style=`margin:${e.y/window.innerHeight+10}px`
    // console.log(e.y/window.innerHeight)
    // })
    // })

    let bg_Smooth = document.querySelector(".bg-logo-img");

    window.onscroll = function () {
        scroller();
        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {
            hero.classList.add("active");
        } else {
            hero.classList.remove("active");
        }

        //---
        let currentPageOffset = window.pageYOffset;

        if (initialPageOffset > currentPageOffset) {
            navBar.style.top = "0px";
        } else {
            navBar.style.top = "-50%";
        }
        initialPageOffset = currentPageOffset;

        scroll_guage.style.width = window.pageYOffset / 17 + "%";
        // console.log(window.innerWidth)
        // console.log(window.pageYOffset / 13)
    };
    // scoll
    function scroller() {
        // bg_Smooth.style=50+'%'
        // console.log(window.pageYOffset-window.innerHeight/100+'px')
        // if( bg_Smooth.style.top =='0px'){
        //     bg_Smooth.style.top=0.02+'px'
        // }
        // if(bg_Smooth.style.top == '5px'){
        //     bg_Smooth.style.top=0.024+'px'

        // }
        const elmn = document.querySelectorAll(".scroller");
        for (let i = 0; i < elmn.length; i++) {
            const elmnOffset = elmn[i].getBoundingClientRect().top;
            if (elmnOffset < window.innerHeight) {
                elmn[i].classList.add(elmn[i].dataset.scroll);
                elmn[i].classList.add("active");
                //            if (elmn[i].dataset.scrollDelay) {
                elmn[i].setAttribute(
                    "style",
                    "animation-delay:" + elmn[i].dataset.scrollDelay + "ms",
                );
                //            }
            } else {
                elmn[i].classList.remove("active");
            }
        }
    }

    class Scrolling {
        constructor(el, callback) {
            try {
                this.el = el;
                let elOffset;
                window.onscroll = () => {
                    let nodeEl = document.querySelector(this.el);
                    elOffset = nodeEl.getBoundingClientRect().top;
                    //    console.log(elOffset);
                    callback(elOffset, nodeEl);
                };
            } catch (error) { }
        }
    }

    // new Scrolling('#about',(offset,el)=>{

    // console.log(offset)
    // })

})(window);
