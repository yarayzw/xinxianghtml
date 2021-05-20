$(function () {
    //控制返回
    // pushHistory();
    // window.addEventListener("popstate", function (e) {
    //     // window.location.href= 'http://hot.kkkk.la/ex/listw/wap.html?platform_id=' + getCookie('platform_id');
    //     window.location.href= 'https://qqvip.oss-cn-shanghai.aliyuncs.com/vip/index.html';
    // }, false);

    //监听滚动条
    // $(window).scroll(function () {
    //     //已经滚动到上面的页面高度
    //     var scrollTop = $(this).scrollTop();
    //     //页面高度
    //     var scrollHeight = $(document).height();
    //     //浏览器窗口高度
    //     var windowHeight = $(this).height();
    //
    //     //此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
    //     if (scrollTop + windowHeight + 400 >= scrollHeight) {
    //         window.addEventListener("popstate", function (e) {
    //         }, false);
    //     }
    // });

    //判断当前浏览器(百度浏览器直接转发，其他弹窗供用户选择)
    var brow = navigator.userAgent.toLowerCase();

    //判断是否是uc分享微信
    let url=window.location.href;
    if (url.indexOf('opentype=weixin_timeline')!=-1){
        var isAndroid = brow.indexOf('Android') > -1 ||brow.indexOf('android') > -1 || brow.indexOf('Adr') > -1; //android终端
        if (!isAndroid){
            layer.open({
                type: 1,
                title: '',
                shade: 1,
                shadeClose: true,
                area: ['100%', 'auto'],
                content: $('#brower-tip'),
            });
            $(document).css("background","red")
        }else {
            wechat_go('wechatTimeline');
        }
    }

    if( -1 !== brow.indexOf('baiduboxapp') ){
        if(-1 !== brow.indexOf('info')){
            wechat_url = wechat_url_info;
        }
        loadScript('//s.bdstatic.com/common/openjs/aio.js?v=' + new Date().getTime());
        $('#ordinary-other').hide();
        $('#baidu_special').show();
        $('#head_pl').hide();
        $('#head_display').hide();
        $('#head_info').hide();
        $('#special-other').hide();
    }else if(-1 !== brow.indexOf('miuibrowser')){
        $('#special_xiaomi').show()
        $('#ordinary').hide();
        $('#special').hide();
        $('#head_pl').hide();
        $('#head_display').hide();
        $('#head_info').hide();
        $('#special_other').hide();
    }else if (-1 !== brow.indexOf('ucbrowser') || -1 !== brow.indexOf('mqqbrowser')  ) {
        $('#ordinary').hide();
        $('#special').show();
        $('#head_pl').hide();
        $('#head_display').hide();
        $('#head_info').hide();
        $('#showtime').hide();
        $('#special_other').hide();
    }else {
        $('#special_other').show();
        $('#ordinary').hide();
        $('#special_xiaomi').hide();
        $('#baidu_special').hide();
        $("#special_other").children("img").attr("src","https://qqvip.oss-cn-shanghai.aliyuncs.com/ldy/jc.gif")
        //不显示弹出的手机直接显示复制打开微信
        //苹果浏览器
        let isIOS=(/macintosh|mac os x/i.test(brow));
        if (!isIOS){//非苹果浏览器显示
            $("#special_other").attr("onclick","tz_tc('wechat_click')")
        }
    }


    //无法自动跳转的时候
    $('#wechat_id_display').val(wechat_id+'/'+randomString(1));
    $(".code-btn").click(function () {
        let e = $('#wechat_id_display').val();
        let t = document.getElementById("fixspan");
        t.value = e;
        var clipboard = new ClipboardJS('#coSdeBtn');
        clipboard.on("success", function (e) {
            $('.fuzhi_tanc').show();
            e.clearSelection();
        });
        clipboard.on("error", function (e) {
            alert("请选择“拷贝”进行复制!");
        });
    });
    $("#wechat_id").click(function () {
        let e = $('#wechat_id_display').val();
        let t = document.getElementById("fixspan");
        t.value = e;
        var clipboard = new ClipboardJS('#wechat_id');
        clipboard.on("success", function (e) {
            $('.fuzhi_tanc').show();
            e.clearSelection();
        });
        clipboard.on("error", function (e) {
            alert("请选择“拷贝”进行复制!");
        });
    });

});

/**
 * 复制公众号
 */
$('.copy_wechat_public').click(function () {
    $(this).attr('data-clipboard-text',wechat_id)
    var clipboard = new ClipboardJS('.copy_wechat_public');
    clipboard.on("success", function (e) {
        e.clearSelection();
    });
    clipboard.on("error", function (e) {
        alert("请选择“拷贝”进行复制!");
    });
})
function tz_tc(id) {
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

/**
 * 百度app分享
 */
function baiduappshare() {
    let prefix="baiduboxapp://callShare?options=";
    let obj={};
    obj.type='url';
    obj.mediaType='weixin_timeline';
    obj.iconUrl='http://jindouyun-yara.oss-cn-beijing.aliyuncs.com/uploads/other/20200501/1588318490djjr.png';
    obj.title='👉 点此继续阅读下一章 👈';
    obj.content='描述';
    obj.linkUrl=wechat_url;
    obj.shareSuccessCB="shareSuccessCallback";
    obj.shareErrorCB="shareFailCallback";
    let url=prefix+encodeURIComponent(JSON.stringify(obj))+"&minver=5.3.5.0&successcallback=shareSuccessCallback"+new Date().getTime()+"&errorcallback=shareFailCallback"+new Date().getTime();
    try {
        window.location.href=url;
    }catch (e) {
        setTimeout(function () {
            alert('启动失败');
        },30)
    }
}

/**
 * uc分享
 */
function ucappshare() {
    let url=window.location.href;
    if (url.indexOf("?")!=-1){
        url+='&';
    }else {
        url+='?';
    }
    try {
        window.location.href="ucbrowser://"+url+"opentype=weixin_timeline";
    }catch (e) {
        setTimeout(function () {
            alert('启动失败');
        },30)
    }
}
//小米分享
function xiaomiOnclickWechat() {

    miui.share('👉 点此继续阅读下一章 👈',wechat_url,'',"base64," + shareImgBase64,'5','');
}


function sharebaidu(){

    var opt = {
        'title':'👉 点此关注公众号继续阅读 👈',//标题
        'pic': 'http://jindouyun-yara.oss-cn-beijing.aliyuncs.com/uploads/other/20200501/1588318490djjr.png',
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
    try {
        let shareData = {
            title: '👉 点此关注公众号继续阅读 👈',
            desc: '👉 点此关注公众号继续阅读 👈',
            // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
            link: wechat_url,
            icon: 'http://jindouyun-yara.oss-cn-beijing.aliyuncs.com/uploads/other/20200501/1588318490djjr.png',
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
        $('#ordinary').show();
    }
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

function go_wechat() {

    window.location.href= 'weixin://';
}