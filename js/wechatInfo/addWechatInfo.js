

//提交落地页数据
function addViewGo() {
    requestData.data = {
        'wechat_name' : $("input[name='wechat_name']").val(),
        'name' : $("input[name='name']").val(),
        'regtime' : $("input[name='regtime']").val(),
        'annual_review' : $("input[name='annual_review']").val(),
        'subject' : $("input[name='subject']").val(),
        'code_name' : $("input[name='code_name']").val(),
        'app_id' : $("input[name='app_id']").val(),
        'app_secret' : $("input[name='app_secret']").val(),
        'bind_user_id' : $("#bind_user_id").selectpicker('val'),
        'zzy_channel_id' : $("input[name='zzy_channel_id']").val()
    }
    ajaxGo('admin/wechat_config/addWechatConfig')
}

//修改落地页数据
function editViewGo(id) {
    requestData.data = {
        'id' : id,
        'wechat_name' : $("input[name='wechat_name']").val(),
        'name' : $("input[name='name']").val(),
        'regtime' : $("input[name='regtime']").val(),
        'annual_review' : $("input[name='annual_review']").val(),
        'subject' : $("input[name='subject']").val(),
        'code_name' : $("input[name='code_name']").val(),
        'bind_user_id' : $("#bind_user_id").selectpicker('val'),
        'app_id' : $("input[name='app_id']").val(),
        'app_secret' : $("input[name='app_secret']").val(),
        'zzy_channel_id' : $("input[name='zzy_channel_id']").val(),
    }
    ajaxGo('admin/wechat_config/editWechatConfig')

}
