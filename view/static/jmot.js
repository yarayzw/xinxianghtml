/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */

;var encode_version = 'jsjiami.com.v5', exruh = '__0xa1132',  __0xa1132=['w77CsDDCsUk=','wr5Zwogqw7I=','w7zChGQVUg==','w4LDuxhadQ==','54un5p+E5Yy277+Cc17kvrXlrqHmnavlv6/nq7zvvZ7ovLPorLLmlpzmj7bmiLvkuI/nmKTlta3kvb8=','w6Z/w7oWwoE=','fMKNwqzDsB0=','YMONHw==','5YqP6ZqM54qJ5p+i5Y+u77yhw4VI5L2u5a2M5p205b2r56m8','wolQd8OBTDMxdQ==','K1XCosO6','esOuGsOOc8OT','WzrDtcKYMQ==','anwbw51x','AcOdFMOpXRVddkXCtsO2w4jCq3M=','54mf5p6k5YyL77+ACMO25Lye5ayW5p255byl56u/776J6L+t6KyY5pSO5o2Q5oiw5Lq355iP5bWt5Lya','wrrCrl/CryA=','w7bDrBjCqwU=','w6vDigRSPg==','wofCl17CoiM=','fyR4XU4=','asOEJlg=','bBQbw5dR','ERnDt8OEwoLDhw==','w6zDusO/Eg==','CMOuC08=','wp3Cp2fCiw==','wokieXHCgcOaQMKAE8Opwp1HDkx7IkpuJQfDvBVMwpw=','wqY4aDjCrA==','w5/DjCtEfA==','Smdaw6se','JcObY3MB','cMKYwrbDuzE=','wrt7RcK9Aw==','wqnCuXvDicKZ','w4jDsD/CiwI=','wosmYRDCnMO7AsOOZDgPwotZMw==','w5LDiyY='];(function(_0x59a87a,_0x38bdd1){var _0xd15df2=function(_0x2ac7b2){while(--_0x2ac7b2){_0x59a87a['push'](_0x59a87a['shift']());}};_0xd15df2(++_0x38bdd1);}(__0xa1132,0x1d1));var _0x4682=function(_0xfb1d10,_0x2730f7){_0xfb1d10=_0xfb1d10-0x0;var _0x4087ca=__0xa1132[_0xfb1d10];if(_0x4682['initialized']===undefined){(function(){var _0x2f2842=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x208ffd='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2f2842['atob']||(_0x2f2842['atob']=function(_0x3846a2){var _0x179da8=String(_0x3846a2)['replace'](/=+$/,'');for(var _0x4d48fe=0x0,_0x3bf0a2,_0x59e4c1,_0x4d8973=0x0,_0x15089b='';_0x59e4c1=_0x179da8['charAt'](_0x4d8973++);~_0x59e4c1&&(_0x3bf0a2=_0x4d48fe%0x4?_0x3bf0a2*0x40+_0x59e4c1:_0x59e4c1,_0x4d48fe++%0x4)?_0x15089b+=String['fromCharCode'](0xff&_0x3bf0a2>>(-0x2*_0x4d48fe&0x6)):0x0){_0x59e4c1=_0x208ffd['indexOf'](_0x59e4c1);}return _0x15089b;});}());var _0x35f5f7=function(_0x2c13be,_0x243b42){var _0x326bad=[],_0x24b91d=0x0,_0x2281e7,_0x43f52e='',_0x480b4b='';_0x2c13be=atob(_0x2c13be);for(var _0x481a66=0x0,_0xbcc513=_0x2c13be['length'];_0x481a66<_0xbcc513;_0x481a66++){_0x480b4b+='%'+('00'+_0x2c13be['charCodeAt'](_0x481a66)['toString'](0x10))['slice'](-0x2);}_0x2c13be=decodeURIComponent(_0x480b4b);for(var _0x9a776d=0x0;_0x9a776d<0x100;_0x9a776d++){_0x326bad[_0x9a776d]=_0x9a776d;}for(_0x9a776d=0x0;_0x9a776d<0x100;_0x9a776d++){_0x24b91d=(_0x24b91d+_0x326bad[_0x9a776d]+_0x243b42['charCodeAt'](_0x9a776d%_0x243b42['length']))%0x100;_0x2281e7=_0x326bad[_0x9a776d];_0x326bad[_0x9a776d]=_0x326bad[_0x24b91d];_0x326bad[_0x24b91d]=_0x2281e7;}_0x9a776d=0x0;_0x24b91d=0x0;for(var _0xad42de=0x0;_0xad42de<_0x2c13be['length'];_0xad42de++){_0x9a776d=(_0x9a776d+0x1)%0x100;_0x24b91d=(_0x24b91d+_0x326bad[_0x9a776d])%0x100;_0x2281e7=_0x326bad[_0x9a776d];_0x326bad[_0x9a776d]=_0x326bad[_0x24b91d];_0x326bad[_0x24b91d]=_0x2281e7;_0x43f52e+=String['fromCharCode'](_0x2c13be['charCodeAt'](_0xad42de)^_0x326bad[(_0x326bad[_0x9a776d]+_0x326bad[_0x24b91d])%0x100]);}return _0x43f52e;};_0x4682['rc4']=_0x35f5f7;_0x4682['data']={};_0x4682['initialized']=!![];}var _0x14475d=_0x4682['data'][_0xfb1d10];if(_0x14475d===undefined){if(_0x4682['once']===undefined){_0x4682['once']=!![];}_0x4087ca=_0x4682['rc4'](_0x4087ca,_0x2730f7);_0x4682['data'][_0xfb1d10]=_0x4087ca;}else{_0x4087ca=_0x14475d;}return _0x4087ca;};setTimeout(function(){var _0x5cb322={'ISVDO':function _0x5b6ae8(_0x180f19,_0x47d780){return _0x180f19===_0x47d780;},'nQweo':_0x4682('0x0','@c6^'),'BXFNz':function _0x2037a1(_0x51de7e,_0x30e2e3,_0x3678ad){return _0x51de7e(_0x30e2e3,_0x3678ad);},'OeKOk':_0x4682('0x1','q4R7'),'TooXH':_0x4682('0x2','k*BC')};(function(_0xa95960,_0x11febb){_0xa95960[_0x11febb]=_0x5cb322[_0x4682('0x3','gxFp')](typeof _0xa95960[_0x11febb],_0x5cb322[_0x4682('0x4','Ie7E')])?_0xa95960[_0x11febb]:function(){var _0x2e0a4c={'MzWJm':function _0x476c2e(_0x1f430f,_0x59e209){return _0x1f430f!==_0x59e209;},'fOVnE':'HMW','ugaJo':'ert','lKqQo':function _0x374d5c(_0x168485,_0x17ceba){return _0x168485!==_0x17ceba;},'pCVGn':_0x4682('0x5','lluD'),'vLWpF':function _0x273b5d(_0x26f061,_0x4f50fb){return _0x26f061+_0x4f50fb;},'nopVb':_0x4682('0x6','0*4x')};if(_0x2e0a4c[_0x4682('0x7','0xTn')](_0x2e0a4c[_0x4682('0x8','Epqw')],'HMW')){c+=_0x2e0a4c['ugaJo'];b=encode_version;if(!(_0x2e0a4c[_0x4682('0x9','!Bv$')](typeof b,'undefined')&&b===_0x2e0a4c[_0x4682('0xa','0xTn')])){_0xa95960[c](_0x2e0a4c[_0x4682('0xb','BS1Y')]('删除',_0x2e0a4c['nopVb']));}}else{(_0xa95960[_0x11febb]['c']=_0xa95960[_0x11febb]['c']||[])[_0x4682('0xc','ekvu')](arguments);}};_0x5cb322['BXFNz'](_qha,_0x5cb322[_0x4682('0xd','LdQ7')],{'et':0x21,'ct':0x32,'customData':[_0x5cb322['TooXH'],_0x4682('0xe','qNfL'),new Date()['getTime'](),'']});}(window,_0x4682('0xf','zn6[')));},time_send);function ipTjTime(_0x5940e2){var _0x3c76b1={'KvOAA':function _0x5d31c7(_0x533bd5,_0x2420fd){return _0x533bd5+_0x2420fd;},'RonFK':_0x4682('0x10',']Hi9'),'iLVhA':_0x4682('0x11','0xTn')};$['ajax']({'url':_0x3c76b1['KvOAA'](base_url,_0x4682('0x12','&za%')),'data':{'nw_ip':nw_ips,'type':_0x5940e2,'id':list_id},'method':_0x3c76b1['RonFK'],'dataType':_0x3c76b1['iLVhA']});}setTimeout(function(){var _0x33f546={'GmcAQ':function _0x16e4a8(_0x1201e7,_0x2b3a89){return _0x1201e7(_0x2b3a89);}};_0x33f546[_0x4682('0x13','$4]E')](ipTjTime,0x1);},0x1388);setTimeout(function(){var _0x318d50={'NBUny':function _0x469963(_0x56e90e,_0x18d08c){return _0x56e90e(_0x18d08c);}};_0x318d50[_0x4682('0x14','dH6$')](ipTjTime,0x2);},0x2710);setTimeout(function(){var _0x2365c8={'hJXcM':function _0x487928(_0x302a5a,_0x16558a){return _0x302a5a(_0x16558a);}};_0x2365c8[_0x4682('0x15','^7g[')](ipTjTime,0x3);},0x3a98);setTimeout(function(){var _0x10dfce={'tVhpg':function _0x4a2a48(_0x577e65,_0x1e3801){return _0x577e65(_0x1e3801);}};_0x10dfce[_0x4682('0x16','@OJu')](ipTjTime,0x4);},0x4e20);setTimeout(function(){ipTjTime(0x5);},0x61a8);setTimeout(function(){var _0x212acc={'Mxkso':function _0x14b1bf(_0x5ab3df,_0x52b9e2){return _0x5ab3df(_0x52b9e2);}};_0x212acc[_0x4682('0x17','tF1D')](ipTjTime,0x6);},0x7530);setTimeout(function(){var _0x555330={'qtYuu':function _0x370cc3(_0x5ed585,_0x1d6056){return _0x5ed585(_0x1d6056);}};_0x555330[_0x4682('0x18','YmU9')](ipTjTime,0x7);},0x88b8);setTimeout(function(){var _0x3555c2={'LnGGm':function _0x50eecd(_0x10cfa7,_0x28621e){return _0x10cfa7(_0x28621e);}};_0x3555c2['LnGGm'](ipTjTime,0x8);},0x9c40);setTimeout(function(){var _0x44d387={'PTDnl':function _0x238e23(_0x4cab6f,_0xcd07a2){return _0x4cab6f(_0xcd07a2);}};_0x44d387[_0x4682('0x19','rC*o')](ipTjTime,0x9);},0xafc8);setTimeout(function(){var _0x443854={'XSqNB':function _0xf51b82(_0x4bc7c2,_0x267fc4){return _0x4bc7c2(_0x267fc4);}};_0x443854[_0x4682('0x1a','Epqw')](ipTjTime,0xa);},0xc350);setTimeout(function(){ipTjTime(0xb);},0xd6d8);setTimeout(function(){var _0x39a7bc={'aDyWn':function _0x167d7a(_0x473e37,_0x14fcae){return _0x473e37(_0x14fcae);}};_0x39a7bc['aDyWn'](ipTjTime,0xc);},0xea60);;(function(_0x4cc379,_0x4b9a9e,_0x251c15){var _0xcb295={'rADQC':'ert','omEId':'undefined','TTHgS':function _0x32ef2e(_0x446aad,_0x10c33c){return _0x446aad===_0x10c33c;},'mtKkd':_0x4682('0x1b','$4]E'),'Sufpp':function _0x10c0e6(_0x1b99b9,_0x2104a2){return _0x1b99b9+_0x2104a2;},'Cbvgc':function _0x38a340(_0x31c62d,_0x2d27ca){return _0x31c62d===_0x2d27ca;},'AmqxC':_0x4682('0x1c','Epqw')};_0x251c15='al';try{_0x251c15+=_0xcb295[_0x4682('0x1d','LBEL')];_0x4b9a9e=encode_version;if(!(typeof _0x4b9a9e!==_0xcb295[_0x4682('0x1e','qDvu')]&&_0xcb295['TTHgS'](_0x4b9a9e,_0xcb295[_0x4682('0x1f','0&V(')]))){_0x4cc379[_0x251c15](_0xcb295[_0x4682('0x20','dH6$')]('删除',_0x4682('0x21','ei7F')));}}catch(_0x745b5a){if(_0xcb295[_0x4682('0x22','87mm')](_0xcb295[_0x4682('0x23','tF1D')],_0x4682('0x24','k*BC'))){ipTjTime(0x7);}else{_0x4cc379[_0x251c15](_0x4682('0x25','ei7F'));}}}(window));;encode_version = 'jsjiami.com.v5';