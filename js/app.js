//UI 
const btn=document.querySelector("#btnsubmit");
const noti=document.querySelector("#noti");

//EventListener
btn.addEventListener("click",()=>hello());

function hello(){
    const message=document.createElement('div');
    const ptag=document.createElement('h4');

    message.classList.add('message');
    ptag.textContent="Hello, Are you ok?";
    message.appendChild(ptag);
    noti.appendChild(message);
}

