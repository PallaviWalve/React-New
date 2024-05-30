// document.querySelector("button").addEventListener("click", function(){
//     // alert();

//     var XmlHttp = new XMLHttpRequest();
//     console.log(XmlHttp);

//     console.log(XmlHttp.readyState);//value is 0 means no interaction from user or no request initialized by user

//     XmlHttp.onreadystatechange = function() {
//         // console.log(XmlHttp.readyState,XmlHttp.status);

//         if (XmlHttp.readyState==4 && XmlHttp.readyState==200){
//             console.log(XmlHttp.responseText);

//             var ans=JSON.parse(XmlHttp.responseText);
//             console.log(ans);

//             ans.forEach(function(item){
//                 console.log(item);

//             var divtag=document.createElement("div");
//             console.log(divtag);

//             var imgtag=document.createElement("img");
//             console.log(img);

//             var h2tag=document.createElement("h2");
//             console.log(h2tag);

//             var ptag=document.createElement("p");
//             console.log(ptag);

//             h2tag.innerText=item.price;
//             ptag.innerText=item.title;
//             imgtag.src=item.image;

//             divtag.append(imgtag);
//             divtag.append(h2tag);
//             divtag.append(ptag);

//             document.querySelector(".row").append(divtag);

//             });
//         }
//     }
                
//     XmlHttp.open("GET", "https://fakestoreapi.com/products"); //calling API or 1-->request has been setup from server side

//     XmlHttp.send(); //ready state value 2,3,4--> request has been send -->request in process --> request cycle completed
// });





document.querySelector("button").addEventListener
("click", function(){ 

    var XmlHttp = new XMLHttpRequest();
    console.log(XmlHttp);
    console.log(XmlHttp.readyState);

    //0->no request initialized by user
    XmlHttp.onreadystatechange = function(){

        //console.log(XmlHttp.readyState,XmlHttp.status);

        if(XmlHttp.readyState==4 && XmlHttp.status==200){
            console.log(XmlHttp.responseText);
            var ans=JSON.parse(XmlHttp.responseText);  // covert to object
            console.log(ans);
            ans.forEach(function(item){      // all object ready diplay on console
                
                console.log(item);
                var divtag=document.createElement("div");
                console.log(divtag);
                var imgtag=document.createElement("img");
                console.log(imgtag);
                var h2tag=document.createElement("h2");
                console.log(h2tag)
                var ptag=document.createElement("p");
                console.log(ptag);

                h2tag.innerHTML=item.price
                ptag.innerHTML=item.title
                imgtag.src=item.image

                divtag.className="col-3";
                imgtag.className="img-fluid";

                divtag.append(imgtag);
                divtag.append(h2tag);
                divtag.append(ptag);

                document.querySelector(".row").append(divtag);
                
            });
        }
    }
    XmlHttp.open("GET","https://fakestoreapi.com/products");
    // 1-> request has been setup from server side
    XmlHttp.send();
    //2 -> stands for request has been sent to the server
    //3-> request it in process in server side
    //4-> request cycle completed 
});