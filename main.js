SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();

function start_voice_recognition(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event)
    var Content=event.results[0][0].transcript;
   
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    

    if(Content=="selfie"){
        Speak(); 
    }
}
camera=document.getElementById("camera");
Webcam.set({
    width:400,
    height:350,
    img_format:"jpeg",
    jpeg_quality:90
});


 function Speak(){
     Synth=window.speechSynthesis;
     speech_data="Taking Selfie in 5 seconds";
     utter=new SpeechSynthesisUtterance(speech_data);
     Synth.speak(utter);
    Webcam.attach(camera);
setTimeout(function(){
snapshot();
save();
},5000)
 }
 function snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("output").innerHTML="<img id='result' src='"+data_uri+"'/>";
})
 }
function save(){
   link=document.getElementById("link");
   link.href=document.getElementById("result").src
   link.click() 
}