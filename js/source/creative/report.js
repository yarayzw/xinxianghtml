var genId=0;
var pageId=0;
$(function() {
    genId=getQueryString(window.location.href,"gen_id");
    pageId=getQueryString(window.location.href,"page_id");
    var options = {
        url: __ROOT__+"admin/source_report/getList",
        pagination: true, //启动分页
        pageList: [5, 10, 15, 20],  //记录数可选列表
        toolbar:"#toolbar",
        sidePagination: "server", //表示服务端请求
        queryParamsType : "undefined",
        showToggle:false,
        onLoadSuccess: function (data) {
            $('#grid').bootstrapTable('mergeCells', {index: 0, field: 'date', rowspan: data.total});
            $('#grid').bootstrapTable('mergeCells', {index: 0, field: 'time', rowspan: data.total});
            $('.switch').bootstrapSwitch({    //初始化按钮
                onText:"开",
                offText:"关",
                onColor:"success",
                offColor:"danger",
                onSwitchChange:function(event,state){
                    var id=$(this).data('id');
                    requestData.data={
                        id:id,
                        status:state?0:1
                    };
                    ajaxGo("admin/source_report/changeSolutionStatus");
                    var data=requestData.data;
                    console.log(data)
                }
            })
        },
        queryParams: function queryParams(params) {   //设置查询参数
            params = {
                //这里是在ajax发送请求的时候设置一些参数 params有什么东西，自己看看源码就知道了
                pageNumber: params.pageNumber,
                pageSize: params.pageSize,
                sortName: "id",
                sortOrder: "desc",
                head : {'token' : getCookie('token')},
            };
            if (pageId){
                params.filter=' and page_id='+pageId+' and is_master=1';
            }else if (genId){
                params.filter=' and gen_id='+genId+' and is_master=1';
            }
            return params;
        },
        responseHandler:function(data){
          return data.data;
        },
        columns: [/*{
            checkbox: false
            },*/
            {
                field:'date',
                title: '日期',
                formatter: function(value, row, index) {
                    console.log(row)
                    return moment(row.update_at).format("YYYY-MM-DD");
                }
            },
            {
                field:'time',
                title: '时间',
                formatter: function(value, row, index) {
                    return moment(row.update_at).format("HH:mm");
                }
            },
            {
                field: 'page_id',
                title: '素材序号'
            },
            {
                field: 'pe',
                title: '平台消耗'
            },
            {
                field: 'ae',
                title: '实际消耗'
            },
            {
                field: 'ns',
                title: '展现数'
            },
            {
                field: 'nc',
                title: '点击数'
            },
            {
                field: 'ctr',
                title: '点击率'
            },
            {
                field: 'op',
                title: '出价'
            },
            {
                field: 'cp',
                title: '点击价'
            },
            {
                field: 'fn',
                title: '关注'
            },
            {
                field: 'on',
                title: '订单'
            },
            {
                field: 'on',
                title: '订单'
            },
            {
                field: 'rp',
                title: '充值'
            },
            {
                field: 'fup',
                title: '粉丝单价'
            },
            {
                field: 'rer',
                title: '回本率'
            },
            {
                field: 'sfr',
                title: '软关率'
            },
            {
                field: 'rpr',
                title: '充值比'
            },
            {
                field: 'hex',
                title: '时消耗'
            },
            {
                field: 'hif',
                title: '时进粉'
            },
            {
                field: 'hup',
                title: '时单价'
            },/*
            {
                title: '状态',
                formatter: function(value, row, index) {
                    switch (row.creativeStatus) {
                        case '0':
                            return '<span style="color: green;">审核中</span>';
                            break;
                        case '1':
                            return '<span style="color: green;">审核通过</span>';
                            break;
                        case '2':
                            return '<span style="color: red;">已登拒</span>';
                            break;
                    }
                }
            },*/
            {
                title: '操作',
                align: 'center',
                width:90,
                formatter: function(value, row, index) {
                    var actions = [];
                    var switchHtml="<input type='checkbox' class='switch' data-id='"+row.id+"'>";
                    if (row.switchData==0){
                        switchHtml="<input type='checkbox' class='switch' data-id='"+row.id+"' checked>";
                    }
                    actions.push(switchHtml);
                    return actions.join('');
                }
            }]
    };
    $('#grid').bootstrapTable(options);

    //table2
    var options = {
        url: __ROOT__+"admin/source_report/getList",
        pagination: true, //启动分页
        pageList: [5, 10, 15, 20],  //记录数可选列表
        sidePagination: "server", //表示服务端请求
        queryParamsType : "undefined",
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
            if (pageId){
                params.filter=' and page_id='+pageId+' and is_master=0';
            }else if (genId){
                params.filter=' and gen_id='+genId+' and is_master=0';
            }
            return params;
        },
        responseHandler:function(data){
            return data.data;
        },
        columns: [
            {
                field:'create_at',
                title: '时间'
            },
            {
                field: 'page_id',
                title: '素材序号'
            },
            {
                field: 'pe',
                title: '平台消耗'
            },
            {
                field: 'ae',
                title: '实际消耗'
            },
            {
                field: 'ns',
                title: '展现数'
            },
            {
                field: 'nc',
                title: '点击数'
            },
            {
                field: 'ctr',
                title: '点击率'
            },
            {
                field: 'op',
                title: '出价'
            },
            {
                field: 'cp',
                title: '点击价'
            },
            {
                field: 'fn',
                title: '关注'
            },
            {
                field: 'on',
                title: '订单'
            },
            {
                field: 'on',
                title: '订单'
            },
            {
                field: 'rp',
                title: '充值'
            },
            {
                field: 'fup',
                title: '粉丝单价'
            },
            {
                field: 'rer',
                title: '回本率'
            },
            {
                field: 'sfr',
                title: '软关率'
            },
            {
                field: 'rpr',
                title: '充值比'
            },
            {
                field: 'hex',
                title: '时消耗'
            },
            {
                field: 'hif',
                title: '时进粉'
            },
            {
                field: 'hup',
                title: '时单价'
            }]
    };
    $('#grid2').bootstrapTable(options);
});

/**
 * 获取最新数据
 */
function getNewData() {
    try {
        var data={
            gen_id:genId,
            page_id: pageId
        };
        requestData.data=data;
        console.log(data)
        ajaxGo('admin/source_report/getNewData');
        var data=requestData.data;
        console.log(data)
        $('#grid').bootstrapTable('refresh');
        $('#grid2').bootstrapTable('refresh');
    }catch (e) {
        $.modal.alertWarning(e.message);
    }
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