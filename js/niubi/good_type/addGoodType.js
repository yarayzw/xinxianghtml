
//提交落地页数据
function addGoodTypeGo() {

    requestData.data = {
        'num' : $("input[name='num']").val(),

    }
    ajaxGo('admin/good_type/addGoodType')

}

//修改落地页数据
function editGoodTypeGo(id) {
    requestData.data = {
        'name' : $("input[name='name']").val(),
        'id': id,
    }
    ajaxGo('admin/good_type/editGoodType')

}



//删除
function delGoodType(obj) {
    requestData.data = {
        'id' : $(obj).attr('data_id')
    };
    ajaxGo('admin/good_type/delGoodType');
    if(requestCode === 0){
        fac_search();
        layer.msg('删除成功!');
    }else {
        layer.msg(requestMessage);
    }

}
