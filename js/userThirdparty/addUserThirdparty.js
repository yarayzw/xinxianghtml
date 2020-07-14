//提交落地页数据
function addViewGo() {
    requestData.data = {
        'name' : $("input[name='name']").val(),
        'platform_id' : $("input[name='platform_id']:checked").val(),//平台
        'pf_u_id' : $("input[name='pf_u_id']").val(),
        'token' : $("input[name='token']").val(),
        'cookie' : $("input[name='cookie']").val(),
        'a_c_d' : $("input[name='a_c_d']").val(),
        'page_id' : $("input[name='page_id']").val(),
        'domain' : $("input[name='domain']").val(),
        'copyright' : $("input[name='copyright']").val(),
    }
    ajaxGo('admin/user_thirdparty_info/addUserThirdpartyInfo')
}

//修改落地页数据
function editViewGo(id) {
    requestData.data = {
        'id' : id,
        'name' : $("input[name='name']").val(),
        'platform_id' : $("input[name='platform_id']:checked").val(),//平台
        'pf_u_id' : $("input[name='pf_u_id']").val(),
        'token' : $("input[name='token']").val(),
        'cookie' : $("input[name='cookie']").val(),
        'a_c_d' : $("input[name='a_c_d']").val(),
        'page_id' : $("input[name='page_id']").val(),
        'domain' : $("input[name='domain']").val(),
        'copyright' : $("input[name='copyright']").val(),
    }
    console.log(requestData.data)
    ajaxGo('admin/user_thirdparty_info/editUserThirdpartyInfo')

}
