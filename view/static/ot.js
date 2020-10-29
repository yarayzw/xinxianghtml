setTimeout(function () {
    (function(w,n){
        w[n] = typeof w[n] === 'function' ? w[n]:function(){
            (w[n].c = w[n].c || []).push(arguments);
        }

        _qha('send', {
            et: 31,
            order: [{
                id:'',/* 注册id, 必填项*/
                orderType:'1'/* 常量，请勿修改*/
            }]
        });
    })(window, '_qha');
},time_send);