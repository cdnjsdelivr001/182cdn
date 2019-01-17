function killErrors(){return true;}window.onerror=killErrors;

var ad2="0";
var ad4="0";
var ad6="0";
var ad8="0";
var adtoptxt="";
var adtop="";
var adfoot="";
var mail="";
var sihu="";
var footlink="";
var listad="";
var txtcommend="";
var txtgg="";
var vodhelp="";
var vodhelp1="";
var vodhelp2='<div style="color:blue;padding-top:5px">【提示：在线播放为标清版，若对画质有要求的朋友，请选择下载高清版到本地播放】</div>';
var palyhelp="";
var playhelp="";
var adLeftCouple="";
var adRightCouple="";
var adLeftFloat="";
var adRightFloat="";
var adLeftCoupleTop=0;
var adLeftCoupleLeft=0;
var adLeftCoupleTxt="";
var adRightCoupleTop=0;
var adRightCoupleRight=0;
var adRightCoupleTxt="";
var adLeftFloatLeft=0;
var adLeftFloatBottom=0;
var adLeftFloatTxt="";
var adRightFloatRight=0;
var adRightFloatBottom=0;
var adRightFloatTxt="";
var adplayer="";
var tongji="";
var cssurl="";
var adhost=window.location.host.toLowerCase();
var btnClose = "";
var picTopAds = "";
var picFootAds = "";
var dyplayTxt = "";

var myDate = new Date();
var date1 = (myDate.getMonth()+1);
date1="0"+date1;
var day1 = myDate.getDate();
day1="0"+day1;
//取后2位
date1=date1.substring(date1.length-2,date1.length);
day1=day1.substring(day1.length-2,day1.length);





//关闭按钮，暂时未用
btnClose = '<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:closeFloat();" style="color:white;text-decoration:none;">×</a></div>';

function scrollx(p){
	var d = document,dd = d.documentElement,db = d.body,w = window,o = d.getElementById(p.id),ie6 = /msie 6/i.test(navigator.userAgent),style,timer;
	if(o){
		o.style.cssText +=";z-index:999;position:"+(p.ofloat&&!ie6?'fixed':'absolute')+";"+(p.oleft==undefined?'':'left:'+p.oleft+'px;')+(p.otop==undefined?'':'top:'+p.otop+'px')+(p.oright==undefined?'':'right:'+p.oright+'px;')+(p.obottom==undefined?'':'bottom:'+p.obottom+'px');
		if(p.ofloat&&ie6){
			if (p.otop!=undefined){
				o.style.cssText += ';top:expression(documentElement.scrollTop + '+p.otop+' + "px" );';
			}
			if(p.oleft!=undefined){
				o.style.cssText += ';left:expression(documentElement.scrollLeft + '+p.oleft+' + "px");';
			}
			if (p.obottom!=undefined){
				o.style.cssText += ';top:expression(documentElement.clientHeight - '+o.offsetHeight+' + documentElement.scrollTop - ' +p.obottom+' + "px" );';
			}
			if (p.oright!=undefined){
				o.style.cssText += ';left:expression(documentElement.clientWidth - '+o.offsetWidth+' + documentElement.scrollLeft - ' +p.oright+' + "px" );';
			}
			dd.style.cssText +=';background-image: url(about:blank);background-attachment:fixed;';
		}else{
			if(!p.ofloat){
				w.onresize = w.onscroll = function(){
					clearInterval(timer);
					timer = setInterval(function(){
						//双选择为了修复chrome 下xhtml解析时dd.scrollTop为 0
						var st = (dd.scrollTop||db.scrollTop),c;
						c = st - o.offsetTop + (p.otop!=undefined?p.otop:(w.innerHeight||dd.clientHeight)-o.offsetHeight);
						if(c!=0){
							o.style.top = o.offsetTop + Math.ceil(Math.abs(c)/10)*(c<0?-1:1) + 'px';
						}else{
							clearInterval(timer);
						}
					},10)
				}
			}
		}
	}
}

//首页金沙广告
adjsIndex="<A href=\"https://www.51jsjs.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fucqkirrsjg30xc02s0wj.gif\" width=\"100%\"><\/A>";
adhgIndex="<A href=\"https://www.895nn.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fucqqigkl4g30xc02sjte.gif\" width=\"100%\"><\/A>";

xdjsIndex="<A href=\"https://www.51jsjs.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fucqkirrsjg30xc02s0wj.gif\" width=\"100%\"><\/A>";
xdhgIndex="<A href=\"https://www.895nn.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fucqqigkl4g30xc02sjte.gif\" width=\"100%\"><\/A>";


//广告顶部文字
//adtoptxt=""

//广告顶部通栏
 adtop=adtop+"<A href=\"https://www.018ww.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" alt=\"太阳城\" src=\"https://wx3.sinaimg.cn/large/0060lm7Tly1fz9kp421w6g30xc05k0yv.gif\" width=\"100%\"><\/A>";
 adtop=adtop+"<A href=\"https://www.51jsjs.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" alt=\"金沙\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"100%\"><\/A>";
 adtop=adtop+"<A href=\"https://www.895nn.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" alt=\"皇冠\" src=\"https://wx2.sinaimg.cn/large/0060lm7Tly1fz9km26ee2g30xc05kgvr.gif\" width=\"100%\"><\/A>";
 adtop=adtop+"<A href=\"https://www.51jsjs.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" alt=\"大香蕉\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"100%\"><\/A>";
 adtop=adtop+"<A href=\"https://www.51jsjs.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" alt=\"大香蕉\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"100%\"><\/A>";
 adtop=adtop+"<A href=\"https://www.895nn.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" alt=\"大香蕉\" src=\"https://ww1.sinaimg.cn/large/007i4MEmgy1fz73ijs1qag30qo028n22.jpg\" width=\"100%\"><\/A>";
 adtop=adtop+"<A href=\"https://www.895nn.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" alt=\"大香蕉\" src=\"https://ww1.sinaimg.cn/large/007i4MEmgy1fz73ijs1qag30qo028n22.jpg\" width=\"100%\"><\/A>";
 adtop=adtop+"<A href=\"https://www.018ww.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" alt=\"大香蕉\" src=\"https://ww1.sinaimg.cn/large/007i4MEmgy1fz73kjou12g30r803wq78.jpg\" width=\"100%\"><\/A>";
 	 
	//adtop=adtop+"<A href=\"https://www.895nn.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fucqqigkl4g30xc02sjte.gif\" width=\"100%\"><\/A>";
//广告2下
	adfoot=adfoot+"<A href=\"https://www.51jsjs.com/main.html?m=reg\" target=\"_blank\"><img alt=\"182tv大香蕉\" border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"100%\"><\/A>";
    adfoot=adfoot+"<A href=\"https://www.51jsjs.com/main.html?m=reg\" target=\"_blank\"><img alt=\"182tv大香蕉\" border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"100%\"><\/A>";
    adfoot=adfoot+"<A href=\"https://www.895nn.com/main.html?m=reg\" target=\"_blank\"><img alt=\"182tv大香蕉\" border=\"0\" src=\"https://ww1.sinaimg.cn/large/007i4MEmgy1fz73ijs1qag30qo028n22.jpg\" width=\"100%\"><\/A>";
    adfoot=adfoot+"<A href=\"https://www.895nn.com/main.html?m=reg\" target=\"_blank\"><img alt=\"182tv大香蕉\" border=\"0\" src=\"https://ww1.sinaimg.cn/large/007i4MEmgy1fz73ijs1qag30qo028n22.jpg\" width=\"100%\"><\/A>";
    
   // adfoot=adfoot+"<\/div></div>";


        //adfoot=adfoot+"<div style='width:960px;margin:0 auto;height:25px;line-height:25px;clear:both;font-size:14px;'></div>";
	//adfoot=adfoot+"</div>";


//底部信息
//        footlink=footlink+"<div style='width:960px;margin:0 auto;height:50px;line-height:50px;clear:both;font-size:14px;'>站点申明：我们立足于美利坚合众国，受北美法律保护,未满18岁或被误导来到这里，请立即离开！| 广告联系: @ </div>";


//对联和漂浮
	adLeftCoupleTop=230;
	adLeftCoupleLeft=0;
	adLeftCoupleTxt='<a href="https://www.51jsjs.com/main.html?m=reg" target="_blank"><img src="https://wx4.sinaimg.cn/large/006fVPCvly1fucqsc2h7ug304609qgo0.gif" border="0" width="150" height="350" class="pho_hide"></a>';

	adRightCoupleTop=230;
	adRightCoupleRight=0;
    adRightCoupleTxt='<a href="https://www.895nn.com/main.html?m=reg" target="_blank"><img src="https://wx4.sinaimg.cn/large/006fVPCvly1fucqo5ustig304609qwgz.gif" border="0" width="150" height="350" class="pho_hide"></a>';

	//adLeftFloatLeft=0;
	//adLeftFloatBottom=0;
	//adLeftFloatTxt='<a href="https://www.8y789.com/main.html?m=reg" target="_blank"><img src="/images/qrcode2.jpg" border="0" width="180" height="200"></a>';

	//adRightFloatRight=0;
	//adRightFloatBottom=0;
    //adRightFloatTxt='<a href="https://www.8y789.com/main.html?m=reg" target="_blank"><img src="/images/qrcode2.jpg" border="0" width="180" height="200"></a>';



	//以下代码请勿修改
	//ipad|
	if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iphone/i)){
		if (adLeftCoupleTxt!=""){
            adLeftCouple+='<div id="leftCouple" style="position:absolute;top:'+adLeftCoupleTop+'px;left:'+adLeftCoupleLeft+'px;">'+adLeftCoupleTxt+'<div class="pho_hide" style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="leftCouple.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
            document.writeln(adLeftCouple);
            scrollx({id:'leftCouple',otop:adLeftCoupleTop,oleft:adLeftCoupleLeft,ofloat:1})
        }
        if (adRightCoupleTxt!=""){
            adRightCouple+='<div id="rightCouple" style="position:absolute;top:'+adRightCoupleTop+'px;right:'+adRightCoupleRight+'px;">'+adRightCoupleTxt+'<div class="pho_hide"  style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="rightCouple.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
            document.writeln(adRightCouple);
            scrollx({id:'rightCouple',otop:adRightCoupleTop,oright:adRightCoupleRight,ofloat:1})
        }
		if (adLeftFloatTxt!=""){
			adLeftFloat+='<div id="leftFloat" style="position:absolute;bottom:'+adLeftFloatBottom+'px;left:'+adLeftFloatLeft+'px;">'+adLeftFloatTxt+'</div>';
			document.writeln(adLeftFloat);
			scrollx({id:'leftFloat',oleft:adLeftFloatLeft,obottom:adLeftFloatBottom,ofloat:1})
		}
		if (adRightFloatTxt!=""){
			adRightFloat+='<div id="rightFloat" style="position:absolute;bottom:'+adRightFloatBottom+'px;right:'+adRightFloatRight+'px;">'+adRightFloatTxt+'</div>';
			document.writeln(adRightFloat);
			scrollx({id:'rightFloat',oright:adRightFloatRight,obottom:adRightFloatBottom,ofloat:1})
		}
	}else{
        if (adLeftCoupleTxt!=""){
            adLeftCouple+='<div id="leftCouple" style="position:absolute;top:'+adLeftCoupleTop+'px;left:'+adLeftCoupleLeft+'px;">'+adLeftCoupleTxt+'<div class="pho_hide"  style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="leftCouple.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
            document.writeln(adLeftCouple);
            scrollx({id:'leftCouple',otop:adLeftCoupleTop,oleft:adLeftCoupleLeft,ofloat:1})
        }
        if (adRightCoupleTxt!=""){
            adRightCouple+='<div id="rightCouple" style="position:absolute;top:'+adRightCoupleTop+'px;right:'+adRightCoupleRight+'px;">'+adRightCoupleTxt+'<div class="pho_hide"  style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="rightCouple.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
            document.writeln(adRightCouple);
            scrollx({id:'rightCouple',otop:adRightCoupleTop,oright:adRightCoupleRight,ofloat:1})
        }
        if (adLeftFloatTxt!=""){
            adLeftFloat+='<div id="leftFloat" style="position:absolute;bottom:'+adLeftFloatBottom+'px;left:'+adLeftFloatLeft+'px;">'+adLeftFloatTxt+'</div>';
            document.writeln(adLeftFloat);
            scrollx({id:'leftFloat',oleft:adLeftFloatLeft,obottom:adLeftFloatBottom,ofloat:1})
        }
        if (adRightFloatTxt!=""){
            adRightFloat+='<div id="rightFloat" style="position:absolute;bottom:'+adRightFloatBottom+'px;right:'+adRightFloatRight+'px;">'+adRightFloatTxt+'</div>';
            document.writeln(adRightFloat);
            scrollx({id:'rightFloat',oright:adRightFloatRight,obottom:adRightFloatBottom,ofloat:1})
        }
	}




//电影介绍页红色字
//	sihu=sihu+'<div class="vticker"><li><b>[800av公告] : </b>近期本站持续遭到攻击，我们将永久免费给每位用户最方便快捷的视频观看体验，当你偶尔打不开我们网站时，请别担心，工程师们正在及时修复线路，请稍候访问！你的支持是800av坚持下去的动力！</li></div>';
	//所有出现
	//txtgg=txtgg+'html代码';
	//txtcommend=txtcommend+'html代码'';
	//mail
	//mail=mail+'@gmail.com';

	//內容頁播放文字
	vodhelp=vodhelp+'<a href="/help/m-play.html" target="_blank"><span style="color:#ff0000;line-height:1.5;font-size:16px;">【手机播放教程】</span></a><a href="/help/pc-play.html" target="_blank"><span style="color:#ff0000;line-height:1.5;font-size:16px;">【电脑播放教程】</span></a>';
	//vodhelp1=vodhelp1+'html代码'';
	//播放頁文字
    playhelp='<span class="playerTip"><a style="background: #d5210f;color:#fff;margin-bottom:5px;" href="https://www.895nn.com/main.html?m=reg" target="_blank" >新用户注册送68元，首存最高送2888元!!</a></span>';
	palyhelp='<span class="playerTip"><a style="color:#fff;"href="/help/x1.html" target="_blank" class="white" target="_blank">建议使用谷歌或苹果自带浏览,若无法播放请点击查看帮助教程!</a></span>';

	if(navigator.userAgent.match(/Android/i)) {
		txtcommend=txtcommend+'<font color="#FF0000"><strong>.</strong></font>';
	}

//图片

	//aaa
	if(navigator.userAgent.match(/Android/i)) {
		//picTopAds = picTopAds + '<div class="picTop"><a href="http://apk.ycszf.com/p3/apkindex.html" target="_blank"><img src="https://ww2.sinaimg.cn/large/005StFp9jw1er6gf6xajvg30ri01yabd.gif" width="960" height="60" /></a></div>';
	}

	//所有出现
	//picTopAds = picTopAds + '<div class="picTop2"><a href="http://www.050gg.com/main.html?m=free2&Intr=332" target="_blank"><img src="http://cache.adm-cnzz.net/material/36/d/xed500700.gif" width="500" height="700" /></a></div>';

//图片小说 内容区底部
//	picFootAds = picFootAds + '<div class="picTop"><a href="http://jump.chaoji28.net" target="_blank"><img src="http://43.249.28.104:88/1.gif" width="960" height="60" /></a></div>';



	//aas
//	if(navigator.userAgent.match(/Android/i)) {
//		dyplayTxt = "<a href='http://apk.ycszf.com/p3/1index.html' target='_blank'> <font color=red>如果在线播放卡请下载官方高清播放器海量大片，点击精彩继续。<font></a>";
//	}







function errimg(obj,image) {
	obj.src = image;
	obj.onerror = null;
}


var hostname;
var hostname2;
var hostnametxt;
var hostnamelogo;
var lf=window.location.host.toLowerCase().split(".");
hostname2=sbc2dbc(window.location.host.toUpperCase());
if (lf.length>1){
	hostname=lf[lf.length-2] + "." + lf[lf.length-1]
	//hostnametxt="www." + hostname.substring(0,3) + hostname.substring(3,hostname.length);
	hostnametxt=lf[lf.length-2];
	hostnamelogo=hostnametxt+"<span style='font-size:24px;color:#881313'>."+lf[lf.length-1]+"</font>";
	document.title=document.title+hostname2;
	if (document.getElementById("WebUrl")){
		document.getElementById("WebUrl").innerHTML=hostname2;
	}
}
window.status=hostname2;
