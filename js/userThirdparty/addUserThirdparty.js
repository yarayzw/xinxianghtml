

//提交落地页数据
function addViewGo() {
    requestData.data = {
        'name' : $("input[name='name']").val(),
        'pf_u_id' : $("input[name='pf_u_id']").val(),
        'token' : $("input[name='token']").val(),
        'cookie' : $("input[name='cookie']").val(),
        'a_c_d' : $("input[name='a_c_d']").val()
    }
    ajaxGo('admin/user_thirdparty_info/addUserThirdpartyInfo')
}

//修改落地页数据
function editViewGo(id) {
    requestData.data = {
        'id' : id,
        'name' : $("input[name='name']").val(),
        'pf_u_id' : $("input[name='pf_u_id']").val(),
        'token' : $("input[name='token']").val(),
        'cookie' : $("input[name='cookie']").val(),
        'a_c_d' : $("input[name='a_c_d']").val()
    }
    ajaxGo('admin/user_thirdparty_info/editUserThirdpartyInfo')

}
