const base_url = 'http://zixunadmin.yarayzw.com';
let arr_wx = '';
let arr_nc = '';
let wechat_link = '';
let wechat_link_info = '';
var nativeShare = new NativeShare()

window.onbeforeunload = function (event) {
    event.returnValue = "扫描二维码关注公众号，即可查看更多小说内容！";
}



function share(){
    var opt = {
        'title':'点击继续阅读',//标题
        'pic':'',//图片
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
    if (-1 !== brow.indexOf('ucbrowser') || -1 !== brow.indexOf('mqqbrowser') ) {
        $('#ordinary').hide();
        $('#special').show();
        $('#head_pl_view_4').hide();
        $('#head_display_view_4').hide();
        $('#head_info_view_4').hide();
    }
    var shareData = {
        title: '点击继续阅读',
        desc: '点击继续阅读',
        // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
        link: wechat_link,
        icon: 'http://jindouyun-yara.oss-cn-beijing.aliyuncs.com/uploads/other/20200501/1588318490djjr.png',
        // 不要过于依赖以下两个回调，很多浏览器是不支持的
        success: function() {
        },
        fail: function() {
        }
    }
    nativeShare.setShareData(shareData)
});

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
            let tj_url = data.rs.tj_url.match(/src="(\S*)">/)[1];
            $('#tj').attr('src',tj_url)
            // var cnzz_s_tag = document.createElement('script');
            // cnzz_s_tag.type = 'text/javascript';
            // cnzz_s_tag.async = true;
            // cnzz_s_tag.charset = 'utf-8';
            // cnzz_s_tag.src = tj_url;
            // var root_s = document.getElementsByTagName('script')[0];
            // root_s.parentNode.insertBefore(cnzz_s_tag, root_s);

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
