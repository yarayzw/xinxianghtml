
// 公共配置

const __ROOT__ = 'http://jindouyun.yarayzw.com/';
const __IMG__ = 'http://jindouyun-yara.oss-cn-beijing.aliyuncs.com';

var requestData = {};
var requestCode = 0;
var requestMessage = 0;

function ajaxGo(url,msg = '请求错误' ,async = false) {
    $.ajax({
        url: __ROOT__ + url,
        data:requestData,
        method:"POST",
        dataType:"json",
        async: async,
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