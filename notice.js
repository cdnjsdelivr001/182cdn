var mobile=false;
var ua = navigator.userAgent.toLowerCase();
if (/android/i.test(ua)) {
	mobile=true;
}
if (/ipad|iphone|ipod/.test(ua) && !window.MSStream) {
	mobile=true;
}

function create(c) {
	var b = document.createDocumentFragment(),
		a = document.createElement("div");
	for (a.innerHTML = c; a.firstChild;) b.appendChild(a.firstChild);
	return b
}

function closeAd() {
	var adBlock = document.getElementById('download_dibu');
	adBlock.style.display = 'none';
}


if (mobile) {
	var fragment = create('<style>@media only screen { html { font-size: 13px; } }@media only screen and (min-width:360px) and (max-width: 399px) { html { font-size: 15px; } }@media only screen and (min-width: 400px)and(max-width: 479px) { html { font-size: 16px; } }@media only screen and (min-width: 480px) and (max-width:719px) { html { font-size: 20px; } }@media only screen and (min-width: 720px) { html { font-size: 30px;} } .global_video_bottom_dbtc { margin: 0 auto; text-align: center; }.global_video_bottom_dbtc > p, dl, dt, dd,table, td, th, input, img, form, div, span, ul, ol, li, h1, h2, h3, h4, h5, h6, select, input { margin: 0;padding: 0; font-weight: normal; }.global_video_bottom_dbtc > img, iframe { border: none; }.global_video_bottom_dbtc { background: rgba(0,0,0, 0.85); padding: 0.5rem 0; position: fixed; bottom: 0; left: 0; width: 100%; z-index: 300; height:3rem;overflow: hidden; text-align: left; }.global_video_bottom_dbtc .iLogo { background-position: 0 0;background-repeat: no-repeat; background-size: 3rem 3rem; width: 3rem; height: 3rem; display: block; overflow:hidden; position: absolute; z-index: 5; top: 0.5rem; left: 1.33rem; }.global_video_bottom_dbtc .pTxt {color: #fff; line-height: 1.5rem; padding: 0 0rem 0 5rem; }.global_video_bottom_dbtc .pTxt span { display:block; height: 1.5rem; overflow: hidden; }.global_video_bottom_dbtc .pTxt span.sTit { font-size: 1.13rem; } .global_video_bottom_dbtc .pTxt span.sDes { font-size: 0.93rem; } .global_video_bottom_dbtc .downloadBtn { width: 6.33rem; height: 2.07rem; line-height: 2.07rem; text-align: center; color: #fff; font-size: 1rem; background: #ffa000; border-radius: 0.1rem; -moz-border-radius: 0.1rem; -webkit-border-radius: 0.1rem; -ms-border-radius: 0.1rem; -o-border-radius: 0.1rem; box-shadow: 0 2px 2px #ffa000; -moz-box-shadow: 0 2px 2px #ffa000; -webkit-box-shadow: 0 2px 2px #ffa000; -ms-box-shadow: 0 2px 2px #ffa000; -o-box-shadow: 0 2px 2px #ffa000; position: absolute; top: 0.9rem; right: 2.33rem; }.global_video_bottom_dbtc .aCloseBtn { width: 2.67rem; height:1.67rem; line-height: 2.5rem; overflow: hidden; color: #ff0000; position: absolute; top: 0; right: 0;text-align: center; font-size: 1.67rem; z-index: 10; }.global_video_bottom_dbtc .maskBtn { position: absolute;z-index: 10; width: 100%; height: 100%; overflow: hidden; top: 0; left: 0; } </style><section class="global_video_bottom_dbtc" id="download_dibu"><i class="iLogo" style="background-image: url(/Tpl/x1/cat.png)"></i><p class="pTxt"><span class="sTit">请收藏182TV到手机，预防丢失!</span><span class="sDes">182TV随时换域名，务必收藏182TV域名！</span></p><a class="maskBtn runAppHome" target="_blank" href="http://66.42.109.186:8099/"></a><i class="aCloseBtn" id="foot_down_close" onclick="closeAd()">\u00d7</i></section>');
	document.body.insertBefore(fragment, document.body.childNodes[-1]);
};
