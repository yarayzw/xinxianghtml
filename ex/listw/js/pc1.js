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
let goHttp = 'hot.kkkk.la';

function getListInfo(){
    $('#main').empty();
    $('#rightFix').empty();
    $('#rightFix_ul').empty();
    $.ajax({
        // url: 'http://jindouyun.yarayzw.com/index/commodity/getInfoById',
        // url: 'http://zixunadmin.yarayzw.com/index/commodity/getInfoById',
        url: 'http://zixunadmin.yarayzw.com/index/information/getInfoList',
        data: {
        },
        method: "POST",
        dataType: "json",
        async: false,
        success: function (data) {
            data.headInfo.forEach((item,index,array)=> {
                //顶部资讯
                let html = ' <a href="http://'+goHttp+'/ex/listw'+'/pc2.html?id='+item.id+'&platform_id='+getUrlParam('platform_id')+'" style="display: block;position: relative;z-index:1;margin-bottom: 10px;">\n' +
                    '                <img src="'+item.thumbnail_big+'" alt="" style="width:100%">\n' +
                    '                <p\n' +
                    '                    style="position: absolute;bottom:0;left:0;right:0;background-color: rgba(0,0,0,.5);color:#fff;height:30px;line-height: 30px;padding:0 10px">\n' +
                    '                    '+item.title+'</p>\n' +
                    '            </a>';
                $('#main').append(html);
            });

            let i = 1;
            let html = '';
            data.listInfo.forEach((item,index,array)=>{
                console.log(item)
                if(i % 4 === 0){
                    html = '<a href="###"><h3 style="margin:20px 0;">'+item.title+'</h3>\n' +
                        '            <a href="http://'+goHttp+'/ex/listw'+'/pc2.html?id='+item.id+'&platform_id='+getUrlParam('platform_id')+'"><img src="'+item.thumbnail_big+'" alt="" style="width:100%"></a>\n' +
                        '            <div style="margin:10px 0">\n' +
                        '                <span\n' +
                        '                    style="display: inline-block;height:18px;width:35px;line-height: 18px;vertical-align: middle;border: 1px solid #fea1ab; color:#fea1ab;font-size: 12px;text-align: center;">娱乐</span>\n' +
                        '                <span style="font-size: 12px;color:#867a88;">来源：微观焦点 | '+item.create_at+'</span>\n' +
                        '            </div></a>\n' +
                        '            <a href="###" onclick="getListInfo()" class="noread" style="margin-bottom: 30px;">您有未读新闻，点击查看</a>';
                }else {
                    html = '<div style="height:100px;position: relative;z-index:1;padding:15px 0;border-bottom: 1px dashed #d7d7d7;">\n' +
                        '               <a href="http://'+goHttp+'/ex/listw'+'/pc2.html?id='+item.id+'&platform_id='+getUrlParam('platform_id')+'"> <img src="'+item.thumbnail_samll+'" alt="" style="float:right">\n' +
                        '                <div style="overflow:hidden">\n' +
                        '                    <h3 style="margin-bottom:50px;">'+item.title+'</h3>\n' +
                        '                    <div>\n' +
                        '                        <span\n' +
                        '                            style="display: inline-block;height:18px;width:35px;line-height: 18px;vertical-align: middle;border: 1px solid #fea1ab; color:#fea1ab;font-size: 12px;text-align: center;">娱乐</span>\n' +
                        '                        <span style="font-size: 12px;color:#867a88;">来源：微观焦点 | '+item.create_at+'</span>\n' +
                        '                    </div>\n' +
                        '                </div></a>\n' +
                        '            </div>';
                }
                i++;
                $('#main').append(html);

            });
            data.rightHead.forEach((item,index,array)=> {
                //顶部资讯
                 html = ' <div style="width:336px;height:280px;">\n' +
                    '                    <a href="http://'+goHttp+'/ex/listw'+'/pc2.html?id='+item.id+'&platform_id='+getUrlParam('platform_id')+'" id="fix"><img src="'+item.thumbnail_big+'" alt="" style="width:336px;height:280px"></a>\n' +
                    '                </div>';
                $('#rightFix').append(html);
            });
            html = '<div style="width:336px;"><div style="margin:12px 0 7px">\n' +
                '                        <span\n' +
                '                            style="display: inline-block; height:18px;width:4px;background-color: #e44235;margin-right:5px;vertical-align: middle;"></span><span>阅读</span><span\n' +
                '                            style="color: #e44235;">排行</span>\n' +
                '                    </div> <ul style="background-color: #f7f7f7;overflow: hidden;" id="rightFix_ul">\n';
            $('#rightFix').append(html);

            data.rightList.forEach((item,index,array)=> {
                //顶部资讯
                 html = '<li style="float:left;width:50%;margin-bottom: 10px;"><a href="http://'+goHttp+'/ex/listw'+'/pc2.html?id='+item.id+'&platform_id='+getUrlParam('platform_id')+'" id="fix">\n' +
                    '                            <img src="'+item.thumbnail_small+'" alt="" style="margin-bottom:7px;width:162px">\n' +
                    '                            <p style="width:162px;font-size:12px;color:#312637;line-height:1.5;">\n' +
                    '                                  '+item.title+'\n' +
                    '                            </p>\n' +
                    '                        </a></li>';
                $('#rightFix_ul').append(html);
            });
            html = '</ul></div>';
            $('#rightFix').append(html);

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