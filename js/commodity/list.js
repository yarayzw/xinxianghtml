$(document).ready(function () {
    //调用函数，初始化表格
    setMaterial();
    initTable();
});

function setMaterial() {
    ajaxGo('admin/material/getListToSelect')
    requestData.data.forEach((item,index,array)=>{
        //执行代码
        var html = "<option value='"+item.id+"'>"+item.name+"</option>";
        $('#material').append(html);
    });
    $('#material').selectpicker('refresh');

    //pc模版
    requestData.data = {
        'type' : 1
    }
    ajaxGo('admin/view/getListToSelect')
    requestData.data.forEach((item,index,array)=>{
        //执行代码
        var html = "<option value='"+item.id+"'>"+item.name+"</option>";
        $('#view').append(html);
        $('#view_update').append(html);
    });
    $('#view').selectpicker('refresh');
    $('#view_update').selectpicker('refresh');

    //移动模版
    requestData.data = {
        'type' : 2
    }
    ajaxGo('admin/view/getListToSelect')
    requestData.data.forEach((item,index,array)=>{
        //执行代码
        var html = "<option value='"+item.id+"'>"+item.name+"</option>";
        $('#mobile_view').append(html);
        $('#mobile_view_update').append(html);
    });
    $('#mobile_view').selectpicker('refresh');
    $('#mobile_view_update').selectpicker('refresh');

    ajaxGo('admin/platform/getListToSelect')
    requestData.data.forEach((item,index,array)=>{
        //执行代码
        var html = "<option value='"+item.id+"'>"+item.name+"</option>";
        $('#platform').append(html);
    });
    $('#platform').selectpicker('refresh');
}
function initTable() {

    $('#commodityTable').bootstrapTable('destroy');
    $("#commodityTable").bootstrapTable({
        url: __ROOT__ + 'admin/commodity/getList', //获取数据的Servlet地址
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
                search_id : $('#search_id').val(),
                type: 1
            };

            return params;
        },
        onLoadSuccess: function(data){  //加载成功时执行
            $('.bootstrap-table tr td').each(function () {
                $(this).attr("title", $(this).text());
                $(this).css("cursor", 'pointer');
            });
//                    if(data.total==0){
//                        layer.msg('暂无设备数据！');
//                        $("#userFaciTable").bootstrapTable('hideRow');
//                        $("#userFaciTable").bootstrapTable('refresh');
//                    }
            //            alert("加载成功"+data);

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
                title: '网页名称',
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
                field: 'material_name',
                title: '素材名称',
                formatter: function(value,row,index){

                    return value;
                }
            },
            {
                field: 'title',
                title: '标题',
                align: 'center'
            },
            {
                field: 'url',
                title: '域名',
                align: 'center'
            },
            {
                field: 'view_name',
                title: 'pc模版',
                width : '10%',
                align: 'center',
                formatter: function(value,row,index){
                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="updateView(this)" >'+value+'</a>';
                    return f;
                }
            },
            {
                field: 'mobile_view_name',
                title: '移动模版',
                width : '10%',
                align: 'center',
                formatter: function(value,row,index){
                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="updateViewMobile(this)" >'+value+'</a>';
                    return f;
                }
            },
            {
                field: 'tj_url',
                title: '统计链接',
                align: 'center',
                formatter: function(value,row,index){
                    return '<xmp>' + value +'</xmp>';
                }
            },

            {
                field: 'operate',
                title: '操作',
                width : '10%',
                align: 'center',
                formatter: function(value,row,index){
                    var a='<a href="#" mce_href="#" data_id="'+row.id+'" data_name="'+row.name+'" data_title="'+row.title+'" data_url="'+row.url+'"  onclick="editCommodity(this)" >编辑</a> ';
                    var e='<a href="#" mce_href="#" " data_url="'+row.url+'/ex/ex/'+'index.html?id='+row.id+'&name='+row.name+'&platform_id='+row.platform_id+'"  onclick="preview(this)" >预览</a> ';
                    var d='<a href="#" mce_href="#" " data_url="'+row.url+'/ex/ml/'+'index.html?id='+row.id+'&name='+row.name+'&platform_id='+row.platform_id+'"  onclick="preview(this)" >手机版</a> ';
                    if(row.views){
                        e='<a href="#" mce_href="#" " data_url="'+row.url+'/ex/ex/'+row.view+'.html?id='+row.id+'&name='+row.name+'&platform_id='+row.platform_id+'"  onclick="preview(this)" >预览</a> ';
                        d='<a href="#" mce_href="#" " data_url="'+row.url+'/ex/ml/'+row.view+'.html?id='+row.id+'&name='+row.name+'&platform_id='+row.platform_id+'"  onclick="preview(this)" >手机版</a> ';
                    }
                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="del(this)" >删除</a>';

                    return a+e+d+f;
                }
            }
        ]
    });
}


//搜索
function fac_search() {
    $('#commodityTable').bootstrapTable('refresh');
}

//添加
function addCommodity() {
    $('#code_num').text(1);
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
                    addCommodityGo();
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
function editCommodity(obj) {
    requestData.data = {
        'id' : $(obj).attr('data_id')
    }
    ajaxGo('admin/commodity/getCommodityInfo');


    $("input[name='name']").val(requestData.data.name);
    $("input[name='title']").val(requestData.data.title);
    $("input[name='url']").val(requestData.data.url);
    $("input[name='tj_url']").val(requestData.data.tj_url);
    $('#code_num').text(requestData.data.code_num);


    let head_img =requestData.data.head_img.split('@@@');
    $('#upload-list-head').empty();
    head_img.forEach((item,index,array)=>{
        //执行代码
        var html = '<div style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"  onclick="delImg(this)" ><img name="head_img" data_name="'+item+'" src="'+item+'"></div>';
        $('#upload-list-head').append(html);
    });

    let qr_img =requestData.data.qr_code.split('@@@');
    $('#upload-list').empty();
    qr_img.forEach((item,index,array)=>{
        //执行代码
        var html = '<div style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"  onclick="delImg(this)" ><img name="qr_img" data_name="'+item+'" src="'+item+'"></div>';
        $('#upload-list').append(html);
    });

    $('#platform').selectpicker('val',(requestData.data.platform_id));
    $('#material').selectpicker('val',(requestData.data.material_id));
    $('#view').selectpicker('val',(requestData.data.view_id));
    //移动端数据渲染
    $('#mobile_view').selectpicker('val',(requestData.data.mobile_view_id));
    $("input[name='we_chat_name']").val(requestData.data.wechat_name);
    $("input[name='we_chat_url']").val(requestData.data.wechat_url);

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
                    editCommodityGo($(obj).attr('data_id'));
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


//预览页面
function preview(obj) {
    window.open($(obj).attr('data_url'), '_blank').location;
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
            ajaxGo('admin/commodity/delCommodity');
            if(requestCode === 0){
                fac_search();
                layer.msg('删除成功!');
            }else {
                layer.msg(requestMessage);
            }
        }
    });
}

function updateView(obj) {

    layer.open({
        type: 1,
        title: '编辑',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $('#updateView'),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
            layer.msg('确定修改？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    updateViewGo($(obj).attr('data_id'));
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

function updateViewMobile(obj) {

    layer.open({
        type: 1,
        title: '编辑',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $('#updateViewMobile'),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
            layer.msg('确定修改？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    updateViewMobileGo($(obj).attr('data_id'));
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