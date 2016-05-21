/*$("#work li").on("mouseover",function(){
    var elem_id = document.getElementsByClassName("work_active")[0].className.split(/\s+/)[1];µ
    var old = $(".work_active");
    old.removeClass("work_active");
    
})*/





$(document).ready(function(){
    
    //PORTFOLIO EFFECT
    $("#projects li").on("mouseover",function() {
        //REMOVE OLD
        var project_class_elems = document.getElementsByClassName("work_active")
        if(project_class_elems.length !== 0){
            var project_class = project_class_elems[0].className.split(/\s+/)[0];
            
            
            $("section." + project_class).css('visibility', 'hidden');
            $("li." + project_class).removeClass( "work_active" );
        }else{
            //hide stub
            $("section.project_stub").css('display', 'none');
        }
        
        //ADD NEW
        $( this ).addClass( "work_active" );
        project_class = document.getElementsByClassName("work_active")[0].className.split(/\s+/)[0];
        $("section." + project_class).css('visibility', 'visible');
    });
    
    
    //I AM EFFECT
    setInterval(function(){ 
        //SWITCH H3
        var text_old = $("#about h3 span.accent").html();
        $("#about h3 span.accent").html($("#about h3 span.alt").html())
        $("#about h3 span.alt").html(text_old);

        //SWITCH LI
        $("#about li").each(function(index, element){
            if(element.className === ""){
                $(element).addClass("alt");
            }else{
                $(element).removeClass("alt");
            }
        });
        
        /*
        $("#about li").each(function(index, element){
            var length = element.innerHTML.length;
            var index = Math.floor(Math.random()*length);
            var e = element.innerHTML;
            var replacement = e.substr(0,index) + '<span class="accent">'+ e.charAt(index) + '</span>' + e.substr(index+1);
            element.innerHTML = replacement;
        });*/
        
    }, 5000);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}); 