document.writeln("<div id=\"weixin-tip\" class=\"weixin-tip\"><p><img  width=\"100%\" height=\"100%\" src=\"/images/live_weixin.png\"/><span id=\"close\" class=\"close\">X 关闭</span></p></div>");
document.writeln("<div id=\"android-tip\" class=\"mytip\"><p><img  width=\"100%\" height=\"100%\" src=\"/images/android.png\"/><span class=\"close\" class=\"close\">X 关闭</span></p></div>");
document.writeln("<div id=\"iphone-tip\" class=\"mytip\"><p><img  width=\"100%\" height=\"100%\" src=\"/images/iphone.png\"/><span class=\"close\" class=\"close\">X 关闭</span></p></div>");

    var is_weixin = (function() {

        var ua = navigator.userAgent.toLowerCase();

        if (ua.match(/MicroMessenger/i) == "micromessenger") {

            return true;

        } else {

            return false;

        }

    })();

    window.onload = function(){

        var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;

        var btn = document.getElementsByTagName('a');
        var tip = document.getElementById('weixin-tip');
        var close = document.getElementById('close');

        if(is_weixin){

            for(var i=0;i<btn.length;i++) {
                btn[i].onclick = function (e) {

                    tip.style.height = winHeight + 'px';

                    tip.style.display = 'block';

                    return false;

                }
            }
            close.onclick = function(){

                tip.style.display = 'none';

            }
        }
    }


    var android_btn=document.getElementById('android-tip');
    var iphone_btn=document.getElementById('iphone-tip');
    var close_btn=document.getElementsByClassName('close');
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1,  //是否为iPhone
                iPad: u.indexOf('iPad') > -1,  //是否iPad
            };
        }(),
    }

    var is_visit=getCookie('is_visit');
    if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {

        if(is_visit==''){
//        没有cookie,设置
            setCookie('is_visit','1',600);
            iphone_btn.style.display='block';
        }

    }
    if (browser.versions.android) {

        if(is_visit==''){
//        没有cookie,设置
            setCookie('is_visit','1',600);
            android_btn.style.display='block';
        }

    }
    var i;
    for(i=0;i<close_btn.length;i++){
        close_btn[i].onclick=function () {
            iphone_btn.style.display='none';
            android_btn.style.display='none';
        }
    }

    //设置cookie
    function setCookie(c_name,value,expiredays)
    {
        var exdate=new Date()
        exdate.setDate(exdate.getDate()+expiredays)
        document.cookie=c_name+ "=" +escape(value)+
                ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
    }
    //    读取cookie
    function getCookie(c_name)
    {
        if (document.cookie.length>0)
        {
            c_start=document.cookie.indexOf(c_name + "=")
            if (c_start!=-1)
            {
                c_start=c_start + c_name.length+1
                c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
            }
        }
        return ""
    }
