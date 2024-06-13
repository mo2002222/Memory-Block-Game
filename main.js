document.querySelector(".start").onclick = function () {
    let name = prompt("Enter your Name");
    document.querySelector(".player-name").innerHTML=name;
    document.querySelector(".overlay").remove();
    if (name=="" || name== null) {
        document.querySelector(".player-name").innerHTML="Unknown";
    };
};
let images = document.querySelectorAll(".img-container img");
let arrayofimg = Array.from(images);
let wrongTries =document.querySelector(".wrong-t");
let isflibed = [];
let imageContainer = document.querySelector(".img-container");
images.forEach(img=>{

    img.addEventListener("click",(e)=>{
        document.getElementById("press").play();
        let sourceimg =img.src;
        let altimg =img.alt;
        img.classList.add("is-filbed");
        img.src=altimg;
        img.style.transform = "rotateY(180deg)";
        img.style.transformStyle = "preserve-3d";
        img.style.backfaceVisibility = "visible";
        img.style.transition = ".1s";
        
        isflibed.push(e.target);
        isflibed[0].style.pointerEvents = "none";
        if(isflibed.length ==2){
            imageContainer.style.pointerEvents = 'none'
        }

        setTimeout(()=>{
            
            if (isflibed.length==2) {
                if (isflibed[0].src==isflibed[1].src) {
                    isflibed[0].style.pointerEvents = "visible";
                    img.style.transform = "rotateY(180deg)";
                    isflibed[0].style.transform="scale(1.2)";
                    isflibed[0].style.transition=".9s";
                    isflibed[1].style.transform="scale(1.2)";
                    isflibed[1].style.transition=".9s";
                    isflibed[0].style.transform="scale(1)";
                    isflibed[1].style.transform="scale(1)";
                    isflibed.splice(0,2);
                    imageContainer.style.pointerEvents = 'visible';
                    document.getElementById("success").play();
                    
                }else{
                    isflibed[0].style.pointerEvents = "visible";
                    document.getElementById("wrong").play();
                    wrongTries.innerHTML = parseInt(wrongTries.innerHTML)+ 1;
                    imageContainer.style.pointerEvents = 'visible';
                    img.style.transform = "rotateY(0deg)";
                    img.style.transformStyle = "preserve-3d";
                    img.style.backfaceVisibility = "visible";
                    img.style.transition = ".1s";
                    img.src=sourceimg;
                    isflibed.splice(0,1);
                }

            }else if(isflibed.length==1){
                isflibed[0].style.pointerEvents = "visible";
                imageContainer.style.pointerEvents = 'visible';
                img.style.transform = "rotateY(0deg)";
                img.style.transformStyle = "preserve-3d";
                img.style.backfaceVisibility = "visible";
                img.style.transition = ".1s";
                img.src=sourceimg;

                isflibed.splice(0,1);
    
            }
        },800)
    })
    
});

    

