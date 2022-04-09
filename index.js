window.addEventListener("scroll",function(){
    var scrollValue = window.pageYOffset;
    var headerImage = document.querySelector("#header .header-image");
    console.log(scrollValue);

    headerImage.style.transform = "translateY(" + scrollValue*0.4 + "px)";

    if(scrollValue>=390){
        document.querySelector(".left-card").classList.remove("animation-stopper");
    }

    if(scrollValue<390){
        document.querySelector(".left-card").classList.add("animation-stopper");
    }
})