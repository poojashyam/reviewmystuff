Clazz.recentlyviewedwidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
                    
            //var contactContainer = config.data.getElementById("contactContainer");
            
                //console.log(contactContainer);
            //swidget.render(contactContainer);
            //console.log("from widget2" +config.data);
            this.templateUrl = "recentlyviewedtemplate.html";
            this.data = config;
        },
        rViewed : function(){
            
                $('#row1').hide();
            $('#row2').hide();
            $('#row3').hide();
                $('.buttonfeed').click(function(){
                    $('#row1' ).toggle();
                    $('#row2' ).toggle();
                    $('#row3' ).toggle();
                })
                
                
            },
           postRender : function(){
               this.rViewed();
           }
});

