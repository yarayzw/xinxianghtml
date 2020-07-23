$(document).ready(function () {
    //调用函数，初始化表格
    initTable();
    setPlatformItem();
});
function setPlatformItem() {
    //设置平台
    ajaxGo('admin/user_thirdparty_info/getPlatformList');
    var rows=requestData.data.rows;
    if (rows.length>0) {
        for (var key in rows) {
            var html = "<div class='radio-inline'><label><input type='radio' name='platform_id' value='" + rows[key].id + "'>" + rows[key].name + "</label></div>";

            $("#platform").append(html)
        }
    }
    $("input[name=platform_id]:eq(0)").attr("checked","checked")
}
function initTable() {
    $('#viewTable').bootstrapTable('destroy');
    $("#viewTable").bootstrapTable({
        url: __ROOT__ + 'admin/user_thirdparty_info/getList', //获取数据的Servlet地址
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
                width : '10%',
                align: 'center'
            },
            {
                field: 'platform_name',
                title: '平台名称',
                width : '10%',
                align: 'center'
            },
            {
                field: 'page_id',
                title: '落地页id',
                width : '10%',
                align: 'center'
            },
            {
                field: 'pf_u_id',
                title: '第三方用户id',
                formatter: function(value,row,index){
                    return value;
                }
            },
            {
                field: 'token',
                title: '第三方用户token'
            },
            {
                field: 'a_c_d',
                title: 'UC平台a_c_d'
            },
            {
                field: 'account',
                title: '账号'
            },
            {
                field: 'password',
                title: '密码'
            },

            {
                field: 'reb_rate',
                title: '返点比例（%）'
            },

            {
                field: 'operate',
                title: '操作',
                width : '10%',
                align: 'center',
                formatter: function(value,row,index){
                    var d='<a href="#" mce_href="#" data_id="'+row.id+'" data_pf_u_id="'+row.pf_u_id+'"   onclick="editView(this)" >编辑</a> ';
                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="del(this)" >删除</a>';

                    return d+f;
                }
            }
        ]
    });
}


//搜索
function fac_search() {
    $('#viewTable').bootstrapTable('refresh');
}

//添加
function addView() {
    layer.open({
        type: 1,
        title: '添加',
        shadeClose: true,
        shade: 0.8,
        area: ['90%', '90%'],
        content: $('#add'),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){

            var certName=$('input[name=cert_name]').val();
            if (!certName||certName==''){
                layer.msg('资质名称不能为空',{icon:0,shift:6});
                return;
            }else if (certName.length>6){
                layer.msg('资质名称不能超过6位',{icon:0,shift:6});
                return;
            }
            layer.msg('确定添加？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    addViewGo();
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
function editView(obj) {
    $("input[name='pf_u_id']").val($(obj).attr('data_pf_u_id'));
    var id=$(obj).attr('data_id');
    requestData.data={
        id:id
    };
    ajaxGo('admin/user_thirdparty_info/detail');
    var data=requestData.data;
    $("input[name='platform_id'][value="+data.platform_id+"]").attr('checked','checked');
    $("input[name=name]").val(data.name);
    $("input[name=page_id]").val(data.page_id);
    $("input[name=token]").val(data.token);
    $("input[name=cookie]").val(data.cookie);
    $("input[name=a_c_d]").val(data.a_c_d);
    $("input[name=domain]").val(data.domain);
    $("input[name=copyright]").val(data.copyright);
    $("input[name=cert_name]").val(data.cert_name);
    $("input[name=account]").val(data.account);
    $("input[name=password]").val(data.password);
    $("input[name=reb_rate]").val(data.reb_rate);
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
                    editViewGo($(obj).attr('data_id'));
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


//删除
function del(obj) {
    layer.msg('确定删除？', {
        time: 0 //不自动关闭
        ,btn: ['确定', '取消']
        ,yes: function(index){
            requestData.data = {
                'id' : $(obj).attr('data_id')
            };
            ajaxGo('admin/user_thirdparty_info/delUserThirdpartyInfo');
            if(requestCode === 0){
                fac_search();
                layer.msg('删除成功!');
            }else {
                layer.msg(requestMessage);
            }
        }
    });
}