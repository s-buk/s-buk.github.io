$("button").click(function(){
    
    var name = $("#FirstName").val();
    var family = $("#SecondName").val();
    var adress = $("#adress").val();
    var message = $("#message").val();

    $.ajax({
        type: "GET", 
        url: "http://temp-eti.tmweb.ru/taxi/mail.php", 
        data: "family = " + family + "&name = " + name + "&eMail = " + adress + "&message = " + message + 
        "&project_name=Site_Name&admin_email=s-buk@yandex.ru&form_subject=Form_Subject",
        crossDomain: true,
        dataType: 'jsonp'
    })
   
})

$("button").click(function(){
    alert("Дзякуй! Ваша паведамленне адпраулена!");
})
