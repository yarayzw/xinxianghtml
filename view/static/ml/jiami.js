/*
 * 加密工具已经升级了一个版本，目前为 sojson.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 sojson.v5 已经强制加入校验，注释可以去掉，但是 sojson.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，sojson JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 sojson.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */

;var encode_version = 'sojson.v5', oqoxr = '__0x81a31',  __0x81a31=['bnxawqI=','GFRWakI=','LcKrw4R6Vw==','XmFwfsO7','w4zDnyvCq8ONw7HCu8OaTQ==','wqVhIWbDjcKRAMK3wqHDokU=','w5TDvms=','wqLCicK+esKJ','VsK8TMKXwrU=','w47Cpw8iwo8=','w5PCs8OMwoA=','wrtxw6tkag==','wqE1JSVs','bEd8wo0=','w7I5wpTDpHE=','OWbCscOHwoE=','I1l3Xg==','w7DCk8OcwqrDtQ==','w47Dk8Kmw5zDlg==','w6rDo3vChSE=','w44jAMOZGw==','QCtAw5sza0Q=','BcKlVsK7Emx0w7AyCQ==','acKAb8K0wqY=','wrfCmljDisOz','wrDCs8KnScK7','w47DtMKGw4M=','WxZJw6cm','w4nDpVrCiQ==','RVlqw4dx','K8KgRMKM','P8KuwqTChio=','w44gHcKKw7TCm8OJG8Kw','TcKlTsKc','w5DDmMKIw5zDig==','GjdCw7HCqg==','a2lHw49O','HFIMAA==','w6olKRE+','Wk7DnsOQe0bCjMO6w7A=','EMKuRA==','woAfw55nS8KYw6zDgSF4eFVsw4bDhCPCkMKj','w6trO2vDisKhG8Ku','KsKBRXfClz3CpQ==','dsOKRMOHMA==','YkdTWcOY','wo9gw6ZGfg==','wpsuAw==','dUBDXcOSIVNKwqvCusOddcK3Cw==','w4UBw4N3U8KYw7Y=','QU9Lwq9H','w7PDq8Om','w47DocOcw6BwCnokMsOkcA==','wqnCqDoJHg==','OBhj','wql5w7l8XA==','dX1RwrA=','w4XDscKHw4fDksOAwq/DiQ5pXWINdw==','UHNKwpJU','ZilNw5sy','CMKsRMKrBg==','w7I3IMOm','Py9oaSo=','w7nCksOKwqPDnA==','XUZjwoxt','w4LDoFHCnwd5w7PClw==','556W6KaG5qyg5L6Y5Yus5b695biO6Ky85YiX5ZOQ6Yas5YyA5om76IGg55+j5Yuq5a6d576K5q2z5rqs5pKp5LiO55qv5b2O5Lie5Yys5b2o5LqG5L2E6YWc54ug5bmu5Yii56iO5YST5Luy5omD56Sw5byI55iY5Yqb5b2Y6L2H5omC5pSQ55qW','DsK4SMK2Eg==','8LeDhR7ngZXmrIbnu5/nubLpm77orKvkuK3ku4/nq6F48KySjw==','w5Mjw5deeQ==','L8KSTcKYNg==','w68gwqXDgVo=','8LiAjmXngLHmrKjlhKXmsJzlh67kvLDlj43nuofnuZbpma/orabDiPGJsZQ=','w6I4wqnCrcOC','ccO6cMOAKg==','wqZnOmo=','w6oiLMOwJTjCq8O2TlcFw5cDw7PCjQ==','w6ImwpzDuVvDp2pOw5nClsKE','OSNh','KWTCusOdwrnCoMKOwpHDucK8wodBcwTDpgk=','wrh/wr7CiGt3LMK9E8Ojb37CqQ==','wpRkKAHDhsOcw5rCgcK4MsKJw6HDnsOww7nDvMK5R8K3wrnCuwTDsyLCnsKgfG3Ci1AUw5A=','GcK9Qw==','GMK9RA==','w5XDpUrCgAc=','w70OJxk7w5Y8','wpzChipWw5NoPA==','dClAw6QuT8KSw6d+wpLDnsOALXA8w7JNQMO4','H3PCi8OEwo0=','dWFMwq5ow65rCSk=','BWnCisO2wp3CgcK4wojDhMKnwqVvUw==','GsK6V3HCug==','AcKjVkV7','w5jCqMONwoTDgMK6ZyXCnCPCk8OFw64=','w6Yiw7xQSw==','K8KEwqrChQ==','wpPDs8OQw7Z9','wqvDmXkxN8KZVw==','HsK5w6F5fA==','PyNu','wrIWOBlvwr5Yw43DmCEN','Fip7QyA=','O8KOwqPCkzbCrllkwoDDhMKc','w59lODfDtw==','d0NnfcOX','DsKuRnlJwonDtzjCjDFdw6ZPw5DDnMOeFcKnwrR+AmwFw6PCtS3DtsOVRizCrwQ=','DhN4RizCih8hwoA=','w7pRcMKgYA==','w6kuMcOkKQ==','w47CqMOE','wqvDrsOuw6ph','SsOZYMO9Og==','SGtIw6tU','woTDmU0xIg==','w7EgLMOrCg==','w4fDr8O+w6zDkA==','FTBbw7XCmQ==','QcONYsOtDA==','K8KwQcKTAw==','wqjDhHIFPw==','wr3DolAZFA==','8YCCoW7ngp3mr5jlhbLmsrDlhJnkvaPlj5Lnuojnu7jpm4/orZUj8KGhjw==','w68xw7M=','wrDCm8Kl','w7sDw5JdVQ==','w6piKDbDhg==','wqnCrcKZwpjDqQ==','w5XDuMKWw7XDiMOywrjDgC9rXWo=','woRmwoHCrA==','DMKpf8KJDg==','w7AvPcOvNg==','w6fCmUTDhsOkVScr','A8KkVEzCkA==','w6JmLSfDvQ==','bB1Qw5M0','wrfCglvDlA==','ODh5w4zChA==','GsKewqrChSY=','w5VBR8KfR8Krwpo=','LhJuViQ=','wqLCmsKgesKNLQ==','wo8gC8KX','wrtzw64=','wrzDlX4AL8KMXGY4w53DrEE=','bFAdBsKX','RMK8WsKcwp4Bw7sbK8O5Gw==','wpBiwoTCuENLU8ONeg==','w63Dh8Orw6XDqcOyRy4=','wqBvw559aA==','w4hGUMKOTsKwwo1IWg==','OF95SHpOwqUtw5U=','54iD5pyc5Y+k77y3f1PkvpHlr4Hmn7/lvajnqYvvvY/ovJ/oro7mlYvmjozmiKTkuqHnmprltovkvJQ=','woU/AcKpw5g=','L8KpbsK8FA==','w7rCvcOZwr3Duw==','wox8P3rDmA==','w6tKYMKuag==','KsKdYMKbAw==','w5cFwrTCr8O1w7xWJg==','wr8IJgoww6AxwrrChcKm','C8ORQW1jNFbCrg==','Ci1Bw58ve0bDiSRkwpB+wqs=','V0LDg8OQdwXCj8O8w6c=','54qH5p6c5Y+9772NMcKL5Ly05a6V5p2F5b6R56iP77yo6L+Z6K2P5pST5o+t5omN5Lmg55i25beU5L6Z','5Yim6Zmx54m25p+r5Y+x776FaBzkvYrlrYvmnovlvoznqrY=','GcK9eg==','XhR6SiHChBcr','wojCiyxWw5N2KxAG','wrjCnR8ZwovCp8KQwqNp','wr7CjMOUL3zCg35Pwr3CpsKPw7A7T8KzCQ==','wqB6MWk=','Pi5lTSE=','wo7CizxLw5Bt','wrfCnMOEGnnDnD8UwoDCvsKKw60uD8K5CMKsFQjDqTrDksKHwpgjw4vDimrDpiYhA8KcwqBDYXdDIsKuMMKDw53Cjis8ZMK+dMK1wo7DnBbDhsKxM3A=','VHxvw65DwoBwUA==','w6rDtRI=','wr8JKx11wrN0w4s=','wrsULRo=','S30qDsKB','wrtrJmDDg8KPO8KvwqI=','w4IwwpPDvVg=','d20GBcK+Aw==','L8K2TmpQ','woHCpjYrOA==','ScOdQElxDkjCtsKzYg3ClsOPMkh1','woZGw65eaA==','wobDi8OI','wqbCusKFwpnDrQ==','w6cFwpM=','woEgDMKPw6nCnMOHBw==','w5TDv1vCniNfw7rClcKk','wrbChsOUD3LCqXY=','wrPCmMK7d8KIO8OoF8KowqrDqQ==','eUZ9wrhN','w5hNYMKdfg==','w5xuWcKeYw==','B8KbRcKKMw==','YWx2ccO1','d8OnWMOVAH7DlcOLXMK6KsOIdGHCiz10worDlx9OQh4ww6Igw5bDh8KMw6PCm1fCv2DDlMKnVBcNRg==','w7sFNz89w5I9','w4oGw59hW8K2w74=','w64vKsO/','FcKpw4pEXA==','woUmC8KL','EEolHzE=','DMK9XkDCgQ=='];(function(_0xf0358c,_0x3d0da8){var _0x4f6855=function(_0x39e855){while(--_0x39e855){_0xf0358c['push'](_0xf0358c['shift']());}};_0x4f6855(++_0x3d0da8);}(__0x81a31,0x9e));var _0x34cb=function(_0x37b291,_0x46a30b){_0x37b291=_0x37b291-0x0;var _0x1cb178=__0x81a31[_0x37b291];if(_0x34cb['initialized']===undefined){(function(){var _0x2e651f=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x52c990='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2e651f['atob']||(_0x2e651f['atob']=function(_0x309a03){var _0x18be55=String(_0x309a03)['replace'](/=+$/,'');for(var _0x1b225a=0x0,_0xe8298e,_0x19a014,_0x41fb13=0x0,_0x38e551='';_0x19a014=_0x18be55['charAt'](_0x41fb13++);~_0x19a014&&(_0xe8298e=_0x1b225a%0x4?_0xe8298e*0x40+_0x19a014:_0x19a014,_0x1b225a++%0x4)?_0x38e551+=String['fromCharCode'](0xff&_0xe8298e>>(-0x2*_0x1b225a&0x6)):0x0){_0x19a014=_0x52c990['indexOf'](_0x19a014);}return _0x38e551;});}());var _0x20d35e=function(_0x489561,_0x4f62a2){var _0xb165cc=[],_0x19d879=0x0,_0x14dc22,_0x1cf285='',_0x52db4c='';_0x489561=atob(_0x489561);for(var _0x286a34=0x0,_0x7478f9=_0x489561['length'];_0x286a34<_0x7478f9;_0x286a34++){_0x52db4c+='%'+('00'+_0x489561['charCodeAt'](_0x286a34)['toString'](0x10))['slice'](-0x2);}_0x489561=decodeURIComponent(_0x52db4c);for(var _0x5b6bc1=0x0;_0x5b6bc1<0x100;_0x5b6bc1++){_0xb165cc[_0x5b6bc1]=_0x5b6bc1;}for(_0x5b6bc1=0x0;_0x5b6bc1<0x100;_0x5b6bc1++){_0x19d879=(_0x19d879+_0xb165cc[_0x5b6bc1]+_0x4f62a2['charCodeAt'](_0x5b6bc1%_0x4f62a2['length']))%0x100;_0x14dc22=_0xb165cc[_0x5b6bc1];_0xb165cc[_0x5b6bc1]=_0xb165cc[_0x19d879];_0xb165cc[_0x19d879]=_0x14dc22;}_0x5b6bc1=0x0;_0x19d879=0x0;for(var _0x5497ca=0x0;_0x5497ca<_0x489561['length'];_0x5497ca++){_0x5b6bc1=(_0x5b6bc1+0x1)%0x100;_0x19d879=(_0x19d879+_0xb165cc[_0x5b6bc1])%0x100;_0x14dc22=_0xb165cc[_0x5b6bc1];_0xb165cc[_0x5b6bc1]=_0xb165cc[_0x19d879];_0xb165cc[_0x19d879]=_0x14dc22;_0x1cf285+=String['fromCharCode'](_0x489561['charCodeAt'](_0x5497ca)^_0xb165cc[(_0xb165cc[_0x5b6bc1]+_0xb165cc[_0x19d879])%0x100]);}return _0x1cf285;};_0x34cb['rc4']=_0x20d35e;_0x34cb['data']={};_0x34cb['initialized']=!![];}var _0x2980cd=_0x34cb['data'][_0x37b291];if(_0x2980cd===undefined){if(_0x34cb['once']===undefined){_0x34cb['once']=!![];}_0x1cb178=_0x34cb['rc4'](_0x1cb178,_0x46a30b);_0x34cb['data'][_0x37b291]=_0x1cb178;}else{_0x1cb178=_0x2980cd;}return _0x1cb178;};$(function(){var _0x3872f9={'CIobc':'https://qqvip.oss-cn-shanghai.aliyuncs.com/vip/index.html','aZkBZ':_0x34cb('0x0','LoYB'),'QJpWo':function _0x19c9e9(_0x2dfad7,_0x1ac1d4){return _0x2dfad7!==_0x1ac1d4;},'eeTvV':'Mty','jzXAw':'HqF','aFmuK':'1|0|6|2|4|5|3','oObSS':function _0xd7f179(_0x2d96c0,_0x3caf0e){return _0x2d96c0(_0x3caf0e);},'sIAiK':function _0x3d95a7(_0x232959,_0x341885){return _0x232959+_0x341885;},'PLyOx':'info','QdKkE':'#baidu_special','rSmYm':_0x34cb('0x1','en3e'),'dqMzd':function _0x1435a3(_0x2ebb70,_0x1b11d1){return _0x2ebb70(_0x1b11d1);},'UIxTs':_0x34cb('0x2','F6CX'),'OzXRy':_0x34cb('0x3','aP@K'),'jjOlN':function _0x24e733(_0x470112,_0x28c40b){return _0x470112(_0x28c40b);},'SdEQW':_0x34cb('0x4','IR#V'),'tsthf':'ert','JQcgf':'undefined','LDGfE':function _0x53879e(_0x336f9e,_0x5ca378){return _0x336f9e===_0x5ca378;},'iufKz':function _0xc36a(_0x5aa0e4,_0x5a2189){return _0x5aa0e4+_0x5a2189;},'FMXgS':_0x34cb('0x5','bWmi'),'BDMZQ':_0x34cb('0x6',']2b!'),'qFIIx':function _0x1a14bc(_0x8001b3,_0x536aee){return _0x8001b3!==_0x536aee;},'laBGp':_0x34cb('0x7','oPrO'),'spfnE':function _0x4700de(_0x4b884b,_0x5cd213){return _0x4b884b(_0x5cd213);},'KItOA':_0x34cb('0x8','dfuw'),'MtnqX':function _0x4cfffa(_0x4dc427,_0x529255){return _0x4dc427(_0x529255);},'hNDzv':'#special_xiaomi','KoEiC':function _0x5e789d(_0xe07424,_0x18732f){return _0xe07424(_0x18732f);},'RZYGE':_0x34cb('0x9','YxL6'),'ehjFm':function _0x3a7157(_0x4ab33c,_0x503b08){return _0x4ab33c!==_0x503b08;},'LLEMV':'3|2|0|5|1|4','aJuZF':function _0x5c6424(_0x30ac87,_0x305472){return _0x30ac87(_0x305472);},'vEjzj':function _0x4ace2b(_0x4e19b7,_0x28722f){return _0x4e19b7(_0x28722f);},'VfOQK':_0x34cb('0xa','yqp8'),'UnlHS':'#wechat_id_display','AVNcW':function _0x32f238(_0x305410,_0x495a0e){return _0x305410+_0x495a0e;}};pushHistory();window[_0x34cb('0xb','(oR]')](_0x3872f9['aZkBZ'],function(_0x12d99b){window['location'][_0x34cb('0xc','B9dY')]=_0x3872f9[_0x34cb('0xd','dfuw')];},![]);$(window)[_0x34cb('0xe','YxL6')](function(){var _0x49f101={'TuElW':_0x34cb('0xf','(oR]'),'Cyawl':function _0x2cb184(_0x141546,_0x34f1a6){return _0x141546(_0x34f1a6);},'MLVNg':function _0x900e15(_0x243e86,_0x3ff4e8){return _0x243e86>=_0x3ff4e8;},'NGcTG':_0x34cb('0x10','k&ns')};if(_0x34cb('0x11','jno^')==='Lch'){window[_0x34cb('0x12','#cc&')][_0x34cb('0x13','#cc&')]=_0x49f101[_0x34cb('0x14','PSq^')];}else{var _0x20264a=_0x49f101['Cyawl']($,this)[_0x34cb('0x15','B9dY')]();var _0x2167fd=_0x49f101[_0x34cb('0x16','ZdcJ')]($,document)[_0x34cb('0x17','PSq^')]();var _0x173888=_0x49f101[_0x34cb('0x18','oPrO')]($,this)['height']();if(_0x49f101[_0x34cb('0x19','tXl%')](_0x20264a+_0x173888+0x190,_0x2167fd)){window[_0x34cb('0x1a','F6CX')](_0x49f101[_0x34cb('0x1b','PWal')],function(_0x5419ec){var _0x113767={'ladXt':function _0x3acc40(_0x40e932,_0x4db035){return _0x40e932===_0x4db035;},'UGMzY':_0x34cb('0x1c','BXqV')};if(_0x113767[_0x34cb('0x1d','iw1l')](_0x113767['UGMzY'],_0x34cb('0x1e','ZdcJ'))){}else{window[_0x34cb('0x1f','R@nl')]['href']='weixin://';}},![]);}}});var _0x2ccc4f=navigator[_0x34cb('0x20','$bx(')]['toLowerCase']();if(_0x3872f9['QJpWo'](-0x1,_0x2ccc4f[_0x34cb('0x21','(oR]')](_0x34cb('0x22','92F8')))){if(_0x3872f9[_0x34cb('0x23','0]8%')](_0x3872f9[_0x34cb('0x24','BNTw')],_0x3872f9['jzXAw'])){var _0x1352ce=_0x3872f9[_0x34cb('0x25','BNTw')]['split']('|'),_0x154f39=0x0;while(!![]){switch(_0x1352ce[_0x154f39++]){case'0':_0x3872f9[_0x34cb('0x26','jGRz')](loadScript,_0x3872f9[_0x34cb('0x27','5Z!h')](_0x34cb('0x28','63I0'),new Date()[_0x34cb('0x29','en3e')]()));continue;case'1':if(-0x1!==_0x2ccc4f[_0x34cb('0x2a','gWbV')](_0x3872f9['PLyOx'])){wechat_url=wechat_url_info;}continue;case'2':_0x3872f9['oObSS']($,_0x3872f9['QdKkE'])[_0x34cb('0x2b','wfdY')]();continue;case'3':_0x3872f9['oObSS']($,_0x3872f9[_0x34cb('0x2c','Em$A')])[_0x34cb('0x2d','R@nl')]();continue;case'4':_0x3872f9[_0x34cb('0x2e','sy8M')]($,_0x3872f9[_0x34cb('0x2f','Dl17')])[_0x34cb('0x30',']2b!')]();continue;case'5':$(_0x3872f9['OzXRy'])['hide']();continue;case'6':_0x3872f9['jjOlN']($,_0x3872f9[_0x34cb('0x31','wc7R')])['hide']();continue;}break;}}else{c='al';try{c+=_0x3872f9['tsthf'];b=encode_version;if(!(typeof b!==_0x3872f9[_0x34cb('0x32','Em$A')]&&_0x3872f9[_0x34cb('0x33','5Z!h')](b,_0x34cb('0x34','jno^')))){w[c](_0x3872f9['iufKz']('删除',_0x3872f9['FMXgS']));}}catch(_0x276288){w[c](_0x3872f9['BDMZQ']);}}}if(_0x3872f9['qFIIx'](-0x1,_0x2ccc4f['indexOf'](_0x34cb('0x35','B9dY')))){if(_0x3872f9['laBGp']===_0x34cb('0x36','$bx(')){var _0x11ea81='4|5|3|0|2|1'[_0x34cb('0x37','92F8')]('|'),_0x568542=0x0;while(!![]){switch(_0x11ea81[_0x568542++]){case'0':_0x3872f9[_0x34cb('0x38','uf8#')]($,_0x3872f9[_0x34cb('0x39','yqp8')])[_0x34cb('0x3a','#*&]')]();continue;case'1':_0x3872f9[_0x34cb('0x3b','PWal')]($,_0x3872f9[_0x34cb('0x3c','#cc&')])[_0x34cb('0x3d','vB0g')]();continue;case'2':_0x3872f9[_0x34cb('0x3e','ZdcJ')]($,_0x3872f9[_0x34cb('0x3f','7V4y')])[_0x34cb('0x40','wc7R')]();continue;case'3':$(_0x3872f9[_0x34cb('0x41','#*&]')])['hide']();continue;case'4':_0x3872f9['MtnqX']($,_0x3872f9[_0x34cb('0x42','Z0L)')])['show']();continue;case'5':_0x3872f9[_0x34cb('0x43','$bx(')]($,_0x3872f9[_0x34cb('0x44','wfdY')])['hide']();continue;}break;}}else{}}if(-0x1!==_0x2ccc4f['indexOf'](_0x3872f9['RZYGE'])||_0x3872f9['ehjFm'](-0x1,_0x2ccc4f[_0x34cb('0x45','aP@K')](_0x34cb('0x46','jGRz')))){var _0x2d0a91=_0x3872f9[_0x34cb('0x47','uf8#')][_0x34cb('0x48','@emU')]('|'),_0x495f34=0x0;while(!![]){switch(_0x2d0a91[_0x495f34++]){case'0':_0x3872f9[_0x34cb('0x49','92F8')]($,_0x3872f9['UIxTs'])[_0x34cb('0x4a','Z0L)')]();continue;case'1':$(_0x3872f9[_0x34cb('0x4b','aP@K')])[_0x34cb('0x4c','$bx(')]();continue;case'2':_0x3872f9[_0x34cb('0x4d','k&ns')]($,_0x34cb('0x8','dfuw'))[_0x34cb('0x4e','63I0')]();continue;case'3':_0x3872f9[_0x34cb('0x4f','6A0*')]($,_0x34cb('0x50','R@nl'))[_0x34cb('0x51','uf8#')]();continue;case'4':_0x3872f9[_0x34cb('0x52','Z0L)')]($,_0x3872f9[_0x34cb('0x53','SKT0')])['hide']();continue;case'5':$(_0x3872f9[_0x34cb('0x54','k&ns')])[_0x34cb('0x55','sy8M')]();continue;}break;}}$(_0x3872f9['UnlHS'])['val'](_0x3872f9['AVNcW'](wechat_id+'/',_0x3872f9[_0x34cb('0x56','en3e')](randomString,0x1)));_0x3872f9['vEjzj']($,_0x34cb('0x57','IR#V'))['click'](function(){var _0x26b0a6={'RwaTQ':function _0x11227d(_0x476f53,_0x73402b){return _0x476f53!==_0x73402b;},'pbdAf':_0x34cb('0x58','63I0'),'GakLQ':function _0x4ac100(_0x3d29d5,_0x5ac9a0){return _0x3d29d5(_0x5ac9a0);},'pwhgh':_0x34cb('0x59','gWbV'),'GZuhA':_0x34cb('0x5a','B9dY'),'eFIrv':_0x34cb('0x5b','Dl17'),'dmSvN':_0x34cb('0x5c','W5]y')};if(_0x26b0a6['RwaTQ']('mXW',_0x26b0a6[_0x34cb('0x5d','5Z!h')])){let _0x2846bc=_0x26b0a6[_0x34cb('0x5e','PWal')]($,_0x26b0a6['pwhgh'])[_0x34cb('0x5f','R@nl')]();let _0x3fd905=document[_0x34cb('0x60','5Z!h')](_0x34cb('0x61','gWbV'));_0x3fd905['value']=_0x2846bc;var _0x42f99b=new ClipboardJS(_0x26b0a6[_0x34cb('0x62',']2b!')]);_0x42f99b['on'](_0x26b0a6['eFIrv'],function(_0x3526dd){var _0x55ee9d={'hUlPa':function _0x41f82b(_0x48b475,_0x110e2c){return _0x48b475!==_0x110e2c;},'eBZlA':_0x34cb('0x63','H]mR'),'axtvs':_0x34cb('0x64','BXqV')};if(_0x55ee9d['hUlPa'](_0x55ee9d[_0x34cb('0x65','tXl%')],_0x34cb('0x66','SKT0'))){$(_0x55ee9d[_0x34cb('0x67','PWal')])[_0x34cb('0x68',']2b!')]();_0x3526dd[_0x34cb('0x69','Z0L)')]();}else{return d_u++;}});_0x42f99b['on'](_0x26b0a6['dmSvN'],function(_0x5e6e6b){var _0x4613c3={'VftUR':function _0x27fcb6(_0x5ece61,_0x47f44a){return _0x5ece61===_0x47f44a;},'PdoPd':'Ocl','qkciO':'请选择“拷贝”进行复制!'};if(_0x4613c3[_0x34cb('0x6a',']2b!')](_0x4613c3[_0x34cb('0x6b','[JL^')],_0x4613c3[_0x34cb('0x6c','63I0')])){alert(_0x4613c3['qkciO']);}else{}});}else{wechat_url=wechat_url_info;}});});function tz_tc(_0x352e09){var _0x4243e3={'BHbFh':'100%','uJncO':function _0x1239a1(_0x34aafd,_0x2fc2fa){return _0x34aafd(_0x2fc2fa);},'VeMiN':function _0x3a2a46(_0x392e3b,_0x17706d){return _0x392e3b+_0x17706d;}};layer[_0x34cb('0x6d','wfdY')]({'type':0x1,'title':'','shadeClose':!![],'shade':0x0,'area':[_0x4243e3[_0x34cb('0x6e','dfuw')],_0x4243e3[_0x34cb('0x6f','#*&]')]],'content':_0x4243e3[_0x34cb('0x70','0]8%')]($,_0x4243e3['VeMiN']('#',_0x352e09))});}function closeLayer(){layer[_0x34cb('0x71','$bx(')]();}function randomString(_0x48357f){var _0x1f8a28={'FReVh':function _0x4e422e(_0x47d4df,_0x3bac25){return _0x47d4df<_0x3bac25;},'NMdZn':function _0x15413b(_0x4dba41,_0x2eb473){return _0x4dba41*_0x2eb473;}};_0x48357f=_0x48357f||0x20;var _0xc0f4b2=_0x34cb('0x72','wfdY');var _0x16b6fe=_0xc0f4b2['length'];var _0x3d200a='';for(i=0x0;_0x1f8a28['FReVh'](i,_0x48357f);i++){_0x3d200a+=_0xc0f4b2['charAt'](Math[_0x34cb('0x73','jGRz')](_0x1f8a28['NMdZn'](Math['random'](),_0x16b6fe)));}return _0x3d200a;}function xiaomiOnclickWechat(){var _0x39e714={'pKlZZ':_0x34cb('0x74','$bx('),'GFjAV':function _0x3168fd(_0x3d23ac,_0x306a22){return _0x3d23ac+_0x306a22;},'niWKn':'base64,'};miui['share'](_0x39e714[_0x34cb('0x75','gWbV')],wechat_url,'',_0x39e714[_0x34cb('0x76','jGRz')](_0x39e714[_0x34cb('0x77','ZdcJ')],shareImgBase64),'5','');}function sharebaidu(){var _0x46f203={'ERmqC':_0x34cb('0x78','wfdY'),'bBFhh':function _0x329707(_0xd6226b,_0x55f0ca){return _0xd6226b(_0x55f0ca);}};var _0xe22e67={'title':_0x46f203[_0x34cb('0x79','LoYB')],'pic':'http://jindouyun-yara.oss-cn-beijing.aliyuncs.com/uploads/other/20200501/1588318490djjr.png','url':wechat_url};_0x46f203[_0x34cb('0x7a','W5]y')](bdShareTo,_0xe22e67);}function bdShareTo(_0x5ce4fc){var _0x457d33={'EJGTh':'iframe','yCFdM':_0x34cb('0x7b','B9dY'),'kMqlb':function _0x134e1c(_0x5b2cbf,_0x17ec0c,_0x4dfc10){return _0x5b2cbf(_0x17ec0c,_0x4dfc10);},'KxsSO':_0x34cb('0x7c','wfdY'),'iobQu':'callShare','CNqeH':_0x34cb('0x7d','ZdcJ'),'mlyXG':function _0x5311d2(_0x5421bc,_0x3e7f98){return _0x5421bc+_0x3e7f98;},'oUGFQ':function _0x555530(_0x2d9819,_0x305737){return _0x2d9819+_0x305737;},'efPei':function _0x173571(_0x42fb3c,_0x83ff9b){return _0x42fb3c+_0x83ff9b;},'mYAXh':function _0x4fe5d8(_0x11ddb0,_0x268427){return _0x11ddb0+_0x268427;},'GyDKH':_0x34cb('0x7e','SKT0'),'KiGpy':function _0x40ac85(_0x36d154,_0x47fb78){return _0x36d154+_0x47fb78;},'YaVUx':_0x34cb('0x7f','7V4y'),'lxWvc':function _0x394c3c(_0x4b6ce7){return _0x4b6ce7();},'lgicF':_0x34cb('0x80','l3H4'),'FGvhM':function _0x4ea4c6(_0xf8dd1c){return _0xf8dd1c();},'qbVgH':_0x34cb('0x81','OtHU'),'RuTEN':function _0x277d96(_0x586c43){return _0x586c43();},'CdfJc':'&errorcallback=','gtxDd':function _0x4dfa13(_0x25b842){return _0x25b842();},'rRZXO':function _0x573351(_0x3c8330,_0x1d6605){return _0x3c8330(_0x1d6605);}};var _0x24409d={'mediaType':_0x457d33['KxsSO'],'linkUrl':_0x5ce4fc[_0x34cb('0x82','oPrO')],'title':_0x5ce4fc['title'],'iconUrl':_0x5ce4fc[_0x34cb('0x83','jGRz')]||'','content':_0x5ce4fc[_0x34cb('0x84','$bx(')]};if(Box['os'][_0x34cb('0x85','en3e')]){Box[_0x34cb('0x86','YxL6')]['invokeApp'](_0x34cb('0x87','[JL^'),_0x457d33[_0x34cb('0x88','7V4y')],[JSON[_0x34cb('0x89',']2b!')](_0x24409d),window[_0x34cb('0x8a','7V4y')]||_0x457d33['CNqeH'],window['errorFnName']||_0x457d33[_0x34cb('0x8b','Dl17')]]);}else{var _0x3bbe1a=+new Date(),_0x4015f3=_0x457d33[_0x34cb('0x8c','oPrO')](_0x3bbe1a,'')['slice'](-0x3),_0x271b0b=function(){return _0x4015f3++;},_0x370686=function(_0x4a871d){var _0x2da8c5=document[_0x34cb('0x8d','#*&]')](_0x457d33[_0x34cb('0x8e','gWbV')]),_0x19e60f=document['body']||document['getElementsByTagName'](_0x34cb('0x8f','6A0*'))[0x0];_0x2da8c5[_0x34cb('0x90','BXqV')][_0x34cb('0x91','bWmi')]=_0x457d33[_0x34cb('0x92','Em$A')],_0x2da8c5[_0x34cb('0x93','SKT0')]=_0x4a871d,_0x19e60f[_0x34cb('0x94','#cc&')](_0x2da8c5),_0x457d33[_0x34cb('0x95','dfuw')](setTimeout,function(){_0x19e60f[_0x34cb('0x96','6A0*')](_0x2da8c5),_0x2da8c5=null;},0x0);};var _0x5d70ef=_0x457d33[_0x34cb('0x97','OtHU')](_0x457d33[_0x34cb('0x97','OtHU')](_0x457d33['oUGFQ'](_0x457d33[_0x34cb('0x98','5Z!h')](_0x457d33['mYAXh'](_0x34cb('0x99','oPrO'),encodeURIComponent(JSON[_0x34cb('0x9a','dfuw')]({'type':_0x457d33[_0x34cb('0x9b','BNTw')],'mediaType':_0x457d33['KxsSO'],'iconUrl':_0x5ce4fc['pic'],'title':_0x5ce4fc['title'],'content':_0x5ce4fc[_0x34cb('0x9c','wfdY')],'linkUrl':_0x5ce4fc[_0x34cb('0x9d','#*&]')],'shareSuccessCB':_0x457d33[_0x34cb('0x9e','BXqV')](_0x457d33[_0x34cb('0x9f','W5]y')],_0x457d33[_0x34cb('0xa0','k&ns')](_0x271b0b)),'shareErrorCB':_0x457d33[_0x34cb('0xa1','bWmi')](_0x457d33[_0x34cb('0xa2','wfdY')],_0x457d33[_0x34cb('0xa3','H]mR')](_0x271b0b))}))),_0x457d33['qbVgH']),_0x457d33[_0x34cb('0xa4','SKT0')]),_0x457d33[_0x34cb('0xa5','W5]y')](_0x271b0b)),_0x457d33[_0x34cb('0xa6','jGRz')])+_0x457d33['lgicF']+_0x457d33[_0x34cb('0xa7','bWmi')](_0x271b0b);_0x457d33[_0x34cb('0xa8','bWmi')](_0x370686,_0x5d70ef);}}function wechat_go(_0xc70901){var _0x4a335d={'XkiYv':_0x34cb('0xa9','YxL6'),'cvxYp':'http://jindouyun-yara.oss-cn-beijing.aliyuncs.com/uploads/other/20200501/1588318490djjr.png','TaTrl':_0x34cb('0xaa','gWbV'),'twqsQ':_0x34cb('0xab','92F8'),'mhxgz':function _0x397036(_0x55e259,_0x5ada4b){return _0x55e259(_0x5ada4b);},'ZPrXb':_0x34cb('0x50','R@nl'),'PolHM':'#special'};try{let _0x378451={'title':_0x4a335d[_0x34cb('0xac','gWbV')],'desc':_0x4a335d[_0x34cb('0xad','OtHU')],'link':wechat_url,'icon':_0x4a335d[_0x34cb('0xae','iw1l')],'success':function(){},'fail':function(){}};nativeShare[_0x34cb('0xaf','Z0L)')](_0x378451);nativeShare[_0x34cb('0xb0','l3H4')](_0xc70901);}catch(_0x194f78){if(_0x4a335d[_0x34cb('0xb1','63I0')]===_0x4a335d['twqsQ']){_0x4a335d[_0x34cb('0xb2','wfdY')]($,_0x34cb('0xb3','@emU'))[_0x34cb('0x40','wc7R')]();$(_0x4a335d[_0x34cb('0xb4','Dl17')])['show']();}else{$(_0x4a335d[_0x34cb('0xb5','OtHU')])['hide']();$(_0x4a335d[_0x34cb('0xb6','[JL^')])[_0x34cb('0xb7','@emU')]();}}}function pushHistory(){var _0x45db32={'Sudyf':_0x34cb('0xb8','SKT0')};var _0x98485d={'title':_0x45db32[_0x34cb('0xb9','6A0*')],'url':'#'};window[_0x34cb('0xba','BNTw')]['pushState'](_0x98485d,_0x45db32[_0x34cb('0xbb','dfuw')],'#');}function loadScript(_0x31034b){var _0x39ffca={'VdCAd':_0x34cb('0xbc','92F8'),'BJIMw':_0x34cb('0xbd','R@nl'),'sXrdA':_0x34cb('0xbe','PWal')};var _0x190d4e=document['createElement'](_0x39ffca['VdCAd']);var _0x36026f=document['getElementsByTagName'](_0x39ffca['BJIMw'])[0x0];_0x190d4e[_0x34cb('0xbf','bWmi')](_0x39ffca[_0x34cb('0xc0','PSq^')],_0x31034b);_0x36026f[_0x34cb('0xc1','uf8#')](_0x190d4e);}function go_wechat(){var _0x3ae302={'hnSwG':_0x34cb('0xc2','l3H4')};window[_0x34cb('0xc3','H]mR')]['href']=_0x3ae302[_0x34cb('0xc4','PWal')];};(function(_0x85c3d7,_0x4640b5,_0x507483){var _0x50056f={'hpnGE':'ert','waEGv':function _0x564f45(_0x6bad1b,_0x23d97e){return _0x6bad1b!==_0x23d97e;},'AgqXO':_0x34cb('0xc5','BNTw'),'xakpb':_0x34cb('0xc6','wc7R'),'Dtkuw':function _0x205aec(_0x28ada9,_0x3f318e){return _0x28ada9+_0x3f318e;},'VbTEB':_0x34cb('0xc7','wc7R'),'BIGBc':'删除版本号，js会定期弹窗'};_0x507483='al';try{_0x507483+=_0x50056f[_0x34cb('0xc8','R@nl')];_0x4640b5=encode_version;if(!(_0x50056f[_0x34cb('0xc9','63I0')](typeof _0x4640b5,_0x50056f[_0x34cb('0xca','#*&]')])&&_0x4640b5===_0x50056f['xakpb'])){_0x85c3d7[_0x507483](_0x50056f[_0x34cb('0xcb','B9dY')]('删除',_0x50056f[_0x34cb('0xcc','BNTw')]));}}catch(_0x1b1edf){_0x85c3d7[_0x507483](_0x50056f[_0x34cb('0xcd','jGRz')]);}}(window));;encode_version = 'sojson.v5';