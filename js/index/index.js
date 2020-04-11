$(document).ready(function() {

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