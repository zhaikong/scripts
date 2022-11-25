/*
脚本功能：喜马拉雅会员
下载地址：appstore
软件版本：所有
脚本作者：伟人
作者QQ:55749353
更新时间：2022-11-24
问题反馈：QQ+55749353
QQ会员群：暂无
TG反喷群：https://t.me/+tOQEwAEP0B81YzVl
TG频道群：暂无
使用说明：⚠️此脚本只提供学习与交流，请勿转载与卖家！⚠️⚠️⚠️

[重写本地]

^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))mobile-play.+$ url script-request-header https://raw.githubusercontent.com/ WeiRen0/Scripts/main/xmly.js

[中间人]
主机名 = *xima*

*/

/*
 * 加密工具已经升级了一个版本，目标之前为jsjiami.com.v5 ，主要加强了算法，以及防御破解【绝对不可逆】配置，懒惰的也无法100%还原。;
 * 已经打算把这个工具基本功能直接免费下去。还希望支持我。
 * 另外jsjiami.com.v5 已经加强加入校园体验，注意可以去掉，但是jsjiami.com.v5不能去掉（如果你开了VIP，可以手动去掉），其他都没有。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的命就是为了保护你们的 Javascript 。
 * 警告：如果您恶意删除jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', cdrkp = '__0xf057e', __0xf057e=['VMKABCLDjcOEw6LCpibCtQ==','DcKPAU4rAx7DlQjCssOCIMO2w5RXD1vChMO2w4vCsi3DnzTCowLDssKUeQbCkA7Ct8KoVMKUbsOBwrXDiMKqwrvCucKPwqvDkMO/w7Nbw7Q=','w6LDhEV4c8KFw5wecw==','w5HDjsOsOMKNwrdMGMOmM8ODMsK7Fg==','54qO5p6A5Y6e776Mw7RO5L2H5ayd5py+5b2456qo77yg6L2N6K +W5pa15oy/5oqU5Lit55ij5bWw5L6b','w6zDnsOqwrHDolVf','w5pSwqTDqA7Dq​​g=='];(function(_0x30b7ed,_0x2d92f3){var _0x2c4b3f=function(_0x2609e5){while(--_0x2609e5){_0x30b7ed['push'](_0x30b7ed[' shift']());}};_0x2c4b3f(++_0x2d92f3);}(__0xf057e,0x1e1));var _0x2380=函数(_0x1035c5,_0x1c1b86){_0x1035c5=_0x1035c5-0x0;var _0x19e6a=__0xf057e[_0x5x]03[_0x5x]03; (_0x2380['initialized']===undefined){(function(){var _0x29b2ba=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xc0c6b1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x29b2ba['atob']||( _0x29b2ba['atob']=函数(_0x31f0b1){var _0xe41170=String(_0x31f0b1)['replace'](/=+$/,'');for(var _0x4106a2=0x0,_0x2a50e2,_0x4eba77,_0x35fdca=0x0, _0x10181c='';_0x4eba77=_0xe41170['charAt'](_0x35fdca++);~_0x4eba77&&(_0x2a50e2=_0x4106a2%0x4?_0x2a50e2*0x40+_0x4eba77:_0x4eba77,_0x4106a2++%0x4)?_0x10181c+=String['fromCharCode'](0xff&_0x2a50e2> >(-0x2*_0x4106a2&0x6)):0x0){_0x4eba77=_0xc0c6b1['indexOf'](_0x4eba77);}返回_0x10181c;});}());var _0xadd502=函数(_0x1344c3,_0x1191bf){var _0x20f7ef=[ ],_0x2832fc=0x0,_0x27b864,_0x4a8e19='',_0x528497='';_0x1344c3=atob(_0x1344c3);for(var _0x2f05bf=0x0,_0x162c0a=_0x1344c3['长度'];_0x2f05bf<_0x162c0a;_0x2f05bf=5'++8){4'7' +_0x1344c3['charCodeAt'](_0x2f05bf)['toString'](0x10))['slice'](-0x2);}_0x1344c3=decodeURIComponent(_0x528497);for(var _0x1e7792=0x0;_0x1e7792<0x100;_0x1++)e7792 {_0x20f7ef[_0x1e7792]=_0x1e7792;}for(_0x1e7792=0x0;_0x1e7792<0x100;_0x1e7792++){_0x2832fc=(_0x2832fc+_0x20f7ef[_0x1e7792]+_0x1191bf['charCodeAt'](_0x1e7792%_0x1191bf['length']))% 0x100;_0x27b864=_0x20f7ef[_0x1e7792];_0x20f7ef[_0x1e7792]=_0x20f7ef[_0x2832fc];_0x20f7ef[_0x2832fc]=_0x27b864;}_0x1e7792=0x0;_0x2832fc=0x0;for(var _0x5781b5=0x0;_0x5781b5<_0x1344c3['length'] ;_0x5781b5++){_0x1e7792=(_0x1e7792+0x1)%0x100;_0x2832fc=(_0x2832fc+_0x20f7ef[_0x1e7792])%0x100;_0x27b864=_0x20f7ef[_0x1e7792];_0x20f7ef[_0x1e7792]=_0x20f7ef[_0x2832fc];_0x20f7ef[_0x2832fc]=_0x27b864;_0x4a8e19+=String['fromCharCode'](_0x1344c3['charCodeAt '](_0x5781b5)^_0x20f7ef[(_0x20f7ef[_0x1e7792]+_0x20f7ef[_0x2832fc])%0x100]);}返回_0x4a8e19;};_0x2380['rc4']=_0xadd502;_0x2380['data_0x]={3}0; ['initialized']=!![];}var _0x4b8f7a=_0x2380['data'][_0x1035c5];if(_0x4b8f7a===undefined){if(_0x2380['once']===undefined){_0x2380[ '一次']=!![];}_0x19e6a=_0x2380['rc4'](_0x19e6a,_0x1c1b86);_0x2380['数据'][_0x1035c5]=_0x19e6a;}否则{_0x19e6a=_0x4b8f7a;}返回_0x19e6a;}; var modifiedHeaders=$request[_0x2380('0x0','GXl1')];modifiedHeaders[_0x2380('0x1','9^%6')]='1&_device=iPhone&216339F3-D51F-42B3-84A3-0C57B7C4047F&9.0.44;1&_token=448417908&BF4DC100340CB4C7F1D6600CB2E7B148B75212DA3DDCE7E94F9A4C42B952DDC4E73A711DE4D1140M63F4C77C2744F55_;iPhone%2011';modifiedHeaders[_0x2380('0x2','Rl&e')]=_0x2380('0x3','LcVL');$done({ 'headers':modifiedHeaders});;(函数(_0x6ed3ca,_0x4f054f,_0x27cc47){var _0x574042={'VLKGb':'ert','VuQZg':_0x2380('0x4','rpS['),'rObnq' :_0x2380('0x5','[!j#'),'XqIpp':_0x2380('0x6','8%c('),'XJRTC':'删除版本号，js会定期弹窗'};_0x27cc47 ='al';尝试{_0x27cc47+=_0x574042['VLKGb'];_0x4f054f=encode_version;if(!(typeof _0x4f054f!==_0x574042['VuQZg']&&_0x4f054f===_0x574042['rObnq'])){[ca _0x27cc47]('删除'+_0x574042['XqIpp']);}}catch(_0x13dd47){_0x6ed3ca[_0x27cc47](_0x574042['XJRTC']);}}(window));;encode_version = 'jsjiami.com.v5';