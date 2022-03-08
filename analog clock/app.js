const sec=document.querySelector(".secs");
const min=document.querySelector(".mins");
const hour=document.querySelector(".hours");

function tiktac(){
    let second=new Date().getSeconds();
    let minute=new Date().getMinutes();
    let hours=new Date().getHours();

    sec.style.transform=`translateX(-50%)rotate(${180+(second*6)}deg)`;
    min.style.transform=`translateX(-50%)rotate(${180+(minute*6)}deg)`;
    hour.style.transform=`translateX(-50%)rotate(${180+(hours*30)}deg)`;

    console.log({second,minute,hours});
    
}

setInterval(tiktac,1000);