 (function(){
    const sliders = [...document.querySelectorAll('.projects')]; 
    const buttonNext = document.querySelector('#next');
    const buttonAfter = document.querySelector('#before');
    let value;
    buttonNext.addEventListener('click',()=>{
        changePosition(1);
    });
    buttonAfter.addEventListener('click',()=>{
        changePosition(-1);
        
    });

    
    const changePosition = (add)=>{
        
        const actualPicture = document.querySelector('.projects-show').dataset.id;
        value = Number(actualPicture);
        value+= add;

        sliders[Number(actualPicture)-1].classList.remove('.projects-show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('.projects-show');
        
    }
 })();

 