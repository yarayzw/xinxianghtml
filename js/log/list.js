$(document).ready(function () {
    //调用函数，初始化表格
    initTable();
});
function initTable() {
    $('#viewTable').bootstrapTable('destroy');
    $("#viewTable").bootstrapTable({
        url: __ROOT__ + 'admin/log/getList', //获取数据的Servlet地址
        striped: true,  //表格显示条纹
        pagination: true, //启动分页
        sortName: 'id',
        pageSize: 10,  //每页显示的记录数
        pageNumber:1, //当前第几页
        pageList: [10, 15, 20, 25],  //记录数可选列表
        search: false,
        toolbar: '#list_search_faci',
        showColumns: false,  //显示下拉框勾选要显示的列
        showRefresh: false,  //显示刷新按钮
        sidePagination: "server", //表示服务端请求
        showToggle:false,
        //设置为undefined可以获取pageNumber，pageSize，searchText，sortName，sortOrder
        //设置为limit可以获取limit, offset, search, sort, order
        responseHandler:function(data){
            //远程数据加载之前,处理程序响应数据格式,对象包含的参数: 我们可以对返回的数据格式进行处理
            //在ajax后我们可以在这里进行一些事件的处理
            // requestCode = data.code;
            // requestMessage = data.message;
            // requestData = {
            //     "head": {
            //         "token": data.token,
            //         "time": (new Date()).getTime(),
            //         "version": "1.2.0",
            //         "recode": "",
            //     },
            //     "data": data.data
            // };
            return data.data;
        },
        queryParamsType : "undefined",
        // method: 'post',
        queryParams: function queryParams(params) {   //设置查询参数
            params = {
                //这里是在ajax发送请求的时候设置一些参数 params有什么东西，自己看看源码就知道了
                pageNumber: params.pageNumber,
                pageSize: params.pageSize,
                sortName: params.sortName,
                sortOrder: params.sortOrder,
                // id : {$_GET['id']},
                head : {'token' : getCookie('token')},
                name : $('#name').val(),
            };

            return params;
        },
        onLoadSuccess: function(data){  //加载成功时执行
            $('.bootstrap-table tr td').each(function () {
                $(this).attr("title", $(this).text());
                $(this).css("cursor", 'pointer');
            });
        },
        onLoadError: function(){  //加载失败时执行
            layer.msg("加载数据失败", {time : 1500, icon : 2});
        },
        columns: [
            {
                title: 'ID',
                field: 'id',
                align: 'center',
                valign: 'middle',
                width : '5%',
            },
            {
                field: 'name',
                title: '模块',
                width : '10%',
                align: 'center'
            },
            {
                field: 'type',
                width : '20%',
                title: '事件',
                formatter: function(value,row,index){
                    return value;
                }
            },
            {
                field: 'create_name',
                width : '10%',
                title: '操作人',
                formatter: function(value,row,index){
                    return value;
                }
            },
            {
                field: 'create_at',
                width : '10%',
                title: '创建时间',
                formatter: function(value,row,index){
                    return value;
                }
            },
            {
                field: 'qr_code',
                width : '10%',
                title: '二维码',
                formatter: function(value,row,index){
                    if(value===''){
                        return '未修改';
                    }else {
                        var f='<a href="#" mce_href="#" " data_qr_code="'+row.qr_code+'"  onclick="lookQr(this)" >查看</a>';
                        return f;
                    }
                }
            },
            {
                field: 'info',
                title: '详情',
                width : '35%',
                formatter: function(value,row,index){
                    return '<xml>'+value.substring(-1,30)+'</xml>';
                }
            }
        ]
    });
}


//搜索
function fac_search() {
    $('#viewTable').bootstrapTable('refresh');
}


function lookQr(obj) {
    let qr_img = $(obj).attr('data_qr_code').split('@@@');
    $('#qr_code_div').empty();
    qr_img.forEach((item,index,array)=>{
        var html = '<div style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"   ><div><img name="qr_img" data_name="'+item+'" src="'+item+'"></div></div>';
        $('#qr_code_div').append(html);
    });
    layer.open({
        type: 1,
        title: '二维码',
        shadeClose: true,
        shade: 0.8,
        area: ['75%', '60%'],
        content: $('#qr_code_div'),
        btn: ['取消'], // 按钮
    });
}

