define(['avalon', 'mmRouter', 'mmHistory'],
    function(  avalon, mmRouter, mmHistory){
        

        var model = avalon.define('root',function(vm){
            vm.page = '';//当前请求的主页面
            vm.routers = {};//当前主页面下的路由信息
            vm.navRender = function(){}
            vm.sideRender = function(){}
            vm.pageRender = function(){
                console.log('pageRender...');
            }
        });
        

        //路由回调函数，无参数的
        function RouterCallback(){
            model.routers = this;
            model.page = this.path;
        }
        //路由回调函数，ID参数的
        function RouterCallbackID(){
            model.routers = this;
            var paths = this.path;
            var id = paths.split('/')[2];
            var path = paths.split('/')[1];
            model.page = path;
        }


        //路由回调函数，ID参数的
        function RouterCallbackActionID(){
            model.routers = this;
            var paths = this.path;
            var id = paths.split('/')[3];
            var action = paths.split('/')[2];
            var path = paths.split('/')[1]+'/'+paths.split('/')[2];
            model.page = path;
        }


        //#############    路由规则定义   ##########################//
        avalon.router.get("/", function(){ model.page = 'videolist';});
        avalon.router.get("/video/:id", RouterCallbackID);//视频播放页
        avalon.router.get("/videolist/:id", RouterCallbackID);//视频列表页
        //路由器的API监听
        avalon.history.start({
            basepath:'/',   //从哪里开始截取要监听的URL部分
            interval:50     //在IE6,7模式下，需要创建iframe产生历史，需要用一个定时器
        });
        
        avalon.scan(document.body);

});
