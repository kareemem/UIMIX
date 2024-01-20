// change back ground header
let img = [
    "img/wallpaperflare.com_wallpaper (4).jpg",
    "img/wallpaperflare.com_wallpaper (3).jpg",
    "img/wallpaperflare.com_wallpaper (5).jpg",
];
let right = document.querySelector(".arrowRight");
let left = document.querySelector(".arrowLeft");
let home = document.querySelector("#home");
let i = 0;
home.style.backgroundImage = `url('${img[i]}')`;
right.addEventListener("click", function () {
    i = (i + 1) % img.length; //circular qeue
    home.style.backgroundImage = `url('${img[i]}')`;
});

left.addEventListener("click", function () {
    if (i == 0) {
        i = 2;
    } else {
        i = i - 1;
    }
    home.style.backgroundImage = `url('${img[i]}')`;
});

// scroll by jquery


$("a[href^='#']").click(function (eventInfo) { 
    let aHref = eventInfo.target.getAttribute('href');
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset-$('nav').innerHeight()},2000)
    
});


$('#btnUp').fadeOut();
$(window).scroll(function(){
    let test =$('#about').offset().top
    let windowScroll=$(window).scrollTop()
    if(windowScroll > test){
        $('#btnUp').fadeIn(500);
    }else{
        $('#btnUp').fadeOut(500);
    }
})

// wow
new WOW().init();