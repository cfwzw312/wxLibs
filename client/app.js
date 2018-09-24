//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function (options) {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
    onShow:function(options){

    },
    onHide:function(){

    },
    onError:function(msg){
      console.log(msg);
    },
    globalData:{
      title:"I am a global data",
      srvName:"tomcat"
    }
})