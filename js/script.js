/** @format */


(function (window) {
    "use strict";
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
    anime({
        targets: '#loader svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutSine',
        duration: 2000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });
      let ll=document.querySelector('path').getTotalLength();
      
              const tilt = document.querySelectorAll('.tilt');
      
              VanillaTilt.init(tilt, {
                  reverse: true,
                  max: 15,
                  speed: 200,
                  scale: 1.02,
                  maxGlare: 100,
                  glare: false,
                  reset: true,
                  transition: true,
      
              });
      
              new Typed('#typewritter', {
                  strings: ['<Graphics Designer />', '<Web Developer />', '<UI Designer />'],
                  typeSpeed: 100,
                  startDelay: 50,
                  showCursor: false,
                  contentType: 'text',
                  cursorChar: '_',
                  backSpeed: 50,
                  loop: true
              })
    // remove loader after the page is loaded
    window.addEventListener("load", function () {
        setTimeout(function () {
            let loaderTL= gsap.timeline({defaults:{
                duration:0.6,
                stagger:0.1,
                ease:'Power2.easeInOut',
            }});
           loaderTL.to('#loader .load-4',{
           opacity:0
            })
           loaderTL.to('#loader .load-3',{
            width:0,
        })
        loaderTL.to('#loader .load-2',{
            width:0,

            })
            loaderTL.to('#loader .load-1',{
                width:0,
            onComplete:()=>{
                loaderTL.to('.body-content-loaded',{
                    opacity:1,
                    stagger:0.1
                     })
                     loader.remove()
                document.body.classList.toggle("true");  
            }
            })
          
        });
    });

    // disable add dragged images
    document.querySelectorAll("img").forEach((img) => {
        img.addEventListener("dragstart", (e) => {
            e.preventDefault();
        });
        img.style.userSelect='none'
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
        cursor.style.top = e.pageY-10 + "px";
        cursor.style.left = e.pageX-10 + "px";
    //    alert( document.querySelector('.cursor:before'))
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
        scrollTo('.projects .project')('active');

        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {
            // hero.classList.add("active");
            document.querySelector('.back-top-top').classList.add('active')
        } else {
            // hero.classList.remove("active");
            document.querySelector('.back-top-top').classList.remove('active')
        }

        //---
        let currentPageOffset = window.pageYOffset;

        if (initialPageOffset > currentPageOffset) {
            navBar.style.top = "0px";
        } else {
            navBar.style.top = "-50%";
        }
        initialPageOffset = currentPageOffset;
let scrollTop=window.scrollY,
docHeight=document.body.offsetHeight,
winHeight=window.innerHeight,
scrollPercent=scrollTop/(docHeight - winHeight),
scrollPercentRounded=Math.round(scrollPercent * 100)
        scroll_guage.style.width = scrollPercentRounded + "%";
        
    };
    // scoll
    function scroller() {

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

    function scrollTo(target) {
       return function(className){
        const elmn = document.querySelectorAll(target);
        for (let i = 0; i < elmn.length; i++) {
            const elmnOffset = elmn[i].getBoundingClientRect().top;
            if (elmnOffset < window.innerHeight-window.innerHeight/2) {
                elmn[i].classList.add(className);

                gsap.to('#'+ elmn[i].getAttribute('id') +' .isLoading',{
                    opacity:1,
                    duration:0.6,
                    stagger:{
                        amount:1
                    }
                });
            
               
            } else {
                elmn[i].classList.remove(className);
                gsap.to('#'+ elmn[i].getAttribute('id') +' .isLoading',{
                  opacity:0
                });
            }
        }
       }
    }




})(window);
