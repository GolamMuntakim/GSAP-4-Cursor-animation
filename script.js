let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration : 1,
    })
})

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale:4
    })
})
imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1
    })
})
