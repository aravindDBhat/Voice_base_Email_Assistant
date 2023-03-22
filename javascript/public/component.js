let t;
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

function home(){
  t="please select one option";
  speaking(t);
  t="compose";
  speaking(t);
  t="inbox";
  speaking(t);
  t="exit";
  speaking(t);
  t="speak now";
  speaking(t);
  ab();
}

async function ab() {
  let s = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 8000);
  })
  let k = await s;
  recognition.start();
   s = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 13000)
  })
  k = await s;
  console.log(k);
  t = "you said " + text;
  speaking(t);
  t = text;
speaking(sp);
  document.onclick=()=>{
    if(t=='compose'){
        document.getElementById("compose").submit();
    }else if(t=='inbox'){
          document.getElementById("").submit();
    }else if(t=='exit'){
          document.getElementById("exit").submit();
    }else{
      home();
    }
}
}
document.ondblclick=()=>{
home();
ab();
}
