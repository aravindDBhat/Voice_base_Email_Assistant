const a = "welcome to the web site";
const b = "enter the email address";
const c = "if it is correct say yes or say no";
const d = "confirmed";
const e = "enter again";
const f = "enter the password";
const g = "click on the screen"
const o="speak now";
let t;
let m;
var cmail;
var cpassword;
var count = 0;

//speech to text convertion.

const texts = document.querySelector('.word')
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.interimResults = true;
let text;
recognition.addEventListener('result', e => {
  text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  p.innerText = text;
  texts.appendChild(p);

});

//text to sppech

async function speaking(t) {
  let utterance = new SpeechSynthesisUtterance(t);
  speechSynthesis.speak(utterance);
}


async function ab() {
  let s = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 5000)
  })
  let k = await s;
    speaking(o);
  recognition.start();
  s = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 10000)
  })
  k = await s;
  console.log(k);
  t = "you said " + text;
  speaking(t);
  t = text;
  console.log(t);
  conf();
}

//password section

async function password() {
  speaking(f);
  ab();
  let s = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 20000)
  })
}

//confirmation section.

async function conf() {
  speaking(c);
  let k = text.replace(' at','@').toLowerCase()
    k=k.replace(/ /g,'');
    let s = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello");
      }, 7000)
    })
    m = await s;
      speaking(o);
      recognition.start()
  setTimeout(speaking, 13000, g);
  document.onclick = () => {
    if (text == 'yes') {
      speaking(d);
      if (count == 1) {
        console.log("again k value : "+k);
        document.getElementById("p").value = k;
        count = 2;
        speaking(g);
        document.onclick = () => {
          // var xhr=new XMLHttpRequest();
          // xhr=open("/","http://localhost:3000",true);
          // xhr.setRequestHeader('Content-Type','application/json');
          // xhr.send(JSON.stringfy({
          //
          // }))
          document.getElementById("myform").submit()
        }
      }
      if (count == 0) {
        document.getElementById("q").value = k;
        count = 1;
        password();
      }
    } else {
      speaking(e);
      if (count == 1) {
        password()
      } else {
        speaking(b)
        ab();
      }

    }
  }
}

// 1st execution.

document.ondblclick = () => {
  speaking(a);
  console.log(a);
  speaking(b);
  ab();
}
