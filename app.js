const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*',(req,res)=>{
    res.send("En teoria el 404.html");
});

app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto',port);
});