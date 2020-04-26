

function delImg(i) {
    i.remove();
    // console.log(i);
    // $('#upload-item'+i).remove();
}

//提交落地页数据
function addShopGo() {

    let goods_img=[];
    $("*[name='goods_img']").each(function(index,el){
        goods_img[index] = $(el).attr('data_name')
    });

    //富文本值
    var content = $(".simditor-body").html();

    requestData.data = {
        'name' : $("input[name='name']").val(),
        'title' : $("input[name='title']").val(),
        'type':  $("#type").selectpicker('val'),
        'goods_img': goods_img,
        'content': content
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
