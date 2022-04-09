window.addEventListener("scroll",function(){
    var scrollValue = window.pageYOffset;
    var headerImage = document.querySelector("#header .header-image");
    console.log(scrollValue);

    headerImage.style.transform = "translateY(" + scrollValue*0.4 + "px)";
})