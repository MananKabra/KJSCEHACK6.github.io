window.addEventListener("scroll",function(){
    var scrollValue = window.pageYOffset;
    var headerImage = document.querySelector("#header .header-image");
    console.log(scrollValue);

    headerImage.style.transform = "translateY(" + scrollValue*-0.2 + "px)";

    if(scrollValue>=1280){
        document.querySelector(".left-card").classList.remove("animation-stopper");
        document.querySelector(".center-card").classList.remove("animation-stopper");
        document.querySelector(".right-card").classList.remove("animation-stopper");
    }

    if(scrollValue<1280){
        document.querySelector(".left-card").classList.add("animation-stopper");
        document.querySelector(".center-card").classList.add("animation-stopper");
        document.querySelector(".right-card").classList.add("animation-stopper");
    }
})