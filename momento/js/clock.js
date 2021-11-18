const clock = document.querySelector("h2#clock");

function getClock() { 
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;

    //clock.innerText =(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
   // clock.innerText = (`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`);
}

//date new Date()- console 
getClock();
setInterval(getClock, 1000);
