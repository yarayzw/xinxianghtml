

function rungo(){
    if(is_go_run === 0){
        window.open('/pc1/list.html','target','');
    }
}

$.fn.smartFloat = function () {
    var position = function (element) {
        var top = element.position().top, pos = element.css("position");
        $(window).scroll(function () {
            var scrolls = $(this).scrollTop();
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.css({
                        position: "fixed",
                        top: 0
                    });
                } else {
                    element.css({
                        top: scrolls
                    });
                }
            } else {
                element.css({
                    position: pos,
                    top: top
                });
            }
        });
    };
    return $(this).each(function () {
        position($(this));
    });
};
//绑定
$("#j-header-nav").smartFloat();

let is_go_run = 0;

$(document).ready(function() {


    $('#head_img_div').hide();
    $('#head_img').attr('src',img_url);
    $('#head_img').show();

    let myDate = new Date();
    let qr_code_s = qr_code.split('@@@');
    let update_at_c = (new Date(update_at)).getTime() / 1000;

    let year=myDate.getFullYear();        //获取当前年
    let month=myDate.getMonth()+1;   //获取当前月
    let date=myDate.getDate();            //获取当前日


    let h=myDate.getHours();              //获取当前小时数(0-23)
    let m=myDate.getMinutes();          //获取当前分钟数(0-59)
    let s=myDate.getSeconds();
    let now = year+'-'+getNow(month)+"-"+getNow(date);
    let now_c = (new Date(now)).getTime() / 1000;

    let time = (now_c - update_at_c) / 24/3600;

    if (time >= qr_code_s.length) {
        time = time % qr_code_s.length;
    }
    $('#qr_code_bottom').attr('src',qr_code_s[time]);
    $('#qr_code_rigth').attr('src',qr_code_s[time]);

    //监听滚动条
    $(document).scroll(function(){

        var scroH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度
        var contentH = $(document).height();  //内容高度

        if (contentH - (scroH + viewH) <= 650){  //距离底部高度小于100px
            is_go_run = 1;

            console.log(123123)
        }
    });
});
function getNow(s) {
    return s < 10 ? '0' + s: s;
}