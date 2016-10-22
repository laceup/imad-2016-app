console.log('Loaded!');
alert('halllo');
var button = document.getElementById('bu');
button.onclick=function(){
    c=c+1;
    var span=document.getElementById('span');
    span.InnerHtml =c.tostring();
    
}
