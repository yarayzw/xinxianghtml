
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
        var html = '<div  onclick="delImg(this)" style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"><img name="qr_img" data_name="'+__IMG__+ response.path[0]+'" src="'+__IMG__+ response.path[0]+'"></div>';
        $('#upload-list').append(html);
    });
},3000);

$('#thumbnail_small').click(function(event) {
    $("#thumbnail_small_picker").find('input').click();
});
setTimeout(function(){
    var uploader = WebUploader.create({
        auto: true,// 选完文件后，是否自动上传。
        // swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',// swf文件路径
        server: __ROOT__ + 'thirdparty/oss/upload',// 文件接收服务端。
        dnd: '#thumbnail_small',
        pick: '#thumbnail_small_picker',// 内部根据当前运行是创建，可能是input元素，也可能是flash. 这里是div的id
        multiple: true, // 选择多个
        chunked: true,// 开起分片上传。
        threads: 5, // 上传并发数。允许同时最大上传进程数。
        method: 'POST', // 文件上传方式，POST或者GET。
        fileSizeLimit: 1024*1024*100*100, //验证文件总大小是否超出限制, 超出则不允许加入队列。
        fileSingleSizeLimit: 1024*1024*100, //验证单个文件大小是否超出限制, 超出则不允许加入队列。
        fileVal:'upload', // [默认值：'file'] 设置文件上传域的name。
    });
    uploader.on('uploadSuccess', function(file, response) {
        var html = '<div  onclick="delImg(this)" style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"><img name="thumbnail_small" data_name="'+__IMG__+ response.path[0]+'" src="'+__IMG__+ response.path[0]+'"></div>';
        $('#thumbnail_small_div').append(html);
    });
},3000);

$('#thumbnail_big').click(function(event) {
    $("#thumbnail_big_picker").find('input').click();
});
setTimeout(function(){
    var uploader = WebUploader.create({
        auto: true,// 选完文件后，是否自动上传。
        // swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',// swf文件路径
        server: __ROOT__ + 'thirdparty/oss/upload',// 文件接收服务端。
        dnd: '#thumbnail_big',
        pick: '#thumbnail_big_picker',// 内部根据当前运行是创建，可能是input元素，也可能是flash. 这里是div的id
        multiple: true, // 选择多个
        chunked: true,// 开起分片上传。
        threads: 5, // 上传并发数。允许同时最大上传进程数。
        method: 'POST', // 文件上传方式，POST或者GET。
        fileSizeLimit: 1024*1024*100*100, //验证文件总大小是否超出限制, 超出则不允许加入队列。
        fileSingleSizeLimit: 1024*1024*100, //验证单个文件大小是否超出限制, 超出则不允许加入队列。
        fileVal:'upload', // [默认值：'file'] 设置文件上传域的name。
    });
    uploader.on('uploadSuccess', function(file, response) {
        var html = '<div  onclick="delImg(this)" style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"><img name="thumbnail_big" data_name="'+__IMG__+ response.path[0]+'" src="'+__IMG__+ response.path[0]+'"></div>';
        $('#thumbnail_big_div').append(html);
    });
},3000);

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
    var html = '<div  onclick="delImg(this)" style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"><img name="head_img" data_name="'+__IMG__+ response.path[0]+'" src="'+__IMG__+ response.path[0]+'"></div>';
    $('#upload-list-head').append(html);
});

function delImg(i) {
    i.remove();
    // console.log(i);
    // $('#upload-item'+i).remove();
}

//提交落地页数据
function addCommodityGo() {

    let qr_img=[];
    $("*[name='qr_img']").each(function(index,el){
        qr_img[index] = $(el).attr('data_name')
    });

    let head_img=[];
    $("*[name='head_img']").each(function(index,el){
        head_img[index] = $(el).attr('data_name')
    });

    let thumbnail_small=[];
    $("*[name='thumbnail_small']").each(function(index,el){
        thumbnail_small[index] = $(el).attr('data_name')
    });

    let thumbnail_big=[];
    $("*[name='thumbnail_big']").each(function(index,el){
        thumbnail_big[index] = $(el).attr('data_name')
    });
    //富文本值
    var content = $(".simditor-body").html();

    requestData.data = {
        'name' : $("input[name='name']").val(),
        'qr_img' : qr_img,
        'url' : $("input[name='url']").val(),
        'tj_url': $("input[name='tj_url']").val(),
        'head_img': head_img,
        'title' : $("input[name='title']").val(),
        'wechat_name' : $("input[name='we_chat_name']").val(),
        'wechat_url' : $("input[name='we_chat_url']").val(),
        'thumbnail_big': thumbnail_big,
        'thumbnail_small' : thumbnail_small,
        'comment' : content,
        'wechat_id' : $("input[name='we_chat_id']").val(),
        'wechat_url_info' : $("input[name='we_chat_url_info']").val(),
    }
    ajaxGo('admin/information/addInformation')

}

//修改落地页数据
function editCommodityGo(id) {

    let qr_img=[];
    $("*[name='qr_img']").each(function(index,el){
        qr_img[index] = $(el).attr('data_name')
    });

    let head_img=[];
    $("*[name='head_img']").each(function(index,el){
        head_img[index] = $(el).attr('data_name')
    });


    let thumbnail_small=[];
    $("*[name='thumbnail_small']").each(function(index,el){
        thumbnail_small[index] = $(el).attr('data_name')
    });

    let thumbnail_big=[];
    $("*[name='thumbnail_big']").each(function(index,el){
        thumbnail_big[index] = $(el).attr('data_name')
    });

    //富文本值
    var content = $(".simditor-body").html();

    requestData.data = {
        'id' : id,
        'name' : $("input[name='name']").val(),
        'qr_img' : qr_img,
        'url' : $("input[name='url']").val(),
        'tj_url': $("input[name='tj_url']").val(),
        'head_img': head_img,
        'title' : $("input[name='title']").val(),
        'wechat_name' : $("input[name='we_chat_name']").val(),
        'wechat_url' : $("input[name='we_chat_url']").val(),
        'thumbnail_big': thumbnail_big,
        'thumbnail_small' : thumbnail_small,
        'comment' : content,
        'wechat_id' : $("input[name='we_chat_id']").val(),
        'wechat_url_info' : $("input[name='we_chat_url_info']").val(),
    }
    ajaxGo('admin/information/editInformation')

}
