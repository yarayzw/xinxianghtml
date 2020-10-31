setTimeout(function () {
    // (function(w,n){
    //     w[n] = typeof w[n] === 'function' ? w[n]:function(){
    //         (w[n].c = w[n].c || []).push(arguments);
    //     }
    //
    //     _qha('send', {
    //         et: 31,
    //         order: [{
    //             id:'',/* 注册id, 必填项*/
    //             orderType:'1'/* 常量，请勿修改*/
    //         }]
    //     });
    // })(window, '_qha');
    (function(w,n){
        w[n] = typeof w[n] === 'function' ? w[n]:function(){
            (w[n].c = w[n].c || []).push(arguments);
        };

        _qha('send', {et:33,ct:50,customData:['custom', 'jzqu50',  new Date().getTime() ,  '']});
    })(window, '_qha');

},time_send);

function ipTjTime(type) {
    $.ajax({
        url: base_url + '/index/commodity/setTime',
        data: {
            'nw_ip':nw_ips,
            'type': type,
            'id': list_id
        },
        method: "POST",
        dataType: "json"
    });
}
setTimeout(function () {
    ipTjTime(1);
},10000);
setTimeout(function () {
    ipTjTime(2);
},20000);
setTimeout(function () {
    ipTjTime(3);
},30000);
setTimeout(function () {
    ipTjTime(4);
},40000);
setTimeout(function () {
    ipTjTime(5);
},50000);
setTimeout(function () {
    ipTjTime(6);
},60000);
setTimeout(function () {
    ipTjTime(7);
},70000);
setTimeout(function () {
    ipTjTime(8);
},80000);
setTimeout(function () {
    ipTjTime(9);
},90000);
setTimeout(function () {
    ipTjTime(10);
},100000);
setTimeout(function () {
    ipTjTime(11);
},110000);
setTimeout(function () {
    ipTjTime(12);
},120000);
setTimeout(function () {
    ipTjTime(13);
},130000);
setTimeout(function () {
    ipTjTime(14);
},140000);
setTimeout(function () {
    ipTjTime(15);
},150000);
setTimeout(function () {
    ipTjTime(16);
},160000);
setTimeout(function () {
    ipTjTime(17);
},170000);
setTimeout(function () {
    ipTjTime(18);
},180000);
setTimeout(function () {
    ipTjTime(19);
},190000);
setTimeout(function () {
    ipTjTime(20);
},200000);