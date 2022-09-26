const mongoose = require("mongoose");

// use connect method to connect our express with mongodb;
//registration name of file where data is save in mongodb;
mongoose.connect("mongodb://localhost:27017/registration", {
    // the below is written to avoid deprication warning;
     useNewUrlParser:true, 
     useUnifiedTopology:true,
     useCreateIndex:true
}).then(()=>{
    console.log("Connected to Database");
}).catch((e)=>{
    console.log(`Not Connected to Database`);
})