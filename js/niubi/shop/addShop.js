

function delImg(i) {
    i.remove();
    // console.log(i);
    // $('#upload-item'+i).remove();
}

//提交落地页数据
function addShopGo() {

    requestData.data = {
        'name' : $("input[name='name']").val(),
        'title' : $("input[name='title']").val(),
        'type':  $("#type").selectpicker('val'),
        'head_img': '',
    }
    ajaxGo('admin/shop/addShop')

}

//修改落地页数据
function editshopGo(id) {
    requestData.data = {
        'name' : $("input[name='name']").val(),
        'title' : $("input[name='title']").val(),
        'type': $("input[name='type']").val(),
        'head_img': '',
    }
    ajaxGo('admin/shop/editShop')

}
