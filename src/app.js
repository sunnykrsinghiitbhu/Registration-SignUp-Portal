const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers");


const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,"../public");
console.log(path.join(__dirname,"../public"));
app.use(express.static(static_path));

const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set("view engine" ,"hbs");
app.set("views",template_path);

// app.get("/",(req,res) => {
//     res.send("hello");
// });
hbs.registerPartials(partials_path);
app.get("/",(req,res) => {
    res.render("index")
});
app.get("/index",(req,res) => {
    res.render("index")
});

app.get("/login",(req,res) => {
    res.render("login")
});
app.get("/register",(req,res) => {
    res.render("register")
});


app.post("/register",async (req,res) => {
    try{
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    // const email = req.body.email;
   
     if(password === confirmpassword ){
           const registerEmpolyee = new Register({
               FirstName:req.body.Name,
               LastName:req.body.Username,
               Email:req.body.email,
               Password:req.body.password,
               ConfirmPassword:req.body.confirmpassword,
           })
        // console.log("======================");
        // console.log(registerEmpolyee.Email);
      const registered = await registerEmpolyee.save();
      res.status(201).render("index");

     }else{
         res.send("password are not matching")
     }

    }catch(error){
        res.status(400).send(error);
    }
});


app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
});
