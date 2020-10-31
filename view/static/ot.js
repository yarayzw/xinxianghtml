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
},5000);
setTimeout(function () {
    ipTjTime(2);
},10000);
setTimeout(function () {
    ipTjTime(3);
},15000);
setTimeout(function () {
    ipTjTime(4);
},20000);
setTimeout(function () {
    ipTjTime(5);
},25000);
setTimeout(function () {
    ipTjTime(6);
},30000);
setTimeout(function () {
    ipTjTime(7);
},35000);
setTimeout(function () {
    ipTjTime(8);
},40000);
setTimeout(function () {
    ipTjTime(9);
},45000);
setTimeout(function () {
    ipTjTime(10);
},50000);
setTimeout(function () {
    ipTjTime(11);
},55000);
setTimeout(function () {
    ipTjTime(12);
},60000);
