
var $materialTable = $('#materialTable');
function initTable() {
    var $materialTable = $('#materialTable');
    $materialTable.bootstrapTable('destroy');
    $materialTable.bootstrapTable({
        url: __ROOT__ + 'admin/material/getList', //获取数据的Servlet地址
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
            u_id = data.user_info.u_id;
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
                title: '素材名称',
                width : '10%',
                align: 'center'
            },
            {
                field: 'short_name',
                title: '素材简称',
                align: 'center'
            },
            {
                field: 'title',
                title: '素材标题',
                formatter: function(value,row,index){
                    return value;
                }
            },

            {
                field: 'operate',
                title: '操作',
                width : '10%',
                align: 'center',
                formatter: function(value,row,index){
                    if(m_u_id === '5'){
                        var d='<a href="#" mce_href="#" data_id="'+row.id+'"  onclick="editMaterial(this)" >编辑</a> ';
                        var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="del(this)" >删除</a>';
                        return d+f;
                    }else {
                        var d='<a href="#" mce_href="#" data_id="'+row.id+'"  onclick="lookMaterial(this)" >查看</a> ';
                        return d;
                    }
                }
            }
        ]
    });
}
let m_u_id = '';
$(document).ready(function () {
    m_u_id = getCookie('u_id');
    if(m_u_id !== '5'){
        $('#add_btn').hide();
    }
    //调用函数，初始化表格
    initTable();
});
//搜索
function fac_search() {
    $('#materialTable').bootstrapTable('refresh');
}

//添加
function addMaterial() {
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
                    addMaterialGo();
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
function editMaterial(obj) {


    requestData.data = {
        'id' : $(obj).attr('data_id')
    }
    ajaxGo('admin/material/getInfoById');
    $("input[name='name']").val(requestData.data.name);
    $("input[name='title']").val(requestData.data.title);
    $("input[name='short_name']").val(requestData.data.short_name);

    let head_img =requestData.data.head_img.split('@@@');
    $('#upload-list').empty();

    head_img.forEach((item,index,array)=>{
        //执行代码
        var html = '<div style="float: left;padding-right: 10px"  onclick="delImg(this)" ><img name="head_img" data_name="'+item+'" src="'+item+'"></div>';
        $('#upload-list').append(html);
    });
    editor.setValue(requestData.data.content);

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
                    editMaterialGo($(obj).attr('data_id'));
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

//查看
function lookMaterial(obj) {


    requestData.data = {
        'id' : $(obj).attr('data_id')
    }
    ajaxGo('admin/material/getInfoById');
    $("input[name='name']").val(requestData.data.name);
    $("input[name='title']").val(requestData.data.title);
    $("input[name='short_name']").val(requestData.data.short_name);

    let head_img =requestData.data.head_img.split('@@@');
    $('#upload-list').empty();

    head_img.forEach((item,index,array)=>{
        //执行代码
        var html = '<div style="float: left;padding-right: 10px"  onclick="delImg(this)" ><img name="head_img" data_name="'+item+'" src="'+item+'"></div>';
        $('#upload-list').append(html);
    });
    editor.setValue(requestData.data.content);

    layer.open({
        type: 1,
        title: '编辑',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $('#add'),
        btn: ['取消'], // 按钮
//            content: '{:U("User/editUser",array("id"=>'+id+',"act"=>display))}' //iframe的url
    });

}

//复制链接
function copyUrl(obj) {
    let text = $(obj).attr('data_url');
    console.log(text);

    var input = document.getElementById("copyText");
    input.value = text; // 修改文本框的内容
    input.select(); // 选中文本
    document.execCommand("copy"); // 执行浏览器复制命令
    layer.msg('复制成功');
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
            ajaxGo('admin/material/delMaterial');
            if(requestCode === 0){
                fac_search();
                layer.msg('删除成功!');
            }else {
                layer.msg(requestMessage);
            }
        }
    });

}


