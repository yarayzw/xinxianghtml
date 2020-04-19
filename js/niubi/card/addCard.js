
//提交落地页数据
function addCardGo() {

    requestData.data = {
        'num' : $("input[name='num']").val(),
        'type':  $("#type").selectpicker('val'),

    }
    ajaxGo('admin/card/addCard')

}

//修改落地页数据
function editcardGo(id) {
    requestData.data = {
        'name' : $("input[name='name']").val(),
        'title' : $("input[name='title']").val(),
        'type': $("input[name='type']").val(),
        'head_img': '',
    }
    ajaxGo('admin/card/editcard')

}
