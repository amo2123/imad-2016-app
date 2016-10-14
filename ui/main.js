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
var nameinput=document.getElementById("name");
var name=nameinput.value;
var submit=document.getElementById("submit_btn");
submit.OnClick=function(){
    var names=["name1","name2","name3"];
    var list="";
    for(var i=0;i=names.length;i++){
        list+="<li>"+names[i]+"</li>";
        
    }
    var ul=document.getElementById("namelist");
    ul.innerHtml=list;
}