$(function() {
    var options = {
        url: __ROOT__+"admin/font_icon/getList",
        pagination: true, //启动分页
        sortName: 'id',
        pageSize: 10,  //每页显示的记录数
        pageNumber:1, //当前第几页
        pageList: [5, 10, 15, 20],  //记录数可选列表
        toolbar:"#toolbar",
        sidePagination: "server", //表示服务端请求
        queryParamsType : "undefined",
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
        columns: [/*{
            checkbox: false
            },*/
            {
                field: 'id',
                title: 'ID',
                visible: false
            },
            {
                field: 'pic',
                title: '图片',
                formatter:function(value,row,index){
                    return "<img src='"+value+"' style='width: 60px;height: 60px;'/>"
                }
            },
            {
                field: 'icon',
                title: '图标'
            },
            {
                field: 'create_at',
                title: '创建时间'
            },
            {
                field: 'update_at',
                title: '更新时间'
            },
            {
                title: '操作',
                align: 'center',
                formatter: function(value, row, index) {
                    var actions = [];
                    if($.inArray('admin/fonticon/edit',u_role_url) !== -1) {
                        actions.push('<a href="#" mce_href="#" data_id="'+row.id+'" data_wechat_config_id = "'+row.wechat_config_id+'" data_msg_config_id = "'+row.msg_config_id+'" data_url = "'+row.url+'" onclick="editWechatConfigUrl(this)" >编辑</a> ');

                    }
                    if($.inArray('admin/fonticon/remove',u_role_url) !== -1) {
                        actions.push('<a class="btn btn-danger btn-xs" href="javascript:void(0)" onclick="remove(\'' + row.id + '\')"><i class="fa fa-remove"></i>删除</a>&nbsp;');

                    }
                    // actions.push('<a class="btn btn-primary btn-xs copy-btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-text="<icon>'+row.id+'\</icon>"><i class="fa fa-copy"></i>复制标签</a>');
                    return actions.join('');
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
    ajaxGo('admin/font_icon/detail');
    var data=requestData.data;
    $('#edit').find("input[name='pic']").val(data.pic);
    $('#edit').find("input[name='icon']").val(data.icon);
    layer.open({
        type: 1,
        title: '编辑',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $('#edit'),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
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
    var pic=$("#add").find("input[name='pic']").val();
    var icon=$("#add").find("input[name='icon']").val();
    requestData.data = {
        pic:pic,
        icon:icon
    }
    ajaxGo('admin/font_icon/add');
}
/**编辑
 */
function toEdit(id) {
    var pic=$("#edit").find("input[name='pic']").val();
    var icon=$("#edit").find("input[name='icon']").val();
    requestData.data = {
        id:id,
        pic:pic,
        icon:icon
    }
    ajaxGo('admin/font_icon/edit');
}

/**
 * 删除
 */
function toRemove(id) {
    requestData.data = {
        id:id,
    }
    ajaxGo('admin/font_icon/remove');
}