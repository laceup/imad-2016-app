console.log('Loaded!');
alert('halllo');
(function(){
    var button = document.getElementById('bu');
var c = 0;
button.onclick=function(){
    c=c+1;
    var span=document.getElementById('span1');
    span.InnerHtml=c.toString();
    
};
})();

