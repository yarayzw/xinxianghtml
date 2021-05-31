let BrowserMatch;
let nw_ips = '';
var brow_info = navigator.userAgent.toLowerCase();

$(function () {
    if(-1 !== brow_info.indexOf('vivobrowser') || -1 !== brow_info.indexOf('VivoBrowser')){
        getAddress();
    }else {
        $('#conet_2').empty();
        $('#conet_1').show();
        wechat_id = wechat_id_;
        wechat_url_info = wechat_url_info_;
        wechat_url = wechat_url_;
        $('#codeNum').text(wechat_id_);
        $('#codeNum2').text('好梦文学');
        $('#codeNum2_').text('好梦文学');
    }


    let nw = getCookie('nw_ip');
    if(nw){
        nw_ips = nw;
    }else {
        nw_ips = Math.floor(Math.random()*1000);
        setCookie('nw_ip',nw_ips,3600*12)
    }
    ipTj(nw_ips)
});
let preface_span = true;
let end_span = true;
const   base_url = 'http://tongji.zhanjuzhe.cn/';
const   base_url_ = 'http://api.zhanjuzhe.cn/';


function getAddress() {
    $.ajax({
        url: base_url + '/thirdparty/api/getAsm',
        data: {
            'url': document.referrer,
            'type':'vivo'
        },
        method: "POST",
        dataType: "json",
        success: function (data) {
            if (data.code === 0) {
                $('#conet_1').empty();
            }else {
                $('#conet_2').empty();
                $('#conet_1').show();
                wechat_id = wechat_id_;
                wechat_url_info = wechat_url_info_;
                wechat_url = wechat_url_;
                $('#codeNum').text(wechat_id_);
                $('#codeNum2').text('好梦文学');
                $('#codeNum2_').text('好梦文学');
            }
        },
        error: function () {
        },
    });
}

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