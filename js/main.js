
if(!window.console){
	window.console = {
		log:function(){},
		dir:function(){}
	};
}

require.config({
	baseUrl:'',
	paths:{
		jquery:'js/jquery/jquery-1.11.1',
		cookie:'js/jquery/jquery-cookie',
		avalon:'js/avalon/avalon',//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
		avalonplus:'js/avalon/avalon.plus',//自定义的avalon函数方法以及定制代码
		mmRouter:'js/avalon/mmRouter',//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
		mmHistory:'js/avalon/mmHistory',//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
		text:'js/require/text',
		domReady:'js/require/domReady',
		css:'js/require/css'
	},
	priority:['text','css'],
	shim:{
		jquery:{
			exports:'jQuery'
		},
		avalon:{
			exports:'avalon'
		}
	}
});

require([ 'avalon', 'avalonplus', 'mmRouter', 'mmHistory',   'domReady!'], function( avalon, avalonplus, route, history  ){
	
	console.log('Require：Ready!');
});