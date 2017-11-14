$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        nav:true,
        singleItem:true,
        navText: ["<img src='img/arrow-left.png'>", "<img src='img/arrow-right.png'>"],
        smartSpeed:450
    });
    $('#fullpage').fullpage({
        anchors:['general','portfolio','advantages','feedback'],
        menu:'#nav',
        scrollOverflowReset: true,
        navigation: true
    });
    $(document).on('click', '#moveDown', function(){
        $.fn.fullpage.moveSectionDown();
    });
    $.fn.fullpage.setAutoScrolling(false);
    $.fn.fullpage.reBuild();

        // $("#up-button").click(function() {
        //     $("html, body").animate({ scrollTop: 0 }, "slow");  ПРОКУРУТКА ВВЕР НА JQuery
        //     return false;
        // });
});
//ПРОКУРУТКА ВВЕРХ НА native
var toTop;
function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        toTop = setTimeout('up()',20);
    } else clearTimeout(toTop);
    return false;
}

window.onload = function () {
    var upB = document.getElementById("up-button");
    upB.addEventListener('click', up);
    var modalButton = document.getElementById("general-button");
    var closeButton = document.querySelector(".modal__cancel__button");
    modalButton.addEventListener('click', showModal);
    closeButton.addEventListener('click', closeModal);

    function showModal() {
        var modalWindow = document.getElementById("modal-window");
        modalWindow.style.display='block';
    }
    function closeModal() {
        var modalWindow = document.getElementById("modal-window");
        modalWindow.style.display='none';
    }

};