$(document).ready(function () {


    //调用函数，初始化表格
    setMaterial();
    searchHistory();
    initTable();

});

function setMaterial() {
    ajaxGo('admin/material_memo/getListToSelect')
    requestData.data.forEach((item,index,array)=>{
        //执行代码
        var html = "<option value='"+item.id+"'>"+item.name+"</option>";
        $('#material').append(html);
        $('#material_update').append(html);
    });
    $('#material').selectpicker('refresh');
    $('#material_update').selectpicker('refresh');

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
        pageList: [5, 10, 15, 20],  //记录数可选列表
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
        },
        onLoadError: function(){  //加载失败时执行
            layer.msg("加载数据失败", {time : 1500, icon : 2});
        },
        columns: [
            {
                title: 'ID',
                field: 'id',
                align: 'center',
                width : '4%',
                valign: 'middle',
            },
            {
                field: 'view',
                title: '人员',
                width : '4%',
                formatter: function(value,row,index){
                    return '<xmp>' + value +'</xmp>';
                }
            },
            {
                field: 'name',
                title: '网页名称',
                width : '5%',
                align: 'center'
            },
            {
                field: 'platform_name',
                title: '平台',
                width : '4%',
                align: 'center'
            },
            {
                field: 'material_name',
                title: '素材名称',
                formatter: function(value,row,index){
                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="updateMaterial(this)" >'+value+'</a>';
                    return f;
                }
            },
            {
                field: 'title',
                title: '标题',
                width : '25%',
                formatter: function(value,row,index){
                    var html = '<div style="float: left"><img style="width: 120px;height: 60px" src="'+row.head_img+'" alt=""></div><div>'+value+'</div>';
                    return html;
                }
            },
            {
                field: 'url',
                title: '域名',
                align: 'center'
            },
            {
                field: 'view_name',
                title: 'pc模版',
                align: 'center',
                formatter: function(value,row,index){
                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="updateView(this)" >'+value+'</a>';
                    return f;
                }
            },
            {
                field: 'mobile_view_name',
                title: '移动模版',
                align: 'center',
                formatter: function(value,row,index){
                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="updateViewMobile(this)" >'+value+'</a>';
                    return f;
                }
            },
            {
                field: 'tj_url',
                title: '统计',
                align: 'center',
                width : '4%',
                formatter: function(value,row,index){
                    var f='<a href="#" mce_href="#" " data_id="'+row.id+'"  onclick="lookTj(this)" >查看</a>';
                    return f;
                    // if(value !== ''){
                    //     return  '有'+f;
                    // }else {
                    //     return '无';
                    // }
                }
            },

            {
                field: 'operate',
                title: '操作',
                width : '12%',
                align: 'center',
                formatter: function(value,row,index){
                    var a='<a href="#" mce_href="#" data_id="'+row.id+'" data_name="'+row.name+'" data_title="'+row.title+'" data_url="'+row.url+'"  onclick="editCommodity(this)" >编辑</a> ';
                    var e='<a href="#" mce_href="#" " data_url="'+row.url+'/'+row.pc_url+'""  onclick="preview(this)" >预览</a> ';
                    var d='<a href="#" mce_href="#" " data_url="'+row.url+'/'+row.ml_url+'"  onclick="preview(this)" >手机版</a> ';
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
    requestData.data = {
        'log' : $('#search_id').val()
    };
    ajaxGo('admin/Weakness/addWeakness');
    searchHistory();
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
    $("input[name='bottom_name']").val(requestData.data.bottom_name);


    let head_img =requestData.data.head_img.split('@@@');
    $('#upload-list-head').empty();
    head_img.forEach((item,index,array)=>{
        var html = '<div style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"  onclick="delImg(this)" ><img name="head_img" data_name="'+item+'" src="'+item+'"></div>';
        //执行代码
        $('#upload-list-head').append(html);
    });

    let qr_img =requestData.data.qr_code.split('@@@');
    $('#upload-list').empty();
    qr_img.forEach((item,index,array)=>{
        //执行代码
        if(requestData.data.code_num === (index+1) ){
            var html = '<div style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"  onclick="delImg(this)" ><div><img name="qr_img" data_name="'+item+'" src="'+item+'"></div><div style="color: red;text-align: center">使用中</div></div>';
        }
        if(requestData.data.code_num < (index+1) ){
            var html = '<div style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"  onclick="delImg(this)" ><div><img name="qr_img" data_name="'+item+'" src="'+item+'"></div><div style="color: #5fc55e;text-align: center">待使用</div></div>';
        }
        if(requestData.data.code_num > (index+1) ){
            var html = '<div style="float: left;padding-right: 10px;padding-bottom: 5px;padding-top: 5px;"  onclick="delImg(this)" ><div><img name="qr_img" data_name="'+item+'" src="'+item+'"></div><div style="color: #ccc;text-align: center">已使用</div></div>';
        }
        $('#upload-list').append(html);
    });

    $('#platform').selectpicker('val',(requestData.data.platform_id));
    $('#material').selectpicker('val',(requestData.data.material_id));
    $('#view').selectpicker('val',(requestData.data.view_id));
    //移动端数据渲染
    $('#mobile_view').selectpicker('val',(requestData.data.mobile_view_id));
    $("input[name='we_chat_name']").val(requestData.data.wechat_name);
    $("input[name='we_chat_url']").val(requestData.data.wechat_url);
    $("input[name='we_chat_id']").val(requestData.data.wechat_id);
    $("input[name='we_chat_url_info']").val(requestData.data.wechat_url_info);
    //uc ocpc
    $("input[name='uc_tj_id']").val(requestData.data.uc_tj_id);
    $("input[name='uc_tj']").val(requestData.data.uc_tj);

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

function updateMaterial(obj) {
    layer.open({
        type: 1,
        title: '编辑',
        shadeClose: true,
        shade: 0.8,
        area: ['40%', '60%'],
        content: $('#updateMaterial'),
        btn: ['确定', '取消'], // 按钮
        yes: function(index, layero){
            layer.msg('确定修改？', {
                time: 0 //不自动关闭
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    updateMaterialGo($(obj).attr('data_id'));
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
var myChart = echarts.init(document.getElementById('zb'));
var myChartzx = echarts.init(document.getElementById('zxt'));

function lookTj(obj) {

    layer.open({
        type: 1,
        title: '统计数据',
        shadeClose: true,
        shade: 0.8,
        area: ['85%', '98%'],
        content: $('#tj_div'),
        btn: ['刷新','取消'], // 按钮
        yes: function(index, layero){
            layer.msg('正在加载');

            getTj($(obj).attr('data_id'));
        }
//            content: '{:U("User/editUser",array("id"=>'+id+',"act"=>display))}' //iframe的url
    });
    getTj($(obj).attr('data_id'));
}

function getTj(page_id) {
    requestData.data = {
        'page_id' : page_id
    }
    ajaxGo('admin/commodity/getCommodityStatic');

    $("#all_num").text(requestData.data.now_time); //一分钟内独立访客

    //今日最高
    $("#today_max").text(requestData.data.max_num.num);
    $("#today_max_time").text(requestData.data.max_num.time);

    //今日汇总
    $("#all_all").text(requestData.data.today.all);
    $("#all_fk").text(requestData.data.today.dl);
    $("#all_ip").text(requestData.data.today.ip);

    //15分钟
    $("#15_all").text(requestData.data.five.all);
    $("#15_fk").text(requestData.data.five.dl);
    $("#15_ip").text(requestData.data.five.ip);

    //来源总数
    let all_num = requestData.data.all_urls.all;

    //占比
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%'
        },
        color:['#2E91DA','#f6bd0f','#F5AD46','#6CBF3D','#EDEB2C','#A149D9','#f6bd0f'],
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '35%',
                center: ['50%', '45%'],
                avoidLabelOverlap: true,
                minAngle: 5,
                label:{            //饼图图形上的文本标签
                    formatter: '{b|{b}：}{per|{d}%}\n{c|{c}}  ',
                    lineHeight: 13,
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        b: {
                            fontSize: 11,
                            lineHeight: 13,
                            color: '#333',
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2,
                            fontSize: 9,
                        },
                        c: {
                            align: 'left',
                            fontSize: 10,
                            color: '#999',
                        }

                    }
                },
                data: [
                    {value: requestData.data.bt[0]['num'], name: requestData.data.bt[0]['url']},
                    {value: requestData.data.bt[1]['num'], name: requestData.data.bt[1]['url']},
                    {value: requestData.data.bt[2]['num'], name: requestData.data.bt[2]['url']},
                    {value: requestData.data.bt[3]['num'], name: requestData.data.bt[3]['url']},
                    {value: requestData.data.bt[4]['num'], name: requestData.data.bt[4]['url']},
                    {value: requestData.data.bt[5]['num'], name: requestData.data.bt[5]['url']},
                    {value: requestData.data.bt[6]['num'], name: requestData.data.bt[6]['url']},
                ]
                // ,
                // emphasis: {
                //     itemStyle: {
                //         shadowBlur: 10,
                //         shadowOffsetX: 0,
                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //     }
                // }
            }
        ]
    };
    myChart.setOption(option);

    option = {
        legend: {
            data: [requestData.data.zxt[0]['url'], requestData.data.zxt[1]['url'], requestData.data.zxt[2]['url']]
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color:['#2E91DA','#F5AD46','#6CBF3D'],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: requestData.data.zxt[0]['url'],
                type: 'line',
                stack: '总量1',
                data: requestData.data.zxt[0]['data']
            },
            {
                name: requestData.data.zxt[1]['url'],
                type: 'line',
                stack: '总量2',
                data: requestData.data.zxt[1]['data']
            },
            {
                name: requestData.data.zxt[2]['url'],
                type: 'line',
                stack: '总量3',
                data: requestData.data.zxt[2]['data']
            }
        ]
    };


    myChartzx.setOption(option);

    //右侧列表
    let html = '<tr style=" font-size:12px;font-weight:bold; width: 100%; line-height: 25px; background:#E9E9E9;">\n' +
        '                    <td style="text-align: right; width: 35%; padding-left:2%; text-align:left;">来路域名</td>\n' +
        '                    <td style="text-align: left; width: 25%; text-align:left;">次数</td>\n' +
        '                    <td style="text-align: right; width: 18%; text-align:left;">占比</td>\n' +
        '                </tr>';

    $('#all_list').empty();
    $('#all_list').append(html);
    requestData.data.all_urls.list.forEach((item,index,array)=>{
        if(item.url === ''){
            item.url = '未知来源';
        }
        var html = '<tr class="layer1" style="font-size:12px;width: 100%; line-height: 23px;">\n' +
            '                    <td style="text-align: right; color: #999; width: 100px; padding-left:2%; text-align:left;">'+item.url+'</td>\n' +
            '                    <td style="text-align: left; color: #999; width: 25%; text-align:left;">'+item.count+'</td>\n' +
            '                    <td style="text-align: right; color: #2e91da; width: 18%; text-align:left;">'+((item.count/all_num)*100).toFixed(2)+'%</td>\n' +
            '                </tr>'//执行代码
        $('#all_list').append(html);
    });

    layer.msg('加载成功');
}

//渲染搜索历史
function searchHistory()
{
    ajaxGo('admin/Weakness/getListToSelect');
    $('#history_search').empty();
    let html = ' <div style="float: left"> 历史记录： </div>';
    $('#history_search').append(html);

    requestData.data.forEach((item,index,array)=>{
        var html = '<div style="float: left;">\n' +
            '                    <span style="cursor:pointer" onclick="searchLog(this)" data_id = "'+item.id+'">'+item.log+'</span>\n' +
            '                    <span style="position: relative;left: 4px;bottom:12px;color: blue;cursor:pointer" data_id = "'+item.id+'" onclick="delLog(this)">x</span>\n' +
            '                </div>';
        //执行代码
        $('#history_search').append(html);
    });

}

//删除搜索历史
function delLog(obj){
    layer.msg('确定删除？', {
        time: 0 //不自动关闭
        ,btn: ['确定', '取消']
        ,yes: function(index){
            requestData.data = {
                'id' : $(obj).attr('data_id')
            };
            ajaxGo('admin/Weakness/delWeakness');
            if(requestCode === 0){
                searchHistory();
                layer.msg('删除成功!');
            }else {
                layer.msg(requestMessage);
            }
        }
    });
}

//根据搜索历史搜索
function searchLog(obj) {
    $('#search_id').val($(obj).attr('data_id'));
    fac_search();
}