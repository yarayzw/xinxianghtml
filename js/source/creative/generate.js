$(function() {
    var options = {
        url: __ROOT__+"admin/source_generate/getList",
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
                sortName:"id",
                sortOrder: "desc",
                head : {'token' : getCookie('token')},
                filter:' and is_delete=0 '
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
                title: '名字',
                width:550,
                formatter:function(value,row,index){
                    var html='<div style="display: flex"><div><img src="'+row.contentimg+'" style="width: auto;height: 80px;"></div><div style="flex: 1;margin-left: 10px;display: flex;flex-direction: column;justify-content: space-between;"><div style="width: 100%;">'+value+'</div><div style="display: flex;"><div>尺寸：'+(row.img_type==1?'180*100':'660*220')+'</div><div style="flex: 1;display: flex;justify-content: flex-end;">时间：'+row.create_at+'</div></div></div></div>';
                    return html;
                }
            },
            {
                title: '360账户',
                formatter:function (value,row,index) {
                    var thirdpartyInfo=row.thirdpartyInfo;
                    if (thirdpartyInfo) {
                        return thirdpartyInfo.name;
                    }
                }
            },
            {
                title: '公众号',
                field: 'wechat_names',
            },
            {
                title: '数据报表',
                formatter:function(value,row,index){
                    return '<a href="../../../source/creative/report.html?id='+row.id+'" target="_blank">查看</a>';
                }
            },
            {
                title: '操作',
                align: 'center',
                formatter: function(value, row, index) {
                    var actions = [];
                    actions.push('<a class="btn btn-danger btn-xs" href="javascript:void(0)" onclick="remove(\'' + row.id + '\')"><i class="fa fa-remove"></i>移入回收站</a>&nbsp;');
                    return actions.join('');
                }
            }]
    };
    $('#grid').bootstrapTable(options);



});

/**
 * 回收站
 */
function recycle() {
    layer.open({
        type: 1,
        title: '回收站',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $("#recycle"),
    });
    var options = {
        url: __ROOT__+"admin/source_generate/getList",
        pagination: true, //启动分页
        sortName: 'id',
        pageSize: 10,  //每页显示的记录数
        pageNumber:1, //当前第几页
        pageList: [5, 10, 15, 20],  //记录数可选列表
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
                filter:' and is_delete=1 '
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
                title: '名字',
                width:550,
                formatter:function(value,row,index){
                    var html='<a href="'+row.link+'" target="_blank" style="color: black;"><div style="display: flex"><div><img src="'+row.contentimg+'" style="width: auto;height: 80px;"></div><div style="flex: 1;margin-left: 10px;display: flex;flex-direction: column;justify-content: space-between;"><div style="width: 100%;">'+value+'</div><div style="display: flex;"><div>尺寸：'+(row.img_type==1?'180*100':'660*220')+'</div><div style="flex: 1;display: flex;justify-content: flex-end;">时间：'+row.create_at+'</div></div></div></div></a>';
                    return html;
                }
            },
            {
                field: 'account',
                title: '360账户'
            },
            {
                field: 'alt',
                title: '公众号'
            },
            {
                field:'delete_at',
                title: '删除时间'
            },
            {
                title: '操作',
                align: 'center',
                formatter: function(value, row, index) {
                    var actions = [];
                    actions.push('<a class="btn btn-danger btn-xs" href="javascript:void(0)" onclick="restore(\'' + row.id + '\')"><i class="fa fa-remove"></i>移出回收站</a>&nbsp;');
                    return actions.join('');
                }
            }]
    };
    $('#recycle-grid').bootstrapTable(options);
}

function add() {
    layer.open({
        type: 2,
        title: '添加',
        shadeClose: true,
        shade: 0.8,
        maxmin:true,
        area: ['90%', '90%'],
        content: '../../../source/creative/upload.html',
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
 * 恢复
 * @param id
 */
function restore(id) {
    layer.msg('确定移出？', {
        time: 0 //不自动关闭
        , btn: ['确定', '取消']
        , yes: function (index) {
            toRestore(id);
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

/**
 * 删除
 */
function toRemove(id) {
    requestData.data = {
        id:id,
    }
    ajaxGo('admin/source_generate/remove');
}
/**
 * 恢复删除
 */
function toRestore(id) {
    requestData.data = {
        id:id,
    }
    ajaxGo('admin/source_generate/restore');
}

