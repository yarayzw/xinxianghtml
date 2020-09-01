
// 公共配置

// const __ROOT__ = 'http://120.77.245.86:8082/'; //正式
// const __ROOT__ = 'http://xinxiang.yara.com/';
// const __ROOT__ = 'http://csadmin.chinaandun.com/'; //测试
const __ROOT__ = 'http://api.zhanjuzhe.cn/'; //正式
const __IMG__ = 'http://jindouyun-yara.oss-cn-beijing.aliyuncs.com';

var requestData = {};
var requestCode = 0;
var requestMessage = 0;
let u_id = '0';
let u_platform_id = -1;
let u_department_id = -1;
let u_is_leader = -1;

let isClick=false;
let u_role_url = [];

$(document).ready(function () {
    u_department_id = getCookie('u_department_id');
    u_platform_id = getCookie('u_platform_id');
    u_is_leader = getCookie('u_is_leader');
    if(u_platform_id === '0' && $("#platform_search").length > 0){
        requestData.data = {
        };
        ajaxGo('admin/platform/getListToSelect');
        requestData.data.forEach((item,index,array)=>{
            //执行代码
            var html = "<option value='"+item.id+"'>"+item.name+"</option>";
            $('#platform_search').append(html);
        });
        $('#platform_search').selectpicker('refresh');
        $('#platform_search_div').show();
    }
    if(u_is_leader === '1' && $("#department_search").length > 0){
        requestData.data = {
            department_id : u_department_id
        };
        ajaxGo('admin/department/getAllUser');
        requestData.data.forEach((item,index,array)=>{
            //执行代码
            var html = "<option value='"+item.id+"'>"+item.name+"</option>";
            $('#department_search').append(html);
        });
        $('#department_search').selectpicker('refresh');
        $('#department_div').show();
    }
    requestData.data = {
    };
    ajaxGo('admin/auth_rule/getUserAuthAll');
    requestData.data.forEach((item,index,array)=>{
        u_role_url.push(item);
    });
});

function ajaxGo(url,msg = '请求错误' ,async = false , root = __ROOT__) {
    if (isClick){
        return false;
    }else {
        isClick=true;
    }
    if(getCookie('token')){
        requestData.head = {
            "token": getCookie('token'),
            "time": (new Date()).getTime(),
            "version": "1.2.0",
            "recode": "",
        };
    }

    $.ajax({
        url: root + url,
        data:requestData,
        method:"POST",
        dataType:"json",
        async: async,
        success:function(data){
            requestCode = data.code;
            u_id = data.user_info.u_id;
            setCookie('u_id',data.user_info.u_id);

            // if(data.user_info.u_id === '0'){
            //     window.location.replace('http://zs-zixun.yarayzw.com/'+"login");
            // }
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
        },
        complete: function(){
            isClick=false;
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