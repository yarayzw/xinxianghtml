const base_url = 'http://develop.yarayzw.com';

$(function () {
    let id = getUrlParam('id');
    let platform_id = getUrlParam('platform_id');
    let info = getInfo(id);
    setCookie('platform_id', platform_id)
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
        url: base_url + '/index/commodity/getInfoById',
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
            html += '<a href="##">共'+data.rs.content_rs_num+'页:</a>';
            html += ' <a href="##" onclick="lastPage()">上一页</a>'
            for(var j = 0;j < data.rs.content_rs_num;j++){
                let h = j+1;
                html += '<a href="##" id="page_'+j+'" onclick="switchPage('+j+')">'+h+'</a>';
            }
            html += ' <a href="##" onclick="nextPage()">下一页</a>'
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


