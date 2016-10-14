var button=document.GetElementById("counter");
 counter=0;
button.OnClick=function(){
   
  counter=counter+1;
  var span=document.GetElementById("count");
  span.innerHtml=counter.toString();
};