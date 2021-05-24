const express = require('express');
const app = express();

app.use(express.static(dirname + '/dist/phoneApp'));
app.get('/*',function(req,res){
   res.sendFile("index.html", {root:dirname + '/dist/phoneApp/'});
 
 /*  res.sendFile(path.join(dirname + '/dist/index.html'));
     res.sendFile(path.join(dirname + '/dist/papp/index.html')); */
});

app.listen(process.env.PORT  || 5000);