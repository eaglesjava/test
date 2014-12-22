//avalon.plus.js
define(['avalon'], function(avalon){


    avalon.config({
        loader: false
    })


	//创建补0函数
	//补零函数: zerofill
    function zerofill(s) {
        return s < 10 ? '0' + s: s;
    }


	//毫秒转时间 ms= millisecond 
	avalon.filters.ms2time = function(ms){
	    
	    // function zerofill(s) {
	    //     return s < 10 ? '0' + s: s;
	    // }    
	    var times = Math.floor(ms/1000);//毫秒转为秒
	    if(times >= 3600){
	        var h = Math.floor(times/3600);
	        var m = zerofill(Math.floor(times%3600/60));
	        var s = zerofill(times%3600%60) ;
	        return h + ':' + m + ':' + s;
	    }else{

	        var m = zerofill(Math.floor(times/60));
	        var s = zerofill(times%60);
	        return  m + ':' + s;
	    }
	}

	//字符串超长截取加点点点
	avalon.filters.subString = function(string,length){
		if(string.length > length){
			return string.substring(0,length) + '...';
 		}else{
			return string.substring(0,length);
		}
	    
	}

	//过滤为空字符串为null，为undefined 的用户头像教师头像为默认头像的函数
	//defava lecturer.avatar == null ? '/img/avatar.png' : lecturer.avatar
	avalon.filters.ava2def = function(param){
		//console.log('过滤为空字符串为null，为undefined 的用户头像教师头像为默认头像的函数');
		if(param === '' || param === null || param === undefined){
			return '/img/avatar.png';
		}else{
			return param;
		}
	}



});
