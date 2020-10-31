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

const burger = document.querySelector('.burger'),
menu = document.querySelector('.dark > .container'),
headerNav = document.querySelector('.header__nav'),
kolvo = document.querySelector('.kolvo__input'),
min = document.querySelector('.min'),
plu = document.querySelector('.plu'),
containerHarakterСontent = document.querySelectorAll('.container__harakter__content'),
containerHarakter = document.querySelectorAll('.container__harakter'),
moreCircle = document.querySelector('.circle__more'),
popularContainer = document.querySelectorAll('.popular__container'),
moreEarlyCircle = document.querySelector('.circle__more__early'),
earlyContainer = document.querySelectorAll('.early__container__mobile'),
moreHitsCircle = document.querySelector('.circle__more__hits'),
hitsContainer = document.querySelectorAll('.hits__container__mobile'),
imageTovar = document.querySelector('.tovar__photos > img'),
morePhotos = document.querySelectorAll('.more__photos > img');

morePhotos.forEach((element,index) => {
    element.addEventListener('click', () => {
        let srcAttr = morePhotos[index].src;
        imageTovar.src = srcAttr;
    });
});

let scrollVal = 0;
let maxval = popularContainer.length * 258 - $('.populars__containers').width();
let scrollHitsVal = 0;
let maxHitsval = hitsContainer.length * 170 - $('.hits__containers__mobile').width();
let scrollEarlyVal = 0;
let maxEarlyval = earlyContainer.length * 170 - $('.early__containers__mobile').width();

moreHitsCircle.addEventListener('click', () => {
    scrollHitsVal = scrollHitsVal + 130;
    if (scrollHitsVal >= maxHitsval) {
        scrollHitsVal = 0;
    }
    $('.hits__containers__mobile').scrollLeft(scrollHitsVal);
    console.log('hits' + scrollHitsVal);
    console.log('hits' + maxHitsval);
});

moreEarlyCircle.addEventListener('click', () => {
    scrollEarlyVal = scrollEarlyVal + 130;
    if (scrollEarlyVal >= maxEarlyval) {
        scrollEarlyVal = 0;
    }
    $('.early__containers__mobile').scrollLeft(scrollEarlyVal);
    console.log('Early' + scrollEarlyVal);
    console.log('Early' + maxEarlyval);
});

moreCircle.addEventListener('click', () => {
    scrollVal = scrollVal + 228;
    if (scrollVal >= maxval) {
        scrollVal = 0;
    }
    $('.populars__containers').scrollLeft(scrollVal);
    console.log(scrollVal);
    console.log(maxval);
});

let openHaracter = [];

for(let i =0; i<containerHarakter.length; i++){
    openHaracter[i] = 0;
}

containerHarakter.forEach((element,index) => {
    element.addEventListener('click', () => {
        let number = index;
        for(let i = 0; i< containerHarakter.length; i++){
            if(i == number && openHaracter[i] == 0){
                containerHarakter[i].classList.add('active');
            }
            else{
                containerHarakter[i].classList.remove('active');
            }
        }
        for(let i =0;i<containerHarakter.length;i++){
            if(i == number && openHaracter[i] == 0){
                containerHarakterСontent[i].style.display = "grid";
                openHaracter[i] = 1;
            }
            else{
                containerHarakterСontent[i].style.display = "none";
                openHaracter[i] = 0;
            }
        }
    });
});

let menuopen = false;

burger.addEventListener('click', () => {
    if(!menuopen){
        headerNav.style.display = "block";
        $('.dark > .container').height('auto');
        menuopen = true;
    }
    else{
        headerNav.style.display = "none";
        $('.dark > .container').height('50px');
        menuopen = false;
    }
});


plu.addEventListener('click', () => {
    let kolichestvo = kolvo.value;
    kolichestvo++;
    kolvo.value = kolichestvo;
});


min.addEventListener('click', () => {
    let kolichestvo = kolvo.value;
    if(kolichestvo > 0){
        kolichestvo--;
        kolvo.value = kolichestvo;
    }
});