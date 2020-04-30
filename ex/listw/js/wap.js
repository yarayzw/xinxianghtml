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

$(document).ready(function () {
    getListInfo();
});

function getListInfo(){
    $('#main').empty();
    $.ajax({
        // url: 'http://jindouyun.yarayzw.com/index/commodity/getInfoById',
        // url: 'http://zixunadmin.yarayzw.com/index/commodity/getInfoById',
        url: 'http://develop.yarayzw.com/index/commodity/getInfoList',
        data: {
        },
        method: "POST",
        dataType: "json",
        async: false,
        success: function (data) {
            data.headInfo.forEach((item,index,array)=> {
                //顶部资讯
                let html = '<a href="http://'+window.location.host+'/ex/ml'+'/index.html?id='+item.id+'&platform_id='+getUrlParam('platform_id')+'" style="display: block;position: relative;z-index:1;margin-bottom: 10px;">\n' +
                    '            <img src="'+item.thumbnail_big+'" alt="" style="width:100%">\n' +
                    '            <p' +
                    '                style="position: absolute;bottom:0;left:0;right:0;background-color: rgba(0,0,0,.5);color:#fff;height:30px;line-height: 30px;padding:0 10px;">' +
                    '                '+item.title.substring(0,18)+'...</p>\n' +
                    '        </a>';
                $('#main').append(html);
            });

            let i = 1;
            let html = ' <a onclick="getListInfo()" style="display: block;margin:10px;height: 32px;font-size: 14px;text-align: center;display: block;line-height: 32px;background-color: #82b5f7;color: #fff;text-decoration: none;">您有未读新闻，点击查看</a>\n';
            $('#main').append(html);

            data.listInfo.forEach((item,index,array)=>{
                if(i % 4 === 0){
                    html = '<a href="http://'+window.location.host+'/ex/listw'+'/pc2.html?id='+item.id+'&platform_id='+getUrlParam('platform_id')+'" style="display: block;margin:0 10px;"><h3 style="margin:10px">'+item.title+'</h3>\n' +
                        '\n' +
                        '        <img src="'+item.thumbnail_big+'" alt=""\n' +
                        '                style="display: block;width:100%">\n' +
                        '        <div style="margin:10px;">\n' +
                        '            <span\n' +
                        '                style="display: inline-block;height:18px;width:35px;line-height: 18px;vertical-align: middle;border: 1px solid #fea1ab; color:#fea1ab;font-size: 12px;text-align: center;">热门</span>\n' +
                        '            <span style="font-size: 12px;color:#867a88;">侃侃儿谈 3284阅读</span>\n' +
                        '        </div></a>' +
                        '<a onclick="getListInfo()" style="display: block;margin:10px;height: 32px;font-size: 14px;text-align: center;display: block;line-height: 32px;background-color: #82b5f7;color: #fff;text-decoration: none;">您有未读新闻，点击查看</a>\n';
                }else {
                    html = '<div style="position: relative;z-index:1;padding:15px 10px;border-bottom: 1px solid #d7d7d7;" class="clearfix">\n' +
                        '            <a href="http://'+window.location.host+'/ex/listw'+'/pc2.html?id='+item.id+'&platform_id='+getUrlParam('platform_id')+'"><img src="'+item.thumbnail_small+'" alt="" style="width:135px; height:80px; float:right">\n' +
                        '            <div style="overflow:hidden">\n' +
                        '                <h3>'+item.title+'</h3>\n' +
                        '                <div style="position: absolute;bottom:15px">\n' +
                        '                    <span\n' +
                        '                        style="display: inline-block;height:18px;width:35px;line-height: 18px;vertical-align: middle;border: 1px solid #fea1ab; color:#fea1ab;font-size: 12px;text-align: center;">热门</span>\n' +
                        '                    <span style="font-size: 12px;color:#867a88;">侃侃儿谈 3284阅读</span>\n' +
                        '                </div>\n' +
                        '            </div></a>\n' +
                        '        </div>';
                }
                i++;
                $('#main').append(html);
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
    if (r != null) return unescape(r[2]); return null; //返回参数值
}