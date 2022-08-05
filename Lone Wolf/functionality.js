s=0;
cross=true;

const au = new Audio('game.mp3');
const go = new Audio('gameover.wav');


onkeydown = function(e)
{
    
    if(e.keyCode==32||e.keyCode==38)
    {
        hero = document.querySelector('.hero');
        hero.classList.add('heroanimation');
        setTimeout(()=>{
            hero.classList.remove('heroanimation');
        },800);
    }

    if(e.keyCode==39)
    {
        hex = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
        hero.style.left = (hex + 50) + 'px';
    }

    if(e.keyCode==37)
    {
        hex = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
        hero.style.left = (hex- 50) + 'px';
    }
}

setInterval(()=>
{ 
       hero = document.querySelector('.hero');
       villain = document.querySelector('.villain');
       gameover = document.querySelector('.gameover');
       
       hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
       hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue('top'));

       vx = parseInt(window.getComputedStyle(villain, null).getPropertyValue('left'));
       vy = parseInt(window.getComputedStyle(villain, null).getPropertyValue('top'));

       cx = Math.abs(hx-vx);
       cy = Math.abs(hy-vy);

       
       
       if(cx<100&&cy<125)
       {
        gameover.innerHTML="Game Over";
        villain.classList.remove('villainanimation');
        cross=false;
        au.pause();
        go.play();
        setTimeout(()=>{
            go.pause();
        },2500);
       }

       else if(cross==true&&cx<120)
       {
         s = s+5;
         updatescore(s);
         cross=false;
         au.play();
         setTimeout(()=>{
            cross=true;
         },1000);

         setTimeout(()=>{
         anidur = parseFloat(window.getComputedStyle(villain, null).getPropertyValue('animation-duration'));
         if(anidur>2.1)
         { 
            newdur = anidur - 0.1;
         }
         else
         {
            newdur=anidur;
         }
         console.log(newdur);
         villain.style.animationDuration = newdur + 's';
         },500);
       }
},70)

function updatescore(s)
{
    score.innerHTML = "Your Score: " + s;
}
 
