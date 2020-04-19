
// 公共配置

const __ROOT__ = 'http://niubiadmin.yarayzw.com/';
const __IMG__ = 'http://jindouyun-yara.oss-cn-beijing.aliyuncs.com';

var requestData = {};
var requestCode = 0;
var requestMessage = 0;

function ajaxGo(url,msg = '请求错误' ,async = false) {
    if(getCookie('token')){
        requestData.head = {
            "token": getCookie('token'),
            "time": (new Date()).getTime(),
            "version": "1.2.0",
            "recode": "",
        };
    }

    $.ajax({
        url: __ROOT__ + url,
        data:requestData,
        method:"POST",
        dataType:"json",
        async: async,
        processData: false,   // jQuery不要去处理发送的数据
        contentType: false,   // jQuery不要去设置Content-Type请求头
        success:function(data){
            requestCode = data.code;
            requestMessage = data.message;
            requestData = {
                "head": {
                    "token": data.token,
                    "time": (new Date()).getTime(),
                    "version": "1.2.0",
                    "recode": "",
                },
                "data": data.data
            };
            setCookie('token',data.token);

            return data;
        },
        error:function(){
        }
    });

}

//获取表单参数
function getFormData(obj) {
    var arrayValue = obj.serializeArray();
    var json = {};
    $.each(arrayValue, function() {
        var item = obj;
        if (json[item["name"]]) {
            json[item["name"]] += "," + item["value"];
        } else {
            json[item["name"]] = item["value"];
        }
    });
    return json;
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