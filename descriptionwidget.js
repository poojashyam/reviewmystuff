Clazz.descriptionwidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
                    
            //var contactContainer = config.data.getElementById("contactContainer");
            
                //console.log(contactContainer);
            //swidget.render(contactContainer);
            //console.log("from widget2" +config.data);
            this.templateUrl = "descriptiontemplate.html";
            this.data = config;
        }
});