console.log('Loaded!');
alert('halllo');
document.onreadystatechange = function(){
    var button = document.getElementById('bu');
var c = 0;
button.onclick=function(){
    c=c+1;
    var span=c
    document.getElementById('span1')=span;
    span.InnerHtml=c.toString();
    console.log(c);
    };
};

