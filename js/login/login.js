$(function () {
    $btnVerity=$("#btnVerity").on("click",function () {
        let token = getverityCode();
        $(this).attr("src",__ROOT__+"admin/login/getGraphicalCodePng?head[token]="+ token );
    })
    $btnVerity.click();



})

// 获取图片token
function getverityCode() {
    ajaxGo('admin/login/getGraphicalCode');
    if(requestCode !== 0 ){
        layer.msg(requestMessage);
    }

    return requestData.head.token;
}

//登录
function loginGo() {
    if(validate()){
        requestData.data = {
            "name" : $("#name").val(),
            "password" : $("#password").val(),
            "verity" : $("#verity").val(),
        };
        ajaxGo('admin/login/login');
        if(requestCode !== 0){
            layer.msg(requestMessage);
        }else {
            window.location.replace("http://" + window.top.location.host +'/'+ requestData.data.url+'.html');
        }
    }
}

//验证
function validate(){
    $account=$("#fromSubmit").find("input:text[name='account']");
    if($account.val()===""){
        layer.tips("请输入登录账号！" ,$account,{
            tips:[2,'#1C84C6']
        });
        return false;
    }
    $password=$("#fromSubmit").find("input:password[name='password']");
    if($password.val()===""){
        layer.tips("请输入密码！",$password,{
            tips:[2,"#1C84C6"]
        })
        return false;
    }
    $verity=$("#fromSubmit").find("input:text[name='verity']");
    if($verity.val()===""){
        layer.tips("请输入验证码！",$verity,{
            tips:[2,"#1C84C6"]
        })
        return false;
    }
    return true;
}