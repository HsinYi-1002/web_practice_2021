$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        if(randomChildNumber == 0){
            $("img").attr("src","https://www.alberthsieh.com/wp-content/uploads/ichnta_0181.jpg");
        }
        else if(randomChildNumber == 1){
            $("img").attr("src","https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/11/17/1/9090341.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600");
        }
        else{
            $("img").attr("src","https://banbi.tw/wp-content/uploads/20190509230042_82.jpg");
        }
    });
});