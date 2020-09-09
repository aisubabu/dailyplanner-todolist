$(document).ready(function(){
$(".txtb").on("keyup",function(e){
     if(e.keyCode == 13 && $(".txtb").val() != "")
     {
         var item = $("<div class='task'></div>").text($(".txtb").val());
         var rem = $("<i class='fas fa-trash-alt'></i>");
         var comp = $("<i class='fas fa-check'></i>");
         $(".list").append(item);
         item.append(rem,comp)
         $(".txtb").val("")
         rem.click(function(){
            $(this).parent().remove();
         });
         comp.click(function(){
             var p = $(this).parent();
             $(".finlist").append(p)
             $(this).remove();
         })
         $(".fixed").click(function(){
             $(".task").remove();
         })
     }
});
});