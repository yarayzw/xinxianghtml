$(document).ready(function() {
    getUserBind();
});

function serMenu() {
    $('#side-menu').empty();
    let html___ = '<li class="nav-header">\n' +
        '                        <div class="dropdown profile-element">\n' +
        '                            <span><img alt="image" class="img-circle" src="../img/profile_small.jpg" /></span>\n' +
        '                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">\n' +
        '                                <span class="clear">\n' +
        '                               <span class="block m-t-xs"><strong class="font-bold">Beaut-zihan</strong></span>\n' +
        '                                <span class="text-muted text-xs block">'+user_name___+'<b class="caret"></b></span>\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                            <ul class="dropdown-menu animated fadeInRight m-t-xs">\n' +
        '                                <li><a class="J_menuItem" href="../admin/password.html">修改密码</a>\n' +
        '                                </li>\n' +
        '                                <li class="divider"></li>\n' +
        '                                <li><a href="login.html">安全退出</a>\n' +
        '                                </li>\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                        <div class="logo-element">H+\n' +
        '                        </div>\n' +
        '                    </li>';
    $('#side-menu').append(html___);

    requestData.data = {
    };
    ajaxGo('admin/user_info/getUserMenu');
    if(requestData.data.length < 4){
        requestData.data.forEach((item__,index,array)=>{
            let html__ = '<li class="active">\n' +
                '                        <a href="#">\n' +
                '                            <i class="fa fa-home"></i>\n' +
                '                            <span class="nav-label">'+item__.name+'</span>\n' +
                '                            <span class="fa arrow"></span>\n' +
                '                        </a>';
            if(item__.children.length > 0){
                html__ += ' <ul class="nav nav-second-level collapse">';
                item__.children.forEach((itemc__,indexc,arrayc)=>{
                    html__ += '<li>\n' +
                        '                                <a class="J_menuItem" href="'+itemc__.url+'" data-index="0">'+itemc__.name+'</a>\n' +
                        '                            </li>';
                });
                html__ += ' </ul>';
            }
            html__ += '</li>';
            $('#side-menu').append(html__);
        });
    }
    else {
        requestData.data.forEach((item__,index,array)=>{
            let html__ = '<li>\n' +
                '                        <a href="#">\n' +
                '                            <i class="fa fa-home"></i>\n' +
                '                            <span class="nav-label">'+item__.name+'</span>\n' +
                '                            <span class="fa arrow"></span>\n' +
                '                        </a>';
            if(item__.children.length > 0){
                html__ += ' <ul class="nav nav-second-level collapse">';
                item__.children.forEach((itemc__,indexc,arrayc)=>{
                    html__ += '<li>\n' +
                        '                                <a class="J_menuItem" href="'+itemc__.url+'" data-index="0">'+itemc__.name+'</a>\n' +
                        '                            </li>';
                });
                html__ += ' </ul>';
            }
            html__ += '</li>';
            $('#side-menu').append(html__);
        });
    }
}

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

function setUserInfo(user_id) {
    requestData.data = {
        user_id: user_id
    };
    ajaxGo('admin/user/updateLogin');
    if(requestCode !== 0){
        layer.msg(requestMessage);
    }else {
        setCookie('u_department_id',requestData.data.config.department_id);
        setCookie('u_platform_id',requestData.data.config.platform_id);
        setCookie('u_is_leader',requestData.data.config.is_leader);
    }
}
let all_user_ = [];
let user_name___ = '';
let user_id__ = '';
function getUserBind(user_bind_id = 0) {
    requestData.data = {
        user_id : user_bind_id
    };
    ajaxGo('admin/user/getUserBind');
    all_user_ = requestData.data.rs;
    user_id__ = requestData.data.css_id;
    user_name___ = requestData.data.css_name;
    $('#user_bind_div').empty();
    let html;
    all_user_.forEach((item,index,array)=>{
        //执行代码
        if(item.user_bind === user_id__){
            html  = '<a class=" minimalize-styl-2 btn btn-primary" onclick="getUserBind('+item.user_bind+')" href="#">'+item.name+'</a>';
        }else {
            html  = '<a class=" minimalize-styl-2 btn btn-default" onclick="getUserBind('+item.user_bind+')" href="#">'+item.name+'</a>';
        }
        $('#user_bind_div').append(html);
    });
    setUserInfo(user_id__);
    if(user_bind_id !== 0){
        window.location.reload()
    }else {
        serMenu();
    }
}

function userBind() {
    layer.open({
        type: 1,
        title: '绑定账号',
        shadeClose: true,
        shade: 0.8,
        area: ['45%', '40%'],
        content: $('#add_user_bind'),
        btn: ['确定', '取消'], // 按钮
        yes: function(addLabel, layero){
            layer.msg('确定绑定？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    requestData.data = {
                        'username' : $('#bind_username').val(),
                        'password' : $('#bind_password').val(),
                    };
                    ajaxGo('admin/user/setUserBind');
                    if(requestCode === 0){
                        layer.msg('添加成功');
                        window.location.reload()
                    }else {
                        layer.msg(requestMessage);
                    }
                }
            });
        }
    });
}
