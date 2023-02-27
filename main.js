const dino=document.querySelector('.dino')
const cactus=document.querySelector('.cactus')
const scoreInfo=document.querySelector('.score')


let score=0;

let duration=1.5;


function jump(){
    if(dispatchEvent.classList1!='jump'){
        dino.classList.add('jump')

        setTimeout(function(){
            dino.classList.remove('jump')
        },500)
    }
}

let checkAlive=setInterval(function(){
    let dinoBottom=parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"))
    let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if(cactusLeft<=3&&cactusLeft>=0){
        score=score+1
        scoreInfo.innerText=String(score)
    }

    if(cactusLeft>0 && cactusLeft<=50 && dinoBottom<=40 ){
        dino.style.backgroundColor="red"
        dino.style.animationPlayState="paused"
        cactus.style.animationPlayState="paused"
        alert('Вы проиграли')
        clearInterval(checkAlive)
        window.location.reload()
        
    }
   
},7)





document.addEventListener('keydown',function(event){
    jump()
})