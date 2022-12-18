let position=0;
function slideRight(){
    let slideArea = document.getElementById('slide-area');
    console.log(position)
    if(position>400){
        position=400
    }
    else{
        position+=400;
        slideArea.style.transform = `translateX(-${position}px)`;
    }
}
function slideLeft(){
    let slideArea = document.getElementById('slide-area');
    if(position<0){
        position=0;
    }
    else{
        position-=400;
        slideArea.style.transform = `translateX(-${position}px)`;
    }
}