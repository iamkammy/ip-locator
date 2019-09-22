const express = require('express');  
const app = express();  
const port = process.env.PORT || 2332;
app.use(express.static(__dirname + '/dist/browser/'));  
app.all('*', (req, res) => {  
  res.status(200).sendFile(__dirname + '/dist/browser/index.html');  
});  
app.listen(port, ()=>{
    console.log('server is listening at port'+ port );
});  