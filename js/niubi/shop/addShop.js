

//图片上传插件初始化
$('#upload-container-head').click(function(event) {
    $("#picker-head").find('input').click();
});
// var uploader_head_obj = new WebUploader;
var uploader_head =  WebUploader.create(
    {
        auto: true,// 选完文件后，是否自动上传。
        // swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',// swf文件路径
        server: __ROOT__ + 'thirdparty/oss/upload',// 文件接收服务端。
        dnd: '#upload-container',
        pick: '#picker-head',// 内部根据当前运行是创建，可能是input元素，也可能是flash. 这里是div的id
        multiple: true, // 选择多个
        chunked: true,// 开起分片上传。
        threads: 5, // 上传并发数。允许同时最大上传进程数。
        method: 'POST', // 文件上传方式，POST或者GET。
        fileSizeLimit: 1024*1024*100*100, //验证文件总大小是否超出限制, 超出则不允许加入队列。
        fileSingleSizeLimit: 1024*1024*100, //验证单个文件大小是否超出限制, 超出则不允许加入队列。
        fileVal:'upload', // [默认值：'file'] 设置文件上传域的name。
    }
);

uploader_head.on("uploadSuccess", function(file, response) {
    var html = '<div  onclick="delImg(this)" ><img name="head_img" data_name="'+__IMG__+ response.path[0]+'" src="'+__IMG__+ response.path[0]+'"></div>';
    $('#upload-list-head').append(html);
});

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
