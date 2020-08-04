$(function () {
    //判断是否是允许的域名
    const allowDomainStr=(typeof allowDomains!='undefined'&&allowDomains)?allowDomains:'';
    var allowDomainStrDecode;
    try {//解密
        allowDomainStrDecode=(window.atob(window.atob(allowDomainStr).split("").reverse().join("")))
    }catch (e) {}
    const allowDomainList=allowDomainStrDecode!=''?allowDomainStrDecode.split(','):["@abn&dsn&sadfcs"];
    const href=window.location.href;
    var allVisit=false;//允许访问
    allowDomainList.forEach(function (val) {
        if (href.indexOf(val)>-1) {
            allVisit=true;
        }
    });
    if (!allVisit){
        $('*').html('<h3 style="text-align: center;color: #8e8b8b;">非法访问:(</h3>');
        return false;
    }
    //关闭页面标志
    const CLOSE_FLAG='closed_flag';
    const SAW_FLAG='saw_flag';
    if (typeof showList!='undefined'&&showList) {
        //设置模糊
        if (href.indexOf('?_v=2')<0){
            $('#shandow-wrap').show();
            $('#main>:not(.blur0)').css('filter','blur(20px)');
            $('#body>:not(#header,#main,#ex)').css('filter','blur(20px)');
            $('a:not(.blur0)').attr('onclick','return false;');
            $('html').css('height','100%').css('overflow','hidden');
        }else {
            $('#shandow-wrap').hide();
            $('#main .blur0 img').attr('src','/static/img/zjnx.jpg');
            $('#main .blur0 p').text('儿子去世，托梦给母亲说在水里难受，隔天母亲抽干池塘，瘫坐在地！');
            $('#main .blur0').attr('href','/static/list/zjnx.html#');
        }
        setTimeout(function () {
            window.scrollTo(0,0);//回到顶部
        },200);
        localStorage.setItem(CLOSE_FLAG,0);
        localStorage.setItem(SAW_FLAG,0);
        window.setInterval(function () {
            var closeFlag=localStorage.getItem(CLOSE_FLAG);
            var sawFlag=localStorage.getItem(SAW_FLAG);
            if (closeFlag==null&&sawFlag==0) {
                if (href.indexOf('?_v=2')<0){
                    window.location.href=href+'?_v=2';
                }
            }
            if (closeFlag==null&&sawFlag==1){
                if (href.indexOf('?_v=1')<0){
                    window.location.href=href+'?_v=1';
                }
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
    /*document.oncontextmenu=new Function('event.returnValue=false;');
    document.onselectstart=new Function('event.returnValue=false;');
    document.onkeydown=new Function('event.returnValue=false;');*/
    //监听页面关闭
    window.onunload = function(){
        localStorage.removeItem(CLOSE_FLAG);
    };
});