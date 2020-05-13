

var editor = new Simditor({
    toolbar: [ 'title', 'bold', 'italic', 'underline', 'strikethrough','fontScale',
        'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|',
        'link', 'image', 'hr', '|', 'indent', 'outdent' ],
    textarea: '#editor',
    placeholder: '写点什么...',
    // defaultImage: '/static/home/images/logo.png',
    imageButton: ['upload'],
    upload: {
        url: __ROOT__ + 'thirdparty/oss/upload',
        params: {
            "code": '01-200-101'
        },
        fileKey: 'file',
        leaveConfirm: '正在上传文件..',
        connectionCount: 3
    }
});



//提交落地页数据
function addMaterialMemoGo() {

    //富文本值
    var content = $(".simditor-body").html();

    requestData.data = {
        'name' : $("input[name='name']").val(),
        'text' : content,
        'material_id':  $("#material_id").selectpicker('val'),
    }
    ajaxGo('admin/material_memo/addMaterialMemo')

}

//修改落地页数据
function editMaterialMemoGo(id) {

    //富文本值
    var content = $(".simditor-body").html();

    requestData.data = {
        'id' : id,
        'name' : $("input[name='name']").val(),
        'text' : content,
        'material_id':  $("#material_id").selectpicker('val'),
    }
    ajaxGo('admin/material_memo/editMaterialMemo')

}
