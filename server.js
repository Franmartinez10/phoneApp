const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/phone-app'));
app.get('/*',function(req,res){
   res.sendFile("index.html", {root:__dirname + '/dist/phone-app/'});
 
/*     res.sendFile(path.join(dirname + '/dist/index.html'));
 res.sendFile(path.join(dirname + '/dist/phoneApp/index.html'));  */
 }); 

app.listen(process.env.PORT  || 8080)