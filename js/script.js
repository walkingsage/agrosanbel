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

let indexCarousel = 0,
indexOtzyv = 0;

const carousetItems = document.querySelectorAll('.carusel__container'),
indikatorsContainer = document.querySelector('.carousel__indikators'),
moreCircle = document.querySelector('.circle__more'),
popularsContainers = document.querySelector('.populars__containers'),
otzyv = document.querySelectorAll('.otzyv'),
dotsIndicators = document.querySelector('.dots__indicators'),
burger = document.querySelector('.burger'),
menu = document.querySelector('.dark > .container'),
rowTovar = document.querySelectorAll('.catalog__container__row');

let menuopen = false;

burger.addEventListener('click', () => {
    if(!menuopen){
        $('.dark > .container').height('auto');
        menuopen = true;
    }
    else{
        $('.dark > .container').height('50px');
        menuopen = false;
    }
});

rowTovar.forEach(element => {
    element.style.display = "none";
});

for(let i = 0; i<carousetItems.length; i++){
    if(i == 0){
        indikatorsContainer.insertAdjacentHTML('beforeend', '<span class="circle active"></span>');
    }
    else{
        indikatorsContainer.insertAdjacentHTML('beforeend', '<span class="circle"></span>');
    }
}

for(let i = 0; i<otzyv.length; i++){
    if(i == 2){
        dotsIndicators.insertAdjacentHTML('beforeend', '<span class="circle active"></span>');
    }
    else if(i == 0 || i == otzyv.length-1){
        dotsIndicators.insertAdjacentHTML('beforeend', '<span class="circle" style="display:none;"></span>');
    }
    else{
        dotsIndicators.insertAdjacentHTML('beforeend', '<span class="circle"></span>');
    }
}

const indicators = document.querySelectorAll('.carousel__indikators > .circle');

const indicatorsDots = document.querySelectorAll('.dots__indicators > .circle');

let indexAcriveOtzyv = 1;

otzyv.forEach((element,index) => {
    if(element.classList.contains('active')){
        indexAcriveOtzyv = index;
        for(let i=0; i<otzyv.length;i++){
            if(i == indexAcriveOtzyv || i == indexAcriveOtzyv + 1 || i == indexAcriveOtzyv - 1){
                continue;
            }
            else{
                otzyv[i].style.display = "none";
            }
        }
    }
    element.addEventListener('click',() => {
        indexOtzyv = index;
        for(let i = 0; i<otzyv.length;i++){
            if(i == index){
                indicatorsDots[i].classList.add('active');
                if(indexOtzyv < indexAcriveOtzyv){
                    otzyv[indexOtzyv].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 otzyvLeftActive";
                    otzyv[indexOtzyv+1].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 otzyvLeftMove";
                    otzyv[indexOtzyv+2].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards otzyvLeftHide";
                    otzyv[indexOtzyv-1].style.animation =  "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards otzyvLeftShow";
                    setTimeout(() => {
                        otzyv[indexOtzyv].classList.add('active');
                        otzyv[indexOtzyv+2].style.display = "none";
                        otzyv[indexOtzyv-1].style.display = "grid";
                    }, 1000);
                    indexAcriveOtzyv = indexOtzyv;
                }
                else if(indexOtzyv == indexAcriveOtzyv){
                    continue;
                }
                else{
                    otzyv[indexOtzyv].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 otzyvRightActive";
                    otzyv[indexOtzyv-1].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 otzyvRightMove";
                    otzyv[indexOtzyv-2].style.animation = "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards otzyvRightHide";
                    otzyv[indexOtzyv+1].style.animation =  "1s cubic-bezier(0.26, 0.45, 0.6, 0.93) 0s 1 forwards otzyvRightShow";
                    setTimeout(() => {
                        otzyv[indexOtzyv+1].style.display = "grid";  
                        otzyv[indexOtzyv].classList.add("active");
                        otzyv[indexOtzyv-2].style.display = "none";
                    }, 1000);
                    indexAcriveOtzyv = indexOtzyv;
                }
            }
            else{
                indicatorsDots[i].classList.remove('active');
                otzyv[i].classList.remove('activeLeft');
                otzyv[i].classList.remove('activeRight');
                otzyv[i].classList.remove('active');
            }
        }
    });
});

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

const popularContainer = document.querySelectorAll('.new'),
popularContainerHit = document.querySelectorAll('.hit'),
newButton = document.querySelector('.new__button'),
hitsButton = document.querySelector('.hits__button');

newButton.classList.add('button__active');

for(let i = 0; i < popularContainerHit.length; i++){
    popularContainerHit[i].style.display = "none";
}

let scrollVal = 0;
let maxval = popularContainer.length * 140;

newButton.addEventListener('click', () => {
    maxval = popularContainer.length * 140;
    newButton.classList.add('button__active');
    hitsButton.classList.remove('button__active');
    for(let i = 0; i < popularContainerHit.length; i++){
        popularContainerHit[i].style.display = "none";
    }  
    for(let i = 0; i < popularContainer.length; i++){
        popularContainer[i].style.display = "block";
    }
});

hitsButton.addEventListener('click', () => {
    newButton.classList.remove('button__active');
    hitsButton.classList.add('button__active');
    for(let i = 0; i < popularContainer.length; i++){
        popularContainer[i].style.display = "none";
    }
    for(let i = 0; i < popularContainerHit.length; i++){
        popularContainerHit[i].style.display = "block";
    }        
    maxval = popularContainerHit.length * 140;
});

moreCircle.addEventListener('click', () => {
    scrollVal = scrollVal + 218;
    if (scrollVal >= maxval) {
        scrollVal = 0;
    }
    $('.populars__containers').scrollLeft(scrollVal);
    console.log(scrollVal);
    console.log(popularContainer.length);
});
