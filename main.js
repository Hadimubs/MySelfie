var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function(e){
console.log(e);
x=e.results[0][0].transcript;
document.getElementById("textbox").innerHTML=x;
speak();
}
function speak(){
 var synth = window.speechSynthesis;
 speak_data="taking your selfie in five seconds";
 z=new  SpeechSynthesisUtterance(speak_data);
synth.speak(z);
Webcam.attach( 'camera' );
setTimeout(function(){
    takeasnapshot();
  save();
}, 5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function takeasnapshot(){
Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('result').innerHTML = 
        '<img id="i" src="'+data_uri+'"/>';
  });}
  function save(){
x=document.getElementById("anc");
t=document.getElementById("i").src;
x.href=t;
x.click();
  }