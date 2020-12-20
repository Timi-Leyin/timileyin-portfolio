const navBar=document.querySelector('.top-header')
const hamburgerBtn =document.querySelector('.hamburger')
const navLinks=document.querySelectorAll('.top-header .nav-links .nav-item')
const navBarMobile=document.querySelector(' .top-header .nav-links')

hamburgerBtn.addEventListener('click',()=>{
navBarMobile.classList.toggle('active'); 

navLinks.forEach(link=>{
    link.classList.toggle('active')
})

document.querySelectorAll('.hamburger div').forEach(bar=>{
    bar.classList.toggle('change')
})

})


let initialPageOffset= window.pageYOffset ;


window.onscroll=function(){

    if(document.documentElement.scrollTop > 100){
        console.log('jij')
    }





    let currentPageOffset =window.pageYOffset ;

    if(initialPageOffset > currentPageOffset){
        navBar.style.top='0px'
    }else{
        navBar.style.top='-50%'
    }
    console.log(initialPageOffset)
  initialPageOffset =  currentPageOffset 
}
