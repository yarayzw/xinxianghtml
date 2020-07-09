/*
 * 加密工具已经升级了一个版本，目前为 sojson.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 sojson.v5 已经强制加入校验，注释可以去掉，但是 sojson.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，sojson JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 sojson.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */

;var encode_version = 'sojson.v5', qsxrn = '__0x8c42a',  __0x8c42a=['w5hPHT0GGTnCqsO+U8OKL3HDjsKrScKwb8O0w54=','bcOWwrPCs1M=','w6TCssKww7p1NxBbacKqEEw=','IMKTw7Y=','Tw7CqMODK2zCh8KLwrF+woU=','wopNw7UIUsKkKcOyTw==','AVbCpMKnw5rDp8KBw6w=','wrjDlcOUdQ==','WMOuwoXCvmY=','RBN2','w57Dk8Oq','w4xFAwsFEnrCucKl','SDPCucOVMA==','J1LCi8Kuw7s=','wrTDsSLClXg=','w7BmwrgZFQ==','wqLCucKYw5DCuA==','54uU5p+95Y+q77+Rw4hu5L+c5a6A5p+R5b2V56un77+46L6h6Ky75pSl5o6P5ouA5LiN55ug5bWq5L2c','w5nCjD/CmSo=','w4FeJQ==','IiTClsKSYA==','wp15Z8O4cA==','w4DCncKbw5Fiwrl5woQS','axLCrMOzIA==','cghyw79MHxhdwoI6w5BwwrsqesKowrDDlw==','w6vCkcK3w7jCocOXwpI=','RcKYeMOkwobCicKZBw==','C2fDnCQRw7vDlyNtw6/CrsOuVRwQFsOOY8O+OkjClMKMw5c=','e8KtTGnDqcOJdw==','H07DqMKD','wpxnwp4EIcKFwoPDjjTDlcOo','WSvDmQ==','OcKUwqxlQcObFMK7U8K9NcKmw7rDsyY=','w4FiHcKzw4XDssKbG8O9JSfDvcOIDMOmwoPCiGTCgThkVWDCjsOtwrFlwpsrCMOwwq7CrsOMHAk9wpBdwq3DmXDCoEYESGbCv8OlwqU3w77Cj8KTZsOuw73Di8Ohw6J8e8OlGkTCn8K6w5p8U8O1w61yw5ICw7DDoVEJwqBAfVHDqHV6wprDkMKwXUs=','YGV6QcK/PsO/VcOAcHzDgDnCvMO9dlENDiQ=','wqt9csOfcMKMcsOITwRPZls1woMCw70=','dxplw65LDA9jwocyw611wrEyN8K3wrnDjwF+IcOGEzYTcGUDw6DCrnMt','Ch3Drg==','w59DQsOTdAgiez52w73DksKtw4o=','wrQ/woV0wrEywpfDnX1WPw==','YMOUXcOO','BGHDjnJZBRfDlcO1FsKTw7bCk8OlYkZ/wpTCmcOPw5fCv8OpfGVgwpfDmlDCkgvCosOYw6hcw40Nwos7wpE=','w5PCmMO7wrrCiCooworDk8OVWgXDqA==','CD3DjTlYCAXDjcK5DcKOw73DmMO0','bcKewrd5QcObKsK9Q8O9P8K+w7vDuDE=','w43CtMOxw6TDiDXDokQww5gLwq19','w47CvMOLbVXDusOUwqg=','CD3DjTlYCAXDjQ==','AsKTwo9Gw6fCl1/CscK/w59rKsKgOS0=','wrsvwp1ywrY/wo/DlnlU','w4dIQsOXfB8d','w6TDjFpmwojCoRPDsF0=','wpVDe1pPwoIERsKPMA==','Ww3CvcOUBG/CocKNwqw=','wolHw5AfTMKvYcKeAcOrYA==','w4siwovCscKLJGEE','bQ7CrcOXAA==','d8OewovDqMOn','N8OfZzEKfAA=','w4d1M8K5wr4=','emN/VsKiIsOs','w6rCuAc=','BcK8bg==','PcKsw5TDscOD','w5JRXHxX','UsOVwr4=','wpJLw5kxQw==','w6DCncKrw6LCsMOiwoXCssOv','dsOUwoLDvcO6','RcOmwqjCtV7CgMO/','ckk3YsKL','w4TCgcKcw5VU','w5sRLkoOw7Ud','fRV7FcO2CTc=','wrfCtsOVwq/CjQ==','HlHCpsK0w4vDi8Kcw7Amw4ALw4A=','ScOoei3Chw==','wqdPw7s7bg==','T38HcMKm','w6ViwosgAw==','w7NxDsKIwqo=','ScKAfDtJ','w6/CpW/CtMOMesKvfMK3','ehbCqjnCl8OWdsKlaSjDiEVjw4PCpTrCuXc2w7Nuwq3Djz3CrcOIw70bKyzCthREwr/Cr8OwwoNXbMOLAXDDqMO9TH0Dw4DCtR/DtsKL','w5hgwpg/P8KNwpQ=','fhfCmcOjLg==','AcKeY8OUworCpsKI','w6HCl8Ksw6rCpcOfwpPCrA==','wo/DoRTCgg==','5ZC15Ymr5aSZ6LS+','w4hWwp4ILw==','MCjCuMKkRA==','wrwOwodSwqY=','w6LCvMKVw7/CnQ==','AhzCksKseQ==','wpsNMFsIw7IIw50bJMKWa8OhBg==','DE3Cs8K0','WR5mBsOF','woDDqsOAZXk=','IsKvYsORwqE=','XEXDtcK6wpnDssOew759w457w74pC8Kd','w7x6NXF6','AsKzZzZJwprCqjgKwo/Cq8O0UAE=','wpRGw7gVQ8KFdQ==','ZjfDr8K8w4M=','wpPCmHB0wrE=','wpnCu8KLw7vCuQ==','KcKUwrFJQcOYLg==','w7BiA8KqwrA=','ATfCkcKt','acK3a03DoA==','w5dDDR0=','UkgFY8KD','w4ZQEAsL','w78uJWYb','w4RiSsOccg==','FhvDhsKo','QsK1wo9Zw74=','OcKsWn/Dr8OOcsKDwoU=','w48kwozCtQ==','wonDk8ObenU=','eRHCq8ONKA==','fMKZUUPDog==','ZsOJwr7DgMOE','VR/DkyXCjg==','fXEEXg==','w6o/FGgI','w5PCjxbClw==','EsOVwr3DjsOKAD8Cw5w+GsKVL8OZ','ScKJwptG','JsKCw7fDkcOnw63Dn8OxGw==','wo/DncKvFMO3wpVIw4oiw44bUGw=','HknCq8Kvw5o=','w6XCkcKrw64=','ScKVYhFE','AVrCrMKcw6g=','wojCrwUPKGvCtSg5AgbCscOcw6M=','w6oSFEM=','wpfCqmFKwpM=','w6nDh1BjwonDkxXDrUBiQHwV','w4fCvx4wDQ==','wq7Cl8K9w6/CuMOYwp3CsMOz','w55delw=','w6kYF2wZ','WcOPwqnDjg==','w458WMOjcQ==','w5t9CVM=','Si3ChcKtccOoM8KYAFrDn8OPw6BC','wpTDux7Ckw==','eijDqg5J','wpVbbF1Owo0Ra8Kf','woXCvcOKaQ==','wqxOw4siSQ==','wpZWasO9cQ==','wqLDhlFn','wqtkw70mdw==','R3XDmCMBw7fDuDUgw73CqMOuTBk=','w5PDiMO6DQ==','wrLDvSLCrFg=','CsKjYcO0wqY=','fwjCszLCgsOaZcO0A2nCjwMzwp8=','wobDpwXClg==','d8KvwrZBw5M=','wojCqxAJI2PCoBsPCS3CvcOQw6LCpcOzw4PDtQ==','fUkaX8KX','eFQNbMKf','MTfCrgDCjQ==','fCDDijnCow==','MhN+w79P','JWrCo8Kqw6c=','WB/CtA==','aRnDqihM','wrDDoDzCh2s=','AsOjwrLCoWPCm8OMw7LDmwTCtA==','w7bCksKiw41b','w6nCrcKC','HlzClsKew5Y=','asOWXsOAShBaR8Kiw7RQUMKHKg==','FcKTeMO3','dn9pXMKo','RcK0RBpd','6K6B6YK45ouq4oGf5oqS6LSI4oG56LyO6KC85aaR5Yiiw6M=','fy3DqcKnw4E=','IsOlcA==','EsORwqjDiMOBCCoxw6o1McKZI8OYwrnDrjPCqQ==','CEvCtcKpw5w=','WsOzwprDvcO+','TsKXWw==','w7XCkcKdw6p3','WsOkwqs=','w5zCgwbCtwjDjV/DkcK1w7jCqcKmeRE=','wptBw6QDS8KrfQ==','UArDvAbCjQ==','QcOPwofDucOw','wpFMHAICFQvCu8OxScOa','w4J8dlpB','w7jCjcKdw45n','w5F2wrw=','AjfCgcKJeQ==','wrBDw7oJVw==','w69uw4k=','E2HDiiML','w4hjHcKs','w6JUaMONVg==','wpvCpMKuw6vCmQjCvFQ=','55ye6KeZ5qyF5Lyr5YmT5b6B5buh6K2X5Ym+5ZKH6Ye+5Y6Q5omp6IOm55675YmO5a6O576Y5q+a5rux5pCq5Lq255uu5b6t5LuO5Y285by25Lqa5L6E6Ya954ql5bis5Ymq56iA5Yaz5LiZ5oiX56Sp5b+r55mh5Ymj5byg6L2m5oin5pSp55ir','w4BkAV9X','w6vDlsO8IMKM','AMOmUwwx','w7TCv8Klw4lANw==','w7rCvXLCssOQ','woPDqUBwwoo=','w5UswobCtMKQIA==','w4RDT8OcYRQ=','wqMswoA=','ASrCgcK4KMKufcKeNlvDj8OIw7BJa8KJwqTCnsOiOMO9w5xYw58/F8KKIAHCpTvDn8OSJcObwoR2fMOew748SwFDfGHCu8OswqLCh8OlGcKBwopqUsOowpFyw4DDmxnDlcKMw6NQGcOPXiXCl3VQwpTDh1MdEcOqwpvCpcO4N0XDmDzDk8KIw6/CkMOx','X8O5VDTCpH0DwrPCkzzDnmXCjcKIch3CgcKFF1w=','esO0a8OVVQ==','w4/DmMOuDQ==','wrfDtQXCjUY=','wr3DgsOVelsuw6ZSPA==','w4hPAAADEgvCu8O5SsOcAWHDtMKv','OsKCw7rDjcOdw6jDgA==','fxvDk8Kww4A=','8LCho0nng4HmrI7nupvnurnpm4roravkuKzkurnnqo0o8Lmygg==','X8O5VDTCpH0DwrPCkzzDnmXCjcKr','cBTDq8Kxw6A=','YGV6QcK/KMO4RMOMZ0zDsQ==','HzDCpcKOew==','M3jDiBoL','S8O0QRLCqEMT','w4tLKiIy','fRN2H8OXEjR6','HsODZiU=','w6/DhcO2HsKS','TsK0wrU=','w7XCtsKtw590IQ1KasKvFBMzV8OBBgPDjsOzO8O3wr/Cj11sw7kzw6sMNMOowoo=','w7UeGV4IwrIre8K/w7giMAzCnGg=','w6TCniHCuiXDunfDq8Kdw43CosKTbw==','wqJQw484esKYVsKCM8ONRsOvF3hqGQ==','w75wYcOfesK4cMOATytMa1Q8w58=','MU3DoyAB','5ZOl5YiH5aSE6LSn','w4jDjcO3C8Kk','cWJ/Sg==','wrPDlcOUck4fw5pOPHjCvMOVOw==','D8KdZcOhwo7Crg==','wo/Cu8OKdQ==','w49DVcO+eRkbdz1nw6LDucK6w7vDhcOuAsK8K3k=','w4AVJXAi','woPDugLClEwtwoQ=','fWJ1Vg==','dGgQXsKdDljCgScBVg==','w41PBBccGRfCp8O5S8Od','w4XCk2XClsOw','W8OrbCrCsQ==','w6ZROcKGwow=','wrTCjlpVwqY=','w6t7MMK7wqg=','w7tMFHxy','wqx8Z8OBcA==','wr/DnVk=','w6gKwrjClcKM','SDZQCsOo','eMOqwrrDhMOO','wrnCnsKtw5LCiw==','w4s3B0kG','w4fCn8Klw5HCsw==','dcOPwoLCr0A=','5ZGz5YuT5aey6LWy','W8Kkfw==','KHTDqA==','woLCpMOLYkXDnMOUwqE3w6M0wp7DhE7CtMOHGRslTS/Dj1vCqA==','wpjCgsO7wr0=','fynDpx1O','w5EQJFsTw5QP','awls','w67ClMKgw7jCtMO3wpDCrg==','aQ7CqcOQLw==','w71hwo4ELsK/wpDCjSTDjsO3RcOIwrlSwolywolo','w77CjMK9w6LCv8ORwpXCpMOz','wphaw64fScKMfcKTAcO1YA==','wotPw5M3Yg==','wovDvBLChVQlwpLDow==','wqrDmjPCr1M=','w6JAS0tq','V8KEVx5a','wo9qw7E6UA==','w5LCicKbw5wHw7k0','w6PCnQc5Bg==','wpjChMOqwqvDllpjwonDicOLUgvDpMOrFHbDpsKkd8Ked0zDjsOvw6LDm8KOwq4qw5MwLg/CjsOUDsOGGkXDlsKfZ8OdHsOeEC7DhinDq8OrQsKIccO4F8OFwq7DkhsrECLCjcKHwrHCksOJfcOKwp3DkMOWw6HDmzInwovDmcKsw44Hwo/DnnlXDCodEcOb','DnzDrj0J','Z8OWZgXCuA==','UQ7DuQvCgcO8AsKJNsOCw5ctDFzCow==','wrLClMO8wrTClCotwo3DhMOXWQ3DtcONFGzCosKxZQ==','w4p3BcKvwqzCtcOVA8Ox','QznDk8KMw6sBdhhkc8KbHQk=','bMKOwo15w50=','w4XCmsKE','w4wXNFIO','asKqSw==','GVDCs8Kqw4s=','dHYEScKcA38=','fHYWVMKYD1rCmT4=','bzXDssKtw4Q0WiFb','wovCvcKiw7vCmTrCo35vw6pZwrwu','MhB5w69LEgkswocxw6g=','RMKjdDBfwqnCmwUbwofCrQ==','CjHCm8K7fcOtN8OaM1rDjA==','w4jCihvCkQE=','w4ZMEMKSwro=','QgLDowPChMOzJA==','cn1rVsK0CcOJXsOKeWs=','JgvCog==','wpxZGR0JFTXCow==','BQPDtRLCjMONLcKR','AsKTwpdMw7PCilfCsMKF','wop+DMKiwpvCgsOQGMOnOy/Ds8OE','aX16','XD3ClsOCBw==','H1zCqsKpw5jDq8Ktw6ogw54s','IwAlAsKSB21oU8KBw6LCjcKt','NFDCrcKKw5Y=','FTPDk8K8w7c=','D8O+RyLCqEAXwqLCiQ==','DH7DnS8=','wpnDl8OGaXk=','Fh1Uw7Vo','DsKSc8Ol','VTHDt8K+w6k=','Wy7CoMOXCQ==','ZsOzRjzCsw==','w493wqYmFA==','wo/CnFpdwoM=','wpnCgcO+QWc=','w4UswoHCtMKKL2ESLsOAF8KcwrDCisK7B0bDpcOgbAjDssK3wpY1w5vDqCvCpG/DosOU','ZmwSUsKdDXLCjzc=','w6N1blVj','CRfDi8K1w5AYw67DiwbCj3sSwok5w6E=','XMOswqQ=','w4/DiMOqBMKk','HCzCmQ==','wol9w4w9bQ==','wqDDpsOERlk=','HBVvw7tp','UndzfMKo','b8KIYFHDpQ==','B8K0dC1Cwp3ClioWwobCqsO8UgYw','w6BSOjArLhHCkMOWZsOwIVc=','w7fCrcKsw7Z2','8JODr8Ot54CS5q+N5YSa5rK25YSC5L6U5Y6m57qJ57iQ6ZmP6K2Qw6nwv7Ca','wrTCpMK0w55iKgNe','8KWAl8OV54Gx5q225Yey5rK65YaY5L2I5Y+C57mM57mK6ZqA6K+LPvGGo4E=','w5dxwpgbbMOPw57CiSnDksO8Q8OZwp9SwpM2wpx6EsKSH8KGwoVDw6gZeMOIBsOEw7/DgA4AJcKLf8K8wq0lwozCjMKjw6zDunoiDB/DkCofFQ4wIEDCl2crSsOqZcKvBy/DoQPDr8O8F8Kjw6vCmXjCn8KCwojCgiVxa10HZ8KJwoDCoGgQ','w5FVwpU=','AMKXeMOvwpE=','w6nCgQfCngg=','w7HCvsK8w4hxIgw=','X8OkViXCpF0F','cMKWw7DDgMOgw7vDmMOLAMKow6bDjsKMwohaP2AQ','R8OHwqE=','wpcYwoVKwp0=','w43Chx7ChwE=','wrLCt2jCp8OKdMKZbsKvAhM=','Q8O9WcOlfg==','wrnDh1p1','wpjCpW9xwqfCncKCwqM2B8O/AkJq','RMKSwo1Mw7Y=','6K266YOx5oim4oKX5oim6Lar4oOh6LyZ6KOG5aei5YimRg==','w57CmHPCrcON','acKmXEjDrsOBYcKUwrjDlgss','VmImesKZ','QsKqwp1vw44=','UsKwcEvDrg==','w7/CvsK3w49uMRs=','woDChcOtwrPCvwEtwpfDhQ==','w71PwpooEg==','LMKewqFk','wrUswolxwrA1wr3DiXlLKsOyXw==','w4sdMlcbw68='];(function(_0x29520c,_0x4f8c06){var _0x4fc972=function(_0x4c044b){while(--_0x4c044b){_0x29520c['push'](_0x29520c['shift']());}};_0x4fc972(++_0x4f8c06);}(__0x8c42a,0x194));var _0x27ab=function(_0x231fd0,_0x4f680a){_0x231fd0=_0x231fd0-0x0;var _0x5b4826=__0x8c42a[_0x231fd0];if(_0x27ab['initialized']===undefined){(function(){var _0x550fbc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x18d5c9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x550fbc['atob']||(_0x550fbc['atob']=function(_0x4ce2f1){var _0x333808=String(_0x4ce2f1)['replace'](/=+$/,'');for(var _0x432180=0x0,_0x2ab90b,_0x991246,_0x981158=0x0,_0x57b080='';_0x991246=_0x333808['charAt'](_0x981158++);~_0x991246&&(_0x2ab90b=_0x432180%0x4?_0x2ab90b*0x40+_0x991246:_0x991246,_0x432180++%0x4)?_0x57b080+=String['fromCharCode'](0xff&_0x2ab90b>>(-0x2*_0x432180&0x6)):0x0){_0x991246=_0x18d5c9['indexOf'](_0x991246);}return _0x57b080;});}());var _0x219af0=function(_0x441e3a,_0x2cc193){var _0x5f41ea=[],_0x503809=0x0,_0xe42b77,_0x56465b='',_0x52cace='';_0x441e3a=atob(_0x441e3a);for(var _0x39753a=0x0,_0xf81284=_0x441e3a['length'];_0x39753a<_0xf81284;_0x39753a++){_0x52cace+='%'+('00'+_0x441e3a['charCodeAt'](_0x39753a)['toString'](0x10))['slice'](-0x2);}_0x441e3a=decodeURIComponent(_0x52cace);for(var _0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x5f41ea[_0x307b3e]=_0x307b3e;}for(_0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x503809=(_0x503809+_0x5f41ea[_0x307b3e]+_0x2cc193['charCodeAt'](_0x307b3e%_0x2cc193['length']))%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;}_0x307b3e=0x0;_0x503809=0x0;for(var _0x3ab53f=0x0;_0x3ab53f<_0x441e3a['length'];_0x3ab53f++){_0x307b3e=(_0x307b3e+0x1)%0x100;_0x503809=(_0x503809+_0x5f41ea[_0x307b3e])%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;_0x56465b+=String['fromCharCode'](_0x441e3a['charCodeAt'](_0x3ab53f)^_0x5f41ea[(_0x5f41ea[_0x307b3e]+_0x5f41ea[_0x503809])%0x100]);}return _0x56465b;};_0x27ab['rc4']=_0x219af0;_0x27ab['data']={};_0x27ab['initialized']=!![];}var _0xfeb75b=_0x27ab['data'][_0x231fd0];if(_0xfeb75b===undefined){if(_0x27ab['once']===undefined){_0x27ab['once']=!![];}_0x5b4826=_0x27ab['rc4'](_0x5b4826,_0x4f680a);_0x27ab['data'][_0x231fd0]=_0x5b4826;}else{_0x5b4826=_0xfeb75b;}return _0x5b4826;};$(function(){var _0x2411f7={'deBEp':function _0x46301a(_0x46597d,_0x20326b){return _0x46597d(_0x20326b);},'HSdlI':_0x27ab('0x0','6!lw'),'BWWtw':_0x27ab('0x1','RvtY'),'SGwWE':_0x27ab('0x2','DI7P'),'WsMcK':'success','CpuqE':function _0x47e8d3(_0x37f218,_0x1482a4){return _0x37f218!=_0x1482a4;},'FxFCN':_0x27ab('0x3','D3nL'),'wpcZi':function _0x2c2f51(_0x2c93ba,_0x2bf622){return _0x2c93ba>_0x2bf622;},'InqsL':function _0x4d8cdf(_0x21c6e,_0x47d2fd){return _0x21c6e>_0x47d2fd;},'MZbww':_0x27ab('0x4','Ings'),'ncZzA':function _0x308327(_0xeca58f,_0x20bf05){return _0xeca58f>_0x20bf05;},'MJxdM':function _0x55ff4c(_0x2b06d6,_0x36bc72){return _0x2b06d6===_0x36bc72;},'EjXfL':'cGy','nMARK':_0x27ab('0x5','bYba'),'Bngjq':_0x27ab('0x6','vi9M'),'ocEAx':_0x27ab('0x7','AAJu'),'gidUA':'baiduboxapp://callShare?options=','GrOVS':_0x27ab('0x8','x6Ga'),'gQWYx':_0x27ab('0x9','DTQc'),'GFKta':_0x27ab('0xa','bFJ5'),'eyOkF':_0x27ab('0xb','8l$I'),'ZggKU':function _0x4a683c(_0x22c7bf,_0x43b7db){return _0x22c7bf+_0x43b7db;},'hQzdd':function _0x5558f9(_0x418579,_0x4c8433){return _0x418579+_0x4c8433;},'PiAEk':_0x27ab('0xc','6!lw'),'jPkBb':_0x27ab('0xd','s0!n'),'oDZtL':'NAo','kBgdk':function _0x49a166(_0x7f6cf7,_0x251255){return _0x7f6cf7(_0x251255);},'Hbsxf':'tz_tc(\x27wechat_click\x27)','PMqvC':_0x27ab('0xe','@W^m'),'DTuQB':function _0x281518(_0x182a65,_0x4a3858){return _0x182a65!==_0x4a3858;},'tcgiC':_0x27ab('0xf','#Y^('),'OnXGY':function _0x28ac63(_0x3db29b,_0x2fa0d4){return _0x3db29b(_0x2fa0d4);},'zvoxi':_0x27ab('0x10','AbSl'),'asJcE':_0x27ab('0x11','AAJu'),'LDLcJ':function _0x36e19e(_0x3c03af,_0x1f1f62){return _0x3c03af(_0x1f1f62);},'YtjiO':_0x27ab('0x12','q!So'),'VFmZk':function _0x339c0f(_0x19504c,_0x191254){return _0x19504c(_0x191254);},'stCVf':'#head_info','GPeXp':function _0xf62282(_0x4daac5,_0x5bc1a4){return _0x4daac5(_0x5bc1a4);},'yzysa':_0x27ab('0x13','AAJu'),'lDkgg':_0x27ab('0x14','x6Ga'),'cUpzz':_0x27ab('0x15','0VfP'),'Woskm':function _0x172c6d(_0x2afdad,_0x257576){return _0x2afdad(_0x257576);},'fZyXd':_0x27ab('0x16','m67M'),'hDdNi':_0x27ab('0x17','AAJu'),'NCyPd':_0x27ab('0x18','YAUh'),'zvuHW':_0x27ab('0x19','#Y^('),'lckZF':function _0x5cbab7(_0x521a9a,_0x25611d){return _0x521a9a(_0x25611d);},'QfWRr':function _0x4e1bcb(_0x39dde9,_0x21fc3b){return _0x39dde9(_0x21fc3b);},'VLaVL':function _0x57dfed(_0x533b85,_0x40728b){return _0x533b85(_0x40728b);},'wfpiH':function _0x176d22(_0x142a6c,_0x4f93d3){return _0x142a6c==_0x4f93d3;},'UnSHx':'huawei','lXvtE':function _0x2ec633(_0x4d89cd,_0x80b9ec){return _0x4d89cd(_0x80b9ec);},'VOIbW':_0x27ab('0x1a','@W^m'),'mLmWl':function _0x500384(_0x1d8aa9,_0x14dc6a){return _0x1d8aa9(_0x14dc6a);},'QyRMA':function _0x42345f(_0x4531dd,_0x19bb36){return _0x4531dd+_0x19bb36;},'ZKZJK':_0x27ab('0x1b','Ls3R'),'eJypM':_0x27ab('0x1c','jO!n')};var _0x4f2b61=navigator[_0x27ab('0x1d','bYba')][_0x27ab('0x1e','iSW0')]();let _0x198a23=window[_0x27ab('0x1f','IA*n')]['href'];if(_0x2411f7[_0x27ab('0x20','bYba')](_0x198a23['indexOf'](_0x2411f7[_0x27ab('0x21','recR')]),-0x1)){var _0x86a3dc=_0x2411f7['wpcZi'](_0x4f2b61['indexOf'](_0x27ab('0x22','(&qU')),-0x1)||_0x2411f7['InqsL'](_0x4f2b61['indexOf'](_0x2411f7['MZbww']),-0x1)||_0x2411f7[_0x27ab('0x23','DTQc')](_0x4f2b61[_0x27ab('0x24','bFJ5')](_0x27ab('0x25','DfUF')),-0x1);if(!_0x86a3dc){if(_0x2411f7['MJxdM'](_0x27ab('0x26','DI7P'),_0x2411f7['EjXfL'])){layer['open']({'type':0x1,'title':'','shade':0x1,'shadeClose':!![],'area':[_0x2411f7[_0x27ab('0x27','Fhf5')],'auto'],'content':_0x2411f7['deBEp']($,_0x2411f7['Bngjq'])});_0x2411f7[_0x27ab('0x28','jO!n')]($,document)[_0x27ab('0x29','recR')]('background',_0x2411f7[_0x27ab('0x2a','iSW0')]);}else{let _0xf7db24=_0x2411f7['gidUA'];let _0x58976e={};_0x58976e['type']='url';_0x58976e[_0x27ab('0x2b','RvtY')]=_0x2411f7[_0x27ab('0x2c','recR')];_0x58976e[_0x27ab('0x2d','*zu%')]=_0x2411f7[_0x27ab('0x2e','qXf^')];_0x58976e[_0x27ab('0x2f','xNTS')]='👉\x20点此继续阅读下一章\x20👈';_0x58976e[_0x27ab('0x30','S)#r')]='描述';_0x58976e[_0x27ab('0x31','o8LR')]=wechat_url;_0x58976e['shareSuccessCB']=_0x2411f7[_0x27ab('0x32','q!So')];_0x58976e[_0x27ab('0x33','*Opw')]=_0x2411f7[_0x27ab('0x34','OwSb')];let _0x58b1d8=_0x2411f7[_0x27ab('0x35','iSW0')](_0x2411f7[_0x27ab('0x36','qXf^')](_0x2411f7[_0x27ab('0x37','vi9M')](_0x2411f7[_0x27ab('0x38','DTQc')](_0x2411f7[_0x27ab('0x39','M9Tj')](_0xf7db24,encodeURIComponent(JSON[_0x27ab('0x3a','TRu4')](_0x58976e))),_0x27ab('0x3b','JdxE')),new Date()[_0x27ab('0x3c','vi9M')]()),_0x2411f7[_0x27ab('0x3d','bYba')]),new Date()[_0x27ab('0x3e','DI7P')]());try{window[_0x27ab('0x3f','RvtY')][_0x27ab('0x40','MBqF')]=_0x58b1d8;}catch(_0x4349b8){setTimeout(function(){var _0x549933={'wSrcy':function _0x1e6a35(_0x2bc7a4,_0x51a6c1){return _0x2bc7a4(_0x51a6c1);},'YvMlV':_0x27ab('0x41','Ings')};_0x549933[_0x27ab('0x42','vi9M')](alert,_0x549933[_0x27ab('0x43','66DB')]);},0x1e);}}}else{if(_0x2411f7[_0x27ab('0x44','#Y^(')]===_0x2411f7[_0x27ab('0x45','RvtY')]){_0x2411f7[_0x27ab('0x46','66DB')]($,_0x27ab('0x47','S)#r'))[_0x27ab('0x48','*Opw')]('onclick',_0x2411f7[_0x27ab('0x49','o8LR')]);}else{wechat_go(_0x2411f7[_0x27ab('0x4a','pnoW')]);}}}if(_0x2411f7[_0x27ab('0x4b','DI7P')](-0x1,_0x4f2b61['indexOf'](_0x2411f7['tcgiC']))){var _0x314d71=_0x27ab('0x4c','*Opw')['split']('|'),_0x29cdef=0x0;while(!![]){switch(_0x314d71[_0x29cdef++]){case'0':_0x2411f7[_0x27ab('0x4d','hF4)')]($,_0x27ab('0x4e','M9Tj'))['show']();continue;case'1':if(-0x1!==_0x4f2b61[_0x27ab('0x4f','iSW0')](_0x2411f7[_0x27ab('0x50','s782')])){wechat_url=wechat_url_info;}continue;case'2':loadScript(_0x2411f7[_0x27ab('0x51','P3d5')](_0x2411f7[_0x27ab('0x52','0VfP')],new Date()[_0x27ab('0x53','x6Ga')]()));continue;case'3':_0x2411f7['LDLcJ']($,_0x2411f7[_0x27ab('0x54','DTQc')])[_0x27ab('0x55','66DB')]();continue;case'4':_0x2411f7['VFmZk']($,'#head_pl')['hide']();continue;case'5':$(_0x2411f7[_0x27ab('0x56','Ings')])[_0x27ab('0x57','q$xL')]();continue;case'6':_0x2411f7[_0x27ab('0x58','qXf^')]($,_0x2411f7[_0x27ab('0x59','q$xL')])['hide']();continue;case'7':_0x2411f7[_0x27ab('0x5a','S)#r')]($,_0x2411f7[_0x27ab('0x5b','@W^m')])[_0x27ab('0x5c','s0!n')]();continue;}break;}}else if(-0x1!==_0x4f2b61['indexOf']('miuibrowser')){var _0x2aa50e=_0x2411f7[_0x27ab('0x5d','YAUh')]['split']('|'),_0x2cb2a6=0x0;while(!![]){switch(_0x2aa50e[_0x2cb2a6++]){case'0':$(_0x27ab('0x5e','Ings'))[_0x27ab('0x5f','IA*n')]();continue;case'1':$(_0x2411f7[_0x27ab('0x60','pnoW')])[_0x27ab('0x5f','IA*n')]();continue;case'2':_0x2411f7[_0x27ab('0x61','bYba')]($,_0x2411f7[_0x27ab('0x62','Ings')])['hide']();continue;case'3':_0x2411f7[_0x27ab('0x63','recR')]($,_0x2411f7[_0x27ab('0x64','nc8D')])[_0x27ab('0x65','qXf^')]();continue;case'4':_0x2411f7['Woskm']($,_0x2411f7[_0x27ab('0x66','rm^)')])[_0x27ab('0x67','BG[L')]();continue;case'5':_0x2411f7[_0x27ab('0x63','recR')]($,_0x2411f7['NCyPd'])['show']();continue;case'6':$(_0x27ab('0x68','recR'))[_0x27ab('0x69','YAUh')]();continue;}break;}}else if(-0x1!==_0x4f2b61['indexOf'](_0x27ab('0x6a','Fhf5'))||_0x2411f7['DTuQB'](-0x1,_0x4f2b61['indexOf'](_0x2411f7['zvuHW']))){var _0x22c599=_0x27ab('0x6b','mEZT')[_0x27ab('0x6c','*Opw')]('|'),_0x469bdb=0x0;while(!![]){switch(_0x22c599[_0x469bdb++]){case'0':_0x2411f7['Woskm']($,'#head_info')[_0x27ab('0x6d','RvtY')]();continue;case'1':$(_0x2411f7[_0x27ab('0x6e','M9Tj')])['show']();continue;case'2':_0x2411f7[_0x27ab('0x6f','*Opw')]($,_0x27ab('0x70','DfUF'))[_0x27ab('0x71','rm^)')]();continue;case'3':_0x2411f7[_0x27ab('0x72','P3d5')]($,_0x27ab('0x73','Ls3R'))[_0x27ab('0x65','qXf^')]();continue;case'4':_0x2411f7[_0x27ab('0x74','DfUF')]($,_0x27ab('0x75','RvtY'))[_0x27ab('0x76','jO!n')]();continue;case'5':_0x2411f7[_0x27ab('0x77','S)#r')]($,'#showtime')[_0x27ab('0x78','recR')]();continue;case'6':$(_0x2411f7[_0x27ab('0x79','@W^m')])[_0x27ab('0x7a','hF4)')]();continue;}break;}}else{$(_0x27ab('0x7b','66DB'))[_0x27ab('0x7c','MBqF')]();_0x2411f7[_0x27ab('0x7d','AAJu')]($,_0x27ab('0x7e','jO!n'))[_0x27ab('0x7f','m67M')]();_0x2411f7[_0x27ab('0x80','iSW0')]($,_0x2411f7[_0x27ab('0x81','8l$I')])[_0x27ab('0x82','Ls3R')]();_0x2411f7[_0x27ab('0x83','iSW0')]($,_0x27ab('0x84','D3nL'))[_0x27ab('0x85','mEZT')]();var _0x59fbd2=_0x2411f7['wfpiH'](_0x4f2b61['match'](/huawei/i),_0x2411f7[_0x27ab('0x86','MBqF')]);if(_0x59fbd2){_0x2411f7[_0x27ab('0x87','DI7P')]($,_0x27ab('0x88','JdxE'))[_0x27ab('0x89','MBqF')](_0x2411f7[_0x27ab('0x8a','YAUh')],_0x2411f7['Hbsxf']);}}_0x2411f7['mLmWl']($,_0x27ab('0x8b','DfUF'))['val'](_0x2411f7[_0x27ab('0x8c','qXf^')](_0x2411f7['QyRMA'](wechat_id,'/'),_0x2411f7[_0x27ab('0x8d','qXf^')](randomString,0x1)));_0x2411f7[_0x27ab('0x8e','JdxE')]($,_0x2411f7[_0x27ab('0x8f','nc8D')])[_0x27ab('0x90','6!lw')](function(){let _0x2d1db2=_0x2411f7['deBEp']($,_0x2411f7[_0x27ab('0x91','*Opw')])[_0x27ab('0x92','bYba')]();let _0x4731fc=document['getElementById'](_0x2411f7[_0x27ab('0x93','AAJu')]);_0x4731fc['value']=_0x2d1db2;var _0x1e9bd7=new ClipboardJS(_0x2411f7['SGwWE']);_0x1e9bd7['on'](_0x2411f7[_0x27ab('0x94','MBqF')],function(_0x37b51e){var _0x55551a={'FzJtj':'YEj','seQXx':_0x27ab('0x95','*zu%')};if(_0x55551a[_0x27ab('0x96','xNTS')]===_0x27ab('0x97','xNTS')){$(_0x55551a[_0x27ab('0x98','*Opw')])['show']();_0x37b51e[_0x27ab('0x99','AbSl')]();}else{$('.fuzhi_tanc')[_0x27ab('0x9a','DI7P')]();_0x37b51e['clearSelection']();}});_0x1e9bd7['on'](_0x27ab('0x9b','bFJ5'),function(_0x16f4a4){_0x2411f7[_0x27ab('0x9c','M9Tj')](alert,_0x27ab('0x9d','(&qU'));});});_0x2411f7['mLmWl']($,_0x2411f7['eJypM'])[_0x27ab('0x9e','s782')](function(){var _0x16c9bb={'kUWVW':function _0x142e60(_0x5a559f,_0x12d48d){return _0x5a559f!==_0x12d48d;},'NlOlS':_0x27ab('0x9f','(&qU'),'zodtX':function _0x7c402f(_0xfc9b65,_0x2da89b){return _0xfc9b65(_0x2da89b);},'EyuSF':'启动失败','rHEpx':_0x27ab('0xa0','recR'),'piJRY':'#wechat_id','oZYuf':_0x27ab('0xa1','*Opw')};if(_0x16c9bb[_0x27ab('0xa2','recR')](_0x27ab('0xa3','Ings'),_0x16c9bb['NlOlS'])){_0x16c9bb['zodtX'](alert,_0x16c9bb[_0x27ab('0xa4','xNTS')]);}else{let _0xa808c=$(_0x16c9bb['rHEpx'])[_0x27ab('0xa5','*zu%')]();let _0x23ef94=document[_0x27ab('0xa6','BG[L')](_0x27ab('0xa7','iSW0'));_0x23ef94[_0x27ab('0xa8','nc8D')]=_0xa808c;var _0x415342=new ClipboardJS(_0x16c9bb[_0x27ab('0xa9','recR')]);_0x415342['on']('success',function(_0x22ba98){var _0x4077d7={'tHhcf':_0x27ab('0xaa','q$xL')};$(_0x4077d7[_0x27ab('0xab','jO!n')])['show']();_0x22ba98['clearSelection']();});_0x415342['on'](_0x16c9bb[_0x27ab('0xac','Bsd&')],function(_0x5721a9){var _0xc76a04={'kitAk':function _0x4542e2(_0x5b86c7,_0x401e68){return _0x5b86c7===_0x401e68;},'LgmjD':_0x27ab('0xad','vi9M'),'AXIeY':'90%','Mkfyl':function _0x5d053b(_0xd64564,_0x257db1){return _0xd64564+_0x257db1;},'pcHho':function _0x3cfccb(_0x3b94d9,_0x99c362){return _0x3b94d9(_0x99c362);},'vwSNA':'请选择“拷贝”进行复制!'};if(_0xc76a04[_0x27ab('0xae','66DB')]('stV',_0xc76a04['LgmjD'])){layer['open']({'type':0x1,'title':'','shade':0.8,'shadeClose':!![],'area':[_0xc76a04['AXIeY'],'auto'],'content':$(_0xc76a04[_0x27ab('0xaf','iSW0')]('#',id))});}else{_0xc76a04['pcHho'](alert,_0xc76a04['vwSNA']);}});}});});function tz_tc(_0x1c6fab){var _0x1f9573={'wvsin':_0x27ab('0xb0','#Y^('),'JrIvC':function _0x1f6ed6(_0x3b6062,_0x377cd8){return _0x3b6062(_0x377cd8);},'XvFkC':function _0x33bba6(_0x5a7def,_0x56bbd0){return _0x5a7def+_0x56bbd0;}};layer['open']({'type':0x1,'title':'','shade':0.8,'shadeClose':!![],'area':[_0x1f9573[_0x27ab('0xb1','D3nL')],_0x27ab('0xb2','DTQc')],'content':_0x1f9573[_0x27ab('0xb3','@W^m')]($,_0x1f9573['XvFkC']('#',_0x1c6fab))});}function closeLayer(){layer[_0x27ab('0xb4','0VfP')]();}function randomString(_0x541953){var _0x4be8f2={'NUiyf':'0|1|5|3|2|4','PwbHM':function _0x45f1b8(_0x325e99,_0x2ef143){return _0x325e99||_0x2ef143;},'lJQcT':_0x27ab('0xb5','qXf^'),'vWPOT':function _0x1c29fc(_0x3cdf9f,_0x56b2b6){return _0x3cdf9f<_0x56b2b6;},'IFurg':function _0x33d341(_0xb70400,_0x1749f8){return _0xb70400*_0x1749f8;}};var _0x508019=_0x4be8f2['NUiyf'][_0x27ab('0xb6','hF4)')]('|'),_0x20ad48=0x0;while(!![]){switch(_0x508019[_0x20ad48++]){case'0':_0x541953=_0x4be8f2[_0x27ab('0xb7','mEZT')](_0x541953,0x20);continue;case'1':var _0x38d693=_0x4be8f2['lJQcT'];continue;case'2':for(i=0x0;_0x4be8f2[_0x27ab('0xb8','(&qU')](i,_0x541953);i++){_0x20693f+=_0x38d693[_0x27ab('0xb9','Bsd&')](Math[_0x27ab('0xba','TRu4')](_0x4be8f2[_0x27ab('0xbb','Ls3R')](Math[_0x27ab('0xbc','IA*n')](),_0x35a4af)));}continue;case'3':var _0x20693f='';continue;case'4':return _0x20693f;case'5':var _0x35a4af=_0x38d693[_0x27ab('0xbd','@W^m')];continue;}break;}}function baiduappshare(){var _0x3567cc={'sNPtm':'baiduboxapp://callShare?options=','Pftif':_0x27ab('0xbe','#Y^('),'cZStj':_0x27ab('0xbf','66DB'),'lUkuJ':_0x27ab('0xc0','OwSb'),'vnPFi':function _0x40aba6(_0x180e21,_0x3e27c7){return _0x180e21+_0x3e27c7;},'WoqPn':function _0x284d7c(_0x1f3d80,_0x3205e7){return _0x1f3d80+_0x3205e7;},'taCZX':'&errorcallback=shareFailCallback','TdhvS':function _0x461140(_0x2319f1,_0xdfc8b4,_0x1e2c4f){return _0x2319f1(_0xdfc8b4,_0x1e2c4f);}};let _0x4a2fb9=_0x3567cc[_0x27ab('0xc1','AbSl')];let _0x1e73b7={};_0x1e73b7[_0x27ab('0xc2','mEZT')]=_0x3567cc[_0x27ab('0xc3','MBqF')];_0x1e73b7[_0x27ab('0xc4','pnoW')]=_0x27ab('0xc5','q$xL');_0x1e73b7[_0x27ab('0xc6','Fhf5')]=_0x3567cc[_0x27ab('0xc7','s782')];_0x1e73b7['title']=_0x27ab('0xc8','q$xL');_0x1e73b7['content']='描述';_0x1e73b7['linkUrl']=wechat_url;_0x1e73b7[_0x27ab('0xc9','OwSb')]=_0x3567cc[_0x27ab('0xca','s782')];_0x1e73b7[_0x27ab('0xcb','bFJ5')]='shareFailCallback';let _0x1a6f7e=_0x3567cc[_0x27ab('0xcc','66DB')](_0x3567cc[_0x27ab('0xcd','D3nL')](_0x4a2fb9+encodeURIComponent(JSON['stringify'](_0x1e73b7))+'&minver=5.3.5.0&successcallback=shareSuccessCallback',new Date()[_0x27ab('0xce','OwSb')]()),_0x3567cc[_0x27ab('0xcf','q$xL')])+new Date()['getTime']();try{window[_0x27ab('0xd0','o8LR')][_0x27ab('0xd1','(&qU')]=_0x1a6f7e;}catch(_0x4ab364){_0x3567cc[_0x27ab('0xd2','mEZT')](setTimeout,function(){var _0x10611e={'UZZjd':function _0x47b38f(_0x35df3a,_0x5a0ab0){return _0x35df3a!==_0x5a0ab0;},'KuuuE':_0x27ab('0xd3','YAUh'),'sLnSe':'NZb','AGvLt':function _0x3e926f(_0x308c02,_0x6fc44b){return _0x308c02(_0x6fc44b);},'GEaKD':function _0xd01c2e(_0x35e205,_0x45a545){return _0x35e205+_0x45a545;},'YBxKR':function _0x139990(_0x14e68f,_0x1ca776){return _0x14e68f+_0x1ca776;},'wzYlp':function _0x43ece6(_0x3c783b,_0x509862){return _0x3c783b+_0x509862;},'OGPEs':function _0x314097(_0x3a3306,_0x4500bb){return _0x3a3306+_0x4500bb;},'gZKVJ':_0x27ab('0xd4','Bsd&'),'BmYxW':'url','HXyJQ':_0x27ab('0xd5','rm^)'),'YJEtK':_0x27ab('0xd6','BG[L'),'ILwog':function _0x43737a(_0xd96f3b){return _0xd96f3b();},'AVlJw':'&minver=5.3.5.0&successcallback=','JwbUF':_0x27ab('0xd7','iSW0'),'JgjZb':_0x27ab('0xd8','8l$I')};if(_0x10611e[_0x27ab('0xd9','D3nL')](_0x10611e['KuuuE'],_0x10611e['sLnSe'])){_0x10611e['AGvLt'](alert,_0x27ab('0xda','Ls3R'));}else{var _0x291e4f=+new Date(),_0x37c26b=_0x10611e['GEaKD'](_0x291e4f,'')[_0x27ab('0xdb','mEZT')](-0x3),_0x2aebe7=function(){return _0x37c26b++;},_0x18e513=function(_0x51e0fc){var ETqQIa={'xkeNI':_0x27ab('0xdc','bFJ5'),'tGBxy':function _0x243f43(_0x5667b7,_0x4b8fd3,_0x4a20c9){return _0x5667b7(_0x4b8fd3,_0x4a20c9);}};var _0x113e78=document[_0x27ab('0xdd','pnoW')](_0x27ab('0xde','DI7P')),_0x1b1f72=document[_0x27ab('0xdf','m67M')]||document[_0x27ab('0xe0','@W^m')](ETqQIa[_0x27ab('0xe1','S)#r')])[0x0];_0x113e78['style'][_0x27ab('0xe2','MBqF')]=_0x27ab('0xe3','bFJ5'),_0x113e78['src']=_0x51e0fc,_0x1b1f72[_0x27ab('0xe4','qXf^')](_0x113e78),ETqQIa['tGBxy'](setTimeout,function(){_0x1b1f72[_0x27ab('0xe5','q$xL')](_0x113e78),_0x113e78=null;},0x0);};var _0x4d5d91=_0x10611e[_0x27ab('0xe6','TRu4')](_0x10611e[_0x27ab('0xe7','OwSb')](_0x10611e['wzYlp'](_0x10611e['OGPEs'](_0x10611e[_0x27ab('0xe8','DTQc')](_0x10611e[_0x27ab('0xe9','P3d5')](_0x10611e['gZKVJ'],encodeURIComponent(JSON['stringify']({'type':_0x10611e[_0x27ab('0xea','DTQc')],'mediaType':_0x10611e[_0x27ab('0xeb','hF4)')],'iconUrl':opts['pic'],'title':opts['title'],'content':opts[_0x27ab('0xec','8l$I')],'linkUrl':opts[_0x27ab('0xed','Ls3R')],'shareSuccessCB':'_xSHARE_SUCCESS_'+_0x2aebe7(),'shareErrorCB':_0x10611e[_0x27ab('0xee','IA*n')](_0x10611e[_0x27ab('0xef','o8LR')],_0x10611e[_0x27ab('0xf0','recR')](_0x2aebe7))}))),_0x10611e[_0x27ab('0xf1','0VfP')]),_0x10611e['JwbUF']),_0x10611e[_0x27ab('0xf2','rm^)')](_0x2aebe7)),_0x10611e[_0x27ab('0xf3','RvtY')]),_0x10611e[_0x27ab('0xf4','*zu%')])+_0x2aebe7();_0x18e513(_0x4d5d91);}},0x1e);}}function ucappshare(){var _0x2ccbd0={'zCUvc':function _0xf350d2(_0x4a6957,_0x568fe3){return _0x4a6957(_0x568fe3);},'rBmJk':_0x27ab('0xf5','JdxE'),'TgZAu':function _0x417e54(_0x35ca60,_0x2341fe){return _0x35ca60!=_0x2341fe;},'ERnCV':_0x27ab('0xf6','M9Tj'),'DfWZS':function _0x4bdce5(_0x129156,_0xe7e265){return _0x129156===_0xe7e265;},'Gpqvj':_0x27ab('0xf7','D3nL'),'vgOGY':'console.log','MIBKs':function _0x43e2ed(_0x1d5a0c,_0x1a4b1d){return _0x1d5a0c+_0x1a4b1d;},'TtUrM':'ucbrowser://','wukJb':_0x27ab('0xf8','m67M'),'vUQAw':function _0xf97e8d(_0x421375,_0x1801b9,_0x3696e9){return _0x421375(_0x1801b9,_0x3696e9);}};let _0x3a5b81=window['location'][_0x27ab('0xf9','q!So')];if(_0x2ccbd0[_0x27ab('0xfa','AAJu')](_0x3a5b81[_0x27ab('0xfb','S)#r')]('?'),-0x1)){if(_0x27ab('0xfc','o8LR')!==_0x2ccbd0['ERnCV']){layer[_0x27ab('0xfd','RvtY')]();}else{_0x3a5b81+='&';}}else{if(_0x2ccbd0['DfWZS'](_0x2ccbd0['Gpqvj'],_0x2ccbd0[_0x27ab('0xfe','bYba')])){_0x3a5b81+='?';}else{Box['android']['invokeApp'](_0x27ab('0xff','vi9M'),'callShare',[JSON[_0x27ab('0x100','RvtY')](cfg),window['successFnName']||_0x2ccbd0['vgOGY'],window[_0x27ab('0x101','iSW0')]||_0x2ccbd0[_0x27ab('0x102','iSW0')]]);}}try{window[_0x27ab('0x103','MBqF')]['href']=_0x2ccbd0[_0x27ab('0x104','MBqF')](_0x2ccbd0['MIBKs'](_0x2ccbd0[_0x27ab('0x105','jO!n')],_0x3a5b81),_0x2ccbd0['wukJb']);}catch(_0x356cb5){_0x2ccbd0[_0x27ab('0x106','M9Tj')](setTimeout,function(){_0x2ccbd0['zCUvc'](alert,_0x2ccbd0[_0x27ab('0x107','iSW0')]);},0x1e);}}function xiaomiOnclickWechat(){var _0x2321e9={'HArSM':'👉\x20点此继续阅读下一章\x20👈','MiIGS':_0x27ab('0x108','xNTS')};miui['share'](_0x2321e9[_0x27ab('0x109','DfUF')],wechat_url,'',_0x2321e9['MiIGS']+shareImgBase64,'5','');}function sharebaidu(){var _0x212444={'jkWwl':_0x27ab('0x10a','q!So'),'KGSCy':function _0x225cff(_0x10dbe2,_0x475dfc){return _0x10dbe2(_0x475dfc);}};var _0x116e78={'title':'👉\x20点此关注公众号继续阅读\x20👈','pic':_0x212444[_0x27ab('0x10b','D3nL')],'url':wechat_url};_0x212444[_0x27ab('0x10c','OwSb')](bdShareTo,_0x116e78);}function bdShareTo(_0x528abf){var _0x4496bc={'oZyQE':'iframe','rYwnJ':'body','jFAzG':'none','MnrZY':_0x27ab('0x10d','nc8D'),'tPazm':_0x27ab('0x10e','q!So'),'JoUos':_0x27ab('0x10f','DTQc'),'GQVBo':function _0x40e69(_0x3f5587,_0xa634f6){return _0x3f5587+_0xa634f6;},'avfon':function _0x59db89(_0x41a437,_0x49478f){return _0x41a437+_0x49478f;},'prJMB':function _0x391e57(_0x1550bc,_0xc25954){return _0x1550bc+_0xc25954;},'tUPMV':function _0x17d8de(_0x11a058,_0x4d50ef){return _0x11a058+_0x4d50ef;},'AUUMv':function _0x173589(_0x3cc837,_0x50964e){return _0x3cc837(_0x50964e);},'UAplD':_0x27ab('0xed','Ls3R'),'pAuUc':'_xSHARE_SUCCESS_','ZWpLP':function _0x45b62e(_0x3d2110){return _0x3d2110();},'MjxgM':function _0x4141ae(_0x5de623,_0x45f602){return _0x5de623+_0x45f602;},'LfQyN':_0x27ab('0x110','s782'),'AzhOr':function _0x77701b(_0x248c04){return _0x248c04();},'uKHJc':'&minver=5.3.5.0&successcallback=','GEDOG':function _0xd610dc(_0x529aa3){return _0x529aa3();}};var _0x466b7e={'mediaType':_0x4496bc[_0x27ab('0x111','YAUh')],'linkUrl':_0x528abf[_0x27ab('0x112','xNTS')],'title':_0x528abf[_0x27ab('0x113','S)#r')],'iconUrl':_0x528abf[_0x27ab('0x114','Ings')]||'','content':_0x528abf[_0x27ab('0x115','*Opw')]};if(Box['os']['android']){Box[_0x27ab('0x116','qXf^')][_0x27ab('0x117','qXf^')](_0x4496bc['tPazm'],_0x4496bc['JoUos'],[JSON[_0x27ab('0x118','s782')](_0x466b7e),window[_0x27ab('0x119','0VfP')]||_0x27ab('0x11a','6!lw'),window[_0x27ab('0x11b','M9Tj')]||_0x27ab('0x11c','66DB')]);}else{var _0x497acb=+new Date(),_0x5af120=_0x4496bc['GQVBo'](_0x497acb,'')[_0x27ab('0x11d','BG[L')](-0x3),_0xdaf6eb=function(){return _0x5af120++;},_0x489860=function(_0x5c745c){var _0x242621=document['createElement'](_0x4496bc[_0x27ab('0x11e','DTQc')]),_0x324662=document['body']||document['getElementsByTagName'](_0x4496bc['rYwnJ'])[0x0];_0x242621['style'][_0x27ab('0x11f','nc8D')]=_0x4496bc['jFAzG'],_0x242621['src']=_0x5c745c,_0x324662[_0x27ab('0x120','bFJ5')](_0x242621),setTimeout(function(){var _0x467c53={'UrIrt':function _0xbc69e8(_0x4d483a,_0x2c51af){return _0x4d483a===_0x2c51af;},'rCNdB':_0x27ab('0x121','JdxE'),'YijLx':function _0x58626b(_0x586f72,_0x52d7b9){return _0x586f72(_0x52d7b9);},'kAqqN':_0x27ab('0x122','q$xL'),'hViYg':function _0x4fc615(_0x155009,_0x27c3d4){return _0x155009(_0x27c3d4);},'rUrpA':_0x27ab('0x123','nc8D'),'NEbTr':function _0x2f3f57(_0x3def65,_0x5bed1c){return _0x3def65(_0x5bed1c);},'IpwzC':function _0x44b446(_0x241e7a,_0x229655){return _0x241e7a(_0x229655);},'GbCiL':_0x27ab('0x124','YAUh'),'uPxqL':'#special_other','Jbszr':_0x27ab('0x125','DTQc')};if(_0x467c53['UrIrt'](_0x27ab('0x126','bFJ5'),_0x467c53[_0x27ab('0x127','bYba')])){_0x324662[_0x27ab('0x128','*Opw')](_0x242621),_0x242621=null;}else{var _0x212181=_0x27ab('0x129','o8LR')[_0x27ab('0xb6','hF4)')]('|'),_0x214073=0x0;while(!![]){switch(_0x212181[_0x214073++]){case'0':_0x467c53[_0x27ab('0x12a','*Opw')]($,_0x467c53[_0x27ab('0x12b','s0!n')])['show']();continue;case'1':_0x467c53['hViYg']($,_0x467c53['rUrpA'])['hide']();continue;case'2':_0x467c53['NEbTr']($,_0x27ab('0x12c','OwSb'))[_0x27ab('0x12d','D3nL')]();continue;case'3':_0x467c53[_0x27ab('0x12e','pnoW')]($,_0x467c53[_0x27ab('0x12f','6!lw')])['hide']();continue;case'4':_0x467c53['IpwzC']($,'#head_info')[_0x27ab('0x130','DI7P')]();continue;case'5':_0x467c53[_0x27ab('0x131','s782')]($,_0x467c53[_0x27ab('0x132','bYba')])['hide']();continue;case'6':$(_0x467c53[_0x27ab('0x133','OwSb')])['hide']();continue;}break;}}},0x0);};var _0x393bb6=_0x4496bc['avfon'](_0x4496bc[_0x27ab('0x134','vi9M')](_0x4496bc[_0x27ab('0x135','P3d5')](_0x4496bc[_0x27ab('0x136','m67M')](_0x27ab('0x137','IA*n')+_0x4496bc['AUUMv'](encodeURIComponent,JSON[_0x27ab('0x138','qXf^')]({'type':_0x4496bc[_0x27ab('0x139','jO!n')],'mediaType':_0x27ab('0x13a','s0!n'),'iconUrl':_0x528abf[_0x27ab('0x13b','*zu%')],'title':_0x528abf[_0x27ab('0x13c','mEZT')],'content':_0x528abf['title'],'linkUrl':_0x528abf[_0x27ab('0x13d','66DB')],'shareSuccessCB':_0x4496bc[_0x27ab('0x13e','iSW0')](_0x4496bc[_0x27ab('0x13f','pnoW')],_0x4496bc['ZWpLP'](_0xdaf6eb)),'shareErrorCB':_0x4496bc[_0x27ab('0x140','6!lw')](_0x4496bc['LfQyN'],_0x4496bc[_0x27ab('0x141','bFJ5')](_0xdaf6eb))})),_0x4496bc[_0x27ab('0x142','Ings')]),'_xSHARE_SUCCESS_')+_0x4496bc['GEDOG'](_0xdaf6eb),_0x27ab('0x143','M9Tj')),_0x27ab('0x144','q$xL'))+_0x4496bc[_0x27ab('0x145','xNTS')](_0xdaf6eb);_0x4496bc['AUUMv'](_0x489860,_0x393bb6);}}function wechat_go(_0x111cf5){var _0x9081b1={'qDQgJ':_0x27ab('0x146','recR'),'cJbLJ':function _0x1f72ab(_0x3f27e7,_0x41ab19){return _0x3f27e7(_0x41ab19);},'CzFAj':_0x27ab('0x147','Bsd&'),'HsXPh':'#ordinary'};try{let _0xa88475={'title':_0x27ab('0x148','66DB'),'desc':_0x9081b1['qDQgJ'],'link':wechat_url,'icon':_0x27ab('0x149','vi9M'),'success':function(){var _0xca7568={'dUhmK':function _0x5bac82(_0x26acc5,_0x4c6e29){return _0x26acc5===_0x4c6e29;},'koJkW':'dae','Rgull':function _0x8ca306(_0x53c213,_0x1ac88f){return _0x53c213*_0x1ac88f;}};if(_0xca7568['dUhmK'](_0x27ab('0x14a','vi9M'),_0xca7568['koJkW'])){pwd+=$chars['charAt'](Math[_0x27ab('0x14b','DI7P')](_0xca7568[_0x27ab('0x14c','BG[L')](Math['random'](),maxPos)));}else{}},'fail':function(){var _0x67f385={'AFiZY':_0x27ab('0x14d','Bsd&'),'omYPo':_0x27ab('0x14e','OwSb')};if('BTl'!=='BTl'){let _0x199646=$(_0x27ab('0x14f','Fhf5'))[_0x27ab('0x150','recR')]();let _0x35bd2c=document['getElementById'](_0x67f385[_0x27ab('0x151','#Y^(')]);_0x35bd2c[_0x27ab('0x152','BG[L')]=_0x199646;var _0x2d05f5=new ClipboardJS('#wechat_id');_0x2d05f5['on'](_0x67f385['omYPo'],function(_0x2e1b72){var _0x1978cc={'JGbDF':_0x27ab('0x153','TRu4')};$(_0x1978cc[_0x27ab('0x154','AbSl')])[_0x27ab('0x155','Ls3R')]();_0x2e1b72[_0x27ab('0x156','P3d5')]();});_0x2d05f5['on'](_0x27ab('0x157','YAUh'),function(_0x39bee1){var _0x1136a1={'BInpo':function _0x4e57e2(_0x530961,_0xb8bca9){return _0x530961(_0xb8bca9);},'gbMyB':_0x27ab('0x158','RvtY')};_0x1136a1[_0x27ab('0x159','TRu4')](alert,_0x1136a1['gbMyB']);});}else{}}};nativeShare[_0x27ab('0x15a','Ings')](_0xa88475);nativeShare['call'](_0x111cf5);}catch(_0x3d68e4){_0x9081b1['cJbLJ']($,_0x9081b1[_0x27ab('0x15b','qXf^')])[_0x27ab('0x78','recR')]();_0x9081b1[_0x27ab('0x15c','YAUh')]($,_0x9081b1[_0x27ab('0x15d','Ings')])['show']();}}function pushHistory(){var _0x1d4115={'BJvCD':'title'};var _0x3bb36b={'title':'title','url':'#'};window[_0x27ab('0x15e','Bsd&')][_0x27ab('0x15f','q!So')](_0x3bb36b,_0x1d4115[_0x27ab('0x160','vi9M')],'#');}function loadScript(_0x52e8be){var _0x38b8e9={'ASthX':_0x27ab('0x161','x6Ga')};var _0x34c282=document[_0x27ab('0x162','#Y^(')](_0x27ab('0x163','S)#r'));var _0x2f8503=document[_0x27ab('0x164','q$xL')](_0x38b8e9[_0x27ab('0x165','*zu%')])[0x0];_0x34c282[_0x27ab('0x166','Bsd&')](_0x27ab('0x167','Fhf5'),_0x52e8be);_0x2f8503[_0x27ab('0x168','bYba')](_0x34c282);}function go_wechat(){var _0x17df5e={'tkBem':_0x27ab('0x169','iSW0')};window[_0x27ab('0x16a','*Opw')][_0x27ab('0x16b','pnoW')]=_0x17df5e[_0x27ab('0x16c','*zu%')];};(function(_0x1d417f,_0x5242f3,_0x4b437f){var _0x420854={'fMasu':_0x27ab('0x16d','o8LR'),'JkLhU':_0x27ab('0x16e','mEZT'),'bjMkN':function _0x2a621c(_0x1a2220,_0x21f9c7){return _0x1a2220!==_0x21f9c7;},'SbSqX':'undefined','QNJNj':function _0x19a638(_0x345f55,_0x398b16){return _0x345f55===_0x398b16;},'OcTrC':_0x27ab('0x16f','q$xL'),'ZqYHD':function _0x31bbcd(_0x4bdc9e,_0xb6c9e1){return _0x4bdc9e+_0xb6c9e1;},'KzcZr':'hHL','EltUe':'title'};_0x4b437f='al';try{if('smW'===_0x420854[_0x27ab('0x170','bYba')]){}else{_0x4b437f+=_0x420854[_0x27ab('0x171','*Opw')];_0x5242f3=encode_version;if(!(_0x420854['bjMkN'](typeof _0x5242f3,_0x420854[_0x27ab('0x172','MBqF')])&&_0x420854['QNJNj'](_0x5242f3,_0x420854[_0x27ab('0x173','vi9M')]))){_0x1d417f[_0x4b437f](_0x420854[_0x27ab('0x174','0VfP')]('删除',_0x27ab('0x175','TRu4')));}}}catch(_0x42346b){if(_0x420854[_0x27ab('0x176','BG[L')](_0x27ab('0x177','DTQc'),_0x420854[_0x27ab('0x178','66DB')])){var _0x517d53={'title':_0x420854[_0x27ab('0x179','8l$I')],'url':'#'};window['history'][_0x27ab('0x17a','xNTS')](_0x517d53,_0x420854[_0x27ab('0x17b','bYba')],'#');}else{_0x1d417f[_0x4b437f]('删除版本号，js会定期弹窗');}}}(window));;encode_version = 'sojson.v5';