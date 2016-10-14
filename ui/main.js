var button=document.GetElementById("counter");

button.OnClick=function(){
    var request=XMLHttpRequest();
    request.onReadyStatechange=function(){
      if(request.readySate==XMLHttpRequest.DONE){
          if(request.status==200){
              var counter=request.responseText;
               var span=document.GetElementById("count");
  span.innerHtml=counter.toString();
          }
      }  
    };
   
request.open("GET","http://amo2123.imad.hasura-app.io/counter",true);
request.send(null);

 
};