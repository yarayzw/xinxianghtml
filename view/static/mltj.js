let BrowserMatch;
let nw_ips = '';
var brow_info = navigator.userAgent.toLowerCase();

$(function () {
    let nw = getCookie('nw_ip');
    if(nw){
        nw_ips = nw;
    }else {
        nw_ips = Math.floor(Math.random()*1000);
        setCookie('nw_ip',nw_ips,3600*12)
    }
    ipTj(nw_ips)
});


const base_url = 'http://tongji.chinaandun.com/';

function ipTj(nw_ip) {
    let prevurl = document.referrer;

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
            'brow_info':brow_info
        },
        type: 'POST',
        dataType: "json"
    });
}


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