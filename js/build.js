({
    appDir: '',
    baseUrl: './js',
    mainConfigFile:'./js/main.js',
    paths: {
        jquery: './lib/jquery-1.11.1.min',
        cookie: './lib/cookie',
        browser: './lib/jquery.browser.min',
        dialog: './lib/dialog',
        //template: './lib/template',
        //validate: 'lib/jquery-validate.min',
        swfobject: './lib/swfobject',
        //flexslider: './lib/jquery.flexslider-min',
        //underscore: './lib/underscore-min',
    },
    shim:{
    	jquery:{
    		exports:'jQuery'
    	},
    	// underscore:{
    	// 	exports:'_'
    	// },
        cookie:{
            exports:'cookie'
        }
    },
    map:{},
    packages:[],
    optimize:'uglify',//optimize (none/uglify/closure)  指定是否压缩，默认为uglify

    name:'main',
    out:'./js/mains.js'

})

