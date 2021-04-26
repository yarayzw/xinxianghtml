//小程序跳转
function xcx() {
    getPop();
    location.href = xcx_url;
}
$(document).ready(function() {
    getPop();
    location.href = xcx_url;
});

let sendTypes = true;

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
        sendType(3);
        if(brow_is_baidu === true){
            $.ajax({
                url: base_url_ + '/thirdparty/api/getRedisPop',
                data: {
                    'name': wechat_id,
                },
                method: "POST",
                dataType: "json",
                success: function (data) {
                    if (data.code === 0) {
                        meteor.track("form", {convert_id: uc_tj_id});
                        sendType(4);
                    }
                },
                error: function () {
                },
            });
        }
        sendTypes = false;
    }
}