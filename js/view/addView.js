

//提交落地页数据
function addViewGo() {
    requestData.data = {
        'name' : $("input[name='name']").val(),
        'url' : $("input[name='url']").val(),
    }
    ajaxGo('admin/View/addView')

}

//修改落地页数据
function editViewGo(id) {
    requestData.data = {
        'id' : id,
        'name' : $("input[name='name']").val(),
        'url' : $("input[name='url']").val(),
    }
    ajaxGo('admin/View/editView')

}
