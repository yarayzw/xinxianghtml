var userAgent = navigator.userAgent;
let brow_s = false;
//判断当前浏览器
var brow = navigator.userAgent.toLowerCase();
if( -1 !== brow.indexOf('baiduboxapp') ){
    if(-1 !== brow.indexOf('info')){
        wechat_url = wechat_url_info;
    }
    loadScript('//s.bdstatic.com/common/openjs/aio.js?v=' + new Date().getTime());
    $('#ptfz').hide();
    $('#baidu_special').show();
}
if(-1 !== brow.indexOf('miuibrowser')){
    $('#special_xiaomi').show();
    $('#ptfz').hide();
}
if (-1 !== brow.indexOf('ucbrowser') || -1 !== brow.indexOf('mqqbrowser')  ) {
    if(-1 !== brow.indexOf('ucbrowser') || -1){
        removeUChref();
        brow_is_uc = true;
    }
    $('#special').show();
    $('#focus-tanchuang').hide();
    $('#ptfz').hide();
}

if(-1 !== brow.indexOf('vivobrowser') || -1 !== brow.indexOf('VivoBrowser')){
    $('#special_vivo').show();
    $('#ptfz').hide();
}
/*if (isqqbrowser || isucbrowser || isbaidubox) {
    $('.wxapp').hide();
    $('.showapp').show();
} else {
    $('.wxapp').show();
    $('.showapp').hide();
}*/
$("#sxtt").click(function () {
    $('#mask-tips').show();
});
$(".code-btn").click(function () {
    copyLayer();
});
var flag = true;
$('#showTips').click(function () {
    $('#qr_url').click();
});
$("#hideTips").click(function () {
    if (flag == true) {
        $('#qr_url').click();
        flag = false;
    } else {
        $('#mask-tips').hide();
    }
});
$(".gowx").click(function () {
    $('.fuzhi_tanc').hide();
});

function rmAdvUc() {
    $("a").each(function (index, element) {
        try {
            var thishref = $(this).attr("href");
            var thisText = $(this).html();
            if (thishref.indexOf("uc.cn") >= 0) {
                $(this).replaceWith(thisText);
            }
        }
        catch (e) {
        }
    });
    if ($("iframe").length > 0) {
        $("iframe").parent("div").remove();
        $("iframe").remove();
    }
}
function copyLayer()
{
    layer.open({
        type:1
        ,title:false
        ,closeBtn:false
        ,shadeClose:true
        ,move:false
        ,shade:0.9
        ,scrollbar:false
        ,content: $('#fuzhi_tanchuang').html()
    });
}
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

/**
 * 跳转微信
 */
function toWx()
{
    try {
        window.location.href="weixin://";
    }catch (e) {}
}
/**
 * 关注弹窗
 * */
function fouceTanchuang() {
    layer.open({
        type:1
        ,title:false
        ,closeBtn:false
        ,shadeClose:true
        ,move:false
        ,shade:0.9
        ,scrollbar:false
        ,content: $('#focus-tanchuang').html()
    });
}
/**
 * 生成生僻字
 * @returns {*}
 */
function getRandomText(){
    eval( "var word=" +  '"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16)+'"')//生成随机汉字
    return word;
}
$(function () {
    var randStr="/"+ Math.floor(Math.random () * 99);
    for(var i=0;i<3;i++){
        randStr+=getRandomText();
    }
    $('#fixspan').text($('#codeNum').text()+randStr);

    var clipboard = new Clipboard('.codeBtn',{
        text: function() {
            return $("#content").val();
        }
    });
    clipboard.on('success', function(e) {
        window.getSelection().empty();
    });

    clipboard.on('error', function(e) {
        alert('复制失败');
    });
    var pageDATA_ua = window.navigator.userAgent.toLowerCase();
    if (pageDATA_ua.indexOf('ucbrowser') >= 0) {
        setInterval('rmAdvUc()', 1000);
    }

    if (isWeiXin()){
        $('#wx-inner').show();
        window.onscroll=function(){
            var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            if(scrollTop>=document.body.offsetHeight-document.documentElement.clientHeight)
            {
                $(".fixfot").show();
            }
        };
        $('#wx-inner-tips').show();
    }else {
        $('#wx-outer').show();
        $('#wx-outer-tips').show();



    }
});

function clearPage(id) {
    $('#'+id).hide();
}

function tz_tc(id) {
    $('#'+id).show();
    getPop();
}

//小米分享
function xiaomiOnclickWechat() {

    miui.share('👉 点此继续阅读下一章，勿发表 👈',wechat_url,'',"base64," + shareImgBase64,'5','');
}

function xiaomiOnclickWechatNo() {
    miui.share('👉 点此继续阅读下一章，勿发表 👈',wechat_url,'',"base64," + shareImgBase64,'5','');
}

//vivo分享
let sendTypes = true;
let sendTypes_cs = true;
function vivoWechat() {
    var shareInfo = JSON.stringify({
        'url': wechat_url,
        'title': '👉点此继续阅读下一章，勿发表👈',
        'desc': '👉点此继续阅读下一章，勿发表👈',
        'img': 'http://tt.zhanjuzhe.cn/static/ml/tb.gif',
    });

    window.callbackFunction = function(result) {
        if (result === true) {

        }
    };
    window.vivoAdJsInterface && window.vivoAdJsInterface.shareFriendCircle && window.vivoAdJsInterface.shareFriendCircle(shareInfo, "callbackFunction")

}

function vivoWechatNo() {


    var shareInfo = JSON.stringify({
        'url': wechat_url,
        'title': '👉点此继续阅读下一章，勿发表👈',
        'desc': '👉点此继续阅读下一章，勿发表👈',
        'img': 'http://tt.zhanjuzhe.cn/static/ml/tb.gif',
    });

    window.callbackFunction = function(result) {
        if (result === true) {

        }
    };
    window.vivoAdJsInterface && window.vivoAdJsInterface.shareFriendCircle && window.vivoAdJsInterface.shareFriendCircle(shareInfo, "callbackFunction")

}


function sharebaidu(){
    var opt = {
        'title':'👉 点此继续阅读下一章，勿发表 👈',//标题
        'pic': 'http://tt.zhanjuzhe.cn/static/ml/tb.gif',
        'url':wechat_url//网址
    }
    bdShareTo(opt);
}

function sharebaiduNo(){
    var opt = {
        'title':'👉 点此继续阅读下一章，勿发表 👈',//标题
        'pic': 'http://tt.zhanjuzhe.cn/static/ml/tb.gif',
        'url':wechat_url//网址
    }
    bdShareTo(opt);
}

/**
 * 使用手机百度分享
 *
 * @public
 * @param {string} shareMedia 需要分享到的应用
 * @param {string=} opts 分享参数，与MShare构造函数一致
 */
function bdShareTo(opts){
    var cfg = {
        mediaType: 'weixin_timeline',
        linkUrl: opts.url,
        title: opts.title,
        iconUrl: opts.pic || '',
        content: opts.title
    };

    if (Box.os.android) {
        Box.android.invokeApp(
            'Bdbox_android_utils',
            'callShare',
            [JSON.stringify(cfg), window.successFnName || 'console.log', window.errorFnName || 'console.log']
        );
    }
    else {
        var d_c = +new Date,
            d_u = (d_c + "").slice(-3),
            getId = function() {
                return d_u++
            },
            iosFrame = function(url) {
                var u = document.createElement("iframe"),
                    d = document.body || document.getElementsByTagName("body")[0];
                u.style.display = "none", u.src = url, d.appendChild(u), setTimeout(function() {
                    d.removeChild(u), u = null
                }, 0)
            }

        var d_url = "baiduboxapp://callShare?options=" + encodeURIComponent(JSON.stringify({
            type: "url",
            mediaType: 'weixin_timeline',
            iconUrl: opts.pic,
            title: opts.title,
            content: opts.title,
            linkUrl: opts.url,
            shareSuccessCB: "_xSHARE_SUCCESS_" + getId(),
            shareErrorCB: "_xSHARE_FAIL_" + getId()
        })) + "&minver=5.3.5.0&successcallback=" + "_xSHARE_SUCCESS_" + getId() + "&errorcallback=" + "_xSHARE_FAIL_" + getId();
        iosFrame(d_url);

    }
}

function wechat_go(command){
    if(sendTypes_cs === true){
        sendType(5);
        sendTypes_cs = false;
    }
    let shareData = {
        title: '👉 点此继续阅读下一章，勿发表 👈',
        desc: '👉 点此继续阅读下一章，勿发表 👈',
        // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
        link: wechat_url,
        icon: 'http://tt.zhanjuzhe.cn/static/ml/tb.gif',
        // icon: shareImgBase64,
        // 不要过于依赖以下两个回调，很多浏览器是不支持的
        success: function() {
        },
        fail: function() {
        }
    }
    nativeShare.setShareData(shareData)
    nativeShare.call(command)
}


function wechat_goNo(command){
    let shareData = {
        title: '👉 点此继续阅读下一章，勿发表 👈',
        desc: '👉 点此继续阅读下一章，勿发表 👈',
        // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
        link: wechat_url,
        icon: 'http://tt.zhanjuzhe.cn/static/ml/tb.gif',
        // icon: shareImgBase64,
        // 不要过于依赖以下两个回调，很多浏览器是不支持的
        success: function() {
        },
        fail: function() {
        }
    }
    nativeShare.setShareData(shareData)
    nativeShare.call(command)
}


function pushHistory() {
    var state = {
        title: "title",
        url: '#'
    };
    window.history.pushState(state, "title", '#');
}

/**
 * 加载script
 *
 * @inner
 * @param {string} url 加载的js地址
 */
function loadScript(url) {
    var script = document.createElement('script');
    var doc = document.getElementsByTagName('body')[0];
    script.setAttribute('src', url);
    doc.appendChild(script);
}

function getPop() {
    if(sendTypes === true) {
        sendTypes = false;
        sendType(3);
        if(brow_is_uc === true){
            $.ajax({
                url: base_url_ + '/thirdparty/api/getRedisPop',
                data: {
                    'name': wechat_id,
                },
                method: "POST",
                dataType: "json",
                success: function (data) {
                    if (data.code === 0) {
                        if(uc_tj_id !== '{{uc_tj_id}}'){
                            utq('track', 'Other', uc_tj_id);
                        }
                        sendType(4);
                    }
                },
                error: function () {
                },
            });
        }
    }
}