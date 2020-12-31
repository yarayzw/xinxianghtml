let BrowserMatch;
let nw_ips = '';
var brow_info = navigator.userAgent.toLowerCase();
function getNow(s) {
    return s < 10 ? '0' + s: s;
}
$(function () {
    $('#head_img_div').hide();
    img_url.replace('http','https');
    console.log(img_url);
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

    let nw = getCookie('nw_ip');
    if(nw){
        nw_ips = nw;
    }else {
        nw_ips = Math.floor(Math.random()*1000);
        setCookie('nw_ip',nw_ips,3600*12)
    }
    ipTj(nw_ips);
});
let preface_span = true;
let end_span = true;
const   base_url = 'https://tongji.zhanjuzhe.cn/';
const   base_url_ = 'https://api.zhanjuzhe.cn/';

function ipTj(nw_ip) {

    let prevurl = document.referrer;
    // let url = 'http://api.ip138.com/ipv4/?token=448ae549d9def611027e08747caefa05';
    // $.get(url,function(result){
    //     if(result.ret === 'ok'){
    $.ajax({
        url: base_url + '/index/commodity/setUserInfoMl',
        data: {
            'browser':'',
            'version':'',
            'os' :'',
            'last_url': prevurl,
            'id': list_id,
            'nw_ip':nw_ip,
            'now_url': window.location.href,
            'brow_info':brow_info,
            'province':'',
            'city':''
        },
        type: 'POST',
        dataType: "json"
    });
    //监听滚动条
    $(document).scroll(function(){
        var scrollH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度
        var contentH = $(document).height();  //内容高度
        if(scrollH > $('#preface_span').offset().top && preface_span === true){
            preface_span = false;
            sendType(1);
        }
        if(scrollH  > (contentH / 2) && end_span === true){
            end_span = false;
            sendType(2);
        }
        // if(scrollH >100){  //滚动距离大于100px时
        //     alert("这是滚动条事件!");
        // }
    });
    nw_ips = nw_ip;
    province = '';
    city = '';
    // return [result.content.address_detail,result.content.address_detail.city];
    // sendAddress(result.content.address_detail.province,result.content.address_detail.city);
    //     }
    // },"json");
}

//前序阅读完成后 1 ，全文阅读完成 2
function sendType(type) {
    $.ajax({
        url: base_url + '/index/commodity/setUserInfoMlToAddress',
        data: {
            'type':type,
            'province':province,
            'city':city,
            'id': list_id,
            'nw_ip':nw_ips,
        },
        method: "POST",
        dataType: "json"
    });
}

// setTimeout(function () {
//     sendType(3);
// },120000);

/**
 * cookie中存值
 * */
function setCookie(name, value, seconds = 0) {
    seconds = seconds || 0;   //seconds有值就直接赋值，没有为0，这个根php不一样。
    var expires = "";
    if (seconds !== 0 ) {      //设置cookie生存时间
        var date = new Date();
        date.setTime(date.getTime()+(seconds*1000));
        expires = "; expires="+date.toGMTString();
    }
    document.cookie = name+"="+escape(value)+expires+"; path=/";   //转码并赋值
}

// 取得cookie
function getCookie(name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';') // 把cookie分割成组
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i] // 取得字符串
        while (c.charAt(0) == ' ') { // 判断一下字符串有没有前导空格
            c = c.substring(1, c.length) // 有的话，从第二位开始取
        }
        if (c.indexOf(nameEQ) == 0) { // 如果含有我们要的name
            return unescape(c.substring(nameEQ.length, c.length)) // 解码并截取我们要值
        }
    }
    return false
}