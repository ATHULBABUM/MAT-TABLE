const express=require('express');
const path=require('path');
const app=express();
const mongoose=require('mongoose');
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(express.static(__dirname+'/dist/myApp'));

const addRouter=require('./public/src/routers/addRouter');

app.use('/addData',addRouter);

// app.get('/*',function(req,res){
//     res.sendFile(path.join(__dirname+'/dist/myApp/index.html'));
// });
mongoose.connect("mongodb://localhost:27017/customDb");
app.listen(process.env.PORT||3000, function () {  
   
     console.log("Example app listening at http://%s:%s",3000);  
});

 
 


