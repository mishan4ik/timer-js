let text = document.getElementById("dayText");
let text1 = document.getElementById("dayText2");

let timer = 1800;

setInterval(func,1000);

function func()  {
    let minute = Math.floor(timer/60)
    let seconds = timer %  60;
    seconds = seconds < 10 ? "0" + seconds: seconds
    text.innerHTML = `${seconds}`;
    text1.innerHTML = `${minute}`;
    timer--

}

