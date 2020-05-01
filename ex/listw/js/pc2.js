const base_url = 'http://zixunadmin.yarayzw.com';
let goHttp = 'hot.kkkk.la';

$(function () {
    let id = getUrlParam('id');
    let platform_id = getUrlParam('platform_id');
    let info = getInfo(id);
    setCookie('platform_id', platform_id)
    bottomInfo();
});

let content_page = {
    0:'',
    1:'',
    2:'',
    3:'',
    4:'',
    5:'',
    6:'',
    7:'',
    8:''
};
let page_now = 0;
let page_all = 1;
let view_now = 'view_4'; //当前使用模版
//获取小说信息
function getInfo(id) {
    $.ajax({
        url: base_url + '/index/information/getInfoById',
        data: {
            id: id
        },
        method: "POST",
        dataType: "json",
        async: false,
        success: function (data) {
            view_now = data.rs.mobile_view_name;
            $('#' + data.rs.mobile_view_name).show();
            $('#tj').html(data.rs.tj_url);
            document.title = data.rs.title;
            $('#title_'+ data.rs.mobile_view_name).text(data.rs.title);
            $('#create_at_'+ data.rs.mobile_view_name).text(data.rs.create_at);
            $('#qrcode_bottom_'+ data.rs.mobile_view_name).attr('src',data.rs.qr_code);
            $('#head_img_' + data.rs.mobile_view_name).attr('src',data.rs.head_img);

            var i = 0
            data.rs.content_rs.forEach((item,index,array)=>{
                content_page[i] = item;
                i++;
            });
            $('#content_' + data.rs.mobile_view_name).append(content_page[0]);
            page_all = data.rs.content_rs_num -1;
            var html = '';
            html += '<a href="#">共'+data.rs.content_rs_num+'页:</a>';
            html += ' <a href="#" onclick="lastPage()">上一页</a>'
            if(data.rs.content_rs_num === 1){
                $('#qr_img').show();
            }
            for(var j = 0;j < data.rs.content_rs_num;j++){
                let h = j+1;
                html += '<a href="#" id="page_'+j+'" onclick="switchPage('+j+')">'+h+'</a>';
            }
            html += ' <a href="#" onclick="nextPage()">下一页</a>'
            $('#splpage').append(html);
            switchPage(0);
        },
        error: function () {
        }
    });
}

//控制分页选中属性
function switchPage(i) {
    $('#content_' + view_now).empty();
    $('#content_' + view_now).append(content_page[i]);
    $("#page_"+page_now).removeClass("active");
    page_now = i;
    $("#page_"+i).addClass("active");
    if(i === page_all){
        $('#qr_img').show();
    }else {
        $('#qr_img').hide();
    }
}

//上一页
function lastPage() {
    let page = page_now -1;
    if(page < 0){
        page = 0;
    }
    switchPage(page );
}

//下一页
function nextPage() {
    let page = page_now + 1;
    if(page > page_all){
        page = page_all;
    }
    switchPage(page);
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

//底部推荐 右侧广告
function bottomInfo() {
    $('#main').empty();
    $('#rightFix').empty();
    $('#rightFix_ul').empty();
    $.ajax({
        // url: 'http://jindouyun.yarayzw.com/index/commodity/getInfoById',
        // url: 'http://zixunadmin.yarayzw.com/index/commodity/getInfoById',
        url: base_url + '/index/information/getInfoList',
        data: {
        },
        method: "POST",
        dataType: "json",
        async: false,
        success: function (data) {


            let i = 1;
            let html = '';
            data.listInfo.forEach((item,index,array)=>{
                if( i < 4 && i > 1){
                    html = '<a href="http://'+goHttp+'/ex/listw'+'/pc2.html?id='+item.id+'&platform_id='+getUrlParam('platform_id')+'"><h3 style="margin:20px 0;">'+item.title+'</h3>\n' +
                        '            <img src="'+item.thumbnail_samll+'" alt="" style="width:100%">\n' +
                        '            <div style="margin:10px 0">\n' +
                        '                <span\n' +
                        '                    style="display: inline-block;height:18px;width:35px;line-height: 18px;vertical-align: middle;border: 1px solid #fea1ab; color:#fea1ab;font-size: 12px;text-align: center;">娱乐</span>\n' +
                        '                <span style="font-size: 12px;color:#867a88;">来源：微观焦点 | '+item.create_at+'</span>\n' +
                        '            </div></a>\n' +
                        '           ';
                    $('#main').append(html);
                    i++;
                }else {
                     html = ' <a href="###" onclick="bottomInfo()" class="noread" style="margin-bottom: 30px;">您有未读新闻，点击查看</a>' +
                        '   <div style="height:100px;position: relative;z-index:1;padding:15px 0;border-bottom: 1px dashed #d7d7d7;">\n' +
                        '               <a href="http://'+goHttp+'/ex/listw'+'/pc2.html?id='+item.id+'&platform_id='+getUrlParam('platform_id')+'"> <img src="'+item.thumbnail_big+'" alt="" style="float:right">\n' +
                        '                <div style="overflow:hidden">\n' +
                        '                    <h3 style="margin-bottom:50px;">'+item.title+'</h3>\n' +
                        '                    <div>\n' +
                        '                        <span\n' +
                        '                            style="display: inline-block;height:18px;width:35px;line-height: 18px;vertical-align: middle;border: 1px solid #fea1ab; color:#fea1ab;font-size: 12px;text-align: center;">娱乐</span>\n' +
                        '                        <span style="font-size: 12px;color:#867a88;">来源：微观焦点 | '+item.create_at+'</span>\n' +
                        '                    </div>\n' +
                        '                </div></a>\n' +
                        '            </div>;'
                    $('#main').append(html);
                }
            });
            data.rightHead.forEach((item,index,array)=> {
                //右侧上方
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
                //右侧列表
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


