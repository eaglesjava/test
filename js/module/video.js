define(['avalon'],function(avalon){

    var routers = avalon.vmodels['root'].routers;
    var id = routers.params.id;

    var videoVM = avalon.define({
        $id : 'video',
        videoId : id
    });
    avalon.scan();
});