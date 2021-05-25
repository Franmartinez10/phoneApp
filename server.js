const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/phoneApp'));
app.get('/*',function(req,res){
   res.sendFile("index.html", {root: __dirname + '/dist/phoneApp/'});
 
/*     res.sendFile(path.join(dirname + '/dist/index.html'));
 res.sendFile(path.join(dirname + '/dist/phoneApp/index.html'));  */
 }); 

app.listen(process.env.PORT  || 8080)