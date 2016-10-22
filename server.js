var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var me = {
    content:'me , myself, and I'
};
function creat(data){
    var content= data.content;
    var htmltemplate=`
    <html>
        <head>
            <h1>
              Halllloo
            </h1>
          <br>
          <link href=/ui/style.css ref="stylesheet" />
        </head>
        <body>
            ${content}
        </body>
    </html>`;
    return htmltemplate;
}
    
app.get('/ui/me.html', function (req, res) {
  res.send(creat(me));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
