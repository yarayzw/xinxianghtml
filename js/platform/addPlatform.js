

//提交落地页数据
function addPlatformGo() {
    requestData.data = {
        'name' : $("input[name='name']").val(),
    }
    ajaxGo('admin/platform/addPlatform')

}

//修改落地页数据
function editPlatformGo(id) {
    requestData.data = {
        'id' : id,
        'name' : $("input[name='name']").val(),
    }
    ajaxGo('admin/platform/editPlatform')

}
