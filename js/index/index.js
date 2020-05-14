$(document).ready(function() {
    let u_id = getCookie('u_id');
    if(u_id !== '5'){
        $('#material_menu').hide()
        $('#view_menu').hide()
        $('#platform_menu').hide()
        $('#commodityBindPlatform_menu').hide()
    }
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