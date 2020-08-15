

//提交落地页数据
function addViewGo() {
    requestData.data = {
        'name' : $("input[name='name']").val(),
        'url' : $("input[name='url']").val(),
        'type':  $("input[name='type']:checked").val(),
        'platform_id' : $("input[name='platform_id']:checked").val(),//平台
    };
    ajaxGo('admin/View/addView')

}

//修改落地页数据
function editViewGo(id) {
    requestData.data = {
        'id' : id,
        'name' : $("input[name='name']").val(),
        'url' : $("input[name='url']").val(),
        'type':  $("input[name='type']:checked").val(),
        'platform_id' : $("input[name='platform_id']:checked").val(),//平台
    };
    ajaxGo('admin/View/editView')

}
