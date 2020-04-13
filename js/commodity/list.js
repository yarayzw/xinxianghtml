
var $commodityTable = $('#commodityTable');
function initTable() {
    var $commodityTable = $('#commodityTable');
    $('#commodityTable').bootstrapTable('destroy');
    $("#commodityTable").bootstrapTable({
        url: __ROOT__ + 'admin/commodity/getList', //获取数据的Servlet地址
        striped: true,  //表格显示条纹
        pagination: true, //启动分页
        sortName: 'id',
        pageSize: 15,  //每页显示的记录数
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
            requestCode = data.code;
            requestMessage = data.message;
            requestData = {
                "head": {
                    "token": data.token,
                    "time": (new Date()).getTime(),
                    "version": "1.2.0",
                    "recode": "",
                },
                "data": data.data
            };
            return data.data;
        },
        queryParamsType : "undefined",
        queryParams: function queryParams(params) {   //设置查询参数
            var param = {
                //这里是在ajax发送请求的时候设置一些参数 params有什么东西，自己看看源码就知道了
                pageNumber: params.pageNumber,
                pageSize: params.pageSize,
                sortName: params.sortName,
                sortOrder: params.sortOrder,
                // id : {$_GET['id']},
                name : $('#name').val(),
            };
            return param;
        },
        onLoadSuccess: function(data){  //加载成功时执行
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
                field: 'facilities_id',
                align: 'center',
                valign: 'middle'
            },
            {
                field: 'name',
                title: '网页名称',
                align: 'center'
            },
            {
                field: 'title',
                title: '网页标题',
                formatter: function(value,row,index){

                    return value;
                }
            },
            {
                field: 'url',
                title: '域名',
                align: 'center'
            },
            {
                field: 'tj_url',
                title: '统计链接',
                align: 'center'
            },

            {
                field: 'operate',
                title: '操作',
                align: 'center',
                formatter: function(value,row,index){
                    var d='<a href="#" mce_href="#" data_id="'+row.id+'" data_name="'+row.name+'" data_title="'+row.title+'" data_url="'+row.url+'" onclick="editCommodity(this)" >编辑</a> ';
                    var e='<a href="#" mce_href="#" " data_url="'+row.url+'/ex/v1/index.html?id='+row.id+'"  onclick="preview(this)" >预览</a> ';
                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="del(this)" >删除</a>';

                    return d+e+f;
                }
            }
        ]
    });
}

$(document).ready(function () {
    console.log(2222)
    //调用函数，初始化表格
    initTable();
});
//搜索
function fac_search() {
    $('#commodityTable').bootstrapTable('refresh');
}

//添加
function addCommodity() {
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
    // 'name' : $("input[name='name']").val(),
    //     'title': $("input[name='title']").val(),
    //     'head_img' : head_img,
    //     'qr_img' : qr_img,
    //     'comment' : content,
    //     'url' : $("input[name='url']").val(),
    $("input[name='name']").val($(obj).attr('data_name'));
    $("input[name='title']").val($(obj).attr('data_title'));
    $("input[name='url']").val($(obj).attr('data_url'));
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