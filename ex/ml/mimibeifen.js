const base_url = 'http://zs-zixunadmin.yarayzw.com';
let arr_wx = '';
let arr_nc = '';
let wechat_link = '';
let wechat_link_info = '';
let ocpc_id = '';
var nativeShare = new NativeShare()
let shareImgBase64 = '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';

window.onbeforeunload = function (event) {
    event.returnValue = "扫描二维码关注公众号，即可查看更多小说内容！";
}



function sharebaidu(){
    if(ocpc_id !== ''){
        utq('track', 'Other', ocpc_id);
    }
    var opt = {
        'title':'👉 点此关注公众号继续阅读 👈',//标题
        'pic': 'http://jindouyun-yara.oss-cn-beijing.aliyuncs.com/uploads/other/20200501/1588318490djjr.png',
        'url':wechat_link//网址
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
        if(ocpc_id !== ''){
            utq('track', 'Other', ocpc_id);
        }
        let shareData = {
            title: '👉 点此关注公众号继续阅读 👈',
            desc: '👉 点此关注公众号继续阅读 👈',
            // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
            link: wechat_link,
            icon: 'http://xs1.fzkswl07.cn/ex/ml/djjr.png',
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
$(function () {

    //控制返回
    pushHistory();
    window.addEventListener("popstate", function (e) {
        window.location.href= 'http://hot.kkkk.la/ex/listw/wap.html?platform_id=' + getCookie('platform_id');
    }, false);



    let id = getUrlParam('id');
    let platform_id = getUrlParam('platform_id');
    let info = getInfo(id);
    setCookie('platform_id', platform_id)
    //监听滚动条
    $(window).scroll(function () {
        //已经滚动到上面的页面高度
        var scrollTop = $(this).scrollTop();
        //页面高度
        var scrollHeight = $(document).height();
        //浏览器窗口高度
        var windowHeight = $(this).height();

        //此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
        if (scrollTop + windowHeight + 400 >= scrollHeight) {
            window.addEventListener("popstate", function (e) {
            }, false);
        }
    });
    //判断当前浏览器
    var brow = navigator.userAgent.toLowerCase();

    if( -1 !== brow.indexOf('baiduboxapp') ){
        if(-1 !== brow.indexOf('info')){
            wechat_link = wechat_link_info;
        }
        loadScript('//s.bdstatic.com/common/openjs/aio.js?v=' + new Date().getTime());
        $('#ordinary').hide();
        $('#baidu_special').show();
        $('#head_pl_view_4').hide();
        $('#head_display_view_4').hide();
        $('#head_info_view_4').hide();
    }
    if(-1 !== brow.indexOf('miuibrowser')){
        $('#special_xiaomi').show()
        $('#ordinary').hide();
        $('#special').hide();
        $('#head_pl_view_4').hide();
        $('#head_display_view_4').hide();
        $('#head_info_view_4').hide();
    }
    if (-1 !== brow.indexOf('ucbrowser') || -1 !== brow.indexOf('mqqbrowser')  ) {
        $('#ordinary').hide();
        $('#special').show();
        $('#head_pl_view_4').hide();
        $('#head_display_view_4').hide();
        $('#head_info_view_4').hide();
    }

});

//小米分享
function xiaomiOnclickWechat() {
    if(ocpc_id !== ''){
        utq('track', 'Other', ocpc_id);
    }
    miui.share('👉 点此继续阅读下一章 👈',wechat_link,'',"base64," + shareImgBase64,'5','');
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

$("#closeOnClick").on("click", function () {
    window.location.href = 'http://' + window.location.host + "/ex/list/index.html?platform_id=" + getCookie('platform_id');
});

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
//获取小说信息
function getInfo(id) {
    $.ajax({
        url: base_url + '/index/commodity/getInfoById',
        data: {
            id: id
        },
        method: "POST",
        dataType: "json",
        async: false,
        success: function (data) {
            //uc
            loadJsCode(data.rs.uc_tj);

            ocpc_id = data.rs.uc_tj_id;
            // $("button[name='uc_bon']").attr('ut-data-convertid',data.rs.uc_tj_id);

            if(data.rs.tj_url.match(/src="(\S*)">/)){
                let tj_url = data.rs.tj_url.match(/src="(\S*)">/)[1];
                // $('#tj').attr('src',tj_url)
                var cnzz_s_tag = document.createElement('script');
                cnzz_s_tag.type = 'text/javascript';
                cnzz_s_tag.async = true;
                cnzz_s_tag.charset = 'utf-8';
                cnzz_s_tag.src = tj_url;
                var root_s = document.getElementsByTagName('script')[0];
                root_s.parentNode.insertBefore(cnzz_s_tag, root_s);
            }else {
                let tj_url = '';
            }

            $('#' + data.rs.mobile_view_name).show();
            document.title = data.rs.title;
            $('#title_'+ data.rs.mobile_view_name).text(data.rs.title);
            $('#bottom_name_'+ data.rs.mobile_view_name).text(data.rs.bottom_name);
            $('#content_' + data.rs.mobile_view_name).append(data.rs.content);
            $('#head_img_'+data.rs.mobile_view_name).attr('src',data.rs.head_img);

            wechat_link = data.rs.wechat_url
            wechat_link_info = data.rs.wechat_url_info

            //无法自动跳转的时候
            $('#wechat_name_' + data.rs.mobile_view_name + '_1').text(data.rs.wechat_id);
            $('#wechat_name_display_' + data.rs.mobile_view_name + '_1').val(data.rs.wechat_id+'/'+randomString(1));
            $('#wechat_name_' + data.rs.mobile_view_name + '_2').text(data.rs.wechat_name);
            $(".code-btn").click(function () {
                let e = $('#wechat_name_display_' + data.rs.mobile_view_name + '_1').val();
                let t = document.getElementById("fixspan");
                t.value = e;
                var clipboard = new ClipboardJS('#codeBtn');
                clipboard.on("success", function (e) {
                    if(ocpc_id !== ''){
                        utq('track', 'Other', ocpc_id);
                    }
                    //alert("复制成功！");
                    $('.fuzhi_tanc').show();
                    e.clearSelection();
                });
                clipboard.on("error", function (e) {
                    alert("请选择“拷贝”进行复制!");
                });
            });

            $(".gowx").click(function () {
                $('.fuzhi_tanc').hide();
            });

        },
        error: function () {
        }
    });
}



//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

/**
 * cookie中存值
 * */
function setCookie(name, value, seconds = 0) {
    seconds = seconds || 0;   //seconds有值就直接赋值，没有为0，这个根php不一样。
    var expires = "";
    if (seconds !== 0) {      //设置cookie生存时间
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + escape(value) + expires + "; path=/";   //转码并赋值
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


var stxlwx = arr_wx;
var txt = arr_nc;

var img = "<img  width='50%'  src='" + stxlwx + ".jpg'>";
var imgk = "<img  width='50%'  src='" + stxlwx + ".gif'>";


function tz_tc(id) {
    layer.open({
        type: 1,
        title: '点击跳转',
        shadeClose: true,
        shade: 0,
        area: ['90%', '63%'],
        content: $('#'+id),
    });
}
function closeLayer() {
    layer.closeAll();
}

//动态加载js
function loadJsCode(code){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    try{
        //for Chrome Firefox Opera Safari
        script.appendChild(document.createTextNode(code));
    }catch(ex){
        //for IE
        script.text = code;
    }
    document.body.appendChild(script);
}
