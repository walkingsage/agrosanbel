$(document).ready(function() {

	 
    $('aside a.has-children').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
            $(this).removeClass('open');
        } else {		
            $(this).addClass('open');
        }
    });

    $('.faq-list__item-title').on('click', function(){
        $('.faq-list__item-title').parent().removeClass('active');
        $(this).parent().addClass('active');
    });

});

let indexCarousel = 0;

const carousetItems = document.querySelectorAll('.carusel__container'),
indikatorsContainer = document.querySelector('.carousel__indikators');

for(let i = 0; i<carousetItems.length; i++){
    if(i == 0){
        indikatorsContainer.insertAdjacentHTML('beforeend', '<span class="circle active"></span>');
    }
    else{
        indikatorsContainer.insertAdjacentHTML('beforeend', '<span class="circle"></span>');
    }
}

const indicators = document.querySelectorAll('.carousel__indikators > .circle');


let carouselMove = () => {
    indexCarousel++;
        if(indexCarousel == carousetItems.length){
            carousetItems[indexCarousel-1].style.position = "absolute";
            carousetItems[indexCarousel-1].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards carouselHide";
            setTimeout(() => {
                carousetItems[indexCarousel-1].style.display = "none";    
            }, 1000);
            indicators[indexCarousel-1].classList.remove('active');
            indexCarousel = 0;
            carousetItems[indexCarousel].style.display = "grid";
            carousetItems[indexCarousel].style.position = "relative";
            carousetItems[indexCarousel].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards carouselShow";
            indicators[indexCarousel].classList.add('active');
        }
        else if(indexCarousel < carousetItems.length){
            carousetItems[indexCarousel-1].style.position = "absolute";
            carousetItems[indexCarousel-1].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards carouselHide";
            setTimeout(() => {
                carousetItems[indexCarousel-1].style.display = "none";    
            }, 1000);
            indicators[indexCarousel-1].classList.remove('active');
            carousetItems[indexCarousel].style.display = "grid";
            carousetItems[indexCarousel].style.position = "relative";
            carousetItems[indexCarousel].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards carouselShow";
            indicators[indexCarousel].classList.add('active');
        }
};

let interval = setInterval(carouselMove,4000);

indicators.forEach((element,index) => {
    element.addEventListener('click',() => {
        for(let i=0; i<carousetItems.length; i++){
            if(index == i){
                carousetItems[i].style.display = "grid";
                carousetItems[i].style.position = "relative";
                carousetItems[i].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards carouselShow";
                indicators[i].classList.add('active');
                indexCarousel = i;
                clearInterval(interval);
                interval = setInterval(carouselMove,4000);
            }
            else{
                carousetItems[i].style.position = "absolute";
                carousetItems[i].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards carouselHide";
                setTimeout(() => {
                    carousetItems[i].style.display = "none";    
                }, 1000);
                indicators[i].classList.remove('active');
            }
        }
    });
});

