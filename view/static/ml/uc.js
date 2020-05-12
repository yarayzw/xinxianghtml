$(function () {
    //判断当前浏览器
    var brow = navigator.userAgent.toLowerCase();
    if( -1 !== brow.indexOf('baiduboxapp') ){
        if(-1 !== brow.indexOf('info')){
            wechat_url = wechat_url_info;
        }
        loadScript('//s.bdstatic.com/common/openjs/aio.js?v=' + new Date().getTime());
        $('#ordinary').hide();
        $('#baidu_special').show();
        $('#head_pl').hide();
        $('#head_display').hide();
        $('#head_info').hide();
    }
    if(-1 !== brow.indexOf('miuibrowser')){

        $('#special_xiaomi').show()
        $('#ordinary').hide();
        $('#special').hide();
        $('#head_pl').hide();
        $('#head_display').hide();
        $('#head_info').hide();
    }
    if (-1 !== brow.indexOf('ucbrowser') || -1 !== brow.indexOf('mqqbrowser')  ) {

        $('#ordinary').hide();
        $('#special').show();
        $('#head_pl').hide();
        $('#head_display').hide();
        $('#head_info').hide();
        $('#showtime').hide();
    }


    //无法自动跳转的时候
    $('#wechat_id_display').val(wechat_id+'/'+randomString(1));
    $(".code-btn").click(function () {
        if(uc_tj_id !== '{{uc_tj_id}}'){
            utq('track', 'Other', uc_tj_id);
        }
        let e = $('#wechat_id_display').val();
        let t = document.getElementById("fixspan");
        t.value = e;
        var clipboard = new ClipboardJS('#codeBtn');
        clipboard.on("success", function (e) {
            $('.fuzhi_tanc').show();
            e.clearSelection();
        });
        clipboard.on("error", function (e) {
            alert("请选择“拷贝”进行复制!");
        });
    });


});

function tz_tc(id) {
    if(uc_tj_id !== '{{uc_tj_id}}'){
        utq('track', 'Other', uc_tj_id);
    }
    // layer.open({
    //     type: 2,
    //     title: '',
    //     shadeClose: true,
    //     area: ['90%', '360px'],
    //     content: '/static/ml/layer_html/'+id+'.html',
    // });
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

function getHtml(id) {
    if(id === 'gz_tj1'){
        return '<div id="gz_tc1" style="display: none;text-align: center;padding-bottom: 20px;overflow: hidden;background: white">\n' +
            '    <div id="baidu_go" style="display: block">\n' +
            '        <img src="http://jindouyun-yara.oss-cn-beijing.aliyuncs.com/uploads/other/20200512/1589262934yanshi.gif" alt="" style="margin-top: 5%">\n' +
            '        <button style="border: #ccc 1px;width: 35%;border-radius: 25px;height: 40px;margin-right: 2%;font-size: 1.1rem;margin-top: 4%" onclick="closeLayer()">取消</button>\n' +
            '        <button style="border: #ccc 1px;width: 35%;color: white;background: #00cc00;font-size: 1.3rem;border-radius: 25px;height: 40px;margin-left: 2%;margin-top: 4%" onclick="sharebaidu()" class="wechat-btn" >前往关注</button>\n' +
            '    </div>\n' +
            '</div>';
    }
    if(id === 'gz_tj2'){
        return '<div id="gz_tc2" style="display: none;text-align: center;padding-bottom: 20px;overflow: hidden;background: white">\n' +
            '    <div id="wechat_go" style="display: block">\n' +
            '        <img src="http://jindouyun-yara.oss-cn-beijing.aliyuncs.com/uploads/other/20200512/1589262934yanshi.gif"    alt="" style="margin-top: 5%">\n' +
            '        <button style="border: #ccc 1px;width: 35%;border-radius: 25px;height: 40px;margin-right: 2%;font-size: 1.1rem;margin-top: 4%" onclick="closeLayer()">取消</button>\n' +
            '        <button style="border: #ccc 1px;width: 35%;color: white;background: #00cc00;font-size: 1.3rem;border-radius: 25px;height: 40px;margin-left: 2%;margin-top: 4%" onclick="wechat_go(\'wechatTimeline\')" class="wechat-btn">前往关注</button>\n' +
            '    </div>\n' +
            '</div>';
    }
    if(id === 'gz_tj3'){
        return '<div id="gz_tc3" style="display: none;text-align: center;padding-bottom: 20px;overflow: hidden;background: white;">\n' +
            '    <div id="wechat_go_xiaomi" style="display: block">\n' +
            '        <img src="http://jindouyun-yara.oss-cn-beijing.aliyuncs.com/uploads/other/20200512/1589262934yanshi.gif"  alt="" style="margin-top: 5%">\n' +
            '        <button style="border: #ccc 1px;width: 35%;border-radius: 25px;height: 40px;margin-right: 2%;font-size: 1.1rem;margin-top: 4%" onclick="closeLayer()">取消</button>\n' +
            '        <button style="border: #ccc 1px;width: 35%;color: white;background: #00cc00;font-size: 1.3rem;border-radius: 25px;height: 40px;margin-left: 2%;margin-top: 4%;" onclick="xiaomiOnclickWechat()" class="wechat-btn"  >前往关注</button>\n' +
            '    </div>\n' +
            '</div>';
    }
}