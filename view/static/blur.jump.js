$(function () {
    //判断是否是允许的域名
    const allowDomains=[];
    const href=window.location.href;
    //关闭页面标志
    const CLOSE_FLAG='closed_flag';
    if (typeof showList!='undefined'&&showList) {
        allowDomains.forEach(function (val) {
            if (href.indexOf(val)<0) {
                $('body').html('非法访问');
                return false;
            }
        });        
        //设置模糊
        $('#main>:not(.blur0)').css('filter','blur(20px)');
        $('#body>:not(#header,#main,#ex)').css('filter','blur(20px)');
        /*$('#body>:not(#main)').css('filter','blur(20px)');
        $('#header').css('filter','blur(20px)');*/
        $('a:not(.blur0)').attr('onclick','return false;');
        $('html').css('height','100%').css('overflow','hidden');
        localStorage.setItem(CLOSE_FLAG,0);
        window.setInterval(function () {
            var closeFlag=localStorage.getItem(CLOSE_FLAG);
            if (closeFlag==null) {
                $('#main>:not(.blur0)').css('filter','');
                $('#body>:not(#main)').css('filter','');
                $('#header').css('filter','');
                $('a:not(.blur0)').removeAttr('onclick');
                $('html').css('height','').css('overflow','');
            }
        },1000);
    }
    //禁止复制、右键、键盘
    /*document.oncontextmenu=new Function('event.returnValue=false;'); 
    document.onselectstart=new Function('event.returnValue=false;');
    document.onkeydown=new Function('event.returnValue=false;');*/
    //监听页面关闭
    window.onunload = function(){
        localStorage.removeItem(CLOSE_FLAG);
    };
});