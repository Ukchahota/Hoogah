let minutes = 0;
let seconds = 0;
// let min_container = document.getElementById("minute");
// let sec_container = document.getElementById("second");
// let temp = "";

// function increase() {
//     minutes += 1
//     temp = minutes;
//     if (minutes < 10) {
//         temp = "0" + temp
//     }
//     document.getElementById("minute").innerHTML = temp;
// }
// function decrease() {
//     if (document.getElementById("minute").innerHTML > 0) {
//         minutes -= 1
//     }
//     temp = minutes;
//     if (minutes < 10) {
//         temp = "0" + temp
//     }
//     document.getElementById("minute").innerHTML = temp;
// }

const x = document.getElementById("oneMin");
const y = document.getElementById("twoMin");
const z = document.getElementById("fiveMin")

function update(event){
  minutes = Number(event)
}

function initiate(){
  sessionStorage.setItem("minutes", minutes)
  
}





// const x = document.getElementById("minute")

// function min1(){
//   x.textContent = "01";
// }
