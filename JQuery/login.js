const EMAIL=/^([a-zA-Z0-9]([a-zA-Z0-9_\.]+)?[a-zA-Z0-9])@(([a-zA-Z0-9]([a-zA-Z0-9\-]+)?[a-zA-Z0-9])\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)$/;

const PASSWORD=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\-]).{4,8}$/;

$(document).ready(function(){ //jquery execute after the completion of the loading

    $("span").hide(); //hide span msg

$("button").click(function(){
   // console.log("Button clicked");

   var data1 = $("#x1").val();
   var data2= $("#x2").val();

   console.log(data1);
   console.log(data2);

   var result1=EMAIL.test(data1);//compairing the entered email and pw is true or not as per the given condition
   var result2=PASSWORD.test(data2);

   console.log(result1);
   console.log(result2);

   (result1)?"":($("#x1").next().fadeIn(100));
   (result2)?"":($("#x2").next().fadeIn(100));

   (result1&&result2)?($("button").after("<p>valid</p>")):""; //create msg valid if both are true 

   //$("p").fadeOut(3000);// valid msg invisible 

});


})