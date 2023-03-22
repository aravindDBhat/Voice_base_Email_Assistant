let p="enter the email address";
let p1="enter the subject";
let p2="enter the mail content";
let p3="if it is correct say yes or say no";
let p4="mail sent successfully";
let p5="please try again";
let a="invalid";
let p6="sending mail";
let p7="speak now"
let t;
let c=0;
let sp="click on the screen";
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
recognition.interimResults = true;
let text;
recognition.addEventListener('result', e => {
  text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

});

async function speaking(t) {
  let utterance = new SpeechSynthesisUtterance(t);
  speechSynthesis.speak(utterance);
}


async function d(){
  let s = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000);
  })
 let  k = await s;
 console.log(k);
 speaking(p7);
    recognition.start();
  s = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 14000)
  })
   k = await s;
  console.log(k);
  t = "you said " + text;
  speaking(t);
  t = text;
  if(c==0){
      let k=text.replace(' at','@').toLowerCase()
      k=k.replace(/ /g,'');
      t=k
  }
    speaking(p3);
    s = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello");
      }, 10000)
    })
    k = await s;
   console.log(k);
    speaking(p7)
recognition.start();
setTimeout(speaking, 10000, sp);
  document.onclick=()=>{
    if(text=='yes'){
      if(c==0){
        document.getElementById("email2").value = t;
        c++;
        speaking(p1);
        d();
    }else if(c==1){
      document.getElementById("subject").value = t;
      c++;
      speaking(p2);
      d();
    }
    else{
        document.getElementById("msg").value = t;
          function sendEmail(){
            Email.send({
              Host : "smtp.elasticemail.com",
              Username : "your email id",
              Password : "password from elasticemail",
              To: document.getElementById("email2").value,
              From :"above mentioned mail id",
              Subject:document.getElementById("subject").value,
              Body :  document.getElementById("msg").value,
            }).then(
            message =>{
              alert(message);
              t=message;
              console.log(t);
              if(t=="OK"){
                speaking(p4);
                window.location.href = "http://localhost:3000/home";
              }else{
                speaking(p5);
                window.location.href = "http://localhost:3000/home";
              }
            });
          }
          sendEmail();
          speaking(p6);
          }
        }
      else{
        speaking(a);
        if(c==0){
        speaking(p);
      }else if(c==1){
        speaking(p1);
      }
      else{
        speaking(p2);
      }
        d();

    }
}
}


window.ondblclick=()=>{
  async function h(){
  speaking(p);
  d();
}
h();
}
