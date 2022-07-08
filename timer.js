let minutes = sessionStorage.getItem("minutes")
let seconds = 0
let timer6 = 5

function start() {
    setInterval(() => {

        
        document.getElementById("minute").innerText = minutes < 10 ? "0" + minutes : minutes
        document.getElementById("second").innerText = seconds < 10 ? "0" + seconds : seconds
        document.getElementById("time6").innerText = timer6
        
        if (minutes == 0 && seconds == 0) {
            clearInterval(this)
            window.location.href = "end.html"
        }

        timer6--
        if(timer6<0){
            timer6=5
        }
        
        seconds -= 1
        if (seconds < 0) {
            seconds = 59
            minutes -= 1
        }
        

    }, 1000)
}

// const lt = document.querySelector(".t");
// const st = document.querySelector(".startBtn")
// st.addEventListener("click",bt(6))
// const timer6 = function (a) {


//   let tym = a - 1;

//   const timer = setInterval(function () {


//     lt.textContent = tym;
//     if (tym == 0) {
//       tym=6;
//     }

//     tym--;


//   }, 1000)

// }
// timer6(6)

