const express=require('express');
const bodyparser=require('body-parser');
const path=require("path");
const mongoose=require('mongoose');
const usemodel=mongoose.model;
var c=0;
var user
mongoose.connect("mongodb://127.0.0.1:27017/UsersDB" );
var userSchema=new mongoose.Schema({
  name:{type:Object},
  email:{type:Object},
  password1:{type:Object}
});
const User= usemodel('User',userSchema);
function z(){
 user=new User({
  name:name,
  email:email,
  password1:password1
});
if(password1==password2){
  User.find(function(err,users){
    if(err){
      console.log(err);
    }else{
      users.forEach((user) => {
        if(email==user.email){
          c=c+1;
        }
      });
    }
  });
  if(c==0){
    user.save();
    c=0;
  }
}

User.find(function(err,users){
  if(err){
    console.log(err);
  }else{

    users.forEach((user) => {
      console.log(user.email);
    });
  }
});
}
const app=express();
// app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended :true}));
app.use(express.static(path.join(__dirname,'public')));
var name;
var email;
var password1;
var cmail;
var cpassword;
var password2;
app.get('/', function(req, res){
      res.render("index.html")
})
app.post('/',function(req, res){
  cmail=req.body.email;
  cpassword=req.body.password;
  console.log(cmail);
  console.log(cpassword);
  User.find(function(err,users){
    if(err){
      console.log(err);
    }else{
      users.forEach((user) => {
        if(cmail==user.email && cpassword==user.password1){
          res.sendFile(path.join(__dirname, 'public/home.html'));
        }
      });
    }
  });
});
app.get('/register', function(req, res){
res.sendFile(path.join(__dirname, 'public/register.html'));
})
app.post('/register',function(req, res){
     password2=req.body.password3;
     name= req.body.username;
     email=req.body.email3;
     password1=req.body.password2;
     if(password1==password2){
       res.sendFile(path.join(__dirname, 'public/succuss.html'));
     }
     else{
       res.send("please try again");
     }
         z()
});
app.get('/home', function(req, res){
  res.sendFile(path.join(__dirname, 'public/home.html'));
})
app.post('/home',function(req, res){
  res.sendFile(path.join(__dirname, 'public/compose.html'));
});
app.get('/compose', function(req, res){
  res.sendFile(path.join(__dirname, 'public/compose.html'));
})


app.listen(3000,()=>{
  console.log("server running")
});
