

//图片上传插件初始化
$('#upload-container').click(function(event) {
    $("#picker").find('input').click();
});
setTimeout(function(){
    var uploader = WebUploader.create({
        auto: true,// 选完文件后，是否自动上传。
        // swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',// swf文件路径
        server: __ROOT__ + 'thirdparty/oss/upload',// 文件接收服务端。
        dnd: '#upload-container',
        pick: '#picker',// 内部根据当前运行是创建，可能是input元素，也可能是flash. 这里是div的id
        multiple: true, // 选择多个
        chunked: true,// 开起分片上传。
        threads: 5, // 上传并发数。允许同时最大上传进程数。
        method: 'POST', // 文件上传方式，POST或者GET。
        fileSizeLimit: 1024*1024*100*100, //验证文件总大小是否超出限制, 超出则不允许加入队列。
        fileSingleSizeLimit: 1024*1024*100, //验证单个文件大小是否超出限制, 超出则不允许加入队列。
        fileVal:'upload', // [默认值：'file'] 设置文件上传域的name。
    });
    uploader.on('uploadSuccess', function(file, response) {
        var html = '<div  onclick="delImg(this)" ><img name="qr_img" data_name="'+__IMG__+ response.path[0]+'" src="'+__IMG__+ response.path[0]+'"></div>';
        $('#upload-list').append(html);
    });
},3000);


function delImg(i) {
    i.remove();
}

//提交落地页数据
function addCommodityBindPlatformGo() {

    let qr_img=[];
    $("*[name='qr_img']").each(function(index,el){
        qr_img[index] = $(el).attr('data_name')
    });
    requestData.data = {
        'qr_img' : qr_img,
        'commodity_id':  $("#commodity_id").selectpicker('val'),
        'platform_id':  $("#platform_id").selectpicker('val'),
    }
    ajaxGo('admin/commodity_bind_platform/addCommodityBindPlatform')

}

//修改落地页数据
function editCommodityBindGo(id) {

    let qr_img=[];
    $("*[name='qr_img']").each(function(index,el){
        qr_img[index] = $(el).attr('data_name')
    });

    requestData.data = {
        'qr_img' : qr_img,
        'commodity_id':  $("#commodity_id").selectpicker('val'),
        'platform_id':  $("#platform_id").selectpicker('val'),
    }
    ajaxGo('admin/commodity_bind_platform/editCommodityBindPlatform')

}