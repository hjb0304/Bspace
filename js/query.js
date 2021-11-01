$(document).ready(function () {
    // 해시스크롤
    $("#gnb ul li a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });
    // 탭메뉴    
    $(".tap_btn li").click(function () {
        $(".tap_btn li").removeClass("on");
        $(this).addClass("on");

        var idx = $(this).index();
        
        $(".exhi_list").hide();
        $(".exhi_list").eq(idx).css("display", "flex");
    });

    // 탑버튼
    $("#top").click(function() {
        $('html, body').animate({
            scrollTop: $('html, body').offset().top
        },500);
    });
});

