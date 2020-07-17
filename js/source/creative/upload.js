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
                sortName: params.sortName,
                sortOrder: params.sortOrder,
                head : {'token' : getCookie('token')},
            };

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
                    var html='<div style="display: flex"><div><img src="'+row.contentimg+'" style="width: auto;height: 80px;"></div><div style="flex: 1;margin-left: 10px;display: flex;flex-direction: column;justify-content: space-between;"><div style="width: 100%;">'+value+'</div><div style="display: flex;"><div>尺寸：'+(row.img_type==1?'180*100':'660*220')+'</div><div style="flex: 1;display: flex;justify-content: flex-end;"><div style="margin-right: 10px;line-height: 2em;"><input type="radio" name="id" value="'+row.id+'"></div><div>'+actions.join('')+'</div></div></div></div></div>';
                    return html;
                }
            }]
    };
    $('#grid').bootstrapTable(options);



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
                    toAdd();
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
                    toEdit(id);
                    if(requestCode === 0){
                        layer.close(index);
                        layer.closeAll();
                        layer.msg(requestMessage);
                        $window.location.reload();
                    }else {
                        layer.msg(requestMessage);
                    }
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
    layer.open({
        title: '选择落地页'
        ,area:'80%'
        ,content: '<select class="select-land-page" style = "width : 100%"></select>'
        ,yes:function (index,layero) {
            var val=$(".select-land-page").select2('val');
            $(obj).parent().find("input").val(val);
            layer.close(index)
        }
    });
    $(".select-land-page").select2({
        language:'zh-CN',
        placeholder:'请选择落地页',
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
                    search_id:0
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
    });
}

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
/**
 * 上传提交
 */
$("#uploadBatchBtn").click(function () {
    try {
       var creativeId=$('input[type=radio][name=id]:checked').val();
        if (!creativeId){
            throw new Error('请选择创意');
        }
        var landingPage=$('input[name="landingPageIds[]"]');
        var landingPageIds=[];
        for (var i=0;i<landingPage.length;i++){
            var val=$(landingPage[i]).val();
            if (!val||val==''){
                throw new Error('请选择完整的落地页');
            }
            landingPageIds.push(val);
        }
        var accountId=$('input[name=account_id]').val();
        if (!accountId||accountId==undefined){
            throw new Error('请选择360账户');
        }
        requestData.data={
            creativeId:creativeId,
            landingPageIds:JSON.stringify(landingPageIds),
            accountId:accountId
        };
        ajaxGo('admin/source_creative/uploadSubmit');
        var data=requestData.data;
        console.log(data)
        $.modal.alertSuccess(requestMessage);
    }catch (e) {
        $.modal.alertWarning(e.message);
    }


});