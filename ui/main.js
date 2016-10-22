console.log('Loaded!');
alert('halllo');
var button = document.getElementById('bu');
var c = 0;
button.onclick=function(){
    c=c+1;
    var span=document.getElementById('span');
    span.InnerHtml =c.tostring();
    
}
