
function compare(propertyName) {
	return function(object2, object1) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if(value2 < value1) {
			return -1;
		} else if(value2 > value1) {
			return 1;
		} else {
			return 0;
		}
	}
}

String.prototype.replaceAll = function(s1,s2){ 
return this.replace(new RegExp(s1,"gm"),s2); 
}

//判断图片是否存在
function isImageExist(url) {
	if(url.length == 0) {
		return false;
	}
	var isExist = true;
	$.ajax(url, {
		type: 'get',
		async: false, //取消ajax的异步实现
		timeout: 1000,
		success: function() {},
		error: function() {
			isExist = false;
		}
	});
	return isExist;
}

//判断两个货币对象是否相同
function compareasset(_obj1,obj2){
	$.each(_obj1, function(index, value) {
		
	});
}


Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

