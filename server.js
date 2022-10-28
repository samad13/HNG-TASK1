const  express =  require("express");
const app = express();

//app.use(express.urlencoded({extended: true}));

app.get('/',function(req, res){
  res.json(
    {slackUsername:"Hello World",backend: true,age: 29, bio:"born in kwara and last born of a family of three"} );
});



app.listen(5000,function(){
    console.log("starting server")  
})