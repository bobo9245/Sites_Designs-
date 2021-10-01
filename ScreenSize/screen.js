const btn = document.getElementById("button");
const size = document.getElementById('size');
var height,width;
function renew(){
    height = window.innerHeight;
    width = window.innerWidth;
}
btn.addEventListener('click',()=>{
    renew();
    if(width >= 1000&& height <=300){
        size.style.fontSize = "60px";
    }else{
        size.style.fontSize = "30px";
    }
}
)
$(window).resize(()=>{
    renew();
    console.clear();
    console.log(height+" "+width);
   
})