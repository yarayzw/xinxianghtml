
//图片上传插件初始化
$('#upload-container-head').click(function(event) {
    $("#picker-head").find('input').click();
});
setTimeout(function(){
    // var uploader_head_obj = new WebUploader;
    var uploader_head =  WebUploader.create(
        {
            auto: true,// 选完文件后，是否自动上传。
            // swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',// swf文件路径
            server: __ROOT__ + 'thirdparty/oss/upload',// 文件接收服务端。
            dnd: '#upload-container-head',
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
},3000);



//图片上传插件初始化
$('#upload-big').click(function(event) {
    $("#picker-big").find('input').click();
});
var uploader_big = WebUploader.create({
    auto: true,// 选完文件后，是否自动上传。
    // swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',// swf文件路径
    server: __ROOT__ + 'thirdparty/oss/upload',// 文件接收服务端。
    dnd: '#upload-big',
    pick: '#picker-big',// 内部根据当前运行是创建，可能是input元素，也可能是flash. 这里是div的id
    multiple: true, // 选择多个
    chunked: true,// 开起分片上传。
    threads: 5, // 上传并发数。允许同时最大上传进程数。
    method: 'POST', // 文件上传方式，POST或者GET。
    fileSizeLimit: 1024*1024*100*100, //验证文件总大小是否超出限制, 超出则不允许加入队列。
    fileSingleSizeLimit: 1024*1024*100, //验证单个文件大小是否超出限制, 超出则不允许加入队列。
    fileVal:'upload', // [默认值：'file'] 设置文件上传域的name。
});
uploader_big.on('uploadSuccess', function(file, response) {
    if(0 === Label_id){
        layer.msg('请选择标签')
    }else {
        requestData.data = {
            'img_url' : response.path[0],
            'tag_id' : Label_id,
            'type': 2,
        };
        ajaxGo('admin/material_library/addMaterialLibrary');
        layer.msg('上传成功');
        getMaterialList();
    }
});



function delImg(i) {
    layer.msg('确定删除？', {
        time: 0 //不自动关闭
        ,btn: ['确定', '取消']
        ,yes: function(index){
            i.remove();
            layer.close(index);
        }
    });
}

//提交落地页数据
function addCommodityGo(type = 1) {

    let qr_img=[];
    let qr_img_link = [];
    $("*[name='qr_img']").each(function(index,el){
        qr_img[index] = $(el).attr('data_name');
        qr_img_link[index] = $(el).attr('data_link_id')
    });

    let head_img=[];
    $("*[name='head_img']").each(function(index,el){
        head_img[index] = $(el).attr('data_name')
    });

    requestData.data = {
        'name' : $("input[name='name']").val(),
        'qr_img' : qr_img,
        'url' : $("input[name='url']").val(),
        'tj_url': $("input[name='tj_url']").val(),
        //'material_id':  $("#material").selectpicker('val'),
        'material_id':  $("input[type=radio][name=material]:checked").val(),
        'head_img': head_img,
        'title' : $("input[name='title']").val(),
        //'view_id':  $("#view").selectpicker('val'),
        'view_id':  $("input[type=radio][name=view]:checked").val(),
        'platform_id':  0,
        // 'platform_id':  $("input[type=radio][name=platform]:checked").val(),
        'thirdparty_id':  $("input[type=radio][name=thirdparty_info]:checked").val(),
        'wechat_config_id':  0,
        'type':  type,
        'wechat_name' : $("input[name='we_chat_name']").val(),
        'wechat_url' : $("input[name='we_chat_url']").val(),
        //'mobile_view_id':  $("#mobile_view").selectpicker('val'),
        'mobile_view_id':  $("input[type=radio][name=mobile_view]:checked").val(),
        'bottom_name' : $("input[name='bottom_name']").val(),
        'wechat_id' : $("input[name='we_chat_id']").val(),
        'wechat_url_info' : $("input[name='we_chat_url_info']").val(),
        'uc_tj_id' : $("input[name='uc_tj_id']").val(),
        'uc_tj' : $("input[name='uc_tj']").val(),
        'qr_img_link' : qr_img_link,
        'repeat_jump' : $("input[name='repeat_jump']").val(),
    };
    ajaxGo('admin/commodity/addCommodity')

}

//修改落地页数据
function editCommodityGo(id) {

    let qr_img=[];
    let qr_img_link = [];
    $("*[name='qr_img']").each(function(index,el){
        qr_img[index] = $(el).attr('data_name');
        qr_img_link[index] = $(el).attr('data_link_id')
    });

    let head_img=[];
    $("*[name='head_img']").each(function(index,el){
        head_img[index] = $(el).attr('data_name')
    });

    requestData.data = {
        'id' : id,
        'name' : $("input[name='name']").val(),
        'qr_img' : qr_img,
        'url' : $("input[name='url']").val(),
        'tj_url': $("input[name='tj_url']").val(),
        //'material_id':  $("#material").selectpicker('val'),
        'material_id':  $("input[type=radio][name=material]:checked").val(),
        'head_img': head_img,
        'title' : $("input[name='title']").val(),
        //'view_id':  $("#view").selectpicker('val'),
        'platform_id':  0,
        'view_id':  $("input[type=radio][name=view]:checked").val(),
        'thirdparty_id':  $("input[type=radio][name=thirdparty_info]:checked").val(),
        'wechat_config_id': 0,
        'type':  1,
        'wechat_name' : $("input[name='we_chat_name']").val(),
        'wechat_url' : $("input[name='we_chat_url']").val(),
        //'mobile_view_id':  $("#mobile_view").selectpicker('val'),
        'mobile_view_id': $("input[type=radio][name=mobile_view]:checked").val(),
        'bottom_name' : $("input[name='bottom_name']").val(),
        'wechat_id' : $("input[name='we_chat_id']").val(),
        'wechat_url_info' : $("input[name='we_chat_url_info']").val(),
        'uc_tj_id' : $("input[name='uc_tj_id']").val(),
        'uc_tj' : $("input[name='uc_tj']").val(),
        'qr_img_link' : qr_img_link,
        'repeat_jump' : $("input[name='repeat_jump']").val(),
        // 'thirdparty_id':  $("#thirdparty_id").selectpicker('val')
    }
    ajaxGo('admin/commodity/editCommodity')
    layer.msg(requestMessage);
}

//修改落地页模版
function updateViewGo(id) {
    requestData.data = {
        'id' : id,
        'view_id': $("input[type=radio][name=view_update]:checked").val(),
    }
    ajaxGo('admin/commodity/updateView')
}

function updateViewMobileGo(id) {
    requestData.data = {
        'id' : id,
        'mobile_view_id':  $("input[type=radio][name=mobile_view_update]:checked").val(),
    }
    ajaxGo('admin/commodity/updateViewMobile')
}

function updateMaterialGo(id) {
    requestData.data = {
        'id' : id,
        'material_id': $("input[type=radio][name=material_update]:checked").val(),
    }
    ajaxGo('admin/commodity/updateMaterial')
}