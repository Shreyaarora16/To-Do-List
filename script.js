//Check off specific todos by cicking
$("ul").on("click","li",function(){
    //if li is grey
        //turn it black
    //else
        //turn it grey
        // if($(this).css("color")=== "rgb(128, 128, 128)"){
        //     $(this).css({
        //         color: "black",
        //         textDecoration:"none",
        //     });
        // }
        // else{
            
        //     $(this).css({
        //         color: "grey",
        //         textDecoration:"line-through",
        //     });
        // }
        $(this).toggleClass("completed");
    
});
//Click on X to delete ToDo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
            $(this).remove();
        }
    );
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which===13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>")
    }
});
$("#pencil").click(function(){
    $("input[type='text']").fadeToggle();
});
