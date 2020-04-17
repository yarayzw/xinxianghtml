$(document).ready(function () {
    //调用函数，初始化表格
    setMaterial();
    initTable();
});

function setMaterial() {
    ajaxGo('admin/commodity/getListToSelect')
    requestData.data.forEach((item,index,array)=>{
        //执行代码
        var html = "<option value='"+item.id+"'>"+item.name+"</option>";
        $('#commodity_id').append(html);
    });
    $('#commodity_id').selectpicker('refresh');


    ajaxGo('admin/platform/getListToSelect')
    requestData.data.forEach((item,index,array)=>{
        //执行代码
        var html = "<option value='"+item.id+"'>"+item.name+"</option>";
        $('#platform_id').append(html);
    });
    $('#platform_id').selectpicker('refresh');
}
function initTable() {

    $('#commodityBindPlatformTable').bootstrapTable('destroy');
    $("#commodityBindPlatformTable").bootstrapTable({
        url: __ROOT__ + 'admin/commodity_bind_platform/getList', //获取数据的Servlet地址
        striped: true,  //表格显示条纹
        pagination: true, //启动分页
        sortName: 'id',
        pageSize: 10,  //每页显示的记录数
        pageNumber:1, //当前第几页
        pageList: [10, 15, 20, 25],  //记录数可选列表
        search: false,
        toolbar: '#list_search_faci',
        showColumns: true,  //显示下拉框勾选要显示的列
        showRefresh: true,  //显示刷新按钮
        sidePagination: "server", //表示服务端请求
        //设置为undefined可以获取pageNumber，pageSize，searchText，sortName，sortOrder
        //设置为limit可以获取limit, offset, search, sort, order
        responseHandler:function(data){
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
                field: 'commodity_name',
                title: '资讯名称',
                width : '10%',
                align: 'center'
            },
            {
                field: 'platform_name',
                title: '平台',
                width : '10%',
                align: 'center'
            },

            {
                field: 'operate',
                title: '操作',
                width : '10%',
                align: 'center',
                formatter: function(value,row,index){
                    var d='<a href="#" mce_href="#" data_id="'+row.id+'" data_commodity_name="'+row.commodity_name+'" data_pl_name="'+row.pl_name+'" data_qr_img="'+row.qr_img+'"  onclick="editBind(this)" >编辑</a> ';
                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="del(this)" >删除</a>';

                    return d+f;
                }
            }
        ]
    });
}


//搜索
function fac_search() {
    $('#commodityBindPlatformTable').bootstrapTable('refresh');
}

//添加
function addBind() {
    layer.open({
        type: 1,
        title: '添加',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $('#add'),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
            layer.msg('确定添加？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    addCommodityBindPlatformGo();
                    if(requestCode === 0){
                        fac_search();
                        layer.close(index);
                        layer.closeAll();
                        layer.msg(requestMessage);
                    }else {
                        layer.msg(requestMessage);
                    }
                }
            });


        }
//            content: '{:U("User/editUser",array("id"=>'+id+',"act"=>display))}' //iframe的url
    });

}

//编辑
function editBind(obj) {

    let qr_img =$(obj).attr('data_qr_img');
    $('#upload-list').empty();

    qr_img.forEach((item,index,array)=>{
        //执行代码
        var html = '<div style="float: left;padding-right: 10px"  onclick="delImg(this)" ><img name="qr_img" data_name="'+item+'" src="'+item+'"></div>';
        $('#upload-list').append(html);
    });

    layer.open({
        type: 1,
        title: '编辑',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $('#add'),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
            layer.msg('确定修改？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    editCommodityBindGo($(obj).attr('data_id'));
                    if(requestCode === 0){
                        fac_search();
                        layer.close(index);
                        layer.closeAll();
                        layer.msg(requestMessage);
                    }else {
                        layer.msg(requestMessage);
                    }
                }
            });
        }
//            content: '{:U("User/editUser",array("id"=>'+id+',"act"=>display))}' //iframe的url
    });

}


//预览图片
function previewImg(obj) {
    let qr_img =$(obj).attr('data_qr_img');
    $('#upload-list').empty();

    qr_img.forEach((item,index,array)=>{
        //执行代码
        var html = '<img style="padding-right: 10px" data_name="'+item+'" src="'+item+'">';
        $('#imgs').append(html);
    });
    layer.open({
        type: 1,
        title: '预览图片',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $('#imgs'),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
            layer.closeAll();
        }
    });
}

//删除
function del(obj) {
    layer.msg('确定删除？', {
        time: 0 //不自动关闭
        ,btn: ['确定', '取消']
        ,yes: function(index){
            requestData.data = {
                'id' : $(obj).attr('data_id')
            };
            ajaxGo('admin/commodity_bind_platform/delCommodityBindPlatform');
            if(requestCode === 0){
                fac_search();
                layer.msg('删除成功!');
            }else {
                layer.msg(requestMessage);
            }
        }
    });


}