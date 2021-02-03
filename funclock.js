// setInterval(showCurrentTime,1000);
var wakeupTime=7;
var lunchTime=2;
var napTime=lunchTime+2;
var partyTime;
var noon=12;
var evening=18;
var meridian;
var party=false;

//Display current Time
function showCurrentTime(){

    var clock=document.getElementById('clock');
    var currentTime=new Date();
    var hours= currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();
    if(hours>noon)
    meridian='PM';
   
    else
    meridian='AM';
    var Time= hours+':'+minutes+':'+seconds+' '+meridian
    clock.innerHTML=Time;

}

//update Image as per Time
function updateImage(){
    var time=new Date().getHours();
    if(party==false){
    if(time==wakeupTime)
    document.getElementById('image').setAttribute('src','wakeup.jpg');
    else if(time==lunchTime)
    document.getElementById('image').setAttribute('src','lunchtime.jpg');
    else if(time==napTime)
    document.getElementById('image').setAttribute('src','naptime.jpg');
    else if (time==noon)
    document.getElementById('image').setAttribute('src','goodnoon.jpg');
    else
    document.getElementById('image').setAttribute('src','normal.jpg');
    }
    
showCurrentTime();
}
updateImage();
setInterval(updateImage, 1000);
//Activate wakeupTime
function setWakeupTime(){
    wakeupTime= document.getElementById('wakeUpTimeSelector').value;
}
document.getElementById('wakeUpTimeSelector').addEventListener('change', setWakeupTime);

//Activate lunchTime
function setNapTime(){
    napTime= document.getElementById('napTimeSelector').value;
}
document.getElementById('napTimeSelector').addEventListener('change', setNapTime);

//Activate napTime
function setLunchTime(){
    lunchTime= document.getElementById('lunchTimeSelector').value;
}
document.getElementById('lunchTimeSelector').addEventListener('change', setLunchTime);

//Update party image

document.getElementById('partyTimeBtn').addEventListener('click', changepartyimage);

function changepartyimage(){
var partybtn=document.getElementById('partyTimeBtn');
 if(partybtn.innerText=="Party Time!"){
     party=true;
     partybtn.innerText="Party Over!";
    document.getElementById('image').setAttribute('src','party.jpg');   
  }
  else{
    party=false;
    partybtn.innerText="Party Time!";
}
}



