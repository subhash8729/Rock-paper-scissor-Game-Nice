

let vid1 = document.querySelector('#vid1');
let vid2 = document.querySelector("#vid2");


const player = (value) =>{
    if(value==0){
       vid2.innerHTML = '<video src="videoes/rock.mp4" autoplay muted></video>'
    }
    else if(value==1){
        vid2.innerHTML = '<video src="videoes/paper.mp4" autoplay muted></video>'
    }
    else if(value==2){
        vid2.innerHTML = '<video src="videoes/scissor.mp4" autoplay muted></video>'
    }
}
let button = document.querySelectorAll("button")

button.forEach((value,index)=>{
    value.addEventListener("click",()=>{
        if(index==0){
            vid1.innerHTML = '<video src="videoes/rock1.mp4" autoplay muted></video>'
            player(Math.floor(Math.random()*3))
        }
       else if(index==1){
            vid1.innerHTML = '<video src="videoes/paper1.mp4" autoplay muted></video>'
            player(Math.floor(Math.random()*3))
        }
        else if(index==2){
            vid1.innerHTML = '<video src="videoes/scissor1.mp4" autoplay muted></video>'
            player(Math.floor(Math.random()*3))
        }
    })

})
