$(function () {
    //判断当前浏览器
    var brow = navigator.userAgent.toLowerCase();
    if( -1 !== brow.indexOf('baiduboxapp') ){
        if(-1 !== brow.indexOf('info')){
            wechat_url = wechat_url_info;
        }
        loadScript('//s.bdstatic.com/common/openjs/aio.js?v=' + new Date().getTime());
        $('#codeBtn').hide();
        $('#baidu_special').show();
        $('#head_pl').hide();
        $('#head_display').hide();
        $('#head_info').hide();
        $('#special_vivo').hide();
    }
    if(-1 !== brow.indexOf('miuibrowser')){
        $('#special_xiaomi').show()
        $('#codeBtn').hide();
        $('#special').hide();
        $('#head_pl').hide();
        $('#head_display').hide();
        $('#head_info').hide();
        $('#special_vivo').hide();
    }
    if (-1 !== brow.indexOf('ucbrowser') || -1 !== brow.indexOf('mqqbrowser')  ) {
        if(-1 !== brow.indexOf('ucbrowser') || -1){
            brow_s = true;
        }
        $('#codeBtn').hide();
        $('#special').show();
        $('#head_pl').hide();
        $('#head_display').hide();
        $('#head_info').hide();
        $('#showtime').hide();
        $('#special_vivo').hide();
    }

    if(-1 !== brow.indexOf('vivobrowser')){
        $('#special_vivo').show();
        $('#special_xiaomi').hide();
        $('#codeBtn').hide();
        $('#special').hide();
        $('#head_pl').hide();
        $('#head_display').hide();
        $('#head_info').hide();
    }


    //无法自动跳转的时候
    $('#wechat_id_display').val(wechat_id+'/'+randomString(1));
    $(".code-btn").click(function () {
        $('#jc').show()
        let e = $('#wechat_id_display').val();
        let t = document.getElementById("fixspan");
        t.value = e;
        var clipboard = new ClipboardJS('#codeBtn');
        clipboard.on("success", function (e) {
            $('.fuzhi_tanc').show();
            e.clearSelection();
            $('#jc').hide()
        });
        clipboard.on("error", function (e) {
            alert("请选择“拷贝”进行复制!");
        });
    });


});
let sendTypes = true;
let sendTypes_cs = true;
function tz_tc(id) {
    getPop();
    layer.open({
        type: 1,
        title: '',
        shade: 0.8,
        shadeClose: true,
        area: ['90%', 'auto'],
        content: $('#'+id),
    });
}
function closeLayer() {
    layer.closeAll();
}


function randomString(len) {
    len = len || 32;
    var $chars = '看见步伐加快建设到哪里去我能看到宁缺毋滥撒上的快乐却忘了你金牛座前端况且我离开的前往达拉斯的';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}


//小米分享
function xiaomiOnclickWechat() {
    miui.share('👉 点此继续阅读下一章 👈',wechat_url,'',"base64," + shareImgBase64,'5','');
}


function sharebaidu(){

    var opt = {
        'title':'👉 点此关注公众号继续阅读 👈',//标题
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

//uc
function wechat_go(command){
    getPop();
    try {
        let shareData = {
            title: '👉 点此关注公众号继续阅读 👈',
            desc: '👉 点此关注公众号继续阅读 👈',
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
    } catch (err) {
        $('#special').hide();
        $('#codeBtn').show();
    }
}

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

function go_wechat() {
    window.location.href= 'weixin://';
}

function getPop() {
    if(sendTypes === true) {
        sendTypes = false;
        sendType(3);
        if(brow_s === true){
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