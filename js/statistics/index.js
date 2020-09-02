$(document).ready(function () {

});


//csv文件上传
$('#upload-container-csv').click(function(event) {
    $("#picker-csv").find('input').click();
});
setTimeout(function(){
    var uploader = WebUploader.create({
        auto: true,// 选完文件后，是否自动上传。
        // swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',// swf文件路径
        server: __ROOT__ + 'thirdparty/oss/uploadFile',// 文件接收服务端。
        dnd: '#upload-container-csv',
        pick: '#picker-csv',// 内部根据当前运行是创建，可能是input元素，也可能是flash. 这里是div的id
        multiple: true, // 选择多个
        chunked: true,// 开起分片上传。
        threads: 5, // 上传并发数。允许同时最大上传进程数。
        method: 'POST', // 文件上传方式，POST或者GET。
        fileSizeLimit: 1024*1024*100*100, //验证文件总大小是否超出限制, 超出则不允许加入队列。
        fileSingleSizeLimit: 1024*1024*100, //验证单个文件大小是否超出限制, 超出则不允许加入队列。
        fileVal:'upload', // [默认值：'file'] 设置文件上传域的name。
    });
    uploader.on('uploadSuccess', function(file, response) {
        $('#upload-container-csv-display').empty();
        var html = '<span id="csv_file_url">'+response.path[0]+'</span>';
        $('#upload-container-csv-display').append(html);

    });
},3000);

//excel上传插件初始化
$('#upload-container-excel').click(function(event) {
    $("#picker-excel").find('input').click();
});
// var uploader_head_obj = new WebUploader;
var uploader_head =  WebUploader.create(
    {
        auto: true,// 选完文件后，是否自动上传。
        // swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',// swf文件路径
        server: __ROOT__ + 'thirdparty/oss/uploadFile',// 文件接收服务端。
        dnd: '#upload-container-excel',
        pick: '#picker-excel',// 内部根据当前运行是创建，可能是input元素，也可能是flash. 这里是div的id
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
    $('#upload-container-excel-display').empty();
    var html = '<span id="excel_file_url">'+response.path[0]+'</span>';
    $('#upload-container-excel-display').append(html);
});

//上传文件
function exportFile() {
    layer.open({
        type: 1,
        title: '上传文件',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $('#upload_file'),
        btn: [ '取消'], // 按钮

//            content: '{:U("User/editUser",array("id"=>'+id+',"act"=>display))}' //iframe的url
    });
}