$(document).ready(function () {
    //调用函数，初始化表格
    initTable();
});

//图片上传插件初始化
$('#upload-container').click(function(event) {
    $("#picker").find('input').click();
});
setTimeout(function(){
    var uploader = WebUploader.create({
        auto: true,// 选完文件后，是否自动上传。
        // swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',// swf文件路径
        server: __ROOT__ + 'thirdparty/oss/upload',// 文件接收服务端。
        dnd: '#upload-container',
        pick: '#picker',// 内部根据当前运行是创建，可能是input元素，也可能是flash. 这里是div的id
        multiple: true, // 选择多个
        chunked: true,// 开起分片上传。
        threads: 5, // 上传并发数。允许同时最大上传进程数。
        method: 'POST', // 文件上传方式，POST或者GET。
        fileSizeLimit: 1024*1024*100*100, //验证文件总大小是否超出限制, 超出则不允许加入队列。
        fileSingleSizeLimit: 1024*1024*100, //验证单个文件大小是否超出限制, 超出则不允许加入队列。
        fileVal:'upload', // [默认值：'file'] 设置文件上传域的name。
    });
    uploader.on('uploadSuccess', function(file, response) {
        var html = '<div  onclick="delImg(this)" ><img name="goods_img" data_name="'+__IMG__+ response.path[0]+'" src="'+__IMG__+ response.path[0]+'"></div>';
        $('#upload-list').append(html);
    });
},3000);


var editor = new Simditor({
    toolbar: [ 'title', 'bold', 'italic', 'underline', 'strikethrough','fontScale',
        'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|',
        'link', 'image', 'hr', '|', 'indent', 'outdent' ],
    textarea: '#editor',
    placeholder: '写点什么...',
    // defaultImage: '/static/home/images/logo.png',
    imageButton: ['upload'],
    upload: {
        url: __ROOT__ + 'thirdparty/oss/upload',
        params: {
            "code": '01-200-101'
        },
        fileKey: 'file',
        leaveConfirm: '正在上传文件..',
        connectionCount: 3
    }
});

function initTable() {

    $('#shopTable').bootstrapTable('destroy');
    $("#shopTable").bootstrapTable({
        url: __ROOT__ + 'admin/goods/getList', //获取数据的Servlet地址
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
                title: '名称',
                align: 'center'
            },
            {
                field: 'type_name',
                title: '类别',
                align: 'center'
            },
            {
                field: 'inventory',
                title: '库存',
                align: 'center'
            },
            {
                field: 'inventory_unit',
                title: '库存单位',
                align: 'center'
            },
            {
                field: 'is_deduction_inventory',
                title: '是否减少库存',
                align: 'center',
                formatter: function(value,row,index){
                    if(value === 0){
                        return '否';
                    }else {
                        return '是';
                    }
                }
            },
            {
                field: 'price',
                title: '售价',
                align: 'center'
            },
            {
                field: 'origin_price',
                title: '原价',
                align: 'center'
            },
            {
                field: 'buy_mix_num',
                title: '最低起购数',
                align: 'center'
            },
            {
                field: 'buy_max_num',
                title: '最大购买数',
                align: 'center'
            },
            {
                field: 'is_shelves',
                title: '上架',
                align: 'center',
                formatter: function(value,row,index){
                    if(value === 0){
                        return '否';
                    }else {
                        return '是';
                    }
                }
            },
            {
                field: 'sales_count',
                title: '销量',
                align: 'center'
            },
            {
                field: 'access_count',
                title: '访问量',
                align: 'center'
            },
            {
                field: 'operate',
                title: '操作',
                width : '10%',
                align: 'center',
                formatter: function(value,row,index){
                    var a='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="editGoods(this)" >编辑</a>';

                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="delGoods(this)" >删除</a>';

                    return a+f;
                }
            }
        ]
    });
}


//搜索
function fac_search() {
    $('#shopTable').bootstrapTable('refresh');
}

//添加
function addShop() {
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
                    addShopGo();
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
function editShop(obj) {
    $("input[name='name']").val($(obj).attr('data_name'));
    $("input[name='title']").val($(obj).attr('data_title'));
    $("input[name='url']").val($(obj).attr('data_url'));
    $("input[name='tj_url']").val($(obj).attr('data_tj_url'));

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
                    editshopGo($(obj).attr('data_id'));
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
    ajaxGo('admin/shop/delshop');
    if(requestCode === 0){
        fac_search();
        layer.msg('删除成功!');
    }else {
        layer.msg(requestMessage);
    }

}