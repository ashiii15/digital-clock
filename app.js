// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const id = document.getElementById("demo")
function getClock(){
    const today = new Date()
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
id.innerHTML=time

}
window.addEventListener('load',setInterval(()=>{
 getClock()
    
},1000)
)
