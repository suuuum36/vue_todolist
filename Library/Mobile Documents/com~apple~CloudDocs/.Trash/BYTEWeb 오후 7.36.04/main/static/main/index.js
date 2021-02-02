
/* 네비게이터 */
$(".n-1").click(function() {
    $('html, body').animate({
        scrollTop: $(".function-description").offset().top
    },500);
});

$(".n-2").click(function() {
    $('html, body').animate({
        scrollTop: $(".review").offset().top
    },700);
});

$(".n-3").click(function() {
    $('html, body').animate({
        scrollTop: $(".links").offset().top
    },1000);
});

/* 유의사항 팝업 */
$('.notice-button').click(function(){
    $('.notice-board').css("display", "block");
});

$('.cancel-button').click(function(){
    $('.notice-board').css("display", "none");
});

$('.notice-board').click(function(){
    $('.notice-board').css("display", "none");
});

/* 뉴스레터 맛보기 효과 */
if ($(window).width() > 800) {
    $('.news_button').mouseover(function(){
        $('.news_button2').css("display", "block");
        $('.news_button1').css("display", "none");
    });
    
    $('.news_button').mouseout(function(){
        $('.news_button1').css("display", "block");
        $('.news_button2').css("display", "none");
    });
} 


$(window).scroll(function() {
    // console.log($(window).height());
    // console.log($(window).scrollTop());
    // console.log($(document).height());
    
    $('.news_button').toggleClass('news_button_remove', $(window).height() + $(window).scrollTop() >= $(document).height());
    
});


