window.addEventListener('scroll',function(){

    var nav_bar = this.document.querySelector(".nav-bar")

     nav_bar.classList.toggle("sticky",window.scrollY>102)
})