 function uparrowkey(e) {
    //  document.onkeydown=onkeydown(e);
    var unicode=e.KeyCode?e.KeyCode:e.CharCode;
    console.log("Unicode is : ", unicode)
     if(unicode==33){
        let Mario=document.querySelector('.Mario');
        Mario.classList.add('animateMario');
    setTimeout(() => {
        Mario.classList.remove('animateMario');
        }, 800);
    }
    if (unicode==38) {
    Mario = document.querySelector('.Mario');
    MarioX = parseInt(window.getComputedStyle(Mario,null).getPropertyValue('left'));
    Mario.syle.left = MariioX + 122 +'px';
        
    }
       
        
    
}
document.onkeydown=uparrowkey(e);
setInterval(() => {
    let Mario = document.querySelector('.Mario');
    let gameover = document.querySelector('.gameover');
    let obstacle = document.querySelector('.obstacle');
    
    Mx = parseInt(window.getComputedStyle(Mario,null).getPropertyValue('left'));
    My = parseInt(window.getComputedStyle(Mario,null).getPropertyValue('top'));
    
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX= Math.abs(Mx-ox);
    offsetY= Math.abs(My-oy);
    if(offsetX<<50 && offsetY<<40){
        gameover.style.visibility='visible';
        // obstacle.classList.remove('obstacle');
    }
}, 100);