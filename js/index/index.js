$(document).ready(function() {
    // let u_id = getCookie('u_id');
    // if(u_id !== '5'){
    //     $('#view_menu').hide();
    //     $('#platform_menu').hide();
    //     $('#log').hide();
    //     $('#wechatConfig').hide();
    //     $('#wechatConfigTotal').hide();
    //     $('#promotionBB').hide();
    // }
    // if(u_id === '15' || u_id === '17'){
    //     // $('#promotionBB').show();
    // }

    requestData.data = {
    };
    ajaxGo('admin/user_info/getUserMenu');
    requestData.data.forEach((item,index,array)=>{
        let html = '<li>\n' +
            '                        <a href="#">\n' +
            '                            <i class="fa fa-home"></i>\n' +
            '                            <span class="nav-label">'+item.name+'</span>\n' +
            '                            <span class="fa arrow"></span>\n' +
            '                        </a>';
        if(item.children.length > 0){
            html += ' <ul class="nav nav-second-level collapse">';
            item.children.forEach((itemc,indexc,arrayc)=>{
                html += '<li>\n' +
                    '                                <a class="J_menuItem" href="'+itemc.url+'" data-index="0">'+itemc.name+'</a>\n' +
                    '                            </li>';
            });
            html += ' </ul>';
        }
        html += '</li>';
        $('#side-menu').append(html);
    });
});

function getMenu() {
    $.ajax({
        url: __ROOT__ + 'index/index/login',
        data:{
            menu_id:1
        },
        method:"POST",
        dataType:"json",
        success:function(data){
            requestData = data;
            console.log(requestData)
        },
        error:function(){
            layer.msg(123);
        }
    });
}