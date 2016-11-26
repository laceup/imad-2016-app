console.log('Loaded!');
alert('halllo');
document.onreadystatechange = function(){
    var button = document.getElementById('bu');
var c = 0;
button.onclick=function(){
    c=c+1;
    var count=c;
    document.getElementById("demo").innerHTML  = count;
    //s.InnerHtml=c.toString();
    console.log(c);
    };
};

