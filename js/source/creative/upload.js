$(function() {
    var options = {
        url: __ROOT__+"admin/source_creative/getList",
        pagination: true, //启动分页
        sortName: 'id',
        pageSize: 5,  //每页显示的记录数
        pageNumber:1, //当前第几页
        toolbar:"#toolbar",
        sidePagination: "server", //表示服务端请求
        queryParamsType : "undefined",
        showHeader:false,
        showToggle:false,
        queryParams: function queryParams(params) {   //设置查询参数
            params = {
                //这里是在ajax发送请求的时候设置一些参数 params有什么东西，自己看看源码就知道了
                pageNumber: params.pageNumber,
                pageSize: params.pageSize,
                sortName: "id",
                sortOrder: "desc",
                head : {'token' : getCookie('token')},
            };
            if (Label_id){
                params.tag_id=Label_id;
            }
            return params;
        },
        responseHandler:function(data){
          return data.data;
        },
        columns: [
            {
                field:'name',
                width:'80%',
                formatter:function(value,row,index){
                    var actions = [];
                    actions.push('<a class="btn btn-success btn-xs" href="javascript:void(0)" onclick="edit(\'' + row.id + '\')"><i class="fa fa-edit"></i>编辑</a>&nbsp;');
                    actions.push('<a class="btn btn-danger btn-xs" href="javascript:void(0)" onclick="remove(\'' + row.id + '\')"><i class="fa fa-remove"></i>删除</a>&nbsp;');
                    var html='<label><div style="display: flex"><div><img src="'+row.contentimg+'" style="width: auto;height: 80px;"></div><div style="flex: 1;margin-left: 10px;display: flex;flex-direction: column;justify-content: space-between;"><div style="width: 100%;">'+value+'</div><div style="display: flex;"><div>尺寸：'+(row.img_type==1?'180*100':'660*220')+'</div><div style="flex: 1;display: flex;justify-content: flex-end;"><div style="margin-right: 10px;line-height: 2em;"><input type="radio" name="id" value="'+row.id+'"></div><div>'+actions.join('')+'</div></div></div></div></div></label>';
                    return html;
                }
            }]
    };
    $('#grid').bootstrapTable(options);

    $(document).on('input change','input[type=text][name="landingPageIds[]"]',function () {
        console.log($(this).val())
        var val= $(this).val();
        if (val==''){
            $(this).parent().nextAll('span:eq(1)').hide();
        } else {
            $(this).parent().nextAll('span:eq(1)').show();
        }

    });


});
function add() {
    layer.open({
        type: 1,
        title: '添加',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $("#add"),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
            if(!$("#add").find("form").validate().form()) {
                return;
            }
            layer.msg('确定添加？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    requestData.data = $("#add").find("form").serializeJson();
                    var img_type=requestData.data.img_type;
                    var contentimg=requestData.data.contentimg;
                    var imgObj=new Image();
                    imgObj.src=contentimg;
                    imgObj.onload=function () {
                        var w=imgObj.width;
                        var h=imgObj.height;
                        if (img_type==1){//180*100
                            if (w!=180||h!==100){
                                $.modal.msgError('图片不符合规定');
                                return;
                            }
                        }else {
                            if (w!=660||h!==220){
                                $.modal.msgError('图片不符合规定');
                                return;
                            }
                        }
                        ajaxGo('admin/source_creative/add');
                        if(requestCode === 0){
                            layer.close(index);
                            layer.closeAll();
                            layer.msg(requestMessage);
                            window.location.reload();
                        }else {
                            layer.msg(requestMessage);
                        }
                    };
                }
            });


        }
    });

}

function edit(id) {
    requestData.data = {
        id:id
    }
    ajaxGo('admin/source_creative/detail');
    var data=requestData.data;
    $('#edit').find("input[name='name']").val(data.name);
    $('#edit').find("input[name='memo']").val(data.memo);
    $('#edit').find("input[name='link']").val(data.link);
    $('#edit').find("input[name='contentimg']").val(data.contentimg);
    $('#edit').find("input[name='alt']").val(data.alt);
    $('#edit').find("input[name='img_type'][value="+data.img_type+"]").attr('checked','checked');
    $('#edit').find("input[name='tag_id'][value="+data.tag_id+"]").attr('checked','checked');

    layer.open({
        type: 1,
        title: '编辑',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $('#edit'),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
            if(!$("#edit").find("form").validate().form()) {
                return;
            }
            layer.msg('确定编辑？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    requestData.data = $("#edit").find("form").serializeJson();
                    requestData.data.id=id;
                    var img_type=requestData.data.img_type;
                    var contentimg=requestData.data.contentimg;
                    var imgObj=new Image();
                    imgObj.src=contentimg;
                    imgObj.onload=function () {
                        var w=imgObj.width;
                        var h=imgObj.height;
                        if (img_type==1){//180*100
                            if (w!=180||h!==100){
                                $.modal.msgError('图片不符合规定');
                                return;
                            }
                        }else {
                            if (w!=660||h!==220){
                                $.modal.msgError('图片不符合规定');
                                return;
                            }
                        }
                        ajaxGo('admin/source_creative/edit');
                        if(requestCode === 0){
                            layer.close(index);
                            layer.closeAll();
                            layer.msg(requestMessage);
                            window.location.reload();
                        }else {
                            layer.msg(requestMessage);
                        }
                    };
                }
            });


        }
    });

}

function remove(id) {
    layer.msg('确定删除？', {
        time: 0 //不自动关闭
        , btn: ['确定', '取消']
        , yes: function (index) {
            toRemove(id);
            if(requestCode === 0){
                layer.close(index);
                layer.closeAll();
                layer.msg(requestMessage);
                window.location.reload();
            }else {
                layer.msg(requestMessage);
            }
        }
    });
}

/**
 * 复制标签
 */
$(function () {
    var clipboard = new ClipboardJS('.copy-btn');
    clipboard.on('success', function(e) {
        $.modal.msgSuccess("已复制成功");
    });
    clipboard.on('error', function(e) {
        $.modal.msgError("复制失败");
    });

});

/**添加
 */
function toAdd() {
    requestData.data = $("#add").find("form").serializeJson();
    ajaxGo('admin/source_creative/add');
}
/**编辑
 */
function toEdit(id) {
    requestData.data = $("#edit").find("form").serializeJson();
    requestData.data.id=id;
    ajaxGo('admin/source_creative/edit');
}

/**
 * 删除
 */
function toRemove(id) {
    requestData.data = {
        id:id,
    }
    ajaxGo('admin/source_creative/remove');
}

/**
 * 选择落地页
 */
function selectLandingPage(obj) {
    try {
        var accountId=$('input[name=account_id]').val();
        if (!accountId||accountId==undefined){
            throw new Error('请选择360账户');
        }
        //第一个方案弹窗
        /*layer.open({
            title: '选择落地页'
            ,area:'80%'
            ,content: '<select class="select-land-page" style = "width : 100%;"></select>'
            ,yes:function (index,layero) {
                var val=$(".select-land-page").select2('val');
                $(obj).parent().find("input").val(val);
                layer.close(index)
            }
        });*/
        //第二个方案菜单按钮
        $(obj).addClass('dropdown-toggle').attr('data-toggle','dropdown');
        requestData={
            pageNumber:1 ,//分页：当前页码
            pageSize: 10,
            sortName: "id",
            sortOrder: "desc",
            type:1,
            search_id:0,
            thirdparty_id:accountId
        };
        ajaxGo('admin/source_creative/getLandingPageList');
        var rows=requestData.data.rows;
        var childHtml='';
        rows.forEach(function (e) {
            childHtml+=('<li><a href="javascript:(0)">'+e.id+'</a></li>');
        });
        $(obj).next('.dropdown-menu').html(childHtml);
    }catch (e) {
        $.modal.alertWarning(e.message);
    }
    /*$(".select-land-page").select2({
        language:'zh-CN',
        placeholder:'请选择页面',
        closeOnSelect: false,
        allowClear : true,
        ajax: {
            url: __ROOT__+"admin/source_creative/getLandingPageList",
            dataType: 'json',
            delay: 250,
            data: function(params) {
                return {
                    //params.term表示输入框中内容，发送到服务器的参数名；所以这里你可以添加自定义参数，如：stype:'person'
                    name: params.term, //后端取 key 它就是搜索关键字
                    pageNumber: params.page || 1 ,//分页：当前页码
                    pageSize: 10,
                    sortName: "id",
                    sortOrder: "desc",
                    head : {'token' : getCookie('token')},
                    type:1,
                    search_id:0,
                    thirdparty_id:accountId
                };
            },
            processResults: function(data, params) {
                params.pageNumber = params.page || 1;
                // 后端返回的根节点就是 data
                return {
                    results: data.data.rows,
                    pagination: { //分页
                        //more: data.more // 是否还有后面页：true|false
                        more: data.data.total>params.pageNumber*10 // 后端返回总数量 total 算出还有没
                    }
                };
            },
            cache: true
        },
        minimumInputLength: 0,
        templateResult: function (repo) {
            if (repo.loading) return repo.text;
            var text='<div style="display: flex;"><img src="'+repo.head_img+'" style="width: 140px;height: 80px;"><div style="flex: 1;display: flex;flex-direction: column;justify-content:space-between;margin-left: 10px;"><div>'+repo.title+'</div><div>名称：'+repo.name+'</div><div><a href="'+repo.url+'/'+repo.pc_url+'" target="_blank">预览</a></div><div></div></div></div>';
            var $container = $(text);
            return $container;
        },
        templateSelection: function (repo) {
            return repo.id;
        }
    });*/
}
$(function () {
    $(document).on('click','.dropdown-menu a',function () {
        var dom=$(this).parents('.dropdown-menu').prevAll('div').find('input');
        dom.val($(this).text());
        dom.change();
    })
});

/**
 * 选择360账号
 */
function select360Account(obj) {
    layer.open({
        title: '选择360账号'
        ,area:'80%'
        ,content: '<select class="select-360-account" style = "width : 100%"></select>'
        ,yes:function (index,layero) {
            var val=$(".select-360-account").select2('val');
            $(obj).parent().find("input").val(val);
            var data=$(".select-360-account").select2('data');
            $(obj).text("已选账号："+data[0].name);

            layer.close(index)
        }
    });
    $(".select-360-account").select2({
        language:'zh-CN',
        placeholder:'请选择账号',
        closeOnSelect: false,
        allowClear : true,
        ajax: {
            url: __ROOT__+"admin/source_creative/getThirdpaytList",
            dataType: 'json',
            delay: 250,
            data: function(params) {
                return {
                    //params.term表示输入框中内容，发送到服务器的参数名；所以这里你可以添加自定义参数，如：stype:'person'
                    name: params.term, //后端取 key 它就是搜索关键字
                    pageNumber: params.page || 1 ,//分页：当前页码
                    pageSize: 10,
                    sortName: "id",
                    sortOrder: "desc",
                    head : {'token' : getCookie('token')},
                    platform_id:1
                };
            },
            processResults: function(data, params) {
                params.pageNumber = params.page || 1;
                // 后端返回的根节点就是 data
                return {
                    results: data.data.rows,
                    pagination: { //分页
                        //more: data.more // 是否还有后面页：true|false
                        more: data.data.total>params.pageNumber*10 // 后端返回总数量 total 算出还有没
                    }
                };
            },
            cache: true
        },
        minimumInputLength: 0,
        templateResult: function (repo) {
            if (repo.loading) return repo.text;
            var $container = $('<option value=""></option>');
            $container.val(repo.id)
            $container.text(repo.name);
            $container.attr('title','选择使用');
            return $container;
        },
        templateSelection: function (repo) {
            return repo.name?repo.name:repo.text;
        }
    });
}
//计划ID
var Campaignid=0;
//生成信息ID
var GenId=0;
//计划名称
var campaignName=null;
function setCampaignName(){
    layer.prompt({title: '请填写计划名', formType: 2}, function(text, index){
        layer.close(index);
        campaignName=text;
    });
}
/**
 * 上传提交
 */
$("#uploadBatchBtn").click(function () {
    try {
        if ($(this).attr('disabled')){
            return false;
        }
        if (!campaignName){
            setCampaignName();
            return;
        }
       var creativeId=$('input[type=radio][name=id]:checked').val();
        if (!creativeId){
            throw new Error('请选择创意');
        }
        var landingPage=$('input[name="landingPageIds[]"]').not('[readonly]');
        var landingPageIds=[];
        for (var i=0;i<landingPage.length;i++){
            var val=$(landingPage[i]).val();
            if (!val||val==''){
                throw new Error('请选择完整的落地页');
            }
            landingPageIds.push(val);
        }
        if (landingPageIds<1){
            throw new Error('已全部上传成功');
            $(this).attr('disabled','disabled');
        }
        var accountId=$('input[name=account_id]').val();
        if (!accountId||accountId==undefined){
            throw new Error('请选择360账户');
        }
        requestData.data={
            creativeId:creativeId,
            landingPageIds:JSON.stringify(landingPageIds),
            accountId:accountId,
            campaignid:Campaignid,
            gen_id:GenId,
            campaignName:campaignName,
        };
        ajaxGo('admin/source_creative/uploadSubmit');
        if (requestCode!=0){
            throw new Error(requestMessage);
        }
        var data=requestData.data;
        console.log(data)
        console.log(requestCode)
        landingPage.parent().parent().find('.glyphicon').hide();
        landingPage.parent().parent().append('<span class="upload-tips" style="color: green;">上传成功</span>');
        landingPage.attr('readonly','readonly');
        $(this).attr('disabled','disabled');
        $.modal.alertSuccess(requestMessage);
    }catch (e) {
        $.modal.alertWarning(e.message);
    }


});

/**
 * 单个上传
 */
function uploadSingle(obj) {
    var load = layer.load(1, {
        shade: [0.1,'#fff'] //0.1透明度的白色背景
    });
    try {
        if (!campaignName){
            setCampaignName();
            return;
        }
        $(obj).parent().find('.glyphicon').hide();
        var creativeId=$('input[type=radio][name=id]:checked').val();
        if (!creativeId){
            throw new Error('请选择创意');
        }
        var landingPageId=$(obj).parent().find('input[name="landingPageIds[]"]').val();
        if (!landingPageId||landingPageId==''){
            throw new Error('落地页错误');
        }
        var accountId=$('input[name=account_id]').val();
        if (!accountId||accountId==undefined){
            throw new Error('请选择360账户');
        }
        requestData.data={
            creativeId:creativeId,
            landingPageId:landingPageId,
            accountId:accountId,
            campaignid:Campaignid,
            gen_id:GenId,
            campaignName:campaignName,
        };
        console.log(requestData)
        ajaxGo('admin/source_creative/uploadSingle');
        if (requestCode!=0){
            throw new Error(requestMessage);
        }
        var data=requestData.data;

        if (data.campaignid) {
            Campaignid=data.campaignid;
            GenId=data.gen_id;
        }
        $(obj).parent().find('.glyphicon').hide();
        $(obj).parent().find('input[name="landingPageIds[]"]').attr('readonly','readonly');
        $(obj).parent().append('<span class="upload-tips" style="color: green;">上传成功</span>');;
        $.modal.alertSuccess(requestMessage);
        layer.close(load);
    }catch (e) {
        $.modal.alertWarning(e.message);
        $(obj).parent().find('.glyphicon').show();
    }
}
/**
 * 切换图片尺寸
 */
function changeImgType(imgType)
{
    $('#grid').bootstrapTable('refresh',{ query: {pageSize: 5,pageNum:1,head : {'token' : getCookie('token')},filter:' and img_type='+imgType}});
}
$(function () {
    getListLabel();
    setTagList();
});
function setTagList()
{
    requestData.data = {};
    ajaxGo('admin/source_tag/getAllList');
    requestData.data.forEach((item,index,array)=>{
        var html='<div class="radio-inline"><label><input type="radio" name="tag_id" value="'+item.id+'">'+item.name+'</label></div>';
        $(".tags-wrap").append(html);
    });
    $('input[type=radio][name=tag_id]:eq(0)').attr('checked','checked');
}
//切换标签
let Label_id = 0;
function changeLabel(obj) {
    $('span').removeClass('label_checked');
    $(obj).addClass('label_checked');
    Label_id = parseInt($(obj).attr('data_id'));
    if ($('#big_img').attr('style').indexOf('display: none')==-1){
        getMaterialList();
    }else {
        $('#grid').bootstrapTable('refresh',{ query: {pageSize: 5,pageNum:1,head : {'token' : getCookie('token')},filter:' and tag_id='+Label_id}});
    }
}
//获取用户所有标签
function getListLabel() {
    requestData.data = {
        'type' : 3
    };
    ajaxGo('admin/source_tag/getAllList');
    $('.label_list_wrap').empty();
    requestData.data.forEach((item,index,array)=>{
        //执行代码
        //var html = "<option value='"+item.id+"'>"+item.name+"</option>";
        if(item.id === Label_id){
            var html = '<span class="label_list label_checked" style="cursor:pointer" onclick="changeLabel(this)" data_id = "'+item.id+'" >'+item.name+'</span>';
        }else {
            var html = '<span class="label_list" onclick="changeLabel(this)" style="cursor:pointer" data_id = "'+item.id+'" >'+item.name+'</span>';
        }
        $('.label_list_wrap').append(html);
    });
}

//添加标签
function addLabel(){
    layer.open({
        type: 1,
        title: '添加标签',
        shadeClose: true,
        shade: 0.8,
        area: ['60%', '50%'],
        content: $('#addLable'),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
            layer.msg('确定添加？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    requestData.data = {
                        'name' : $('#label_name').val(),
                        'sort_order' : 0
                    };
                    ajaxGo('admin/source_tag/add');
                    if(requestCode === 0){
                        getListLabel();
                        layer.close(index);
                        layer.closeAll();
                        layer.msg('添加成功');
                    }else {
                        layer.msg(requestMessage);
                    }
                }
            });
        }
    });
}

//编辑标签
function editLabel(){
    if(0 === Label_id){
        layer.msg('请选择标签')
    }else {
        layer.open({
            type: 1,
            title: '修改标签',
            shadeClose: true,
            shade: 0.8,
            area: ['60%', '50%'],
            content: $('#addLable'),
            btn: ['确定', '取消'], // 按钮
            yes: function(index, layero){
                layer.msg('确定修改？', {
                    time: 0 //不自动关闭
                    ,btn: ['确定', '取消']
                    ,yes: function(index){
                        requestData.data = {
                            'id' : Label_id,
                            'name' : $('#label_name').val(),
                            'sort_order' : 0
                        };
                        ajaxGo('admin/source_tag/edit');
                        if(requestCode === 0){
                            getListLabel();
                            layer.close(index);
                            layer.closeAll();
                            layer.msg('修改成功');
                        }else {
                            layer.msg(requestMessage);
                        }
                    }
                });
            }
        });

    }
}
//打开图片素材
function openMaterial()
{
    var index=layer.open({
        type: 1,
        title: '大图素材',
        shadeClose: true,
        shade: 0.8,
        area: ['85%', '80%'],
        content: $('#big_img'),
        btn: [ '取消'], // 按钮
    });
    $('input[name=contentimg]').change(function () {
        layer.close(index)
    })
}
$(function () {
    getMaterialList();
});
//获取素材内容
function getMaterialList()
{
    requestData.data = {
        'tag_id' : Label_id,
        'type': 2,
    };
    ajaxGo('admin/material_library/getListToSelect');
    $('#img_list').empty();
    requestData.data.forEach((item,index,array)=>{
        //执行代码
        //var html = "<option value='"+item.id+"'>"+item.name+"</option>";
        var html = '<div class="col-sm-4 img_div">\n' +
            '            <div>\n' +
            '                <img class="img_s" src="'+__IMG__+item.img_url+'" alt="">\n' +
            '            </div>\n' +
            '            <div class="right_font">\n' +
            '                <span style="margin-right: 10px" onclick="delImgMaterIal('+item.id+')">删除</span>\n' +
            '                <a href="javascript:void(0);" style="color: rgb(103,103,103);" onclick="checkedImg('+item.id+')">使用此图!</a>\n' +
            '                <input id="m_d_'+item.id+'" type="hidden" value="'+item.img_url+'" />\n' +
            '            </div>\n' +
            '        </div>';
        $('#img_list').append(html);
    });
}
//选择素材插入
function checkedImg(id) {
    let img_url = __IMG__+$('#m_d_'+id).val();
    $('input[name=contentimg]').val(img_url).trigger('change');

    $.modal.msgSuccess('选择成功');
}
//检查图片尺寸
$(function () {
    $('input[name=contentimg]').change(function () {
        var src=$(this).val();
        var imgObj=new Image();
        imgObj.src=src;
        imgObj.onload=function () {
            var w=imgObj.width;
            var h=imgObj.height;
            console.log(w);
            console.log(h)
        }
    });
});

//删除素材
function delImgMaterIal(id)
{
    layer.msg('确定删除？', {
        time: 0 //不自动关闭
        ,btn: ['确定', '取消']
        ,yes: function(index){
            requestData.data = {
                'id' : id
            };
            ajaxGo('admin/material_library/delMaterialLibrary');
            if(requestCode === 0){
                fac_search();
                layer.msg('删除成功!');
            }else {
                layer.msg(requestMessage);
            }
        }
    });
}

//图片上传插件初始化
$('#upload-img').click(function(event) {
    $("#picker-img").find('input').click();
});
setTimeout(function(){
    var uploader = WebUploader.create({
        auto: true,// 选完文件后，是否自动上传。
        // swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',// swf文件路径
        server: __ROOT__ + 'thirdparty/oss/upload',// 文件接收服务端。
        dnd: '#upload-img',
        pick: '#picker-img',// 内部根据当前运行是创建，可能是input元素，也可能是flash. 这里是div的id
        multiple: true, // 选择多个
        chunked: true,// 开起分片上传。
        threads: 5, // 上传并发数。允许同时最大上传进程数。
        method: 'POST', // 文件上传方式，POST或者GET。
        fileSizeLimit: 1024*1024*100*100, //验证文件总大小是否超出限制, 超出则不允许加入队列。
        fileSingleSizeLimit: 1024*1024*100, //验证单个文件大小是否超出限制, 超出则不允许加入队列。
        fileVal:'upload', // [默认值：'file'] 设置文件上传域的name。
    });
    uploader.on('uploadSuccess', function(file, response) {
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
},3000);