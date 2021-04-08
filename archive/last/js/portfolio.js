$(document).ready(function(){
    
    //PROJECT SHOWCASE
    $("#projects_menu li").on("mouseover",function() {
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
}); 