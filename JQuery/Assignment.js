const MARKS=/^([1-9]([0-9])$/;

$(document).ready(function(){

 $("span").hide();

    $("button").click(function(){

        
   var data1 = $("#x1").val();
   var data2= $("#x2").val();
   var data3 = $("#x3").val();

   var result1=MARKS.test(data1);
   var result2=MARKS.test(data2);
   var result3=MARKS.test(data3);

   console.log(result1);
   console.log(result2);
   console.log(result3);

    });
})



