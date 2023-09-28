
function displayTime(){
    hrs=document.querySelector(".hours");
    min=document.querySelector(".minutes");
    sec=document.querySelector(".seconds");
    sessions=document.querySelector(".sessions");

    let clock=new Date();
    hrs.innerHTML=clock.getHours();
    min.innerHTML=clock.getMinutes();
    sec.innerHTML=clock.getSeconds();

    if (hrs>12){
        hrs=hrs-12;
        sessions.innerHTML="PM"
    }
    else{
        sessions.innerHTML="AM"
    }
}
setInterval(displayTime,1000);
