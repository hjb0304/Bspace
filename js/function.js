$(function () {

    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
       //스크롤 내리고 싶은 만큼 숫자 변경해서 사용
        if (scrollTop >= 500) {
            //  jquery.easypiechart.js 파일에 217번째 줄에 선언된 function에 overwrite해서 사용
            $('.chart').easyPieChart({
                barColor: '#c5dbc8',     //게이지컬러
                trackColor: '#d5c5b5',  //트랙컬러
                lineWidth: 30,  //게이지 두께
                animate: {
                    duration: 1000,  //게이지 애니메이션 시간
                }
            });
        }
    });



});



