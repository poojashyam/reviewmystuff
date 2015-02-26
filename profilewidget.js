Clazz.profilewidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            this.templateUrl = "profiletemplate.html";
            this.data = config;
        }
    });