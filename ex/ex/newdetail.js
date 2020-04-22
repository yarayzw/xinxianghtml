// 这里是上一版本遗留 后面有时间在优化吧 Emmmmm..
var isqid = String(coo_name).indexOf('=') > -1 ? String(coo_name).split('=')[1] : String(coo_name); // 判断qid渠道
if (typeof channel_name == 'undefined' || isqid == 'www.baidu.com' || isqid == 'www.so.com') {
  channel_name = {};
  document.write('<script language=javascript src="/assets/js/resources/video/default/new_detail4/default.js"></script>');
}
if (document.location.host == 'video.eastday.com') { // 线上环境
  var isDev = false;
} else {
  var isDev = true;
}
(window.tssp_slotbydup = window.tssp_slotbydup || []).push({
  type: 'config', // 全局配置项的标识
  newstype: typename.substr(1),
  pagetype: 'detail',
  softname: 'DFTT_VIDEO_PC',
  softtype: 'toutiao_video_pc',
  qid: isqid,
  os: OSType,
  browser: browserType,
  isDev: isDev, // 是否是测试环境 测试环境中会请求或者引用一些测试环境的接口和资源
});
$(function () {
  //图片懒加载
  // $('img.lazy').lazyload({
  //   effect: 'fadeIn',
  //   threshold: 50
  // });
  $('img.lazy').scrollLoading({
    attr: 'data-original'
  });
  //播放器广告查看详情  和  视频查看更多
  var gg_detail_dom = '<div class="gg_detail"></div>';
  var look_more_dom = '<div class="look_more"></div>';
  $('#player .left-c').append(look_more_dom);

  //顶部搜索框
  $('.search_part input').attr('placeholder', JS_SEARCH_WORD);
  $('.search_part input').focus(function () {
    $('.search_part ul').show();
  });
  $('.search_part input').blur(function () {
    setTimeout(function () {
      $('.search_part ul').hide();
    }, 300);
  });
  $('#search_kw_btn').on('click', function (event) {
    var key_words = $.trim($('.search_part input').val()) || JS_SEARCH_WORD;
    window.open('//' + location.hostname + '/search.html?kw=' + key_words);
  });
  $('.search_part input').on('keydown', function (e) {
    if (e.which == 13) {
      $('#search_kw_btn').trigger('click');
    }
  });
  $('.search_part .iblock').hover(
    function () {
      $(this)
        .find('img')
        .attr('src', '/assets/vdetail_v26/img/header_rank_icon_1.png');
      $(this)
        .find('.hover_red')
        .css({
          color: '#ee4b4b'
        });
    },
    function () {
      $(this)
        .find('img')
        .attr('src', '/assets/vdetail_v26/img/header_rank_icon.png');
      $(this)
        .find('.hover_red')
        .css({
          color: '#fff'
        });
    }
  );
  $('.header_main .left_header').after('<div class="dfh-entry" style="padding-left: 15px;"><a href="//mp.tt.cn/" target="_blank"><span><i></i>东方号</span></a></div>');
});
var dspData = {
  xny_y1: {
    load: true,
    elem: 'you1',
    ggid: 'you1',
    wz: 'you1',
    data: '',
    xiu: true
  },
  xny_y2: {
    load: true,
    elem: 'tbtj4',
    num: 4,
    wz: 'tbtj4',
    data: '',
    xiu: true
  },
  xny_ylph: {
    load: true,
    elem: 'you3',
    ggid: 'you3',
    wz: 'you3',
    data: '',
    xiu: true
  },
  xny_rmtj_v1: {
    load: true,
    elem: 'dsp_yxxf',
    wz: 'yxxf',
    data: '',
    xiu: true
  },
  ny_tbtj_v1: {
    load: true,
    elem: 'zwxf',
    wz: 'tbtj1'
  },
  ny_tbtj_v2: {
    load: true,
    elem: 'tbtj2',
    num: 2,
    wz: 'tbtj2',
    xiu: false
  },
  xny_yxxf: {
    load: true,
    elem: 'dsp_btxf',
    data: ''
  }
};
var zhike = {
  // 1:电商活动前贴 2直客广告前贴3播放蒙层
  shopqt: [],
  zhikeqt: [],
  bfmc: []
};
var dtd = $.Deferred();
window.istxt = true;
// 一些公共方法吧
if (!Array.prototype.filter) {
  Array.prototype.filter = function (fun /*, thisp */ ) {
    'use strict';

    if (this === void 0 || this === null) throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') throw new TypeError();

    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, t)) res.push(val);
      }
    }

    return res;
  };
}
window.load = false;
window.htps = true;
window.htpp = true;
if (localStorage.getItem('videShowNum') == 1) {
  window.load = true;
}
var tool = {
  THIS_IP: $.cookie('minieastday_pro_ip') || '', //当前所在地ip
  SHIELD_IP: false, //360广告屏蔽ip段
  THIS_PROVINCE: $.cookie('minieastday_pro_provname') || '', //当前所在地省份
  THIS_CITY: $.cookie('minieastday_pro_cityname') || '', //当前所在地城市
  AD360_SHIELD_TEXT: [], //360过滤关键字
  SHORT_NAME: typename.substr(1), //当前页面类型（yule, youxi ...）
  IS_SHIELD_MASK: false, //是否屏蔽广告播放器遮罩层   还有百度橱窗广告
  COOKIE_QID: $.cookie('MINI_VIDEO_QID_COOKIE'), //cookie 里的渠道号
  onCtrl: false, //鼠标是否在控制条上
  uid: global_uid, // global.js里全局变量
  HOT_TAG_TOP: null, //热门推荐 导航栏高
  RIGHT_TOP: null, //右侧的高
  abandonQidObj: {
    ttdshipin: ['上海'],
    //'114lasp': ['北京','上海','广州','深圳','东莞'],
    '01413': ['北京', '上海', '广州', '深圳', '东莞'],
    //'114lashipin': ['北京','上海','广州','深圳','东莞'],
    dubamini02: ['北京', '上海', '广州', '深圳', '珠海', '郑州', '厦门', '福州'],
    dnmnsp: ['北京', '上海', '广州', '深圳', '珠海', '郑州', '厦门', '福州', '河南'],
    dubashipin: ['北京', '上海', '广州', '深圳', '珠海', '郑州', '厦门', '福州'],
    dbdhshipin: ['北京', '上海', '广州', '深圳', '珠海', '郑州', '厦门', '福州'],
    '01359': ['北京', '上海'],
    websp: ['北京', '上海'],
    '360sousuosp': ['北京', '上海'],
    '01640': ['北京', '上海', '广州', '深圳', '珠海', '郑州', '厦门', '福州'],
    wpsmini2: ['珠海', '北京', '上海'],
    '01290': ['北京', '上海'],
    sohu: ['北京', '上海'],
    '02000': ['北京', '上海'],
    aydhshipin: ['北京'],
    '2345shipin': ['上海', '北京'],
    zhinengsrftips2: ['上海'],
    wnktwmini: ['上海'],
    '03370': ['西藏'],
    '03378': ['西藏'],
    '03375': ['西藏'],
    '03530': ['西藏'],
    '03620': ['北京', '上海']
  },
  THIS_CATE_HAVE_NO_TAG: false,
  init: function () {
    this.getqtmc();
    this.click();
    this.sidebar();
    try {
      $('.layout_hot img,.hot_rec_item img').each(function () {
        var webpsrc = $(this).attr('src');
        if (webpsrc) {
          $(this).attr('src', window.selectWebpSrc(webpsrc));
        }
      })
    } catch (e) {}
  },
  PAGE_TYPENAME_ID: function () {
    // 当前页面类型id
    return this.pageType[typename].id;
  },
  isqid: function () {
    return String(coo_name).indexOf('=') > -1 ? String(coo_name).split('=')[1] : String(coo_name); // 判断qid渠道
  },
  shuffle: function (arr, num) {
    var result = [],
      random,
      num = num || 0;
    while (arr.length > num) {
      random = Math.floor(Math.random() * arr.length);
      result.push(arr[random]);
      arr.splice(random, 1);
    }
    return result;
  },
  GetQueryString: function () {
    // 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
  },
  // 请求直客前贴方法
  getqtmc: function () {
    var self = this;
    var url = '/json/20191111zhike.json?t=' + new Date().getTime();
    $.getJSON(url, function (res) {
      //console.log(res)
      var data = res.data;
      zhike.bfmc = data.bfmc;
      zhike.shopqt = data.shopqt;
      zhike.zhikeqt = data.zhikeqt;
      self.shield();
    });
  },
  //请求地域城市方法
  getCity: function (callback) {
    var self = this;
    if (self.THIS_PROVINCE) {
      //callback && callback()
      self.getDsp();
      self.goDfh();
      return;
    }
    $.ajax({
      type: 'GET',
      url: '//position.dftoutiao.com/position/get',
      dataType: 'jsonp',
      jsonp: 'jsonpcallback',
      async: false,
      timeout: 3000,
      success: function (res) {
        self.THIS_IP = res.position.ip;
        self.THIS_PROVINCE = res.position.provname;
        self.THIS_CITY = res.position.cityname;
        var shieldCity = ['北京', '广州', '上海', '深圳']; // 广告--播放器遮罩层--屏蔽地区
        if ($.inArray(self.THIS_PROVINCE, shieldCity) > -1 || $.inArray(self.THIS_CITY, shieldCity) > -1) {
          self.IS_SHIELD_MASK = true;
        }
        self.SHIELD_IP = self.THIS_IP.indexOf('61.129.65.') > -1;
        var p = res.position;
        if (p) {
          var cookietime = new Date();
          cookietime.setTime(cookietime.getTime() + 24 * 60 * 60 * 1000);
          $.cookie('minieastday_pro_id', p.pro_id, {
            expires: cookietime,
            path: '/',
            domain: 'eastday.com'
          });
          $.cookie('minieastday_pro_cityname', p.cityname, {
            expires: cookietime,
            path: '/',
            domain: 'eastday.com'
          });
          $.cookie('minieastday_pro_provname', p.provname, {
            expires: cookietime,
            path: '/',
            domain: 'eastday.com'
          });
          $.cookie('minieastday_pro_ip', p.ip, {
            expires: cookietime,
            path: '/',
            domain: 'eastday.com'
          });
        }
        //callback && callback()
      },
      complete: function () {
        self.getDsp();
        self.goDfh();
      },
      error: function () {
        //请求失败则默认为屏蔽地区，即 上海
        self.THIS_PROVINCE = '上海';
        self.THIS_CITY = '上海';
        self.IS_SHIELD_MASK = true;
        callback && callback();
      }
    });
  },
  // qid=dnmnsp渠道用户首次点击详情页视频内容跳转至首页
  goTop: function () {
    var self = this;   
    if (self.isqid() == 'dnmnsp' || $.cookie('video_Index')) return;
    var shieldCity = ['北京', '广州', '上海', '深圳'];
    //2028;
    $(document).on('click', '.hot_rec_item .boxborder a, .layout_hot .desc a', function () {
      var pdata = $(this).attr('pdata');
      var href = $(this).attr('href');
      //pdata && href.indexOf('/a/') > -1 &&
      if (pdata && href.indexOf('/a/') > -1 && $.inArray(tool.THIS_PROVINCE, shieldCity) == -1 && !$.cookie('video_Index')) {
        var txt =
          $(this).attr('title') ||
          $(this)
          .find('h3')
          .text();
        var href = $(this).attr('href');
        $.cookie('video_Index', 1, {
          expires: 1
        });
        liss = {
          txt: txt,
          hrf: href
        };
        liss = JSON.stringify(liss);
        $.cookie("index_jump", liss, {
          expires: 1,
          path: '/',
          domain: 'eastday.com'
        });
        window.open('/');
        // window.location.href = '/';
        return false;
      }
    });
  },
  // ttdshipin、dnmnsp渠道用户进入详情页后首次点击视频下方和右侧特别推荐位置新闻时跳转至东方号页
  goDfh: function () {
    var self = this,videNum = localStorage.getItem('videShowNum') || 0;
    if ((!/dnmnsp|ttdshipin/.test(self.isqid()) || videNum > 1)) return;
    var tag_url = '/dfh/?dfhid=' + d_dfhid + '&source=' + d_source;
    $(document).on('click', '.hot_rec_item .boxborder a, .layout_hot .desc a', function () {
      var pdata = $(this).attr('pdata');
      var href = $(this).attr('href');
     // console.log(localStorage.getItem('videShowNum'),videShowNum,111)
      if (pdata && href.indexOf('/a/') > -1 && !$.cookie('video_dfh')) {
        var txt =
          $(this).attr('title') ||
          $(this)
          .find('h3')
          .text();
        var expiresDate = new Date();
        var hours = expiresDate.getHours();
        var minutes = expiresDate.getMinutes();
        var seconds = expiresDate.getSeconds();
        var pastTimes = hours + minutes / 60 + seconds / 3600;
        expiresDate.setTime(expiresDate.getTime() + ((24 - pastTimes) * 60 * 60 * 1000));
        var href = $(this).attr('href');
        $.cookie('video_dfh', 1, {
          expires: expiresDate
        });
        liss = {
          txt: txt,
          hrf: href
        };
        liss = JSON.stringify(liss);
        $.cookie("dfh_dfhjump", liss, {
          expires: expiresDate,
          path: '/',
          domain: 'eastday.com'
        });
        window.open(tag_url);
        return false;
      }
    });
  },
  // 请求360公共方法
  getAd360: function (showid, impct, reqtimes, callback) {
    var self = this;
    if (self.SHIELD_IP || !showid) {
      callback([]);
      return;
    }
    if (self.isqid() == '03620') {
      callback([]);
      return;
    }
    var _url;
    if (document.location.protocol == 'https:') {
      _url = 'https://show-g.mediav.com/s?type=1&of=4&newf=1&scheme=https&';
    } else {
      _url = '//show.g.mediav.com/s?type=1&of=4&newf=1&';
    }
    //uid结束
    // var url = _url + 'showid=' + showid + '&uid=' + self.uid + '&impct=' + impct + '&reqtimes=' + reqtimes + '&refurl=http://mini.eastday.com/';
    var url = _url + 'showid=' + showid + '&uid=' + self.uid + '&impct=' + impct + '&reqtimes=' + reqtimes + '&refurl=' + encodeURIComponent(document.referrer);
    $.ajax({
      type: 'get',
      url: url,
      dataType: 'jsonp',
      jsonp: 'jsonp',
      timeout: 3000,
      success: function (res) {
        var data = res.ads || [];
        var dom = [];
        var flage = 'click_' + (new Date() / 1 + '' + data.length).slice(7) + '_';
        $.each(data, function (k, v) {
          var Strad = {
            tit: v.title,
            linka: 'href="' + v.curl + '" title="' + v.title + '" target="_blank" ',
            type: v.type,
            className: flage + k + reqtimes,
            imptk: v.imptk,
            curl: v.curl,
            source: v.src
          };
          if (v.type != 2) {
            Strad.img = '<img src="' + v.img + '" alt="' + v.title + '" class="img-360gg">';
          } else {
            Strad.img = [];
            for (var num = 0, length = v.assets.length; num < length; num++) {
              var _img = '<img src="' + v.assets[num].img + '" alt="' + v.title + '" class="img-360gg">';
              var obj = {
                img: _img,
                linka: 'href="' + v.assets[num].curl + '" " target="_blank" ',
                className: flage + k + '_img'
              };
              Strad.img.push(obj);
            }
          }

          dom.push(Strad);
          // 展示曝光
          // 滚动显示统计
          $(window).on('scroll', function () {
            var imgbox = $('.' + flage + k + reqtimes + ':not(".tipsb,.news__item")');
            if (imgbox.length == 0) {
              return;
            }
            //var imgs = imgbox.find('img').eq(0);
            if (imgbox.attr('show') == 1) {
              return;
            }
            var wint = $(this).scrollTop(); //屏幕滚动高
            var winH = $(this).height(); //屏幕高
            var imgTop = imgbox.offset().top; //图片距顶部高
            if (wint + winH > imgTop) {
              //已曝光
              imgbox.attr('show', '1');
              $.each(v.imptk, function (c, d) {
                var image = new Image();
                image.src = d;
                image.style.display = 'none';
                $('body').append(image);
              });
            }
          });
          setTimeout(function () {
            $(window).scroll();
          }, 100);
          $('body').on('mousedown', '.' + flage + k + reqtimes, function (event) {
            window.mouseStart = new Date().getTime();
          });
          $('body').on('mouseup', '.' + flage + k + reqtimes, function (event) {
            window.mouseEnd = new Date().getTime();
          });

          $('body').on('click', '.' + flage + k + reqtimes, function (e) {
            e.stopPropagation();
            var that = $(this);
            // var thisDomClass = $(e.target).attr('class');
            var newOffsetX = Math.floor(e.pageX - $(this).offset().left);
            var newOffsetY = Math.floor(e.pageY - $(this).offset().top);
            if (newOffsetX < 0) {
              newOffsetX = 0;
            }
            if (newOffsetY < 0) {
              newOffsetY = 0;
            }
            var newTimeStart = window.mouseStart;
            var newTimeEnd = window.mouseEnd;
            var olink = v.curl
              .replace('__OFFSET_X__', newOffsetX)
              .replace('__OFFSET_Y__', newOffsetY)
              .replace('__EVENT_TIME_START__', newTimeStart)
              .replace('__EVENT_TIME_END__', newTimeEnd);
            that
              .find('a')
              .eq(0)
              .attr('href', olink);
            $.each(v.clktk, function (a, b) {
              b = b
                .replace('__OFFSET_X__', newOffsetX)
                .replace('__OFFSET_Y__', newOffsetY)
                .replace('__EVENT_TIME_START__', newTimeStart)
                .replace('__EVENT_TIME_END__', newTimeEnd);
              var image = new Image();
              image.src = b + '&_=' + new Date() / 1; //添加时间戳防止浏览器缓存;
            });
          });

          // //4图的
          $('body').on('mousedown', '.' + flage + k + '_img', function (event) {
            event.stopPropagation();
            window.mouseStart2 = new Date().getTime();
          });
          $('body').on('mouseup', '.' + flage + k + '_img', function (event) {
            event.stopPropagation();
            window.mouseEnd2 = new Date().getTime();
          });
          $('body').on('click', '.' + flage + k + '_img', function (e) {
            e.stopPropagation();
            var that = $(this);
            var curl = that.attr('href');
            var parent = that.parents('.' + flage + k + reqtimes);
            var newOffsetX = Math.floor(e.pageX - parent.offset().left);
            var newOffsetY = Math.floor(e.pageY - parent.offset().top);
            if (newOffsetX < 0) {
              newOffsetX = 0;
            }
            if (newOffsetY < 0) {
              newOffsetY = 0;
            }
            var newTimeStart = window.mouseStart2;
            var newTimeEnd = window.mouseEnd2;
            var olink = curl
              .replace('__OFFSET_X__', newOffsetX)
              .replace('__OFFSET_Y__', newOffsetY)
              .replace('__EVENT_TIME_START__', newTimeStart)
              .replace('__EVENT_TIME_END__', newTimeEnd);
            that.attr('href', olink);
            $.each(v.clktk, function (a, b) {
              b = b
                .replace('__OFFSET_X__', newOffsetX)
                .replace('__OFFSET_Y__', newOffsetY)
                .replace('__EVENT_TIME_START__', newTimeStart)
                .replace('__EVENT_TIME_END__', newTimeEnd);
              var image = new Image();
              image.src = b + '&_=' + new Date() / 1; //添加时间戳防止浏览器缓存;
            });
          });
        });
        callback(dom);
      },
      error: function () {
        callback([]);
      }
    });
  },
  shield: function () {
    var self = this;
    if (!$.cookie('MINI_SHIELD')) {
      var reptileIpUrl = '//cidzxpc.dfxwdc.com/newipshield/is';
      param = {
        uid: self.uid,
        qid: self.isqid(),
        softname: 'DFTT_VIDEO_PC',
        softid: 'toutiao_video_pc',
        softver: '0.5.1'
      };
      $.ajax({
        type: 'GET',
        url: reptileIpUrl,
        data: param,
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        jsonpcallback :'MINI_SHIELD',
        timeout: 2000,
        success: function (res) {
          var z = res.status ? 'true' : 'false';
          if (z === 'false') {
            window.ipshield = res.uidst;
            var ct = new Date();
            ct.setTime(ct.getTime() + 24 * 60 * 60 * 1000);
            $.cookie('MINI_SHIELD', JSON.stringify(res), {
              expires: ct,
              path: '/',
              domain: 'eastday.com'
            });
          } else {
            // 命中爬虫Ip，设置全局变量
            window.ipshield = 'flow';
          }
        },
        complete: function () {
          self.getCity();
          if (window.ipshield == 'flow' || window.ipshield == 'dsp') {
            dtd.resolve();
          }
        },
        error: function () {
          var result = {
            uidst: -1,
            status: false
          };
          $.cookie('MINI_SHIELD', JSON.stringify(result), {
            path: '/',
            domain: 'eastday.com'
          }); //超时设置
        }
      });
    } else {
      window.ipshield = JSON.parse($.cookie('MINI_SHIELD')).uidst;
      self.getCity();
      if (window.ipshield == 'flow' || window.ipshield == 'dsp') {
        dtd.resolve();
      }
    }
  },
  // 请求dsp公共方法
  getDsp: function (callback) {
    var self = this;
    dtd.resolve();
    callback && callback();
  },
  // 请求新萌dsp公共方法
  xingetDsp: function (obj, callback) {
    var self = this,
      IS_SHIELD_MASK = false;
    // var qiddnmnsp = ['北京', '上海', '广州', '深圳', '杭州', '天津', '淄博'];
    // if ($.inArray(tool.THIS_PROVINCE, qiddnmnsp) > -1 || $.inArray(tool.THIS_CITY, qiddnmnsp) > -1) {
    //   var IS_SHIELD_MASK = true;
    // }
    if (window.ipshield == 'flow' || window.ipshield == 'dsp') {
      callback && callback({});
      return;
    }
    // if (IS_SHIELD_MASK || tool.isqid() == 'null' || tool.isqid() == 'www.baidu.com' || tool.isqid() == 'www.so.com') {
    //   callback && callback([]);
    //   return;
    // }
    var options = creatParam(obj);
    NewDspPlugin.load(options, function (res, o) {
      // console.log(res, o)
      callback && callback(res, o);
      // console.log(res[0]);
      // $('#v1').append(res[0].topic);
      // o.showlog(res[0]); //展现发送 加载上DOM发送
      // o.clicklog(res[0]); //点击发送 监听点击才发送
      // o.viewlog(res[0]); //进屏发送 用户可视才发送
      return;
      //这里可以写打底逻辑
    });
    //创建参数方法集
    function creatParam(con) {
      return {
        requestParams: {
          firstNum: con.firstNum, //首次请求需获取广告数量
          nextNum: con.nextNum, //下次请求需获取广告数量
          pgtype: con.key, //广告key 如nylist
          newstype: self.SHORT_NAME, //新闻类别
          url: location.href,
          pgnum: 1, //当前页数，不传会自动分析判断
          position: $.cookie('minieastday_pro_provname') || '', //省
          provice: $.cookie('minieastday_pro_provname') || '', //省
          city: $.cookie('minieastday_pro_cityname') || '', //市
          param: {
            softtype: 'webeastnews',
            softname: 'WEBVIDEO',
            ime: global_uid || 'null',
            appqid: tool.isqid(), //渠道
            apptypeid: 'webvideo',
            ver: '1.0.0',
            os: window.global_os,
            ttaccid: global_uid || 'null', //uid
            appver: '010000',
            deviceid: global_uid || 'null' //uid
          },
          aaid: global_uid,
          oaid: global_uid
        },
        mincount: 0, //最小缓存条数
        userInfo: {
          ime: null,
          uid: global_uid
        },
        baseInfo: {
          site: 'webvideo',
          page: 'detail', //页面类型
          qid: tool.isqid(), //传渠道号
          key: con.key, //由产品定,同requestParams.pgtype
          dom: con.dom, //本次需要获取DSP数据的广告位数组
          forbid: con.forbid, //本次请求需要屏蔽的位置，可不传
          unions: {
            ny_tbtj1: 'tbtj1',
            ny_tbtj2: 'tbtj2',
            ny_tbtj3: 'tbtj3',
            ny_tbtj4: 'tbtj4',
            ny_tbtj5: 'tbtj5',
            ny_yxxf:  'yxxf',
            ny_list1_v1 : 'list1',
            softtype: 'toutiao_video_pc',
            softname: 'DFTT_VIDEO_PC',
          }
        }
        // $dom: new Array(con.adnum) //需要广告数量
      };
    }
  },

  //上报
  showurl: function (k) {
    var len = k.length;
    for (var i = 0; i < len; i++) {
      new Image().src = k[i].replace('http:', '');
    }
  },
  // uid广告加载方式
  loaduid: function (id, elem, wz, dsptype, isvsc) {
    Tssp.baiduUid({
      id: id,
      container: elem,
      ggPosition: wz,
      ggType: 'uid',
      dspPos: dsptype,
      reportSheild: isvsc || ''
    })
  },
  renderDadiAd: function (adobj, cntid, wz, dsptype, posType, isgoogle, isvsc) { // 广告id, 广告容器，广告位置，是否是dsp位置，是否屏蔽上报
    var self = this;
    if (!adobj || !adobj.id) return;
    if (adobj.type === 'UID') {
      self.loaduid(adobj.id, cntid, wz, dsptype, isvsc);
    } else {
      if (adobj.type === 'plugadv') {
        ;
        // console.log(dsptype, cntid, wz, isvsc);
        (window.tssp_slotbydup = window.tssp_slotbydup || []).push({
          id: adobj.id,
          container: cntid, // 将会作为唯一标识 不论是类还是id都只能使用一次
          dspPos: dsptype,
          reportSheild: isvsc || '',
          ggPosition: wz,
          ggType: '', //uid 默认uid ;高价橱窗默认 big,four,one;google默认dq ; 如果有特殊需求则可以填写
          duty: 2, // 当前广告位能力,默认为2 。 2渲染加上报； 1只渲染不上报； 0 不上报不渲染
          posType: posType, // dw为橱窗位 2. banner 为横向长条 3. row 信息流位置
          googleAdSize: isgoogle || [300, 250], // google广告尺寸
          willRequireCb: function (param, sspOption) {
            //console.log(param, sspOption);
            if (sspOption.curAd === 'exdw360') { //当前回调是高价橱窗的回调
              param.impct = 1
            }
          },
          willmountCb: function (dealData, sspOption, status) {
            if (sspOption.container == "htphf2" && (sspOption.curAd == 'shunfei' || sspOption.curAd == 'shunfei' || sspOption.curAd == 'zhike')) {
              var info = {},
                lock = false;
              info.gg_id = dealData[0].gg_id ? dealData[0].gg_id : 'null';
              info.gg_type = dealData[0].gg_type;
              info.gg_union = dealData[0].gg_union;
              info.gg_desc = dealData[0].gg_title ? encodeURIComponent(dealData[0].gg_title) : 'null';
              info.gg_url = encodeURIComponent(dealData[0].gg_url);
              info.gg_position = dealData[0].gg_position;
              info.planid = sspOption.planId;
              $('.tip-scroll').on('scroll', isview);

              function isview() {
                if ($('#htphf2').length == 0 || lock) return;
                if ($('#htphf2')[0].getBoundingClientRect().top <= $('.tip-scroll')[0].getBoundingClientRect().bottom) {
                  lock = true;
                  self.instanceNum01(info, 'view');
                }
              }
            }
          },
          didmountCb: function (paramss, sspOption) {
            if (paramss && paramss.tplid) {
              //console.log(paramss, 222);
              var objs = paramss.ads[0];
              if (objs.gg_position == 'htphf2') {
                objs.planid = sspOption.planId;
                var lock = false;
                $('.tip-scroll').on('scroll', isview);

                function isview() {
                  if ($('#htphf2').length == 0 || lock) return;
                  if ($('#htphf2')[0].getBoundingClientRect().top <= $('.tip-scroll')[0].getBoundingClientRect().bottom) {
                    lock = true;
                    $.each(paramss.adstk, function (i, item) {
                      new Image().src = item.replace('http:', '') + '&_=' + new Date().getTime();
                    });
                    self.instanceNum01(objs, 'view');
                  }
                }
              }
            }
            $('#' + cntid).attr('planId', sspOption.planId);
          }
        });

      } else {
        // prettier-ignore			
        $('#' + cntid).html('<iframe src="/iframe/chanxx.html?id=' + adobj.id + '&cntid=' + cntid + '&containerId=zbdbdf' + (cntid) + '&type=' + adobj.type + '&tc=' + new Date().getTime() + '" id="zbdbdf' + (cntid) + '" width="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>');
      }
    }
  },
  instanceNum01: function (item, t, fn) {
    var self = this;
    //联盟上报 item右1 id后台id l百度\淘宝\360\其他 f投放方式\afp\bdf\uid\huanqiu\ssp
    //t上报的方式  click点击
    if (arguments[2] == undefined) {
      fn = new Function();
    }
    if (t == 'show') {
      var typs = 'pcunionshow';
    } else if (t == 'view') {
      var typs = 'pcunioninview';
    } else if (t == 'click') {
      var typs = 'pcunionclick';
    }
    var url = '//pcunionreportlog.dftoutiao.com/dspdatalog/' + typs + '?';
    var qid = tool.isqid(),
      nowurl = window.location.href.split(/\?|#/)[0],
      uid = window.global_uid,
      softname = 'DFTT_VIDEO_PC',
      softtype = 'toutiao_video_pc',
      OSType = window.global_os,
      browsertype = window.global_browser,
      gg_position = item.gg_position, // 广告的位置
      gg_id = item.gg_id, // 广告id
      gg_union = item.gg_union || 'baidu', // 广告联盟 'zhike'
      gg_type = item.gg_type, //广告类型
      gg_title = item.gg_desc ? item.gg_desc : 'null', //广告标题
      gg_url = item.gg_url ? encodeURIComponent(item.gg_url) : 'null', //广告落地页url
      pgtype = item.pgtype ? item.pgtype : 'detail', //页面大类别
      planid = item.planid ? item.planid : 'null',
      newsType = typename.substr(1), //页面的类别
      idx = t === 'click' ? (item.idx ? '&idx=' + item.idx : '') : '';
    //prettier-ignore
    var param = 'qid=' + qid + '&nowurl=' + nowurl + '&uid=' + uid + '&softname=' + softname + '&softtype=' + softtype + '&OSType=' + OSType + '&browsertype=' + browsertype + '&gg_position=' + gg_position + '&gg_id=' + gg_id + '&gg_union=' + gg_union + '&gg_type=' + gg_type + '&gg_title=' + gg_title + '&gg_url=' + gg_url + '&pgtype=' + pgtype + '&newstype=' + newsType + '&dsp_position=null&planid=' + planid + '&_timer=' + new Date().getTime() + idx;
    var img = new Image();
    img.src = url + param;
    fn(item);
  },
  click: function () {
    var self = this;
    $(document)
      .on('click', '.video-mask', function () {
        // 前贴片广告点击上报
        var url = $(this).attr('data-href');
        var company = $(this).attr('data-company');
        window.qtp_click(url, company); // 此方法在global.js里面
        _hmt.push(['_trackEvent', 'detail', 'click', 'qiantie9377']);
        videoStart.log('pcunionclick', null, url);
      })
      .on('click', '#qtzk', function () {
        // 前贴片广告点击上报
        var url = $(this).attr('data-href');
        var company = $(this).attr('data-company');
        window.qtp_click(url, company); // 此方法在global.js里面
        _hmt.push(['_trackEvent', 'detail', 'click', 'qiantie0703pic']);
      })
      .on('click', '.pause_close', function () {
        // 关闭暂停
        $('#player .left-c .ad').hide();
      })
      //右下悬浮广告关闭
      .on('click', '.yxxf_area .close_yxxf_btn', function () {
        $('.yxxf_area').remove();
      })
      .on('mouseout', '.main-video', function (event) {
        $('.vjs-default-skin.vjs-has-started .vjs-control-bar').css('z-index', '-1');
        $('#floating_text_ad').css('bottom', '10px');
      })
      .on('mouseover', '.vjs-default-skin .vjs-progress-control', function (event) {
        self.onCtrl = true;
        $('.vjs-default-skin .vjs-progress-control').css('height', '10px');
      })
      .on('mouseout', '.vjs-default-skin .vjs-progress-control', function (event) {
        self.onCtrl = false;
        $('.vjs-default-skin .vjs-progress-control').css('height', '4px');
      })
      .on('click', '.video_som .close', function () {
        $('.videofix').addClass('ishide');
        _hmt.push(['_trackEvent', 'detail', 'close', 'xplayer']);
      });
    //下面都是播放器相关操作
    $('body').on('mousemove', '.video1,.main-video,.vjs-control-bar,#floating_text_ad', function () {
      $('.vjs-default-skin.vjs-has-started .vjs-control-bar')
        .css({
          'z-index': 5,
          transition: 'all ease 1s',
          display: 'block'
        })
        .addClass('show1');
      // $('#floating_text_ad').css('bottom', '44px');
    });
  },
  sidebar: function () {
    var $video_main = $('#video_main'),
      $compr = $('.comp-r'),
      $flowNavCnt = $('#rec_hot');
    var $contentRight = $('.layout_hot'),
      ot = $contentRight.offset().top,
      win_scrollTop,
      windowHeight,
      contentHeight = $contentRight.outerHeight();
    var navTop = $compr.offset().top,
      ds = navTop + $compr.height(),
      isone = true;
    $(window).on('scroll', function (event) {
      win_scrollTop = $(this).scrollTop();
      windowHeight = $(window).height();
      //右边栏固定
      contentHeight = $contentRight.outerHeight();
      if (contentHeight + ot + 100 <= windowHeight + win_scrollTop) {
        $contentRight.addClass('side-l-fixed');
      } else {
        $contentRight.removeClass('side-l-fixed');
      }
      (navTop = $compr.offset().top), (ds = navTop + $compr.height());
      $flowNavCnt.parent().height($compr.outerHeight());
      // 左侧标签悬浮
      if (win_scrollTop >= navTop && ds >= win_scrollTop + $flowNavCnt.height()) {
        $flowNavCnt.removeClass('rec_hot_rel').addClass('flowNavCnt-fixed-top');
      } else if (ds < win_scrollTop + $flowNavCnt.height()) {
        $flowNavCnt.removeClass('flowNavCnt-fixed-top').addClass('rec_hot_rel');
      } else {
        $flowNavCnt.removeClass('rec_hot_rel').removeClass('flowNavCnt-fixed-top');
      }
      if (win_scrollTop >= $video_main.offset().top + $video_main.height()) {
        $('.video-js').addClass('somall');
        $('.video1').addClass('videofix');
        $('#bfq_qt,#adContainer').hide();
        $('#player,.video_main').removeClass('por');
        $('.video_som').show();
        if (isone) {
          _hmt.push(['_trackEvent', 'detail', 'show', 'xplayer']);
          isone = false;
        }
      } else {
        $('.video-js').removeClass('somall');
        $('.video1').removeClass('videofix');
        $('#player,.video_main').addClass('por');
        $('.video_som').hide();
        $('#adContainer').show();
      }
    });
  },
  workOutTime: function (time) {
    var minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = (time % (1000 * 60)) / 1000;
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  }
};
$('body').on('click', 'a', function () {
  var pdata = $(this).attr('pdata');
  var target = $(this).attr('target');
  var href = $(this).attr('href');
  if (!window._time && pdata && target == '_blank' && href.indexOf('/a/') > -1) {
    window.player.pause();
  }
});
var cookie_date = $.cookie('cookie_date') || ''; //cookie 当前日期
var videShowNum = localStorage.getItem('videShowNum') || 0; //前贴片视频广告展现量
var videoLong = Number(mp4long); //视频时长（取自模板）
var todayDate = new Date().getDate();
if (!cookie_date) {
  videShowNum = 0;
  cookie_date = new Date().getDate();
  //$.cookie('cookie_date', cookie_date);
  $.cookie('cookie_date', cookie_date, {
    expires: 1
  });
}
if (todayDate != cookie_date) {
  //隔天清除各个限制
  videShowNum = 0;
  baiduShowNum = 0;
  $.cookie('cookie_date', todayDate, {
    expires: 1
  });
  localStorage.removeItem('bfq_right_bottom');
  localStorage.removeItem('look_more_num');
}

function shuangqttimebq() {
  var staks = false;
  var startDate = new Date('2019/10/21 00:00:00');
  //var endDate = new Date('2019/10/22 23:59:00');
  var nowDate = new Date().getTime();
  var start = startDate.getTime() <= nowDate;
  // var end = nowDate >= endDate.getTime();
  if (videShowNum == 1 && start) {
    staks = true;
  }
  return staks;
}
// 播放器的一些配置 及 前贴 后贴广告
var Predata = [{
    // 前贴片数据
    video: 'http://cdn.e9377f.com/tdyx/41604sp_khlolb/khdt860-478.mp4', //16
    url: 'https://bdtg.9377.com/23108/',
    show: false,
    num: 1,
    company: '9377'
  },
  {
    video: 'http://cdn.e9377f.com/tdyx/41155sp_yjdt/zjdt860-478.mp4', //17
    url: 'http://news.9377ja.com/56477/',
    show: false,
    num: 2,
    company: '9377'
  },
  {
    video: 'http://cdn.e9377f.com/tdyx/41602sp_djyqb/djzq860-478.mp4', //18
    url: 'http://news.9377ja.com/56478/',
    show: false,
    num: 3,
    company: '9377'
  },
  {
    video: 'http://cdn.e9377f.com/tdyx/41608sp_yxqy/zxqz860-478.mp4', //19
    url: 'http://news.9377ja.com/56479/',
    show: false,
    num: 4,
    company: '9377'
  },
  {
    video: 'http://cdn.9377df.com/tdyx/41458cj_btjnbsy/btjn860.mp4', //20
    url: 'https://bdtg.9377.com/56480/',
    show: false,
    num: 5,
    company: '9377'
  },
  {
    video: 'http://cdn.e9377f.com/tdyx/41338sp_fldt/fldt860.mp4', //22
    url: 'https://bdtg.9377.com/168959/',
    show: false,
    num: 6,
    company: '9377'
  }
];

window.videoEndFlag = true; //后贴片请求标志
window.videomc = true;
window.videozt = true; //视频是否暂停
window.isdqy = true; // 用户是否在当前页面
var videoStart = {
  videoFirst: true, //第一次播放标志
  isshuan11: false,
  g_volume: localStorage.getItem('user_volume'), //用户喜好音量
  videoAd: tool.shuffle(Predata), // 随机获取2条前贴片数据
  damu360pugm: 1,
  damutimer: null,
  damutimer1: null,
  cone: true,
  danmuone: true,
  playVideo: function (videoUrl, adTime, adData, adNum) {
    var self = this;
    $('#bfq_qt').hide();
    if (self.videoFirst) {
      //首次播放添加播放器遮罩层 统计未自动播放量
      var play_mask_dom = '<div class="play-mask"><a updata="detail1_video|play|float|1"></a></div>';
      $('#video_main .video1').prepend(play_mask_dom);
      self.videoFirst = false;
    }
    window._time = adTime; //不知道为啥，只有在全局变量下，后面的判断才会生效
    var options = {
      techOrder: ['html5', 'flash'],
      flash: {
        swf: '/assets/vdetail_v32/js/video/js/video-js.swf'
      }
    };
    videojs('example1', options).ready(function () {
      var myPlayer = this;
      window.player = myPlayer;
      $('.load').addClass('hide');
      // console.log(videoUrl)
      myPlayer.src(videoUrl);
      myPlayer.load(videoUrl);
      //设置播放音量
      if (!self.g_volume || self.g_volume == 0 || self.g_volume == 0.1) {
        if (window._time) {
          setTimeout(function () {
            myPlayer.volume(0.1);
          }, 20);
        } else {
          setTimeout(function () {
            myPlayer.volume(0.2);
          }, 20);
        }
      } else {
        myPlayer.volume(self.g_volume);
      }
      //console.log(videoUrl, 111)
      // setTimeout(function () {
      //   player.play();
      // }, 5000)
      //console.log(player)
      // debugger
      player.play();
      myPlayer.on('play', function () {
        //播放
        window.videozt = true;
        clearInterval(self.damutimer);
        self.damutimer = setInterval(window.goLeft, 10);
        $('.play-mask').hide();
        $('.ad').hide();
        $('.vjs-default-skin.vjs-has-started .vjs-control-bar').css('z-index', '-1');
        if (window._time) {
          $('.countdown').show();
          $('.vjs-play-control.vjs-control').hide();
          $('.vjs-default-skin.vjs-has-started .vjs-control-bar').css('z-index', 5);
          $('.vjs-progress-control.vjs-control,.vjs-fullscreen-control.vjs-control,.vjs-time-divider,.vjs-current-time.vjs-time-controls.vjs-control,.vjs-duration.vjs-time-controls.vjs-control').css({
            display: 'none'
          });
          $('.video-mask').show();
          $('.video-mask').attr('href', adData.url);
          $('.video-mask').attr('data-href', videoUrl);
          $('.video-mask').attr('data-company', adData.company);
          $('.video-mask').attr('updata', 'detail1|qtp9377|gg|' + adNum);
          $('.countdown').html('广告 <span id="secend">' + window._time + '</span>  秒');
          if (!self.videoAd[adNum - 1].show) {
            window.qtp_show('301', videoUrl, adData.company);
            _hmt.push(['_trackEvent', 'detail', 'show', 'qiantie9377']);
            self.log('pcunionshow', null, videoUrl);
            self.log('pcunioninview', null, videoUrl);
            self.videoAd[adNum - 1].show = true;
          }
        } else {
          $('.vjs-play-control.vjs-control').show();
          $('.video-mask').hide();
          $('.countdown').hide();
          $('.vjs-progress-control.vjs-control,.vjs-fullscreen-control.vjs-control,.vjs-time-divider,.vjs-current-time.vjs-time-controls.vjs-control,.vjs-duration.vjs-time-controls.vjs-control').css({
            display: 'block'
          });
          $('.video-js').addClass('main-video');
          if (shuangqttimebq() && window.videomc) {
            window.videomc = false;
            shuang11.bffc();
          }
        }
        window.htps = true;
        window.htpp = true;
      });
      myPlayer.on('pause', function () {
        //暂停
        var playTime = myPlayer.currentTime() * 1000;
        window.videozt = false;
        //console.log(window._time, playTime, videoLong)
        clearInterval(self.damutimer);
        //clearInterval(self.damutimer1);
        if (window._time || playTime >= videoLong) {
          //播放结束
          $('.ad').hide();
          return;
        }
        // if (!window._time && !tool.onCtrl) {
        //   $('.ad').show();
        // }
        $('.vjs-default-skin.vjs-has-started .vjs-control-bar').css('z-index', 55);
        // 显示暂停蒙层
        if ($('.play-mask').length <= 0) {
          $('#video_main .video1').prepend('<div class="play-mask"><a updata="detail1_video|play|float|1"></a></div>');
        } else {
          $('.play-mask').show();
        }
      });
      myPlayer.on('volumechange', function () {
        //设置音量
        $('.ad').hide();
        if (!window._time) {
          // $('.vjs-default-skin.vjs-has-started .vjs-control-bar').css('z-index', -1);
        }
        if (myPlayer.volume() != 0.2) {
          self.g_volume = myPlayer.volume();
          localStorage.setItem('user_volume', myPlayer.volume());
        }
      });
      myPlayer.on('timeupdate', function () {
        //播放时骚操作
        var nowTime = Math.floor(myPlayer.currentTime());
        if (window._time) {
          //广告时间
          var lastTime = window._time - nowTime;
          $('.countdown').html('广告 <span id="secend">' + lastTime + '</span>  秒');
          if (lastTime == 0) {
            $('.countdown').hide();
          }
        }
        //最后5S弹出查看更多
        var lookmoretime = Math.floor(mp4long / 1000) - 5;
        if (!window._time && nowTime == lookmoretime) {
          var look_more_num = $.cookie('look_more_num');
          if (!look_more_num) {
            $('.look_more')
              .animate({
                  right: '50px'
                },
                'normal',
                'swing'
              )
              .animate({
                  right: '4px'
                },
                'fast'
              )
              .animate({
                  right: '12px'
                },
                'fast'
              );
            $.cookie('look_more_num', 1);
          }
        }
      });
      myPlayer.on('ended', function () {
        //后贴片什么的
        if (window._time) {
          var _index = window._time / 8;
          setTimeout(function () {
            if (_index == 1) {
              self.playMainVideo();
            } else {
              var videoIndex = _index - 2;
              self.playVideo(self.videoAd[videoIndex].video, (videoIndex + 1) * 8, self.videoAd[videoIndex], self.videoAd[videoIndex].num);
            }
          }, 200);
        } else {
          $('.look_more,.play-mask').hide();
          $('.bfq_right_bottom').hide();
          //毒霸渠道直接下一条
          var countdownUrl = $('.layout_hot li:eq(0) a').attr('href');
          var countdownTxt = $('.layout_hot li:eq(0) h3').text();
          $('.ad').hide();
          $('.vjs-control-bar').hide();
          $('#float_ad').hide();
          if (window.videoEndFlag) {
            window.videoEndFlag = false;
            window.istxt = false;
            //kill.renderEnd();
            kill.htp360();
            $('.spList').show();
            //播放下一条
            var countdownTime = 8;
            // $('.tip-cue .curplay').attr('href', countdownUrl + '?autoplay');
            $('.spList .tip-cue').html('<p class="nextnews hide"><span id="countdown-next">8</span></span>秒后播放下一篇</p><p class="htptxt">' + countdownTxt + '</p><a class="curplay" href="' + countdownUrl + '?nextplay" pdata="detail1|htpnext|0|0">立即播放</a><div class="tips-close"></div>');
            clearInterval(window.countdownTimes);
            window.countdownTimes = setInterval(function () {
              countdownTime--;
              $('#countdown-next').html(countdownTime);
              if (countdownTime < 8) {
                $('.nextnews').removeClass('hide');
              }
              if (countdownTime == 0) {
                clearInterval(window.countdownTimes);
                $('.nextnews').hide();
                if(window.isdqy){
                  window.location.href = countdownUrl + '?autoplay';
                }
              }
            }, 1000);
            $('body').on('click', function () {
              clearInterval(window.countdownTimes);
              $('.nextnews').css('visibility', 'hidden');
            });
            $('.curplay').click(function () {
              $('.nextnews').hide();
              window.location.href = countdownUrl + '?autoplay';
            });
          }
          //重播
          $('#replay').click(function () {
            $('.spList').hide();
            $('html').css('overflow', 'inherit');
            window.player.pause();
            window.player.src(videoUrl);
            window.player.load(videoUrl);
            window.player.play();
            //console.log(555)
            window.videoEndFlag = true;
            window.htps = true;
            window.htpp = true;
          });
        }
      });
    });
  },
  // 播放正文
  playMainVideo: function () {
    var self = this;
    $('#video_main .video-mask').remove();
    var val = $('#mp4Source').val();
    self.playVideo(val);
    $('.play-mask').hide();
    self.loadDanmu();
    self.isProperty();
  },
  videoInfo: function () {
    var self = this;
    self.cpwz();
    var shieldCity = ['北京', '上海'],
      isloadqt = false,
      images = [], // 图片
      qturl = [], // 链接
      qtcode = [], // 百度统计字段
      qtzhike = false, // 百度统计字段
      zhikeVideo = {}, // 百度统计字段
      IS_SHIELD_MASK = false; // 广告--播放器遮罩层--屏蔽地区
    if ($.inArray(tool.THIS_PROVINCE, shieldCity) > -1 || $.inArray(tool.THIS_CITY, shieldCity) > -1) {
      var IS_SHIELD_MASK = true;
    }
    //console.log(zhike)
    if (zhike['shopqt'] && videShowNum == 0) {
      var info = zhike['shopqt'];
      $.each(info, function (i, t) {
        if (t.code.indexOf('qtp') != -1) {
          images.push(t.img);
          qturl.push(t.url);
          qtcode.push(t.code);
          isloadqt = true;
          self.isshuan11 = true;
        }
      });
    }
    if (zhike['zhikeqt'] && !self.isshuan11) {
      var info = zhike['zhikeqt'];
      $.each(info, function (i, t) {
        if (t.code.indexOf('qiantie') != -1) {
          images.push(t.img);
          qturl.push(t.url);
          qtcode.push(t.code);
          qtzhike = true;
        }
      });
    }
    var isondeqt = true,
      index = Math.floor(Math.random() * images.length),
      //index = 0;
      // images = [
      //   '//imgmini.eastday.com/pushimg/20191023/860x478_1571815713261952.png'
      // ],
      wzs = ['A', 'B', 'C', 'D', 'E'],
      shuangdom = '<div class="bfq_qt shuangqt" id="bfq_qt">' + '<a class="bfq_right_bottom_gg" target="_blank" href="' + qturl[index] + '"><img src="' + images[index] + '"/><span class="flag360">广告倒计时<span class="miao" id="miao"></span>秒</span><span class="bfq_close">广告</span>' + '</a></div>';
    if (qtzhike) {
      zhikeVideo.video = images[index];
      zhikeVideo.url = qturl[index];
      zhikeVideo.num = index + 1;
      zhikeVideo.company = qtcode[index];
    }
    if (tool.isqid() == '03627') {
      self.playMainVideo();
      return;
    }
    //console.log(zhikeVideo.num)
    if (videShowNum < 4) {
      if (videoLong <= 60000) {
        //console.log(shuangqttime22())
        if (videShowNum == 0 && isloadqt && tool.isqid() != 'null') {
          $('.countdown').after(shuangdom);
          var second = $('#miao'),
            seconds = 5;
          var timeId = setInterval(function () {
            if (seconds < 1) {
              clearInterval(timeId);
              self.playMainVideo();
            }
            second.html(seconds--);
          }, 1000);
          self.log('pcunionshow', wzs[index], qturl[index]);
          self.log('pcunioninview', wzs[index], qturl[index]);
          _hmt.push(['_trackEvent', 'detail', 'show', qtcode[index]]);
        } else if (qtzhike && tool.isqid() != 'null') {
          //console.log(zhikeVideo.video)
          self.playVideo(zhikeVideo.video, 8, zhikeVideo, zhikeVideo.num);
        } else if (typeof channel_name.qt360xxl != 'undefined' && channel_name.qt360xxl.id && !IS_SHIELD_MASK && tool.isqid() != 'null') {
          var showid = channel_name.qt360xxl.id;
          tool.getAd360(showid, 1, 1, function (dad) {
            if (dad.length != 0) {
              var Predata360 = dad[0],
                seconds = 5;
              var dom = '<div class="bfq_qt360 bfq_qt ' + Predata360.className + '" id="bfq_qt">' + '<a class="bfq_right_bottom_gg" ' + Predata360.linka + ' updata="detail1|qtp360|0|0" data-tongji="' + Predata360.tit + '|||' + Predata360.curl + '|||' + showid + '|||big">' + Predata360.img + '<span class="flag360">广告倒计时<span class="miao" id="miao"></span>秒</span>' + '<span class="bfq_close">广告</span>' + '<p class="qt_txt">' + Predata360.tit + '</p>' + '</a>' + '</div>';
              $('.countdown').after(dom);
              kill.de360show();
              _hmt.push(['_trackEvent', 'detail', 'show', 'qiantie360']);
              var second = $('#miao');
              var timeId = setInterval(function () {
                if (seconds < 1) {
                  clearInterval(timeId);
                  self.playMainVideo();
                }
                second.html(seconds--);
              }, 1000);
            } else {
              self.playMainVideo();
            }
          });
        } else {
          self.playMainVideo();
        }

        //self.playVideo(self.videoAd[0].video, 8, self.videoAd[0], self.videoAd[0].num);
      } else if (60000 < videoLong) {
        if (window.ipshield == 'flow' || window.ipshield == 'union') {
          self.playMainVideo();
          return;
        }
        if (typeof channel_name.qt360xxl != 'undefined' && channel_name.qt360xxl.id && !IS_SHIELD_MASK && tool.isqid() != 'null') {
          var showid = channel_name.qt360xxl.id;
          tool.getAd360(showid, 1, 1, function (dad) {
            if (dad.length != 0) {
              var Predata360 = dad[0],
                seconds = 10;
              if (qtzhike) {
                seconds = 13;
              }
              var dom = '<div class="bfq_qt360 bfq_qt ' + Predata360.className + '" id="bfq_qt">' + '<a class="bfq_right_bottom_gg" ' + Predata360.linka + ' updata="detail1|qtp360|0|0" data-tongji="' + Predata360.tit + '|||' + Predata360.curl + '|||' + showid + '|||big">' + Predata360.img + '<span class="flag360">广告倒计时<span class="miao" id="miao"></span>秒</span>' + '<span class="bfq_close">广告</span>' + '<p class="qt_txt">' + Predata360.tit + '</p>' + '</a>' + '</div>';
              $('.countdown').after(dom);
              kill.de360show();
              _hmt.push(['_trackEvent', 'detail', 'show', 'qiantie360']);
              var second = $('#miao');
              var timeId = setInterval(function () {
                //console.log(shuangqttime())
                if (videShowNum == 1 && isloadqt) {
                  //双11广告
                  if (seconds < 6) {
                    if (isondeqt) {
                      $('#bfq_qt').remove();
                      $('.countdown').after(shuangdom);
                      second = $('#miao');
                      self.log('pcunionshow', wzs[index], qturl[index]);
                      self.log('pcunioninview', wzs[index], qturl[index]);
                      _hmt.push(['_trackEvent', 'detail', 'show', qtcode[index]]);
                      isondeqt = false;
                    }
                    if (seconds < 1) {
                      clearInterval(timeId);
                      self.playMainVideo();
                    }
                  }
                } else if (qtzhike) {
                  //直客广告
                  if (seconds < 9) {
                    clearInterval(timeId);
                    self.playVideo(zhikeVideo.video, 8, zhikeVideo, zhikeVideo.num);
                  }
                } else {
                  if (seconds < 6) {
                    clearInterval(timeId);
                    tool.getAd360(showid, 1, 1, function (dad) {
                      if (dad.length != 0) {
                        if ($('.bfq_qt360').length > 0) {
                          $('.bfq_qt360').remove();
                        }
                        var Predata360 = dad[0];
                        seconds = 5;
                        var dom = '<div class="bfq_qt360 bfq_qt ' + Predata360.className + '" id="bfq_qt">' + '<a class="bfq_right_bottom_gg" ' + Predata360.linka + ' updata="detail1|qtp360|0|0" data-tongji="' + Predata360.tit + '|||' + Predata360.curl + '|||' + showid + '|||big">' + Predata360.img + '<span class="flag360">广告倒计时<span class="miao" id="miao"></span>秒</span>' + '<span class="bfq_close">广告</span>' + '<p class="qt_txt">' + Predata360.tit + '</p>' + '</a>' + '</div>';
                        $('.countdown').after(dom);
                        kill.de360show();
                        _hmt.push(['_trackEvent', 'detail', 'show', 'qiantie360']);
                        var second = $('#miao');
                        var timeId = setInterval(function () {
                          if (seconds < 1) {
                            clearInterval(timeId);
                            self.playMainVideo();
                          }
                          second.html(seconds--);
                        }, 1000);
                      } else {
                        self.playMainVideo();
                      }
                    });
                  }
                }
                second.html(seconds--);
              }, 1000);
            } else if (videShowNum == 1 && isloadqt) {
              //双11广告
              var seconds = 5;
              var timeId = setInterval(function () {
                //console.log(shuangqttime())
                if (videShowNum == 1 && isloadqt) {
                  //双11广告
                  if (isondeqt) {
                    $('#bfq_qt').remove();
                    $('.countdown').after(shuangdom);
                    second = $('#miao');
                    self.log('pcunionshow', wzs[index], qturl[index]);
                    self.log('pcunioninview', wzs[index], qturl[index]);
                    _hmt.push(['_trackEvent', 'detail', 'show', qtcode[index]]);
                    isondeqt = false;
                  }
                  if (seconds < 1) {
                    clearInterval(timeId);
                    self.playMainVideo();
                  }
                }
                second.html(seconds--);
              }, 1000);
            } else if (qtzhike) {
              //直客广告
              self.playVideo(zhikeVideo.video, 8, zhikeVideo, zhikeVideo.num);
            } else {
              //正文视频
              self.playMainVideo();
            }
          });
        } else {
          //console.log(2222)
          if (videShowNum == 0 && isloadqt && tool.isqid() != 'null') {
            $('.countdown').after(shuangdom);
            var second = $('#miao'),
              seconds = 5;
            var timeId = setInterval(function () {
              if (seconds < 1) {
                clearInterval(timeId);
                self.playMainVideo();
              }
              second.html(seconds--);
            }, 1000);
            self.log('pcunionshow', wzs[index], qturl[index]);
            self.log('pcunioninview', wzs[index], qturl[index]);
            _hmt.push(['_trackEvent', 'detail', 'show', qtcode[index]]);
          } else if (qtzhike && tool.isqid() != 'null') {
            self.playVideo(zhikeVideo.video, 8, zhikeVideo, zhikeVideo.num);
          } else {
            self.playMainVideo();
          }
          // self.playVideo(self.videoAd[1].video, 8, self.videoAd[1], self.videoAd[1].num);
        }
      }
      videShowNum++;
    } else {
      if (window.ipshield == 'flow' || window.ipshield == 'union') {
        self.playMainVideo();
        return;
      }
      if (videoLong <= 60000) {
        if (typeof channel_name.qt360xxl != 'undefined' && channel_name.qt360xxl.id && !IS_SHIELD_MASK && tool.isqid() != 'null') {
          var showid = channel_name.qt360xxl.id;
          tool.getAd360(showid, 1, 1, function (dad) {
            if (dad.length != 0) {
              var Predata360 = dad[0],
                seconds = 5;
              var dom = '<div class="bfq_qt360 bfq_qt ' + Predata360.className + '" id="bfq_qt">' + '<a class="bfq_right_bottom_gg" ' + Predata360.linka + ' updata="detail1|qtp360|0|0" data-tongji="' + Predata360.tit + '|||' + Predata360.curl + '|||' + showid + '|||big">' + Predata360.img + '<span class="flag360">广告倒计时<span class="miao" id="miao"></span>秒</span>' + '<span class="bfq_close">广告</span>' + '<p class="qt_txt">' + Predata360.tit + '</p>' + '</a>' + '</div>';
              $('.countdown').after(dom);
              kill.de360show();
              _hmt.push(['_trackEvent', 'detail', 'show', 'qiantie360']);
              var second = $('#miao');
              var timeId = setInterval(function () {
                if (seconds < 1) {
                  clearInterval(timeId);
                  self.playMainVideo();
                }
                second.html(seconds--);
              }, 1000);
            } else {
              self.playMainVideo();
            }
          });
        } else {
          self.playMainVideo();
        }
      } else if (60000 < videoLong) {
        if (typeof channel_name.qt360xxl != 'undefined' && channel_name.qt360xxl.id && !IS_SHIELD_MASK && tool.isqid() != 'null') {
          var showid = channel_name.qt360xxl.id;
          tool.getAd360(showid, 1, 1, function (dad) {
            if (dad.length != 0) {
              var Predata360 = dad[0],
                seconds = 10;
              var dom = '<div class="bfq_qt360 bfq_qt ' + Predata360.className + '" id="bfq_qt">' + '<a class="bfq_right_bottom_gg" ' + Predata360.linka + ' updata="detail1|qtp360|0|0" data-tongji="' + Predata360.tit + '|||' + Predata360.curl + '|||' + showid + '|||big">' + Predata360.img + '<span class="flag360">广告倒计时<span class="miao" id="miao"></span>秒</span>' + '<span class="bfq_close">广告</span>' + '<p class="qt_txt">' + Predata360.tit + '</p>' + '</a>' + '</div>';
              $('.countdown').after(dom);
              kill.de360show();
              _hmt.push(['_trackEvent', 'detail', 'show', 'qiantie360']);
              var second = $('#miao');
              var timeId = setInterval(function () {
                if (seconds < 6) {
                  clearInterval(timeId);
                  tool.getAd360(showid, 1, 1, function (dad) {
                    if (dad.length != 0) {
                      if ($('.bfq_qt360').length > 0) {
                        $('.bfq_qt360').remove();
                      }
                      var Predata360 = dad[0];
                      seconds = 5;
                      var dom = '<div class="bfq_qt360 bfq_qt ' + Predata360.className + '" id="bfq_qt">' + '<a class="bfq_right_bottom_gg" ' + Predata360.linka + ' updata="detail1|qtp360|0|0" data-tongji="' + Predata360.tit + '|||' + Predata360.curl + '|||' + showid + '|||big">' + Predata360.img + '<span class="flag360">广告倒计时<span class="miao" id="miao"></span>秒</span>' + '<span class="bfq_close">广告</span>' + '<p class="qt_txt">' + Predata360.tit + '</p>' + '</a>' + '</div>';
                      $('.countdown').after(dom);
                      kill.de360show();
                      _hmt.push(['_trackEvent', 'detail', 'show', 'qiantie360']);
                      var second = $('#miao');
                      var timeId = setInterval(function () {
                        if (seconds < 1) {
                          clearInterval(timeId);
                          self.playMainVideo();
                        }
                        second.html(seconds--);
                      }, 1000);
                    } else {
                      self.playMainVideo();
                    }
                  });
                }
                second.html(seconds--);
              }, 1000);
            } else {
              self.playMainVideo();
            }
          });
        } else {
          self.playMainVideo();
        }
      }

      // self.playMainVideo();
    }
    localStorage.setItem('videShowNum', videShowNum);
    $(document).on('click', '.shuangqt', function () {
      self.log('pcunionclick', wzs[index], qturl[index]);
      _hmt.push(['_trackEvent', 'detail', 'click', qtcode[index]]);
    });
  },
  // 标题文字
  cpwz: function () {
    var self = this;
    $('.curTitle .scroll').html(redirect_topic);
    self.isdanmuclick();
  },
  // 页面切换浏览器标签视频暂停
  isProperty : function(){
    //console.log(111)
    var hiddenProperty = 'hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;
    var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    $(document).on(visibilityChangeEvent, function () {
      if (!document[hiddenProperty]) {    
          //window.videozt = true;
          window.isdqy=true;
         // window.player.play();
      }else{
          //window.videozt = false;
          window.isdqy=false;
          //window.player.pause();
      }
    })
  },
  isdanmuclick: function () {
    var self = this;
    //console.log(222)
    $(document).on('click', '.play-mask', function () {
        // 点击播放器播放
        $('.play-mask').hide();
        window.videozt = true;
        //console.log(111)
        window.player.play();
      })
      .on('click', '.aut__background', function () {
        var _this = $(this);
        if (self.danmuone && $.cookie('isdanmu')) {
          self.danmuone = false;
          $.removeCookie('isdanmu');
          // console.log(111)
          self.loadDanmu();
        }

      })
  },
  // d弹幕新闻
  loadDanmu: function () {
    var self = this,
      url = '/json/dctop60.json?t=' + new Date().getTime(),
      dom = '',
      dom2 = '';
    if ($.cookie('isdanmu')) {
      $('.aut__background').addClass('gray');
      return
    };
    $('.barrage__news').remove();
    $('.aut__background').removeClass('gray');
    var html = '<div class="barrage__news">' + '  <div class="barrage__news__list">' + '    <div class="part__list front__part__list"></div>' + '    <div class="part__list latter__part__list"></div>' + '  </div>' + '</div>';
    $('#video_main .left-c').append(html);
    $.getJSON(url, function (data) {
      var info = data.data,
        colorArr = ['#80c184', '#90ccff', '#ff9090', '#e7ad90', '#ccc'],
        corlen, num = -1;
      info.length = 30;
      $.each(info, function (i, t) {
        if (t.dfhheadsrc == "") {
          corlen = Math.floor(Math.random() * colorArr.length);
          var ss = '<span class="label" style="background-color:' + colorArr[corlen] + '">' + t.source.slice(0, 1) + '</span>';
        } else {
          var ss = '<img src="' + t.dfhheadsrc + '" alt="" style="width: 34px; min-height: 34px;">';
        }
        if (i == 0 && typeof channel_name.tc360 != 'undefined' && channel_name.tc360.id) {
          num++
          dom += '<div class="barrage__news__item danmu360" index="' + num + '"></div>';
        }
        num++
        dom += '<div class="barrage__news__item danmuup" style="top:' + (num % 2 == 1 ? '60px;' : '0px;') + '">' + '<a href="' + t.url + '" pdata="detail1|danmu|' + i + '|0" target="_blank">' + '  <div class="item__img">' + '    <div class="img__container relative" style="width: 34px; height: 34px;">' + ss + '    </div>' + '  </div>' + '  <div class="item__title">' + '    <span class="txts">' + t.title + '</spanc>' + '  </div>' + '  </a>' + '</div>';
        if (i % 2 == 1 && typeof channel_name.tc360 != 'undefined' && channel_name.tc360.id) {
          num++
          dom += '<div class="barrage__news__item danmu360" style="top:' + (num % 2 == 1 ? '60px;' : '0px;') + '"></div>';
        }
      });
      $('.front__part__list').html(dom);
      // $('.latter__part__list').html(dom2);
      //self.Danmusolll();
      if (typeof channel_name.tc360 != 'undefined' && channel_name.tc360.id) {
        self.danmu360();
      } else {
        self.Danmusolll();
      }

    });
  },
  // d弹幕360广告
  danmu360: function () {
    var self = this,
      dom = '',
      wz = [0, 3, 6, 9, 12];
    if (typeof channel_name.tc360 != 'undefined' && channel_name.tc360.id) {
      var showid = channel_name.tc360.id;
      tool.getAd360(showid, 3, self.damu360pugm, function (dad) {
        //console.log(dad, self.damu360pugm)
        if (dad.length != 0) {
          var num = -1;
          $.each(dad, function (i, t) {
            var pcunionObj = {
              type: 'pcunionshow',
              position: 'addanmu' + self.damu360pugm + '_' + (i + 1),
              id: showid,
              union: '360',
              type: 'one',
              title: encodeURIComponent(t.tit),
              url: encodeURIComponent(t.curl)
            }
            if (t.type == 2) {
              t.img = t.img[0].img;
            }
            dom = '<div class="news__item ' + t.className + '" interfaceAdData=' + JSON.stringify(pcunionObj) + ' data-inview=' + JSON.stringify(t.imptk) + '><a ' + t.linka + ' target="_blank"><div class="item__img"><div class="img__container relative" style="width: 34px; height: 34px;">' + t.img + '</div>' + '  </div><div class="item__title"><span class="txts">' + t.tit + '</span><span class="gg">广告</span></div></a></div>';
            // if (i % 2 == 0) {

            // } else {
            //   //$('.latter__part__list .danmu360').eq(num + wz[self.damu360pugm - 1]).html(dom);
            // }
            num++;
            $('.front__part__list .danmu360').eq(num + wz[self.damu360pugm - 1]).html(dom);
            self.lianMeng('pcunionshow', pcunionObj);
          });

        }
        self.damu360pugm++;
        if (self.damu360pugm === 2) {
          self.Danmusolll();
        }
      });
    }
  },
  Danmusolll: function () {
    var self = this;
    clearInterval(self.damutimer);
    var num = $('#video_main').width(),
      s1 = true,
      s2 = true,
      s3 = true,
      s4 = true,
      $w = $('.front__part__list').width(),
      $w1 = $('.latter__part__list').width();
    var vW = $('.video_main').offset().left + num;
    window.goLeft = function () {
      //750是根据你给的尺寸，可变的
      if (num == -$w) {
        num = 0;
      }
      num -= 1;
      $('.front__part__list').css({
        left: num
      });
      if (s1 && $('.front__part__list .danmuup').eq(4).offset().left <= vW) {
        self.danmu360();
        s1 = false;
        $w = $('.front__part__list').width();
      }
      if (s2 && $('.front__part__list .danmuup').eq(10).offset().left <= vW) {
        self.danmu360();
        s2 = false;
        $w = $('.front__part__list').width();
      }
      if (s3 && $('.front__part__list .danmuup').eq(16).offset().left <= vW) {
        self.danmu360();
        s3 = false;
        $w = $('.front__part__list').width();
      }
      if (s4 && $('.front__part__list .danmuup').eq(22).offset().left <= vW) {
        self.danmu360();
        s4 = false;
        $w = $('.front__part__list').width();
      }
      $('.front__part__list .danmu360').each(function () {
        var $ele = $(this);
        if ($ele.find('div.news__item').length == 0) return;
        var inviewbackurls = JSON.parse($ele.find('div.news__item').attr('data-inview'));
        var loaded = $ele.attr('loaded');
        if (!loaded) {
          if ($ele.offset().left <= vW) {
            if (inviewbackurls != []) {
              $.each(inviewbackurls, function (i, val) {
                new Image().src = val.replace(/http:|https:/g, '') + '&_=' + String(Math.random()).split('.')[1];
              })
              var adDataStr = JSON.parse($ele.find('div.news__item').attr('interfaceAdData'));
              self.lianMeng('pcunioninview', adDataStr);
              $ele.attr('loaded', 1);
            }
          }
        }
      });
    }

    //设置滚动速度
    self.damutimer = setInterval(window.goLeft, 10);
    //self.damutimer1 = setInterval(goLeft1, 10);
    //设置鼠标经过时滚动停止
    $(".front__part__list").hover(function () {
        clearInterval(self.damutimer);
      },
      function () {
        if (window.videozt) {
          self.damutimer = setInterval(window.goLeft, 10);
        }
      })
    $(document).on('click', '.aut__background', function () {
        var _this = $(this);
        //console.log(_this.hasClass('gray'), 6666)
        if (_this.hasClass('gray')) {
          _this.removeClass('gray');
          // console.log(3333)
          $('.barrage__news').show();
          self.damutimer = setInterval(window.goLeft, 10);
          // self.damutimer1 = setInterval(goLeft1, 10);
          $.removeCookie("isdanmu", {
            path: '/',
            domain: 'eastday.com'
          });
        } else {
          //console.log($.cookie('isdanmu'), 44444)
          _this.addClass('gray');
          $('.barrage__news').hide();
          clearInterval(self.damutimer);
          // clearInterval(self.damutimer1);
          $.cookie('isdanmu', 1, 24, '.eastday.com');
        }
      })
      .on('click', '.play-mask', function () {
        // 点击播放器播放
        window.videozt = true;
        //console.log(222)
        $('.play-mask').hide();
        window.player.play();
        clearInterval(self.damutimer);
        //clearInterval(self.damutimer1);
        self.damutimer = setInterval(window.goLeft, 10);
        // self.damutimer1 = setInterval(goLeft1, 10);
      });
    $('.barrage__news').on('click', '.danmu360 .news__item', function () {
      var $ele = $(this);
      var adDataStr = JSON.parse($ele.attr('interfaceAdData'));
      self.lianMeng('pcunionclick', adDataStr);
    })
  },
  log: function (type, wz, hrf) {
    var self = this;
    var url = '//pcunionreportlog.dftoutiao.com/dspdatalog/' + type;
    var parames = ['qid=' + tool.isqid() || '', 'nowurl=' + encodeURIComponent(window.location.href), 'uid=' + global_uid || '', 'softname=' + 'DFTT_VIDEO_PC', 'softtype=' + 'toutiao_video_pc', 'OSType=' + OSType || '', 'browsertype=' + browserType || '', 'pgtype=detail', 'newstype=' + newstype || 'detail', 'gg_position=' + (self.isshuan11 ? 'qtptwo11_' + wz : 'qiantie9377'), 'gg_id=null', 'gg_union=' + (self.isshuan11 ? 'taobao' + wz : 'zhike'), 'gg_type=zkapi', 'gg_title=null', 'gg_url=' + encodeURIComponent(hrf), 'isshopping=' + (self.isshuan11 ? '1' + wz : '0')];
    url = url + '?' + parames.join('&');
    new Image().src = url + '&_=' + new Date().getTime();
  },
  lianMeng: function (types, param) {
    var url = "//pcunionreportlog.dftoutiao.com/dspdatalog/" + types;
    var parames = [
      "qid=" + window.wayPath,
      "nowurl=" + encodeURIComponent(window.location.href),
      "uid=" + window.global_uid,
      "softname=DFTT_VIDEO_PC",
      "softtype=toutiao_video_pc",
      "OSType=" + OSType,
      "browsertype=" + browserType,
      "pgtype=detail",
      "newstype=" + (newstype ? newstype : "jiankang"),
      "gg_position=" + (param.position ? param.position : ""),
      "gg_id=" + (param.id ? param.id : ""),
      "gg_union=" + (param.union ? param.union : "baidu"),
      "gg_type=" + (param.type ? param.type : "uid"),
      "gg_title=" + (param.title ? param.title : "null"),
      "gg_url=" + (param.url ? param.url : "null"),
      "isshopping=null",
      "t=" + new Date().getTime()
    ];
    new Image().src = url + "?" + parames.join("&");
    if (types === "pcunionclick") {
      var $body = $("body");
      if (!$body.attr("tabindex")) {
        $body.attr("tabindex", 1);
      }
      $body.focus();
    }
  }
};

// 页面内容数据
var DetailInfo = {
  init: function () {
    this.qwys();
    this.down();
    this.dfzz();
  },
  down: function () {
    //下一条视频
    var href = $('.layout_hot li.desc')
      .find('a')
      .attr('href'),
      txt = $('.layout_hot li.desc')
      .find('a')
      .attr('title'),
      html = '<p class="icon"></p><p class="ts">滚动鼠标查看下一篇</p><p class="title">' + txt + '</p><div class="content-tombstones"><div class="desc"></div><div class="paragraph"><p></p><p></p><p></p></div><div class="image"></div><div class="paragraph"><p></p><p></p><p></p></div></div>';
    var goTimer = null,
      scrollLoadLock = 0;
    $('.down').html(html);
    var o = $('.content-tombstones');
    if (/Firefox/.test(browserType)) {
      $(window).off('DOMMouseScroll');
    } else {
      var $wheelBox = /IE_8/.test(browserType) ? $(document) : $(window);
      $wheelBox.on('mousewheel', function (e) {
        // e.preventDefault();
        var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var delta = Math.max(-1, Math.min(1, wheel)),
          $godown = $(document).scrollTop() >= $('body').height() - $(window).height();
        if ($godown) {
          if (delta < 0) {
            //向下滚动
            o.css({
              height: 150
            }).show();
            if (scrollLoadLock === 1) {
              _hmt.push(['_trackEvent', 'detail', 'roll', 'nextvideo']);
              openwin(href);
            }
            scrollLoadLock++;
          } else {
            scrollLoadLock = 0;
            clearTimeout(goTimer);
            o.stop().animate({
                height: 0
              },
              function () {
                $(this).hide();
              }
            );
          }
        }
      });
    }

    function openwin(url) {
      $('body').append('<a pdata="detail1|roll|0|0" href=' + url + ' id="camnpr"></a>');
      $('#camnpr')[0].click(); //执行当前对象
    }
  },
  qwys: function () {
    var self = this;
    $.ajax({
      url: '//www.lieqinews.com/ttdlq/lieqittdlq.json',
      type: 'get',
      dataType: 'jsonp',
      jsonp: 'jsonpcallback',
      jsonpCallback: 'jsonpCallback',
      success: function (res) {
        var html = '',
          ids = ['', '', 'you1', 'you2', 'you3', 'you4'];
        html = '<li class="desc"><a class="clearfix" href="' + res[0].url.replace(/http:|https:/g, '') + '" target="_blank" updata="detail1|tbtj|11|0"><div class="msg-l"><img src="' + (window.selectWebpSrc(res[0].img) || res[0].img) + '"alt=""><div class="xxl_mask"></div><div class="bg"></div></div><div class="msg-r"><h3>' + res[0].title + '</h3><p class="source"><span class="label"></span><span class="laiyuan"></span></p></div></a></li>';
        $('.layout_hot').append(html);
        for (var i = 0; i < 6; i++) {
          if (i === 0) {
            $('.layout_hot li.desc')
              .eq(0)
              .after('<li class="tbtj' + (i + 1) + '"></li>');
          } else {
            $('.layout_hot li.desc')
              .eq(i * 2)
              .after('<li class="tbtj' + (i + 1) + '" id="' + (i > 1 ? ids[i] : '') + '"></li>');
          }
        }
      },
      complete: function () {
        kill.Tbtjxindspgg();
        //self.getXiu();
      }
    });
  },
  dfzz: function () {
    var colorArr = ['#80c184', '#90ccff', '#ff9090', '#e7ad90', '#ccc'],
      corlen = Math.floor(Math.random() * colorArr.length),
      html = '';
    if (dfh_author) {
      html += '<span class="label">' + '<img src="' + dfh_author + '">' + '</span>';
    } else {
      html += '<span class="label" style="background-color:' + colorArr[corlen] + '">' + d_source.slice(0, 1) + '</span>';
    }
    html += '<span class="laiyuan">' + d_source + '</span>' + '<a href="/dfh/?dfhid=' + d_dfhid + '&source=' + d_source + '" pdata=detail1|dfhid|0|0 target="_blank" class="kj">Ta的视频</a>';
    $('.dfh_zz').html(html);
    //$('.curTitle').html(redirect_topic)
  }
};

//dtd.resolve();
//所有广告相关在这
var zhikejs = [
  '19岁高中生被父母发现68万巨款，竟是因为加微信玩这个...',
  '高三学生加微信玩这个，三个月后竟被父母发现存款68万！',
  '【绝密】某95后美女家里无聊玩手机，存款惊呆父母！',
  '95后小姐姐误加微信日赚1000元，不经意曝光内幕！',
  '惊呆了，95后小姐姐误加微信日赚1000元！',
  '头条：美女在微信群跟着计划投单，日赚2000元，让人惊叹！',
  '21岁美女大学生投资880元半年赚88万，扬言25岁之前赚够880万',
  '必看！猛料空姐下班后手机赚钱三个月存款竟达百万',
  '跟着导师用微信做这个，闺蜜每天赚2K - 7 K， 月入10W + ！',
  '一位月入五万的95后：这三件事，往往决定一个人所处的层次',
  '劲爆！附近美女在家中玩微信，月入10W+，赚钱方法曝光！',
  '震惊！附近美女不甘心拿死工资微信赚钱，月赚20多万被曝光',
  '颤抖吧！500万一套房全款付，一线城市95后道出了真相…',
  '成绩倒数前三，高二女屌丝名下存款竟达百万，惊呆班主任！',
  '她刚刚上高二名下存款竟达7位数，父母逼问下终说出，原来是玩这个'
];
var kill = {
  rmtjdsplen: 0,
  rmtjzklen: 0,
  rmtjArr: [0, 1, 3, 5], // 热门推荐广告位置
  islen: null, // 360第一次请求返回条数
  isone: true,
  iszk: true,
  tbtjdsplen: 0, // 特别推荐dsp展现条数
  tbtjwz: [1, 2, 3, 4, 5, 6, 7, 8], // 热门推荐广告位置
  init: function () {
    //this.Tbtjgg();
    this.hot();
    this.Toreplay();
    this.videoMove();
    // this.htp360();
    this.htpxw();
    //this.Rmtjgg();
  },
  htpxw: function () {
    var colorArr = ['#80c184', '#90ccff', '#ff9090', '#e7ad90', '#ccc'],
      corlen = Math.floor(Math.random() * colorArr.length),
      html = '',
      ss;
    if (dfh_author) {
      ss = '<img src="' + dfh_author + '">';
    } else {
      ss = '<span class="cimg" style="background-color:' + colorArr[corlen] + '">' + d_source.slice(0, 1) + '</span>';
    }
    html = '<a href="/dfh/?dfhid=' + d_dfhid + '&source=' + d_source + '" pdata="detail1|dfhid|0|0">' + '  <div class="curimg">' + '    <i></i>' + ss + '    <span class="dfhup">up主</span>' + '  </div>' + '  <div class="curimg-right">' + '    <p class="dfhlist-zz">' + d_source + '</p>' + '    <p class="dfhlist-zzss">Ta 的视频</p>' + '  </div>' + '</a>';
    $('.dfhlist-one').html(html);
    // var H = $(window).height(),
    //   ot = $('#video_main').offset().top;
    // $('.spList .tips-middle').css('height', H - ot);
    // $('.spList .tip-right').css('height', H - ot - 50);
  },
  htp360: function () {
    var self = this;
    //console.log(self.tbtjpump)
    $('html').css('overflow', 'hidden');
    $('.main,.yxxf_area').addClass('blur');
    if (window.htps) {
      _hmt.push(['_trackEvent', 'detail', 'show', 'htpv2']);
      window.htps = false;
    }
    if (window.ipshield == 'flow' || window.ipshield == 'union') {
      self.closeTipsEvent();
      return;
    }
    $('.htp360,#htplist1,#htplist2,#htplist3').remove();
    $('.htphf,.htpyou').html('');
    // $.each($('.tip360'), function (i, v) {
    //   $(v).html('')
    //   $(v).attr('hasshow', 0);
    //   $(v).attr('isview', 0);
    // })
    if (channel_name.htp360xxl && channel_name.htp360xxl.id != '') {
      var tbtjShow = channel_name.htp360xxl.id; //ZgQDHr
    } else {
      self.hipdsbaidu(0);
      self.htpbaidu2();
      self.renderEnd();
      self.closeTipsEvent();
      return;
    }
    tool.getAd360(tbtjShow, 3, 1, function (d) {
      var html = '';
      //d.length = 1;
      //console.log(d)
      if (d == '' || d == 'undefined' || d.length == 0) {
        self.hipdsbaidu(0);
        return;
      }
      $.each(d, function (i, data360) {
        switch (
          data360.type // 单图
        ) {
          case 1:
          case 4:
            html = '<div class="htp360 ' + data360.className + '" show="1"><a ' + data360.linka + ' class="one360 tipsb clearfix" data-tongji="' + data360.tit + '|||' + data360.curl + '|||' + tbtjShow + '|||one" target="_blank" data-inview=' + JSON.stringify(data360.imptk) + '>' + '  <div class="msg-l">' + data360.img + '  </div>' + '  <div class="msg-r">' + '    <p class="txt">' + data360.tit + '</p>' + '    <p class="source">广告</p>' + '  </div>' + '</a></div>';
            break;
          case 2: // 四图
            var assets = '';
            $.each(data360.img, function (index, val) {
              assets += '<a class="fl news_360 ' + val.className + '" ' + val.linka + ' data-tongji="' + data360.tit + '|||' + data360.curl + '|||' + tbtjShow + '|||four">' + val.img + '</a>';
            });
            html = '<div class="htp360 fourgg ' + data360.className + ' wz" show="1"><a class="dat-col tipsb news_360" ' + data360.linka + '  data-inview=' + JSON.stringify(data360.imptk) + ' data-tongji="' + data360.tit + '|||' + data360.curl + '|||' + tbtjShow + '|||four">' + '<h4>' + data360.tit + '</h4>' + '<span class="adTag">广告</span></a><div class="img-list clearfix">' + assets + '</div></div>';
            break;
          case 3: // 大图
            html = '<div class="htp360 ' + data360.className + '" show="1"><a class="news_360 tipsb big360" ' + data360.linka + '  data-tongji="' + data360.tit + '|||' + data360.curl + '|||' + tbtjShow + '|||big" data-inview=' + JSON.stringify(data360.imptk) + '>' + '  <h3>' + data360.tit + '</h3>' + '  <div class="img">' + data360.img + '  </div>' + '  <span class="adTag">广告</span>' + '</a></div>';
            break;
        }
        $('.gtplist')
          .eq(i)
          .after(html);

      });
      self.hipdsbaidu(d.length);
      //console.log(self.tbtjpump, 222)
    });
    self.htpbaidu2();
    self.renderEnd();
    self.closeTipsEvent();
  },
  htpbaidu2: function () {
    var self = this;
    if (window.ipshield == 'union' || window.ipshield == "flow") return;
    var ggDom = ['htphf1', 'htphf2', 'htpy1', 'htpy2'],
      ggid = ['htphf1', 'htphf2', 'htpy1', 'htpy2'];
    for (var i = 0; i < ggDom.length; i++) {
      if (ggid[i] == 'htphf1' || ggid[i] == 'htphf2') {
        var posType = 'banner',
          isgoogle = [588, 90];
      } else {
        var posType = 'dw',
          isgoogle = [300, 250];
      }
      if (ggid[i] == 'htphf2') {
        tool.renderDadiAd(channel_name[ggid[i]], ggDom[i], ggDom[i], 'null', posType, isgoogle, 'v');
      } else {
        tool.renderDadiAd(channel_name[ggid[i]], ggDom[i], ggDom[i], 'null', posType, isgoogle);
      }
    }
  },
  hipdsbaidu: function (dlen) {
    var self = this,
      dom = '',
      i = dlen;
    if (dlen === 3) return;
    var ggid = ['htpxxl1', 'htpxxl2', 'htpxxl3'];
    //console.log(i, 33333333)
    for (; i < 3; i++) {
      var p = channel_name[ggid[i]];
      // if (p && p.type == 'bdf') {
      //   dom = '<div id="htplist' + (i + 1) + '"><iframe src="/iframe/chanxx.html?id=' + p.id + '&containerId=htp' + i + '&type=' + p.type + '&tc=' + new Date().getTime() + '" id="htp' + i + '" width="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe><div>';
      // } else {
      //   dom = '<div id="htplist' + (i + 1) + '" ggid="' + ggid[i] + '"></div>';
      // }
      dom = '<div id="htplist' + (i + 1) + '" class="htpbd" ggid="' + ggid[i] + '"></div>';
      $('.gtplist')
        .eq(i)
        .after(dom);
      if (p && $('#htplist' + (i + 1)).length >= 1) {
        //tool.loaduid(p.id, 'htplist' + (i + 1));       
        tool.renderDadiAd(p, 'htplist' + (i + 1), 'htplist' + (i + 1), 'null', 'row', [588, 90], 'v');
        //tool.renderDadiAd(p, 'htplist' + (i + 1), 'htplist' + (i + 1), 'null', 'row')
      }
    }
  },
  renderEnd: function () {
    var self = this;
    for (var i = 0; i < 50; i++) {
      setTimeout(function () {
        self.listAdView();
      }, i * 100);
    }
    $('.tip-scroll').on('scroll', function () {
      self.listAdView();
    });
  },
  listAdView: function () {
    var _this = this,
      tipLeft = $('.tip-scroll')[0];
    // 百度广告
    var isiframeid = function (obj, types, ids) {
      if (ids.length == 0) return false;
      if (ids.length > 1) {
        ids = ids.eq(1);
      }
      var src = String(ids.attr('src'));
      var iframeId = String(ids.attr('id'));
      if (types == 'bdf') {
        obj.id = _this.getQueryString('di', src);
      } else if (types == 'UID' || types == 'baidu') {
        if (iframeId == 'BAIDU_DUP_fp_iframe') {
          return false;
        }
        obj.id = _this.getiframeid(iframeId) || 'u' + _this.getQueryString('rdid', src);
      }
    };
    $.each($('.tip-left iframe'), function (i, v) {
      var $ifr = $(v),
        ggid = $ifr.parents('div.htpbd').attr('ggid') || $ifr.parents('div.htphf').attr('ggid');
      var paramsa = {
        id: '',
        wz: $ifr.parents('div.htpbd').attr('id') || $ifr.parents('div.htphf').attr('id'),
        chinaname: 'baidu',
        type: 'UID'
      };
      if (paramsa.wz == 'htphf1') return;
      paramsa.type = channel_name[ggid].type;
      if ($ifr.attr('src').indexOf('/chanxx') > -1 || $ifr.attr('src').indexOf('/gg_common') > -1) {
        var iniframe = $ifr.contents().find('iframe');
        isiframeid(paramsa, paramsa.type, iniframe);
      } else {
        var iniframe = String($ifr.attr('id'));
        var src = $ifr.attr('src');
        paramsa.id = _this.getiframeid(iniframe) || 'u' + _this.getQueryString('rdid', src);
      }
      if (paramsa.type == 'plugadv') {
        paramsa.planid = $ifr.parents('div.htpbd').attr('planid') || $ifr.parents('div.htphf').attr('planid');
        if (!paramsa.planid) {
          return
        }
      }
      if (!$ifr.attr('isviews') && $ifr.height() > 0 && v.getBoundingClientRect().top <= tipLeft.getBoundingClientRect().bottom) {
        $ifr.attr('isviews', 1);
        paramsa.planid = $ifr.parents('div.htpbd').attr('planid') || $ifr.parents('div.htphf').attr('planid');
        //console.log(paramsa.wz, paramsa.planid)
        _this.pcunionLogUrl(paramsa, 'view');
      }
    });
    // 360广告
    $.each($('.htp360'), function (i, v) {
      var $ele = $(v);
      if ($ele.find('.tipsb').length == 0 || $ele.find('iframe').length > 0) return;
      var inviewbackurls = JSON.parse($ele.find('a.tipsb').attr('data-inview')),
        adDataStr = $ele
        .find('a.tipsb')
        .attr('data-tongji')
        .split('|||');
      var param = {
        id: adDataStr[2],
        wz: 'htplist' + (~~$ele.index('.htp360') + 1),
        chinaname: '360',
        type: adDataStr[3],
        gg_title: encodeURIComponent(adDataStr[0]),
        gg_url: encodeURIComponent(adDataStr[1])
      };
      if (!$ele.attr('hasshow') && $ele.height() > 0) {
        //console.log(1)
        $ele.attr('hasshow', 1);
        _this.pcunionLogUrl(param, 'show');
      }
      if (!$ele.attr('isview') && v.getBoundingClientRect().top <= tipLeft.getBoundingClientRect().bottom) {
        $ele.attr('isview', 1);
        // console.log(11, inviewbackurls)
        $.each(inviewbackurls, function (index, val) {
          new Image().src = val.replace(/http:|https:/g, '');
        });
        //self.report(param, 'inview');
        _this.pcunionLogUrl(param, 'view');
      }
    });
  },
  closeTipsEvent: function () {
    var _this = this;
    $('.spList')
      .on('click', '.tips-close, .tips-map', function (e) {
        e.preventDefault();
        clearInterval(window.countdownTimes);
        var tipsPop = $('.spList');
        $('.tip-right').off('scroll');
        tipsPop.off('click');
        tipsPop.hide();
        if (window.htpp) {
          _hmt.push(['_trackEvent', 'detail', 'close', 'htpv2']);
          window.htpp = false;
          window.videoEndFlag = true;
        }
        if (!$('.video_som').is(':visible')) {
          var top = $('.hot_rec_item').offset().top;
          $('html,body')
            .stop()
            .animate({
                'scroll-top': top
              },
              'fast'
            );
        }
        $('html').css('overflow', 'inherit');
        $('.main,.yxxf_area').removeClass('blur');
      })
      .on('click', '.htp360', function () {
        var $this = $(this);
        if ($this.find('a').length == 0 || $this.find('iframe').length > 0) return;
        var adDataStr = $this
          .find('a.tipsb')
          .attr('data-tongji')
          .split('|||');
        var param = {
          id: adDataStr[2],
          wz: 'htplist' + (~~$this.index('.htp360') + 1),
          chinaname: '360',
          type: adDataStr[3],
          gg_title: encodeURIComponent(adDataStr[0]),
          gg_url: encodeURIComponent(adDataStr[1])
        };
        _this.pcunionLogUrl(param, 'click');
      });
  },
  // 请求特别推荐dsp
  Tbtjxindspgg: function () {
    var self = this,
      dom = '',
      wz = ['ny_tbtj_v1', 'ny_tbtj_v2', 'xny_y1', 'xny_y2', 'xny_ylph'];
    var con = {
      firstNum: 1,
      nextNum: 1,
      key: 'nybody',
      //adnum: adnum,
      dom: ['ny_tbtj1', 'ny_tbtj2', 'ny_tbtj3', 'ny_tbtj4', 'ny_tbtj5', 'ny_yxxf'],
      forbid: [],
      mincount: 0 //最小缓存条数
    };
    tool.xingetDsp(con, function (res, o) {
      // 特别推荐  特别推荐/东方号2个位置 dsp 360 百度
      //console.log(res, o);
      if (res['ny_yxxf'] && res['ny_yxxf'].data && !res['ny_yxxf'].isshield) {
        dspData['xny_yxxf'].data = res['ny_yxxf'].data;
        var item = dspData['xny_yxxf'].data;
        o.viewlog(item);
        o.showlog(item);
      }
      self.Rmtjgg();
      $.each(res, function (i, info) {
        //console.log(i)
        if (info.data && !info.isshield && info.adidx != 6) {
          var t = info.data;
          var src = t.bigpic == 1 ? t.lbimg[0] : t.minimg[0];
          if (t.bigpic == 1) {
            if (src.imgwidth / src.imgheight != 2) {
              if (t.topic) {
                var ss = '<span class="til">' + t.topic + '</span>' + '<span class="pop"></span>';
              } else {
                var ss = '';
              }
              dom = '<div class="xin_dsp dsp_singerpic chucuang360">' + '<a href="' + t.url + '" class="dsp_hrf" target="_blank" title="' + t.topic + '">' + '<img src="' + src.src.replace(/^(http:)|(https:)/, '') + '" width="300" height="250" border="0">' + ss + '</a>' + '<div class="dsp_aveicon">' + '<span class="dsp_source" target="_blank">广告</span>' + '</div></div>';
            } else {
              dom = '<a href="' + t.url + '" target="_blank" class="xin_dsp clearfix">' + '<img src="' + src.src.replace(/http:|https:/g, '') + '"/>' + '<p class="txt">' + t.topic + '</p>' + '<span class="gg">广告</span></a>';
            }
          }
          dspData[wz[~~info.adidx - 1]].load = false;
          dspData[wz[~~info.adidx - 1]].data = t;
          $('.tbtj' + (~~info.adidx))
            .html(dom)
            .attr('istype', wz[~~info.adidx - 1]);
          self.tbtjdsplen++;
          //console.log(info.adidx)
          o.showlog(t);
          self.tbtjwz = self.tbtjwz.filter(function (s) {
            return s !== ~~info.adidx;
          });
        }
      });
      self.youxxf();
      var SCROLL_TOP = $(window).scrollTop(); //屏幕滚动高
      var CLIENT_HEIGHT = $(window).height(); //屏幕高度
      if (dspData.ny_tbtj_v1.data) {
        NewDspPlugin.viewlog(dspData.ny_tbtj_v1.data);
      }
      if (dspData.ny_tbtj_v2.data) {
        NewDspPlugin.viewlog(dspData.ny_tbtj_v2.data);
      }
      if (SCROLL_TOP + CLIENT_HEIGHT >= $('#you1').offset().top && !$('#you1').attr('isxview')) {
        $('#you1').attr('isxview', '1');
        dspData.xny_y1.data && NewDspPlugin.viewlog(dspData.xny_y1.data);
      }
      $(window).on('scroll', function () {
        SCROLL_TOP = $(window).scrollTop(); //屏幕滚动高
        CLIENT_HEIGHT = $(window).height(); //屏幕高度
        if (SCROLL_TOP + CLIENT_HEIGHT >= $('#you1').offset().top && !$('#you1').attr('isxview')) {
          $('#you1').attr('isxview', '1');
          dspData.xny_y1.data && NewDspPlugin.viewlog(dspData.xny_y1.data);
        }
        if (SCROLL_TOP + CLIENT_HEIGHT >= $('#you2').offset().top && !$('#you2').attr('isxview')) {
          $('#you2').attr('isxview', '1');
          dspData.xny_y2.data && NewDspPlugin.viewlog(dspData.xny_y2.data);
        }
        if (SCROLL_TOP + CLIENT_HEIGHT >= $('#you3').offset().top && !$('#you3').attr('isxview')) {
          $('#you3').attr('isxview', '1');
          dspData.xny_ylph.data && NewDspPlugin.viewlog(dspData.xny_ylph.data);
        }
      });
      $(document)
        .on('click', '.tbtj1 a,.tbtj2 a,#you1 a,#you2 a,#you3 a', function () {
          var istype = $(this).parents('li').attr('istype');
          istype && NewDspPlugin.clicklog(dspData[istype].data);
        })
        .on('click', '#yxxf_area a.xin_dsp', function () {
          NewDspPlugin.clicklog(dspData.xny_yxxf.data);
        });
      var pos_name = $.cookie('minieastday_pro_cityname');
      var time = new Date().getHours();
      //self.getXiu();
      if (!/北京|上海|天津|杭州/.test(pos_name) && !/dnmnsp|03747|01413/.test(String(tool.isqid())) && (time >= 8 || time < 4)) {
        self.getXiu();
      } else {
        self.Tbtjgg();
      }
      //callback && callback(res, o);
    });
  },
  // 请求秀场公共方法
  getXiu: function () {
    var self = this;
    if (document.location.host == 'video.eastday.com') {
      // 线上环境
      var homepage_url = '//jax-api.uugtv.com/x/app/videoSpread'; //广告素材 正式
    } else {
      // 测试环境
      var homepage_url = '//jax-api.test2.tuji.com/x/app/videoSpread'; //广告素材 测试
    }

    if (window.ipshield == 'flow' || (dspData.ny_tbtj_v2.data && dspData.xny_y2.data)) {
      kill.Tbtjgg();
      return;
    }

    $.ajax({
      type: 'GET',
      url: homepage_url,
      dataType: 'jsonp',
      jsonp: 'callback',
      timeout: 3000,
      success: function (data) {
        //console.log(JSON.parse(data))
        var info = JSON.parse(data),
          html = '',
          //wz = ['ny_tbtj_v2', 'xny_y2'],
          wz = ['xny_y2'],
          num = [4];
        isdsp = true;
        $.each(info, function (i, t) {
          if (dspData[wz[i]] && !dspData[wz[i]].load) {
            wz.splice($.inArray(dspData[wz[i]].wz, wz), 1);
            //delete self.ndsp[wz[i]];
          }
          if (t.text == '') {
            html = '<div class="ysxiuc dspAllScreen bigdsp"><a class="block por" target="_blank" href="' + t.link + '"><img src="' + t.pic.replace(/http:|https:/g, '') + '" style="width:300px;height:250px;"></img><span class="rbggwz">广告</span></a></div>';
          } else {
            html = '<div class="ysxiuc dspAllScreen"><a target="_blank" href="' + t.link + '"><div class="item_l fl por"><img src="' + t.pic.replace(/http:|https:/g, '') + '" alt=""><p class="tbtj-time">02:18</p></div><div class="item_r por"><p class="fs_14 ovh">' + t.text + '</p><p class="source"><span class="laiyuan">广告</span></p></div></a></div>';
          }
          //console.log(dspData[wz[i]],dspData[wz[i]].load, dspData[wz[i]].xiu)
          if (dspData[wz[i]] && dspData[wz[i]].load && dspData[wz[i]].xiu) {
            // dspData[wz[i]].xiu = false;
            self.tbtjdsplen++;
            self.tbtjwz = self.tbtjwz.filter(function (s) {
              return s !== num[i];
            });
            var dom = $('.' + dspData[wz[i]].elem);
            dom.html(html);
            // SHOW上报
            var param = {
              id: 'null',
              wz: dspData[wz[i]].elem,
              chinaname: 'show',
              type: 'null',
              title: 'null',
              url: encodeURIComponent(t.link)
            };
            self.xiureport(param, 'show');
          }
        });
      },
      complete: function () {
        // console.log(self.ndsp.you3.load,'you3')
        // console.log(self.ndsp.yxxf.load,'yxxf')
        kill.Tbtjgg();
        self.xiuAdView();
        $(window).on('scroll', function () {
          self.xiuAdView();
        });
        self.xiuEvent();
      }
    });
  },
  xiuAdView: function () {
    var self = this,
      $window = $(window);
    // 秀场广告
    $.each($('.ysxiuc'), function (i, v) {
      var $ele = $(v);
      if (!$ele.attr('isview') && $ele.offset().top - $window.scrollTop() <= $window.outerHeight(true)) {
        $ele.attr('isview', 1);
        var wz = $ele.parent('li').attr('class'),
          url = $ele.find('a').attr('href');
        var param = {
          id: 'null',
          wz: wz,
          chinaname: 'show',
          type: 'null',
          title: 'null',
          url: encodeURIComponent(url)
        };
        self.xiureport(param, 'inview');
      }
    });
  },
  xiuEvent: function () {
    var self = this;
    $(document).on('click', '.ysxiuc', function () {
      var wz = $(this)
        .parent('li')
        .attr('class'),
        url = $(this)
        .find('a')
        .attr('href');
      var param = {
        id: 'null',
        wz: wz,
        chinaname: 'show',
        type: 'null',
        title: 'null',
        url: encodeURIComponent(url) 
      };
      self.xiureport(param, 'click');
    });
  },
  xiureport: function (item, t) {
    var self = this;
    var url = '//pcunionreportlog.dftoutiao.com/dspdatalog/pcunion' + t + '?',
      gg_id = item.id,
      gg_title = item.title ? item.title : 'null',
      gg_url = item.url ? item.url : 'null',
      idx = item.idx ? item.idx : 0,
      isshopping = item.isshopping ? item.isshopping : 'null';
    if (gg_id.indexOf('?') > -1) {
      gg_id = gg_id.split('?')[1].replace('=', '');
    }
    var param = ['qid=' + tool.isqid(), 'nowurl=' + encodeURIComponent(window.location.href), 'uid=' + global_uid, 'softname=DFTT_VIDEO_PC', 'softtype=toutiao_video_pc', 'OSType=' + OSType, 'browsertype=' + browserType, 'gg_position=' + item.wz, 'gg_id=' + gg_id, 'gg_union=' + item.chinaname, 'gg_type=' + item.type, 'gg_title=' + gg_title, 'gg_url=' + gg_url, 'pgtype=detail', 'newstype=detail', 'idx=' + idx, 'isshopping=' + isshopping, '_=' + +new Date()];
    new Image().src = url + param.join('&');
    if (t === 'click') {
      var $body = $('body');
      if (!$body.attr('tabindex')) {
        $body.attr('tabindex', 1);
      }
      $body.focus();
    }
  },
  Tbtjgg: function (res, o) {
    // 特别推荐  特别推荐/东方号2个位置 dsp 360 百度
    var self = this;
    if (window.ipshield == 'union' || window.ipshield == "flow") {
      return;
    }
    if (channel_name.tbtj360xxl && channel_name.tbtj360xxl.id) {
      var tbtjShow = channel_name.tbtj360xxl.id; //ZgQDHr
    } else {
      self.Tbtjbadu(0);
      return;
    }
    self.TbtjRequ360(tbtjShow, 6 - self.tbtjdsplen);
  },
  xinrightDsp: function (val) {
    //右侧DSPDOM
    var dom = '',
      src = val.lbimg.length != 0 ? val.lbimg[0] : val.minimg[0];
    //console.log(val);
    dom += '<a href="' + val.url + '" target="_blank" class="xin_dsp clearfix">' + '<img src="' + src.src.replace(/http:|https:/g, '') + '"/>' + '<p class="txt">' + val.topic + '</p>' + '<span class="gg">广告</span></a>';
    return dom;
  },
  TbtjRequ360: function (tbtjShow, gglen) {
    var self = this;
    //console.log(self.tbtjpump)
    tool.getAd360(tbtjShow, gglen, 1, function (d) {
      // console.log(d)
      if (d == '' || d == 'undefined' || d.length == 0) {
        self.Tbtjbadu(0);
        return;
      }
      self.Tbtj360Dom(d, tbtjShow);
      self.Tbtjbadu(d.length);
      //console.log(self.tbtjpump, 222)
    });
  },
  Tbtj360Dom: function (d, tbtjShow) {
    // 特别推荐位置 360DOM
    var self = this,
      dom = '';
    var colorArr = ['#80c184', '#90ccff', '#ff9090', '#e7ad90', '#ccc'],
      corlen;
    $.each(d, function (i, item) {
      var randomTime = Math.floor((Math.random() * 5 + 1) * 60),
        min = ('0' + Math.floor(randomTime / randomTime)).substr(-2),
        s = ('0' + (randomTime % 60)).substr(-2),
        time = min + ':' + s;
      corlen = Math.floor(Math.random() * colorArr.length);
      if (item.type == 1 || item.type == 4) {
        dom = '<div class="boxborder tbtj360gg small360 ' + item.className + '"><a class="block por" ' + item.linka + ' updata="detail1|tbtj|360gg|' + self.tbtjwz[i] + '_s" data-tongji="' + item.tit + '|||' + item.curl + '|||' + tbtjShow + '|||one"><div class="item_l fl por">' + item.img + '<p class="tbtj-time">' + time + '</p></div><div class="item_r por"><p class="fs_14 ovh" title="' + item.tit + '">' + item.tit + '</p><p class="source"><span class="label" style="background-color:' + colorArr[corlen] + '">' + item.source.slice(0, 1) + '</span><span class="laiyuan">' + item.source + '· 广告</span></p></div></a></div>';
      } else {
        dom = '<div class="boxborder tbtj360gg big360 ' + item.className + '"><a class="block por" ' + item.linka + ' title="' + item.tit + '" updata="detail1|tbtj|360gg|' + self.tbtjwz[i] + '_b" data-tongji="' + item.tit + '|||' + item.curl + '|||' + tbtjShow + '|||big"><div>' + item.tit + '</div>' + item.img + '<p class="tbtj-time tbtj-time-big">' + time + '</p><span>广告</span></a></div>';
      }
      $('.layout_hot li.tbtj' + self.tbtjwz[i]).html(dom);
    });
  },
  Tbtjbadu: function (dlen) {
    var self = this,
      dom = '',
      i = dlen;
    var ggid = ['bfqtbtjxxl1', 'bfqtbtjxxl2', 'you1', 'you2', 'you3', 'you4'];
    for (; i < 6 - self.tbtjdsplen; i++) {
      var p = channel_name[ggid[self.tbtjwz[i] - 1]];
      dom = '<div class="boxborder im_baidu_ad" id="tbtj' + self.tbtjwz[i] + '"></div>';
      //console.log(ggid[self.tbtjwz[i] - 1], self.tbtjwz[i])
      $('.layout_hot li.tbtj' + self.tbtjwz[i])
        .html(dom)
        .attr('ggid', ggid[self.tbtjwz[i] - 1]);
      if (p.id && $('#tbtj' + self.tbtjwz[i]).length > 0) {
        var isdsp = (self.tbtjwz[i] == 6 ? 'null' : 'nybody');
        tool.renderDadiAd(p, 'tbtj' + self.tbtjwz[i], 'tbtj' + self.tbtjwz[i], isdsp, 'dw');
      }
    }
  },
  Rmtjgg: function () {
    // 热门推荐位置 DSP 360 百度
    var self = this;
    var con = {
      firstNum: 1,
      nextNum: 1,
      key: 'nylist',
      //adnum: 1,
      dom: ['ny_list1_v1'],
      forbid: [],
      mincount: 0 //最小缓存条数
    };
    tool.xingetDsp(con, function (res, o) {
      //console.log(res, o, 'nylist');
      var info = res['ny_list1_v1'] && res['ny_list1_v1'].data;
      if (info && !res['ny_list1_v1'].isshield) {
        self.rmtjxdsp(info);
        o.showlog(info);
        self.rmtjdsplen++;
        self.rmtjArr = self.rmtjArr.filter(function (s) {
          return s !== 0;
        });
      }
      var SCROLL_TOP = $(window).scrollTop(); //屏幕滚动高
      var CLIENT_HEIGHT = $(window).height(); //屏幕高度
      if (SCROLL_TOP + CLIENT_HEIGHT >= $('.hot_rec_item').offset().top && !$('.hot_rec_item').attr('isxview')) {
        $('.hot_rec_item').attr('isxview', '1');
        o && o.viewlog(info);
      }
      $(window).on('scroll', function () {
        SCROLL_TOP = $(window).scrollTop(); //屏幕滚动高
        CLIENT_HEIGHT = $(window).height(); //屏幕高度
        if (SCROLL_TOP + CLIENT_HEIGHT >= $('.hot_rec_item').offset().top && !$('.hot_rec_item').attr('isxview')) {
          $('.hot_rec_item').attr('isxview', '1');
          o && o.viewlog(info);
        }
      });
      $(document).on('click', '.rmtjxin_dsp,.maindsp', function () {
        var istype = $(this).attr('istype');
        istype && o.clicklog(info);
      });
      if (window.ipshield == 'flow' || window.ipshield == 'union') return;
      if (channel_name.rmtj360xxl && channel_name.rmtj360xxl.id) {
        var hotShow = channel_name.rmtj360xxl.id;
      } else {
        self.biaduList(0);
        return;
      }
      self.Rmtj360reques(4 - self.rmtjdsplen - self.rmtjzklen, hotShow);
    });
  },
  rmtjxdsp: function (val) {
    //console.log(val)
    var dom = '',
      src = val.lbimg.length != 0 ? val.lbimg[0] : val.miniimg[0];
    if (val.bigpic == 1) {
      if (src.imgwidth / src.imgheight > 2) {
        dom = '<li class="xin_dsp maindsp clear-fix" istype="1">' + '<a class="news_xin_dsp max_news" href="' + val.url + '" target="_blank">' + '<h5>' + val.topic + '</h5>' + '<span class="news_img"><img class="animation" src="' + src.src.replace(/http:|https:/g, '') + '"/></span>' + '<p class="news_gg"><span>' + val.source + ' &sdot; </span>广告</p>' + '</a>' + '</li>';
      } else {
        dom += '<li class="rmtjxin_dsp wz clearfix" istype="1">' + '<div class="msg-l">' + '<a href="' + val.url + '" target="_blank">' + '  <img src="' + src.src.replace(/http:|https:/g, '') + '" alt=""></a>' + '</div>' + '<div class="msg-r">' + '  <a href="' + val.url + '" target="_blank">' + '  <span class="desc-title">' + val.topic + '</span><span class="xia-txt">' + val.summary + '</span>' + '  <span class="source">广告</span>' + '  </a>' + '</div>' + '</li>';
      }
    } else if (val.bigpic == 0) {
      if (val.miniimg.length == 4) {
        var imgstr = '';
        $(val.miniimg).each(function (k, img) {
          imgstr += '<span class="fl' + (k === 3 ? ' last' : '') + '"><img class="animation " src="' + img.src.replace(/http:|https:/g, '') + '" alt=""></span>';
        });
        dom = '<li class="rmtjxin_dsp img_click_dsp" istype="1"><a class="img_click_dsp" href="' + val.url + '" target="_blank">' +
          '<h3>' + val.topic + '</h3>' +
          '<p class="img-list clearfix">' + imgstr + '</p>' +
          '<p class="from">广告</p>' +
          '</a></li>';
      } else if (val.miniimg.length == 3) {
        var imgstr = '';
        $(val.miniimg).each(function (k, img) {
          imgstr += '<span class="fl"><img class="animation " src="' + img.src.replace(/http:|https:/g, '') + '" alt=""></span>';
        });
        imgstr += '<span class="fl last">查看更多</span>';
        dom = '<li class="rmtjxin_dsp img_click_dsp" istype="1"><a class="img_click_dsp" href="' + val.url + '" target="_blank">' +
          '<h3>' + val.topic + '</h3>' +
          '<p class="img-list clearfix">' + imgstr + '</p>' +
          '<p class="from">广告</p>' +
          '</a></li>';
      } else {
        dom = '<li class="rmtjxin_dsp dspdt" istype="1"><a href="' + val.url + '" class="img_click_dsp" target="_blank">' +
          '<div class="dsp_small">' +
          '   <img class="animation" src="' + val.miniimg[0].src.replace(/http:|https:/g, '') + '">' +
          '</div>' +
          '    <div class="info">' +
          '        <h3>' + val.topic + '</h3>' +
          '        <p class="from">广告</p>' +
          '    </div>' +
          '    </a></li>';
      }
    }

    $('.hot_rec_item li.boxborder')
      .eq(0)
      .before(dom);
  },
  Rmtj360reques: function (lens, hotShow) {
    // 请求数据条数  广告放置位置
    var self = this;
    tool.getAd360(hotShow, lens, 1, function (d) {
      if (d == '' || d == 'undefined' || d.length == 0) {
        self.biaduList(0);
        return;
      }
      self.Rmtj360Dom(d, hotShow);
      self.biaduList(d.length);
    });
  },
  Rmtj360Dom: function (d, hotShow) {
    // 数据  屏数  上次数据是长度
    var self = this,
      dom = '',
      noMask = '',
      sheild = '';
    var colorArr = ['#80c184', '#90ccff', '#ff9090', '#e7ad90', '#ccc'],
      corlen;
    if (tool.IS_SHIELD_MASK) {
      noMask = 'noMask';
      sheild = 'sheild360';
    }
    $.each(d, function (i, data360) {
      corlen = Math.floor(Math.random() * colorArr.length);
      switch (data360.type) {
        case 1:
        case 4:
          dom = '<li class="' + sheild + ' hotrecommend-ad1 ' + data360.className + ' wz"><a class="news_360 clearfix" ' + data360.linka + ' updata="detail1|xxl1|360gg|' + self.rmtjArr[i] + '" data-tongji="' + data360.tit + '|||' + data360.curl + '|||' + hotShow + '|||one|||' + ~~(i + 1 + self.rmtjdsplen) + '">' + '<div class="msg-l">' + data360.img + '</div>' + '<div class="msg-r">' + '<h3>' + data360.tit + '</h3>' + '<p class="source"><span class="label" style="background-color:' + colorArr[corlen] + '">' + data360.source.slice(0, 1) + '</span><span class="laiyuan">' + data360.source + '· 广告</span></p>' + '</div></a></li>';
          break;
        case 2:
          var assets = '';
          $.each(data360.img, function (index, val) {
            var ml = '';
            if (index != 0) {
              ml = 'margin-left: 7px;';
            }
            assets += '<a style="' + ml + '" class="news_360 ' + sheild + ' ' + val.className + '" ' + val.linka + ' updata="detail1|xxl1|360gg|' + self.rmtjArr[i] + '" data-tongji="' + data360.tit + '|||' + data360.curl + '|||' + hotShow + '|||four|||' + ~~(i + 1 + self.rmtjdsplen) + '">' + val.img + '<div class="hotrecommend-ad2-mask ' + noMask + '"></div>' + '</a>';
          });
          dom = '<li class="hotrecommend-ad2 ' + data360.className + ' wz"><a class="news_360 stutxt" ' + data360.linka + ' updata="detail|xxl1|360gg|' + self.rmtjArr[i] + '" data-tongji="' + data360.tit + '|||' + data360.curl + '|||' + hotShow + '|||four|||' + ~~(i + 1 + self.rmtjdsplen) + '">' + '<p class="hotrecommend-ad2-title">' + data360.tit + '</p>' + '</a>' + '<div class="hotrecommend-ad2-imgs clearfix">' + assets + '</div>' + '<a ' + data360.linka + ' updata="detail1|xxl1|360gg|' + self.rmtjArr[i] + '" class="source news_360" data-tongji="' + data360.tit + '|||' + data360.curl + '|||' + hotShow + '|||four|||' + ~~(i + 1 + self.rmtjdsplen) + '"><span class="label" style="background-color:' + colorArr[corlen] + '">' + data360.source.slice(0, 1) + '</span><span class="laiyuan">' + data360.source + ' · 广告</span></a></li>';
          break;
        case 3:
          dom = '<li class="' + data360.className + ' hotrecommend-ad3 ' + sheild + ' wz">' + '<a class="news_360"' + data360.linka + ' updata="detail1|xxl1|360gg|' + self.rmtjArr[i] + '" data-tongji="' + data360.tit + '|||' + data360.curl + '|||' + hotShow + '|||big|||' + ~~(i + 1 + self.rmtjdsplen) + '"><p class="hotrecommend-ad3-title">' + data360.tit + '</p><div class="hotrecommend-ad3-img">' + data360.img + '</div><p class="source"><span class="label" style="background-color:' + colorArr[corlen] + '">' + data360.source.slice(0, 1) + '</span><span class="laiyuan">' + data360.source + ' · 广告</span></p></a></li>';
          break;
      }
      if (self.rmtjdsplen == 0 && i === 0) {
        $('.hot_rec_item li.boxborder')
          .eq(0)
          .before(dom);
      } else {
        $('.hot_rec_item li.boxborder')
          .eq(self.rmtjArr[i])
          .after(dom);
      }
    });
  },
  biaduList: function (d) {
    var self = this,
      i = d,
      dom = '';
    var ggid = ['rmtjxxl1', 'rmtjxxl2', 'rmtjxxl3', 'rmtjxxl4'];
    for (i; i < 4 - self.rmtjdsplen; i++) {
      p = channel_name[ggid[i]];
      // }
      dom = '<li class="xxl_baidu wz" id="rmtj' + self.rmtjArr[i] + '" ggid="' + ggid[i] + '"></li>';
      if (self.rmtjdsplen == 0 && i === 0) {
        $('.hot_rec_item li.boxborder')
          .eq(0)
          .before(dom);
        var isdsp = 'nylist';
      } else {
        $('.hot_rec_item li.boxborder')
          .eq(self.rmtjArr[i])
          .after(dom);
        var isdsp = 'null';
      }
      if (p.id && $('#rmtj' + self.rmtjArr[i]).length > 0) {
        tool.renderDadiAd(p, 'rmtj' + self.rmtjArr[i], 'list' + (~~i + 1 + self.rmtjdsplen), isdsp, 'row', [670, 180]);
      }
    }
  },
  isquzhong: function (arr) {
    var result = $.grep(arr, function (v, i) {
      return arr.indexOf(v) === arr.lastIndexOf(v);
    });
    return result;
  },
  //右下橱窗广告
  youxxf: function () {
    if (window.ipshield == 'flow') return;
    var self = this,
      dom = '<div class="close_yxxf_btn"><img src="/assets/img/close_ad_1.gif" alt=""></div>';
    var p = {
      id: channel_name.yxxf && channel_name.yxxf.id,
      type: channel_name.yxxf && channel_name.yxxf.type,
      size: '100%,250,0,0'
    };
    if (dspData['xny_yxxf'].data) {
      // console.log(dspData['xny_yxxf'].data);
      var val = dspData['xny_yxxf'].data,
        src = val.lbimg.length != 0 ? val.lbimg[0] : val.minimg[0];
      if (val.bigpic == 1) {
        if (src.imgwidth / src.imgheight != 2) {
          dom += '<div class="xin_dsp dsp_singerpic chucuang360">' + '<a href="' + val.url + '" class="dsp_hrf" target="_blank" title="' + val.topic + '">' + '<img src="' + src.src.replace(/^(http:)|(https:)/, '') + '" width="300" height="250" border="0">' + '<span class="til">' + val.topic + '</span>' + '<span class="pop"></span>' + '</a>' + '<div class="dsp_aveicon">' + '<span class="dsp_source" target="_blank">广告</span>' + '</div></div>';
        } else {
          dom += '<a href="' + val.url + '" target="_blank" class="xin_dsp clearfix">' + '<img src="' + src.src.replace(/http:|https:/g, '') + '"/>' + '<p class="txt">' + val.topic + '</p>' + '<span class="gg">广告</span></a>';
        }
      }
      dom += '</div>';
      if ($('.yxxf_area').length == 0) {
        setTimeout(function () {
          $('.yxxf_area').html(dom);
        }, 2000);
      } else {
        $('.yxxf_area').html(dom);
      }
      //tool.showurl(dspData['xny_yxxf'].inviewbackurls); //view上报
      return;
    } else {
      if (window.ipshield == 'union') return;
      setTimeout(function () {
        // tool.loaduid(p.id, 'yxxf_area');
        tool.renderDadiAd(p, 'yxxf_area', 'yxxf', 'nybody', 'dw');
      }, 500);
      var timer = setInterval(function () {
          if ($('#yxxf_area .close_yxxf_btn').length) {
            clearInterval(timer);
          }
          $('#yxxf_area').prepend(dom);
      }, 500);
    }
  },
  // 热词
  hot: function () {
    var info = '';
    var url = '/json/videohotwords_v29.json?t=' + new Date().getTime(),
      $reccnt = $('.rec_cnt');
    $.getJSON(url, function (data) {
      $.each(data.data, function (i, t) {
        if (t !== '') {
          if (i == 0) {
            info += '<li><a href="/search.html?kw=' + t + '" target="_blank" pdata="detail1|hotwords|' + i + '|0">' + t + '<i class="dot_news"></i></a></li>';
          } else if (i == 1) {
            info += '<li><a href="/search.html?kw=' + t + '" target="_blank" pdata="detail1|hotwords|' + i + '|0">' + t + '<i class="dot_hot"></i></a></li>';
          } else {
            info += '<li><a href="/search.html?kw=' + t + '" target="_blank" pdata="detail1|hotwords|' + i + '|0">' + t + '<i class="dot_icon"></i></a></li>';
          }
        }
      });
      $reccnt.html(info);
    });
  },
  // 重播 保存当前视频数据
  Toreplay: function () {
    var storage = window.localStorage,
      ysplay = JSON.parse(storage.getItem('Toreplay'));
    if (ysplay) {
      var html = '<a class="clearfix" href="/a/' + ysplay.hrf + '.html" pdata="detail1|exvideo|0|0">' + '  <p class="icon"></p>' + '  <p class="txt">' + ysplay.txt + '</p>' + '  <div class="gorq">' + '    <span class="ingorq">重播</span>' + '    <span class="line"></span>' + '    <span class="time">' + tool.workOutTime(ysplay.time) + '</span>' + '  </div>' + '</a>';
      // var html = '<a class="clearfix" href="/a/' + ysplay.hrf + '.html" pdata="detail1|exvideo|0|0">' + '  <p class="icon"></p>' + '  <div class="gorq">' + '    <span class="ingorq">重播上一条</span>' + '    <span class="time">' + tool.workOutTime(ysplay.time) + '</span>' + '  </div>' + '  <p class="txt">' + ysplay.txt + '</p>' + '</a>';
      $('.Toreplay')
        .html(html)
        .show();
    }
    var Toreplay = {
      txt: redirect_topic,
      hrf: uk_for_tbtj,
      time: mp4long
    };
    Toreplay = JSON.stringify(Toreplay);
    window.localStorage.setItem('Toreplay', Toreplay);
  },
  getiframeid: function (id) {
    return id.match(/iframe([a-zA-Z0-9]+)/)[1] || null;
  },
  getQueryString: function (name, str) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = str.match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
  },
  // baidu后贴联盟上报
  hqbdushow: function () {
    var _this = this;
    var isiframeid = function (obj, types, ids) {
      if (ids.length == 0) return false;
      if (ids.length > 1) {
        ids = ids.eq(1);
      }
      var src = String(ids.attr('src'));
      var iframeId = String(ids.attr('id'));
      if (types == 'bdf') {
        obj.id = _this.getQueryString('di', src);
      } else if (types == 'UID' || types == 'baidu') {
        obj.id = _this.getiframeid(iframeId) || 'u' + _this.getQueryString('rdid', src);
      }
    };
    $.each($('.tip-right iframe'), function (i, v) {
      var $ifr = $(v),
        ggid = $(v)
        .parent('div')
        .attr('ggid');
      if (!$ifr.attr('isview')) {
        $ifr.attr('isview', 1);
        var paramsa = {
          wz: '',
          id: '',
          chinaname: 'baidu',
          type: ''
        };
        paramsa.type = channel_name[ggid].type;
        paramsa.wz = $(v)
          .parent('div')
          .attr('id');
        if ($ifr.attr('src').indexOf('/chanxx') > -1 || $ifr.attr('src').indexOf('/gg_common') > -1) {
          var iniframe = $ifr.contents().find('iframe');
          isiframeid(paramsa, paramsa.type, iniframe);
        } else {
          var iniframe = String($ifr.attr('id'));
          var src = $ifr.attr('src');
          paramsa.id = _this.getiframeid(iniframe) || 'u' + _this.getQueryString('rdid', src);
        }
        _this.pcunionLogUrl(paramsa, 'show');
        _this.pcunionLogUrl(paramsa, 'view');
      }
    });
    $('body').on('mouseleave', '.htp-box iframe', function () {
      if (document.activeElement === this) {
        var ggid = $(this)
          .parent('div')
          .attr('ggid');
        var paramsa = {
          wz: '',
          id: '',
          chinaname: 'baidu',
          type: ''
        };
        paramsa.type = channel_name[ggid].type;
        paramsa.wz = $(this)
          .parent('div')
          .attr('id');
        if (
          $(this)
          .attr('src')
          .indexOf('/chanxx') > -1 ||
          $(this)
          .attr('src')
          .indexOf('/gg_common') > -1
        ) {
          var iniframe = $(this)
            .contents()
            .find('iframe');
          isiframeid(paramsa, paramsa.type, iniframe);
        } else {
          var iniframe = String($(this).attr('id'));
          var src = $(this).attr('src');
          paramsa.id = _this.getiframeid(iniframe) || 'u' + _this.getQueryString('rdid', src);
        }
        _this.pcunionLogUrl(paramsa, 'click');
      }
    });
  },
  // 360前贴联盟上报
  de360show: function () {
    var self = this,
      adDataStr = $('.bfq_qt360')
      .find('a')
      .attr('data-tongji')
      .split('|||');
    var pm = {
      gg_title: encodeURIComponent(adDataStr[0]),
      gg_url: encodeURIComponent(adDataStr[1]),
      wz: 'qtp360',
      id: adDataStr[2],
      chinaname: '360',
      type: 'big'
    };
    $('#video_main').off('click');
    $('#video_main').on('click', '.bfq_qt360', function () {
      self.pcunionLogUrl(pm, 'click');
    });
    self.pcunionLogUrl(pm, 'show');
    self.pcunionLogUrl(pm, 'view');
  },
  pcunionLogUrl: function (item, t, fn) {
    var self = this;
    //联盟上报 item右1 id后台id l百度\淘宝\360\其他 f投放方式\afp\bdf\uid\huanqiu\ssp
    //t上报的方式  click点击
    if (arguments[2] == undefined) {
      fn = new Function();
    }
    if (t == 'show') {
      var typs = 'pcunionshow';
    } else if (t == 'view') {
      var typs = 'pcunioninview';
    } else if (t == 'click') {
      var typs = 'pcunionclick';
    }
    var url = '//pcunionreportlog.dftoutiao.com/dspdatalog/' + typs + '?';
    var qid = tool.isqid(),
      nowurl = window.location.href.split(/\?|#/)[0],
      uid = window.global_uid,
      softname = 'DFTT_VIDEO_PC',
      softtype = 'toutiao_video_pc',
      OSType = window.global_os,
      browsertype = window.global_browser,
      gg_position = item.wz, // 广告的位置
      gg_id = item.id, // 广告id
      gg_union = item.chinaname || 'baidu', // 广告联盟 'zhike'
      gg_type = item.type, //广告类型
      gg_title = item.gg_title ? item.gg_title : 'null', //广告标题
      gg_url = item.gg_url ? item.gg_url : 'null', //广告落地页url
      pgtype = 'detail', //页面大类别
      planid = item.planid ? item.planid : 'null',
      newsType = typename.substr(1), //页面的类别
      idx = t === 'click' ? (item.idx ? '&idx=' + item.idx : '') : '';
    //prettier-ignore
    var param = 'qid=' + qid + '&nowurl=' + nowurl + '&uid=' + uid + '&softname=' + softname + '&softtype=' + softtype + '&OSType=' + OSType + '&browsertype=' + browsertype + '&gg_position=' + gg_position + '&gg_id=' + gg_id + '&gg_union=' + gg_union + '&gg_type=' + gg_type + '&gg_title=' + gg_title + '&gg_url=' + gg_url + '&pgtype=' + pgtype + '&newstype=' + newsType + '&dsp_position=null&planid=' + planid + '&_timer=' + new Date().getTime() + idx;
    var img = new Image();
    img.src = url + param;
    if (t === 'click') {
      var $body = $('body');
      if (!$body.attr('tabindex')) {
        $body.attr('tabindex', 1);
      }
      $body.focus();
    }
    fn(item);
  },
  //视频拖拽
  videoMove: function () {
    var $dialog = $('.video1');
    $('#move').mousedown(function (e) {
      // e.pageX
      var positionDiv = $dialog.offset();
      var distenceX = e.pageX - positionDiv.left;
      // var distenceY = e.pageY - positionDiv.top;
      var down = e.pageY;
      var alltop = $dialog[0].getBoundingClientRect().top,
        W = $dialog.outerWidth(true),
        H = $dialog.outerHeight(true);
      // alert(positionDiv.left);
      $(document).mousemove(function (e) {
        var x = e.pageX - distenceX;
        var y = alltop - (down - e.pageY);
        //console.log(e.pageY, y);
        if (x < 0) {
          x = 0;
        } else if (x > $(window).width() - W) {
          x = $(window).width() - W;
        }
        if (y < 0) {
          y = 0;
        } else if (y > $(window).height() - H) {
          y = $(window).height() - H;
        }

        $dialog.css({
          left: x + 'px',
          top: y + 'px',
          bottom: 'auto'
        });
      });

      $(document).mouseup(function () {
        $(document).off('mousemove');
      });
    });
  }
};
tool.init();
// var wait = function (dtd) {
//   tool.init()
//   dtd.resolve(); // 改变Deferred对象的执行状态
//   console.log(111)
//   return dtd;
// };
$.when(dtd)
  .done(function () {
    videoStart.videoInfo();
    DetailInfo.init();
  })
  .done(function () {
    kill.init();
  })
  .fail(function () {
    console.log('出错啦！');
  });

// 双11广告
var shuang11 = {
  init: function (data) {
    this.sy11(data);
    // this.bffc();
  },
  //双十一水印
  sy11: function (data) {
    var shuiyin_one_background = data.jhstph,
      //水印图片1彩色图片链接
      shuiyin_one = data.jhstpc,
      //水印图片2灰色背景图片链接 天猫
      shuiyin_two_background = data.tmtph,
      //水印图片2彩色图片链接
      shuiyin_two = data.tmtpc;
    //水印链接1  //水印链接2
    var shuiyin_url = [data.jhsurl, data.tmurl];
    var cssStr =
      '.ssy_icon{position:absolute;right:-84px;top:10px;width:30px;height:32px;z-index:999;background:url("//mini.eastday.com/assets/images/11/close_sp1.png");background-position:0 -29px;background-repeat:no-repeat;cursor:pointer}.ssy_icon .ssy_close{display:block;width:30px;height:32px}.detail_cnt{position:relative}.ssy_left{position:absolute;width:300px;display:inline;z-index:0;left:0;top:20px;overflow:hidden}.ssy_l{position:absolute;display:inline;z-index:0;right:0;top:0}.ssy_right{position:absolute;width:300px;display:inline;z-index:99;right:-300px;top:20px;overflow:hidden}.ssy_r{position:absolute;display:inline;z-index:99;left:0;top:0}.ssy_left .ssy_let_odd{float:right}.ssy_left .ssy_let_even{float:right}.ssy_left .ssy_let_odd .ssy_bg_l{float:right}.ssy_left .ssy_let_even .ssy_bg_k{float:right}.ssy_left .ssy_let_even .ssy_bg_l{float:right}.ssy_left .ssy_let_odd .ssy_bg_k{float:right}.ssy_let_odd{display:inline;height:120px;overflow:hidden;margin-right:-15px}.ssy_let_odd a{float:left;display:block;width:130px;height:120px;background-repeat:no-repeat;background-position:center center;cursor:pointer}.ssy_let_odd .ssy_bg_k{background-image:url(' +
      shuiyin_one_background +
      ')}.ssy_let_odd .ssy_bg_k:hover{background-image:url(' +
      shuiyin_one +
      ')}.ssy_let_odd .ssy_bg_l{background-image:url(' +
      shuiyin_two_background +
      ')}.ssy_let_odd .ssy_bg_l:hover{background-image:url(' +
      shuiyin_two +
      ')}.ssy_left .ssy_let_even{display:inline;height:120px;margin-right:40px;overflow:hidden}.ssy_let_even a{float:left;display:block;width:109px;height:120px;background-repeat:no-repeat;background-position:center center;cursor:pointer}.ssy_let_even .ssy_bg_k{background-image:url(' +
      shuiyin_one_background +
      ')}.ssy_let_even .ssy_bg_k:hover{background-image:url(' +
      shuiyin_one +
      ')}.ssy_let_even .ssy_bg_l{background-image:url(' +
      shuiyin_two_background +
      ')}.ssy_let_even .ssy_bg_l:hover{background-image:url(' +
      shuiyin_two +
      ')}.ssy_right .ssy_let_even{display:inline;height:120px;overflow:hidden}.ssy_right .ssy_let_odd{display:inline;height:120px;margin-left:30px;overflow:hidden}';
    $('head').append('<style>' + cssStr + '</style>');
    _hmt.push(['_trackEvent', 'detail', 'show', 'sy11_0']);
    pcunionLogUrl({
      position: 'shuiyin',
      type: 'pcunionshow'
    });
    pcunionLogUrl({
      position: 'shuiyin',
      type: 'pcunioninview'
    });
    $('.main').append('<div  class="ssy_left"><div  class="ssy_l"></div></div>' + '<div class="ssy_right"><div class="ssy_r"></div></div>' + '<div class="ssy_icon"><a class="ssy_close" onclick="_hmt.push([\'_trackEvent\',\'detail\',\'closed\',\'sy11_0\'])" id="index_close_xqshuiyin1" href="javascript:;" ></a></div>');
    var detailcntHeight = $('.main').height();
    var detailcntWidth = $(document).width();
    $('.ssy_left,.ssy_right').css({
      height: detailcntHeight + 8 + 'px'
    });
    $('.ssy_l,.ssy_r').css({
      height: detailcntHeight + 'px'
    });

    function onResize(cntWidth, cntHeight) {
      $('body').css({
        'overflow-x': 'hidden'
        // "overflow-y": "hidden"
      });
      $('html').css({
        'overflow-y': 'inherit'
      });
      var sureHeight = parseInt((cntHeight - 350) / 120),
        sureWidth = parseInt((cntWidth - 1100) / 2),
        yWidth = Math.ceil(sureWidth / 130);
      for (var i = 0; i < sureHeight; i++) {
        if (i % 2 == 0) {
          $('.ssy_l').append('<div class="ssy_let_even fl clearfix"></div>');
          $('.ssy_r').append('<div class="ssy_let_even fl clearfix"></div>');
        } else {
          $('.ssy_l').append('<div class="ssy_let_odd fl clearfix"></div>');
          $('.ssy_r').append('<div class="ssy_let_odd fl clearfix"></div>');
        }
      }
      $('.ssy_left').css({
        width: yWidth * 130,
        left: -yWidth * 130,
        hegiht: cntHeight
      });
      $('.ssy_right').css({
        width: yWidth * 130,
        right: -yWidth * 130,
        hegiht: cntHeight
      });
      for (var i = 0; i < yWidth; i++) {
        if (i % 2 == 0) {
          $('.ssy_let_odd').append("<a class=\"ssy_bg_k\" onclick=\"_hmt.push(['_trackEvent', 'detail', 'click', 'sy11jhs_0'])\" ></a>");
          $('.ssy_let_even').append("<a class=\"ssy_bg_l\" onclick=\"_hmt.push(['_trackEvent', 'detail','click', 'sy11tmall_0'])\" ></a>");
        } else {
          $('.ssy_let_even').append("<a class=\"ssy_bg_k\" onclick=\"_hmt.push(['_trackEvent', 'detail', 'click', 'sy11jhs_0'])\" ></a>");
          $('.ssy_let_odd').append("<a class=\"ssy_bg_l\" onclick=\"_hmt.push(['_trackEvent', 'detail','click', 'sy11tmall_0'])\" ></a>");
        }
      }
    }
    $(window).resize(function () {
      var cntWidth = $(document).width();
      var cntHeight = $(document).height();
      if (detailcntWidth >= cntWidth) {
        return;
      }
      detailcntWidth = cntWidth;
      onResize(cntWidth, cntHeight);
    });
    onResize(detailcntWidth, detailcntHeight + 350);
    $('body').on('click', '.ssy_bg_k', function () {
      window.open(shuiyin_url[0]);
      pcunionLogUrl({
        position: 'shuiyin',
        type: 'pcunionclick',
        idx: '1'
      });
    });
    $('body').on('click', '.ssy_bg_l', function () {
      window.open(shuiyin_url[1]);
      pcunionLogUrl({
        position: 'shuiyin',
        type: 'pcunionclick',
        idx: '2'
      });
    });
    $('.ssy_close').on('click', function () {
      $('.ssy_left,.ssy_right').hide();
      $(this)
        .parent('.ssy_icon')
        .hide();
    });

    function pcunionLogUrl(param) {
      var url = '//pcunionreportlog.dftoutiao.com/dspdatalog/' + param.type;
      var parames = ['qid=' + tool.isqid(), 'nowurl=' + encodeURIComponent(window.location.href), 'uid=' + global_uid, 'softname=DFTT_VIDEO_PC', 'softtype=toutiao_video_pc', 'OSType=' + OSType, 'browsertype=' + browserType, 'pgtype=detail', 'newstype=' + (newstype ? newstype : 'detail'), 'gg_position=ce_lan_xuan_fu', 'gg_id=6593820', 'gg_union=taobao', 'gg_type=ssp', 'gg_title=null', 'gg_url=' + (param.url ? encodeURIComponent(param.url) : ''), 't=' + new Date().getTime()];
      if (param.idx !== undefined) {
        parames.push('idx=' + param.idx + '&isshopping=1');
      } else {
        parames.push('isshopping=1');
      }
      new Image().src = url + '?' + parames.join('&');
    }
  },
  bffc: function () {
    (function ($) {
      function requestUrl(url) {
        new Image().src = url + '&_=' + new Date().getTime();
      }
      /*广告插件*/
      function Ad(options) {
        var defaults = {
          id: 'adContainer',
          adUrl: '',
          offsetLeft: '0',
          offsetLeft1: '0',
          isAuto: false,
          time: 5000,
          secondImgIsShow: true
        };
        $.extend(defaults, options);
        this.defaults = defaults;
        this.init();
      }

      Ad.prototype = {
        html: function () {
          var defaults = this.defaults;
          var id = defaults.id;
          var url = defaults.adUrl;
          var windowWidth = $(window).outerWidth(true),
            left;
          var index;
          // if (typeof defaults.index === 'undefined') {
          //   index = 0;
          //   defaults.index = index;
          // } else {
          //   index = defaults.index;
          // }
          var image = defaults.images;
          var baseUrl = defaults.imagesBaseUrl;
          // updata="' + BType + '|jzxuanfu|1|' + index + '"
          // updata="' + BType + '|jzxuanfu|2|' + index + '"
          var htmlStr = '<div class="ad-container close" id="' + id + '">' + '<a href="' + url + '"  target="_blank" class="ad-container1 close">' + '<img data-baiduimageplus-ignore src="' + image + '"/> ' + '<span class="ad-close11"   >' + '<img src="' + baseUrl + '"/> ' + '</span>' + '</a>' + '</div>';
          $('#video_main').append(htmlStr);

          left = 0;
          $('#' + defaults.id).animate({
              left: left
            },
            800
          );
        },
        css: function () {
          var width;
          var height;
          var offsetLeft;
          var offsetLeftValue;
          var windowWidth = $(window).outerWidth(true);
          var defaults = this.defaults;
          var adimg = $('#adContainer');
          if (defaults.isAuto) {
            width = defaults.width;
            height = defaults.height;
          } else {
            width = defaults.width;
            height = defaults.height;
            offsetLeft = defaults.offsetLeft;
          }

          heightValue = parseInt(height);
          widthValue = parseInt(width);
          offsetLeftValue = parseInt(offsetLeft);
          var cssStr =
            '.ad-container.close{' +
            'height:auto;' +
            '}' +
            '.ad-container{' +
            'position:absolute;' +
            'bottom:146px;' +
            'left: -400px;' +
            'width:' +
            width +
            ';' +
            'height:' +
            height +
            ';' +
            'z-index:99;' +
            'transition:transform .5s ease;' +
            '-webkit-transition:-webkit-transform .5s ease;' +
            'transform:scale3d(1,1,1);' +
            '-webkit-transform:scale3d(1,1,1);' +
            '}' +
            '.ad-container1.close{' +
            'transition:transform .5s ease;' +
            '-webkit-transition:-webkit-transform .5s ease;' +
            'transform:scale3d(0,0,0);' +
            '-webkit-transform:scale3d(0,0,0);' +
            'display:none;' +
            '}' +
            '.ad-container1 img{' +
            'width:100%;' +
            'vertical-align:top;' +
            '}' +
            '.ad-container1 img.ad-gif{' +
            'position:absolute;' +
            'top:0;' +
            'left:0;' +
            '}' +
            '.ad-close1,.ad-close2{' +
            'position:absolute;' +
            'bottom:0;' +
            'right:0;' +
            'width:6.048387096774194%;' +
            'font-size:0;' +
            '}' +
            '.ad-close11{' +
            'position:absolute;' +
            'width:17px;' +
            'top:0;' +
            'right:0;' +
            'padding-bottom:1.6%;' +
            'opacity:.6;' +
            'filter:alpha(opacity=40);' +
            '}';
          if (defaults.styleId) {
            $('#' + defaults.styleId).html(cssStr);
          } else {
            var $head = $('head');
            var number = String(Math.random());
            var id = 'style' + number.substring(number.indexOf('.') + 1, 3);
            defaults.styleId = id;
            $head.append('<style id="' + id + '">' + cssStr + '</style>');
          }
          if ($.cookie('videoTipsone')) {
            // 第二次展现tips
            if ($('#Client').is(':visible')) {
              if (windowWidth < 1023) {
                $(adimg).css({
                  left: 0
                });
              } else if (windowWidth >= 1023 && windowWidth < 1583) {
                $(adimg).css({
                  left: '36px'
                });
              } else if (windowWidth >= 1583) {
                $(adimg).css({
                  left: '360px'
                });
              }
            } else {
              $(adimg).css({
                left: 0
              });
            }
          }
        },
        onClose: function () {
          var _this = this;
          var defaults = _this.defaults;
          var id = defaults.id;
          var index = defaults.group;
          var bdtype = defaults.bdgroup;
          // var index = defaults.index - 1;
          // var image = defaults.group[index];
          var $container = $('#' + id);
          $container.on('click', '.ad-close1', function (e) {
            e.preventDefault();
            _this.hideStep();
          });
          //var alphabet = _this.defaults.group;
          $container.on('click', '.ad-close11', function (e) {
            _hmt.push(['_trackEvent', 'detail', 'closed', bdtype]);
            $.cookie('videoTips', 1, 24, '.eastday.com');
            _this.hideStep();
            e.preventDefault();
            e.stopPropagation();
          });
          $container.on('click', '.ad-container1', function (e) {
            _this.pcunionLogUrl('pcunionclick', index);
            _this.hideStep();
            $.cookie('videoTips', 1, 24, '.eastday.com');
            _hmt.push(['_trackEvent', 'detail', 'click', bdtype]);
          });
          var adimg = $('#adContainer');
          $(document)
            .on('click', '.pv-icon-1', function () {
              $(adimg).css({
                left: '36px'
              });
            })
            .on('click', '.zyin-h0t', function () {
              $(adimg).css({
                left: '360px'
              });
            });
        },
        hideStep: function () {
          var _this = this;
          var id = _this.defaults.id;
          var $container = $('#' + id);
          _this.hide('ad-container1', function () {
            $container
              .addClass('close')
              .find('.ad-mask')
              .hide();
          });
        },
        hide: function (className, callback) {
          var id = this.defaults.id;
          var $c = $('#' + id)
            .find('.' + className)
            .addClass('close');
          setTimeout(function () {
            $c.hide();
            if (typeof callback === 'function') {
              callback();
            }
          }, 500);
        },
        show: function (className, callback) {
          var id = this.defaults.id;
          var $c = $('#' + id)
            .find('.' + className)
            .removeClass('close');
          setTimeout(function () {
            $c.show();
            if (typeof callback === 'function') {
              callback();
            }
          }, 500);
        },
        resize: function () {
          var _this = this;
          $(window).resize(function () {
            _this.css();
          });
        },
        loadImage: function (url, callback) {
          var img = new Image(); //创建一个Image对象，实现图片的预加载
          img.src = url;
          if (img.complete) {
            // 如果图片已经存在于浏览器缓存，直接调用回调函数
            callback.call(img);
            return; // 直接返回，不用再处理onload事件
          }
          img.onload = function () {
            //图片下载完毕时异步调用callback函数。
            callback.call(img); //将回调函数的this替换为Image对象
          };
        },
        imageLoaded: function () {
          var _this = this;
          var defaults = _this.defaults;
          // var index = defaults.index - 1;
          var image = defaults.images;
          var dtd = $.Deferred();
          _this.loadImage(image, function () {
            dtd.resolve();
          });
          return dtd;
        },
        first: function () {
          var _this = this;
          if ($.cookie('videoTips')) {
            _this.hideStep();
          } else {
            var id = _this.defaults.id;
            $('#' + id).removeClass('close');
            $('#' + id)
              .find('.ad-container1')
              .removeClass('close');
          }
        },
        showAjaxLog: function () {
          var _this = this;
          //var alphabet = _this.defaults.group;
          var defaults = _this.defaults;
          //var index = defaults.index - 1;
          var type = defaults.group;
          var bdtype = defaults.bdgroup;
          if ($.cookie('videoTips')) {} else {
            //console.log(222)
            _hmt.push(['_trackEvent', 'detail', 'show', bdtype]);
            _this.pcunionLogUrl('pcunionshow', type);
            _this.pcunionLogUrl('pcunioninview', type);
            $.cookie('videoTipsone', 1, 24, '.eastday.com');
            // _this.check_tx_ajax(function () {
            //   tx_ajax(BType, 'jzxuanfu', '0', index);
            // })
          }
        },
        pcunionLogUrl: function (type, inde) {
          var _this = this;
          var t = 0;
          if (typeof window.global_wayPath !== 'undefined') {
            log();
          } else {
            var timer = setInterval(function () {
              t++;
              if (t > 10) {
                clearInterval(timer);
              }
              if (typeof window.global_wayPath !== 'undefined') {
                log();
                clearInterval(timer);
              } else {
                global_wayPath = window.parent.global_wayPath;
                global_uid = window.parent.global_uid;
                soft_type = window.parent.soft_type;
                global_softname = window.parent.global_softname;
                global_os = window.parent.global_os;
                global_browser = window.parent.global_browser;
              }
            }, 500);
          }

          function log() {
            var defaults = _this.defaults;
            var url = '//pcunionreportlog.dftoutiao.com/dspdatalog/' + type;
            var adurl = defaults.adUrl;
            var parames = ['qid=' + window.global_wayPath || '', 'nowurl=' + encodeURIComponent(window.location.href), 'uid=' + global_uid || '', 'softname=' + 'DFTT_VIDEO_PC', 'softtype=' + 'toutiao_video_pc', 'OSType=' + OSType || '', 'browsertype=' + browserType || '', 'pgtype=detail', 'newstype=' + newstype || 'detail', 'gg_position=bfmctwo11_' + inde, 'gg_id=null', 'gg_union=taobao', 'gg_type=zkapi', 'gg_title=null', 'gg_url=' + encodeURIComponent(adurl), 'isshopping=1'];
            url = url + '?' + parames.join('&');
            requestUrl(url);
          }
        },
        init: function () {
          var _this = this;
          if (!this.defaults.isShow) return;
          _this.css();
          _this.resize();
          _this.imageLoaded().done(function () {
            _this.html();
            _this.first();
            _this.showAjaxLog();
            _this.onClose();
          });
        }
      };
      $.Ad_tt = function (opts) {
        return new Ad(opts);
      };
    })($);
    var juzhonIsShow = false,
      images = [],
      group = ['A', 'B', 'C', 'D'],
      bdgroup = [],
      qturl = []; //是否展现 true 展现 false不展现
    //console.log(zhike['bfmc'], 'ssss');
    if (zhike['bfmc']) {
      var info = zhike['bfmc'];
      $.each(info, function (i, t) {
        if (t.code.indexOf('bfmc') != -1) {
          images.push(t.img);
          qturl.push(t.url);
          bdgroup.push(t.code);
          juzhonIsShow = true;
        }
      });
    }
    var index = Math.floor(Math.random() * images.length);
    //console.log(qturl[index], index, images.length, bdgroup[index])
    $.Ad_tt({
      isShow: juzhonIsShow, //是否展现 true 展现 false不展现
      id: 'adContainer',
      isAuto: true,
      time: 5000, //广告展示时间
      width: '400px', //图片宽度
      height: '80px', //图片高度
      adUrl: qturl[index], //广告链接
      group: group[index], //组，声明广告是属于哪个组 取值范围[A-Z],用于区分上报以及区分广告图片资源目录
      bdgroup: bdgroup[index], //组，声明广告是属于哪个组 取值范围[A-Z],用于区分上报以及区分广告图片资源目录
      index: 1, //Math.floor(Math.random() * 4) + 1, 广告图片资源的索引，通过当前值判断使用当前组（上面group）中的哪个图片资源(示例：填写3将展示下方image中的C.png)
      images: images[index], //图片资源链接,(引号包裹用逗号分隔开);
      offsetLeft: '70px',
      imagesBaseUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAADgklEQVRIia2WX0hbVxzHPyZ6k16Hy3R2bWOrkWxByfbShbDJHMxNZ3QtAdkCGSj4OvAfPvggiJhn8dU8iBmCOpmMiQ9jrGUTSR26SDsZa2YW4mZm2iWmqzYxTfZwvSNekhhkX7jcc8/3d37fe37nd87vlFAYauA68CpwFagANEACiAP7wEMgBDzP56QkT78KMANvA+Xn/AjAEbAB+HKJ5RKpBDqB6iKcKxEBVoC/szvVCqMrwMfAixcQAGnWDcAe8E8ukUrgE0B7QQEZpcBrgB84Bin28rsTaVH/D2iAj2T/8kxuAo3ZVgaD4VJvb2+9TqdT+f3+o3ze+vr6jB0dHdf8fn88Ho+nsigRSAJ/liJNz6IcbLVaKwcHB22RSOTxwcHBV5ubm3GlTXd3943+/v5WQRCEtbW1cCgUeqYwsQA+NWBEStczCAaDR42NjYLZbK5vbW2t83q9gXA4nJB5h8Ohn5iYuC0IguB2u7+dmZkJZjIZpZsyIKI+VbusZJPJZGZ5eTlosVguNTQ01LW1tdVub28HQ6HQM4fDoXe5XLc0Go0wOzt7Z3R09H4OARmpEqAbeDmfBcDi4uJ7TU1NbwQCgZDX69212+1WrVar9Xg8d0ZGRrYLjQUelQCfUURWeTyed1paWm5mfRcjAJBQFSMA4PV6/5DbsVgsvrS0FChmHKBRIaVZQTidzpqBgYH30+n08729vbBOp6uYmpr6wGQyiUWIJFXAk0IWXV1dV8fGxmyiKIput/s7q9U6v76+ft9gMFyfnp7+UK/XnxeJJyognI+12WyXXS5XpyiK4tzc3N3x8fGfAXp6eu5ubW39YjQabywsLNyqrq4uKyASViNtfZOSsdvtVyYnJ+3l5eXi/Pz8D8PDwz/J3MnJSWZ1dfX35ubml0wmU117e3uNz+cL7e/vJ5R+gHsqYBepHpxBLBY7iUQi0ZWVlXtDQ0ObSv7w8DDldDq/2dnZ+a22tvaa0Wh8IYfAMbAr15M3gXeVFlVVVWXRaDSVTqfz7jS9Xq8xm80VGxsb0Wg0mlLQ3wM/yiIq4FMuVqjy4RHwOZCWj/o0UkXLFdOLIAF8fer3TNE6BoJIB2ahbDkPR8CXSKUYpQjAU+BXoAbItZDn4QD4Anic3VnotvI68BbF3VaeAuvAA05DVIyIjFKg/vR5BeneJSAdRXHgL6QtsAsoM+s//AtLfScgjKHiQAAAAABJRU5ErkJggg==',
      closeImage: 'close.png',
      closeImage1: 'close1.gif',
      secondImgIsShow: false
    });
  }
};

try {
  (function () {
    var s =
      '_' +
      Math.random()
      .toString(36)
      .slice(2);
    document.write('<div id="' + s + '" style="display:none;"></div>');
    (window.slotbydup = window.slotbydup || []).push({
      id: '6593820',
      container: s,
      size: '580,86',
      display: 'inlay-fix'
    });
  })();
} catch (e) {}