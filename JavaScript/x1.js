// console.log("File loaded successfully");

// DOM event handling via javascript 

document.querySelector("button").onclick=function(){ //select element directly using querySelector

//console.log("Function called");
//console.log(document.querySelector("#x1"));
var p=document.querySelector("#x1").value;
console.log(p);

var n=document.querySelector("#x2").value;
console.log(n);

var r=document.querySelector("#x3").value;
console.log(r);

console.log(typeof p);//p considered as a number so we have to typecast
p=Number(p);
r=Number(r);
n=Number(n);
console.log(typeof p);
console.log(typeof r);
console.log(typeof n);
n=n*12;
r=r/12/100;
var emi=p*r*(1+r)**n/((1+r)**n-1);
console.log(emi);

document.querySelector("#p1").innerText=Math.round(emi);
document.querySelector("#p2").innerText=p;
document.querySelector("#p3").innerText=Math.round(emi*n);
document.querySelector("#p4").innerText=Math.round((emi*n)-p);
}

document.querySelector(".x3").innerHTML=" Interest Amount &#8377:"+	interestAmt;