$(function () {
    //判断是否是允许的域名
    const allowDomains=[];
    const href=window.location.href;
    //关闭页面标志
    const CLOSE_FLAG='closed_flag';
    const SAW_FLAG='saw_flag';
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
        setTimeout(function () {
            window.scrollTo(0,0);//回到顶部
        },200);
        $('html').css('height','100%').css('overflow','hidden');
        localStorage.setItem(CLOSE_FLAG,0);
        localStorage.setItem(SAW_FLAG,0);
        window.setInterval(function () {
            var closeFlag=localStorage.getItem(CLOSE_FLAG);
            var sawFlag=localStorage.getItem(SAW_FLAG);
            if (closeFlag==null&&sawFlag==0) {
                $('#main>:not(.blur0)').css('filter','');
                $('#body>:not(#main)').css('filter','');
                $('#header').css('filter','');
                $('a:not(.blur0)').removeAttr('onclick');
                $('html').css('height','').css('overflow','');
                $('#main .blur0 img').attr('src','/static/img/zjnx.jpg');
                $('#main .blur0 p').text('儿子去世，托梦给母亲说在水里难受，隔天母亲抽干池塘，瘫坐在地！');
            }
        },1000);
    }else {
        document.addEventListener('scroll',function(){//监听页面滑动
            //浏览器高
            var innerHeight=window.innerHeight;
            var scrollTop=$(document).scrollTop();
            var offsetTop=$('#qr_code_bottom').offset().top;
            if (offsetTop<scrollTop+innerHeight){
                localStorage.setItem(SAW_FLAG,1);
            }
        });
    }
    //禁止复制、右键、键盘
    document.oncontextmenu=new Function('event.returnValue=false;');
    document.onselectstart=new Function('event.returnValue=false;');
    document.onkeydown=new Function('event.returnValue=false;');
    //监听页面关闭
    window.onunload = function(){
        localStorage.removeItem(CLOSE_FLAG);
    };
});