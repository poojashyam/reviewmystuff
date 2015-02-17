Clazz.headerwidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            //this.templateUrl = config.templateUrl;
            this.data = config;
            this.templateUrl = "headertemplate.html";
            //console.log("widget1" +config.data);
        }
});