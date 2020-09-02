$(function() {
    var options = {
        url: __ROOT__+"admin/channel_config/getList",
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
                field: 'name',
                title: '名称'
            },
            {
                field: 'code',
                title: '标识'
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
                    actions.push('<a class="btn btn-success btn-xs ' + '" href="javascript:void(0)" onclick="edit(\'' + row.id + '\')"><i class="fa fa-edit"></i>编辑</a> ');
                    actions.push('<a class="btn btn-danger btn-xs ' + '" href="javascript:void(0)" onclick="remove(\'' + row.id + '\')"><i class="fa fa-remove"></i>删除</a>');
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
    ajaxGo('admin/channel_config/detail');
    var data=requestData.data;
    $('#edit').find("input[name='name']").val(data.name);
    $('#edit').find("input[name='code']").val(data.code);
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
    layer.msg('确定编辑？', {
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

/**添加
 */
function toAdd() {
    var name=$("#add").find("input[name='name']").val();
    var code=$("#add").find("input[name='code']").val();
    requestData.data = {
        name:name,
        code:code
    }
    ajaxGo('admin/channel_config/add');
}
/**编辑
 */
function toEdit(id) {
    var name=$("#edit").find("input[name='name']").val();
    var code=$("#edit").find("input[name='code']").val();
    requestData.data = {
        id:id,
        name:name,
        code:code
    }
    ajaxGo('admin/channel_config/edit');
}

/**
 * 删除
 */
function toRemove(id) {
    requestData.data = {
        id:id,
    }
    ajaxGo('admin/channel_config/remove');
}