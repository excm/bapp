var apkVer = null;
var newversion = null;
var updatedomain = "https://bitbox.one/apk/";

function plusReady() {
	// 获取本地应用资源版本号 
	plus.runtime.getProperty(plus.runtime.appid, function(inf) {
		apkVer = inf.version;
		console.log("当前应用版本：" + apkVer);
	});
}
if(window.plus) {
	plusReady();
} else {
	document.addEventListener('plusready', plusReady, false);
}

var ver;
//休眠方法
function sleep(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while(true) {
		now = new Date();
		if(now.getTime() > exitTime)
			return;
	}
}

// 检测更新 
// 实际项目中需要更换为自己服务器的地址 
var checkUrl = updatedomain+"version.txt?"+new Date().getTime();
function checkUpdate() {
	//plus.nativeUI.showWaiting("检测更新...");
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		switch(xhr.readyState) {
			case 4:
				//plus.nativeUI.closeWaiting();
				if(xhr.status == 200) {
					console.log("检测更新成功：" + xhr.responseText);
					var newVer = xhr.responseText;
					newversion = newVer;					
					if(apkVer && newVer && (apkVer != newVer)) {
						showupdatebtn();//提示用户有新版本
						//downWgt(); // 下载升级包 
					} else {
						$("body").removeClass("updateable");
						//plus.nativeUI.alert("无新版本可更新！");
					}
				} else {
					//console.log("检测更新失败！");
					//plus.nativeUI.alert("检测更新失败！");
				}
				break;
			default:
				break;
		}
	}
	xhr.open('GET', checkUrl);
	xhr.send();
}

function showupdatebtn(){
	$("body").addClass("updateable");	
}


// 下载wgt文件 
// 实际项目中需要更换为自己服务器的地址 
//var apkUrl = "http://szdiantuo.com/apk/" + newversion + ".apk";

function downApk(apkUrl) {
	plus.nativeUI.showWaiting("下载升级文件...");
	plus.downloader.createDownload(apkUrl, {
		filename: "_doc/update/"
	}, function(d, status) {
		if(status == 200) {
			console.log("下载成功：" + d.filename);
			plus.nativeUI.confirm("升级包下载完成，是否需要升级", function(e) {
				var sure = (e.index == 0) ? "Yes" : "No";
				if(sure == 'Yes') {
					plus.runtime.install(d.filename); // 安装包 
				}
			})
		} else {
			console.log("下载失败！");
			plus.nativeUI.alert("下载Apk失败！");
		}
		plus.nativeUI.closeWaiting();
	}).start();
}
