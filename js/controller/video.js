define(['jquery','js/common.js'],function($, common){

	var video = {

		//根据ID查询视频信息的接口
		//http://api.dev.leap.cn/api/v2/ucenter/entvideo?from=pc&id=1415084744601
		//http://api.dev.leap.cn/api/v2/ucenter/learnpath/1415099797745?from=PC
		getVideo:function(video_id, token, callback){
			var data = {
				'from':'pc',
				'token':token
			}
			$.ajax({
			    url: common.api.video.getVideo+'/'+video_id,
			    data: data,
			    type: 'get',
			    jsonp: '__callback',
			    dataType: 'jsonp',
			    callback:'callback',
			    success: function(json) {
			    	callback(json);
			    }
			});
		},


		//根据视频ID获取视频所在的课程信息
        //根据视频VID获取课程信息
        //http://api.dev.leap.cn/api/v2/ucenter/course/uniform/video?video_id=1042&from=PC&token=
		getCourse:function(video_id, token, callback){
			var data = {
				'from':'pc',
				'video_id':video_id,
				'token':token
			}
			$.ajax({
			    url: common.api.video.getCourse,
			    data: data,
			    type: 'get',
			    jsonp: '__callback',
			    dataType: 'jsonp',
			    callback:'callback',
			    success: function(json) {
			    	callback(json);
			    }
			});
		},



        //视频观看结束时查询是否有计划完成
        //http://api.dev.leap.cn/api/v2/ucenter/plan_task/success_plan?from=pc&_method=PUT&token=&_callback=
        //getPlan: common.globals.api + '/ucenter/plan_task/success_plan' //当视频播放完成后调用
		getPlan:function(token, callback){
			var data = {
				'from':'pc',
				'_method':'PUT',
				'token':token
			}
			$.ajax({
			    url: common.api.video.getPlan,
			    data: data,
			    type: 'get',
			    jsonp: '__callback',
			    dataType: 'jsonp',
			    callback:'callback',
			    success: function(json) {
			    	callback(json);
			    }
			});
		}




	}
	return video;
});