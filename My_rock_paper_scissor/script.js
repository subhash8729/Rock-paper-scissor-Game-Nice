
let cont       = document.getElementById("cont");
let button     = document.querySelector("button");


const converter = (number) => {
    if (number == 0) {
        cont.innerHTML = '<video src="videoes/rock.mp4" autoplay muted playsinline></video>'
    } else if (number == 1) {
       cont.innerHTML = '<video src="videoes/paper.mp4" autoplay muted playsinline></video>'
    } else {
        cont.innerHTML = '<video src="videoes/scissor.mp4" autoplay muted playsinline></video>'
    }
};

button.addEventListener("click",()=>{
    converter(Math.floor(Math.random()*3));
})
