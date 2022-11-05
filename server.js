const  express =  require("express");
const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({ extended:true}));


app.get('/',(req, res)=>{
  res.json(
    {slackUsername:"S13",backend: true,age: 29, bio:"born in kwara and last born of a family of three"} );
});




app.get('/hng2',(req, res)=>{
  res.json("this is for task2");
});

const operation = ['add', 'addition', 'subtract', 'subtraction', 'multiply','multiplication'];

app.post('/hng2', (req, res) => {
    let x = parseFloat(req.body.x);
    let y = parseFloat(req.body.y);
    let myEnum = req.body.operation_type.toLowerCase();
    let slackUsername = "S13";
    if(isNaN(x) || isNaN(y)){
        res.status(400).send("input field not a number");
    } else if(!operation.includes(myEnum)){
        res.status(400).send("not valid enum types");
    } else {
        let result;
        
        switch(myEnum){
            case "addition":
                result = x + y;
                break;
            case "subtraction":
                result = x - y;
                break;
            case "multiplication":
                result = x * y;
                break;
            default:
                result = null; 
        }
        const Response = {
            "slackUsername":slackUsername,
            "result": result,
            "operation_type": req.body.operation_type
        }
        res.status(200).json(Response);
    }
});



app.listen(PORT,() =>{
    console.log(`starting server ${PORT}`)  
})

