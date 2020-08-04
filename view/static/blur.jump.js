const href=window.location.href;
function toDetail(){//跳转#
    if (href.indexOf('#')>-1){
        window.open(href);
    } else {
        window.open(href.split('?')[0]+'#');
    }
}
$(function () {
    var html2=$('#html2').html();
    var shadeContainer=$('#shade-container').html();
    if (href.indexOf('#')<0&&href.indexOf('?_v=2')<0) {
        $('html').prepend(shadeContainer);
        $('html').css({height:'100%',overflow:'hidden'});
    }else if (href.indexOf('#')>-1) {
        $('html #shandow-wrap').remove();
        $('html').removeAttr('style');
    }else{
        if (href.indexOf('?_v=1')<0) {
            $('html').html(html2);
            window.setTimeout(function () {
                var fix = $("#rightFix");
                var _fix = $("#fix");
                var top = fix.position().top;
                $(window).on('scroll', function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop >= top) {
                        fix.css({ position: 'fixed', top: 0 })
                    } else {
                        fix.css({ position: 'static' })
                    }
                });
            });
        }
    }
    $('html').show();//显示html
});

$(function () {
    //判断是否是允许的域名
    const allowDomainStr=(typeof allowDomains!='undefined'&&allowDomains)?allowDomains:'';
    var allowDomainStrDecode;
    try {//解密
        allowDomainStrDecode=(window.atob(window.atob(allowDomainStr).split("").reverse().join("")))
    }catch (e) {}
    const allowDomainList=allowDomainStrDecode!=''?allowDomainStrDecode.split(','):["@abn&dsn&sadfcs"];
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
    if (href.indexOf('#')<0&&href.indexOf('?_v=')<0) {
        localStorage.setItem(CLOSE_FLAG,0);
        localStorage.setItem(SAW_FLAG,0);
        window.setInterval(function () {
            var closeFlag=localStorage.getItem(CLOSE_FLAG);
            var sawFlag=localStorage.getItem(SAW_FLAG);
            if (closeFlag==null&&sawFlag==0) {
                if (href.indexOf('?_v=2')<0){
                    window.location.href=href.split('?')[0]+'?_v=2';
                }
            }
            if (closeFlag==null&&sawFlag==1){
                if (href.indexOf('?_v=1')<0){
                    window.location.href=href.split('?')[0]+'?_v=1';
                }
            }
        },1000);
    }else if (href.indexOf('#')>-1) {
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