var genId=0;
var pageId=0;
$(function() {
    genId=getQueryString(window.location.href,"gen_id");
    pageId=getQueryString(window.location.href,"page_id");
    if (pageId>0){
        $('#toolbar').append('<a class="btn btn-primary" onclick="add()">\n' +
            '                                <i class="fa fa-plus"></i> 新增\n' +
            '                            </a>');
    }
    //获取表头数据
    requestData.data={
        page_id:pageId,
        gen_id:genId
    };
    ajaxGo('admin/source_report/getTitleInfo');
    if (requestCode==0) {
        var data = requestData.data;
        var $header = $('<div class="col-sm-12 row" style="color:red;font-weight: bold;font-size: 2rem;"></div>');
        var $left=$('<div class="col-sm-8"></div>');
        var $right=$('<div class="col-sm-4"></div>');
        $left.append('<span>360账户：' + data.thirdpatry_accounts + '</span>');
        $left.append('<span style="margin-left: 30px;">运营：' + data.oper_user_names + '</span>');
        $left.append('<span style="margin-left: 30px;">小说：' + data.material_names + '</span>');
        $left.append('<span style="margin-left: 30px;">公众号：' + data.wechat_names + '</span>');
        if (data.info){
            $right.append('<span style="display: flex;justify-content: flex-end;font-size: 1.6rem;font-weight: normal;color: black;"><img src="'+data.info.pic+'" style="width: 120px;height: auto;"><div></div><div style="width: 140px;">'+data.info.title+'</div></span>')
        }
        $header.append($left);
        $header.append($right);
        $(".row .col-sm-12:eq(0)").before($header);
        console.log(data)

    }
    var options = {
        url: __ROOT__+"admin/source_report/getList",
        pagination: true, //启动分页
        pageSize:500,
        pageList: [500, 800, 1000, 1500],  //记录数可选列表
        toolbar:"#toolbar",
        sidePagination: "server", //表示服务端请求
        queryParamsType : "undefined",
        showToggle:false,
        showRefresh: false,  //显示刷新按钮
        onLoadSuccess: function (data) {
            var masterNum=0;
            var rows=data.rows;
            for (var i=0;i<rows.length;i++){
                if ((rows[i]['is_master'])==1){
                    masterNum++;
                }
            }
            if (masterNum>1) {
                var mergeNum=((rows.length)/masterNum);
                for (var i=1;i<=mergeNum;i++){
                    var mergeIndex=(masterNum*i-masterNum);
                    $('#grid').bootstrapTable('mergeCells', {index:mergeIndex, field: 'date', rowspan: masterNum});
                    $('#grid').bootstrapTable('mergeCells', {index:mergeIndex, field: 'time', rowspan: masterNum});
                }
            }
            //设置背景
            if (masterNum>1) {
                $('.bootstrap-table tbody tr td[rowspan]').each(function () {
                    var index = parseInt($(this).parent('tr').attr('data-index'));
                    if (index % (masterNum * 2) != 0) {
                        $(this).parents('tbody').children('tr').slice(index, index + masterNum).attr('style', 'background:lightyellow;');
                    }
                });
            }else {
                $('.bootstrap-table tbody tr').each(function () {
                    var index = parseInt($(this).attr('data-index'));
                    if (index%2!=0){
                        $(this).attr('style', 'background:lightyellow;');
                    }
                });
            }

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
            });
            $('[data-field="fup"]').attr('style','color:red;');
            $('[data-field="rer"]').attr('style','color:red;');
            $('[data-field="hex"]').attr('style','color:red;');
            $('[data-field="hif"]').attr('style','color:red;');
            $('[data-field="hup"]').attr('style','color:red;');
        },
        queryParams: function queryParams(params) {   //设置查询参数
            params = {
                //这里是在ajax发送请求的时候设置一些参数 params有什么东西，自己看看源码就知道了
                pageNumber: params.pageNumber,
                //pageSize: params.pageSize,
                pageSize: 500,
                sortName: "is_master desc,create_at desc,page_id",
                sortOrder: "desc",
                head : {'token' : getCookie('token')},
            };
            if (pageId){
                params.filter=' and page_id='+pageId;
            }else if (genId){
                params.filter=' and gen_id='+genId;
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
                field: 'rp',
                title: '充值'
            },
            {
                field: 'fup',
                title: '粉丝单价',
                cellStyle:{css:{color:'red'}}

            },
            {
                field: 'rer',
                title: '回本率',
                cellStyle:{css:{color:'red'}}
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
                title: '时消耗',
                cellStyle:{css:{color:'red'}}
            },
            {
                field: 'hif',
                title: '时进粉',
                cellStyle:{css:{color:'red'}}
            },
            {
                field: 'hup',
                title: '时单价',
                cellStyle:{css:{color:'red'}}
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
                    if (row.is_master==1) {
                        var actions = [];
                        if (row.switchData == 0) {
                            switchHtml = "<input type='checkbox' class='switch' data-id='" + row.id + "' checked>";
                        }else if (row.switchData==1){
                            var switchHtml = "<input type='checkbox' class='switch' data-id='" + row.id + "'>";
                        }else {
                            var switchHtml = "<input type='checkbox' class='switch' data-id='" + row.id + "' disabled>";
                        }
                        actions.push(switchHtml);
                        return actions.join('');
                    }
                }
            }]
    };
    $('#grid').bootstrapTable(options);
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
    layer.open({
        title:'操作提示'
        ,content: '此操作将删除此数据及其历史记录，是否继续？'
        ,btn: ['是', '否']
        ,icon:3
        ,yes: function(index, layero){
            //按钮【按钮一】的回调
            requestData.data={
                id:id
            }
            ajaxGo('admin/source_report/removeBatch');
            if (requestCode!=0){
                $.modal.msgError(requestMessage);
            }else {
                $.modal.msgSuccess(requestMessage);
            }
            $('#grid').bootstrapTable('refresh');
        }
        ,btn2: function(index, layero){
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
function add() {
    var html=template('form-container',{});
    layer.open({
        type: 1,
        title: '添加',
        shadeClose: true,
        shade: 0.8,
        area: ['60%', '60%'],
        content: html,
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
            if(!$('#form').validate().form()) {
                return;
            }
            if (pageId<1){
                $.modal.msgError('禁止添加');
                return;
            }
            layer.msg('确定添加？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(){
                    requestData.data = $('#form').serializeJson();
                    requestData.data.page_id=pageId;
                    ajaxGo('admin/source_report/add');
                    if (requestCode!=0){
                        $.modal.alertWarning(requestMessage);
                    }else {
                        $.modal.alertSuccess(requestMessage);
                    }
                    $('#grid').bootstrapTable('refresh');
                    layer.close(index);
                }
            });


        }
    });

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
 * 清除历史记录
 */
function removeNotMaster() {
    layer.open({
        title:'操作提示'
        ,content: '此操作将清空所有历史记录，是否继续？'
        ,btn: ['是', '否']
        ,icon:3
        ,yes: function(index, layero){
            //按钮【按钮一】的回调
            var list=$('#grid').bootstrapTable('getData');
            var masterIdList=[];
            for (var i=0;i<list.length;i++){
                if (list[i].is_master==1){
                    masterIdList.push(list[i].id);
                }else {
                    break;
                }
            }
            requestData.data={
                master_ids:masterIdList.join(',')
            }
            ajaxGo('admin/source_report/removeBatch');
            if (requestCode!=0){
                $.modal.msgError(requestMessage);
            }else {
                $.modal.msgSuccess(requestMessage);
            }
            $('#grid').bootstrapTable('refresh');
        }
        ,btn2: function(index, layero){
        }
    });
}