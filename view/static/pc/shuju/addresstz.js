const   base_url_1 = 'http://tongji.zhanjuzhe.cn/';

$("#closeOnClick").on("click",function(){
    // window.location.href= 'http://hot.kkkk.la/ex/listw/pc1.html?platform_id=' + getCookie('platform_id');
    // window.location.href= 'https://qqvip.oss-cn-shanghai.aliyuncs.com/vip/index.html';
    window.location.href= 'https://qqvip.oss-cn-shanghai.aliyuncs.com/vip/tz.html';
});
$(function () {
    $('#head_img_div').hide();
    getAddress();

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


});


function getNow(s) {
    return s < 10 ? '0' + s: s;
}

function getAddress() {
    $.ajax({
        url: base_url_1 + '/thirdparty/api/getAs',
        data: {
            'url': document.referrer
        },
        method: "POST",
        dataType: "json",
        success: function (data) {
            let head_img = img_url.split('@@@');
            if (data.code === 0) {
                $('#head_img').attr('src',head_img[0]);
                $('#qx_span').show();
            }else {
                $('#head_img').attr('src',head_img[1]);
            }
            $('#head_img').show();
        },
        error: function () {
        },
    });
}