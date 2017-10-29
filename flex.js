$(function(){
    $(".father").on("click","input",function () {
        name = $(this).attr("name");
        method = $(this).val();
        if(method == "stretch"){
            $("div.f").css(name,method).children().css("height","auto");
        }else{
            $("div.f").css(name,method).children().css("height","200px")
        }
      })
      $(".son").on("click","input",function () {
        name = $(this).attr("name");
        method = $(this).val();
        var obj = {height: "auto"};
        obj[name] = method;
        if(method == "stretch"){
            $("div.box").css(obj);
        }else{
            obj.height = "200px"
            $("div.box").css(obj)
        }
      })
})