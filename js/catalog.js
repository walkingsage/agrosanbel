const burger = document.querySelector('.burger'),
menu = document.querySelector('.dark > .container'),
filterName = document.querySelectorAll('.section__title'),
sectionContent = document.querySelectorAll('.section__content'),
treugolnik = document.querySelectorAll('.treugolnik'),
clear = document.getElementById('clear'),
rows = document.querySelector('.rows'),
column = document.querySelector('.columns'),
allTovars = document.getElementById('all__tovars'),
kolvo = document.querySelectorAll('.kolvo__input'),
min = document.querySelectorAll('.min'),
plu = document.querySelectorAll('.plu'),
viewContainer = document.querySelector('.views__containers'),
rowTovar = document.querySelectorAll('.catalog__container__row'),
columnTovar = document.querySelectorAll('.catalog__container__column'),
moreButton = document.querySelector('.btn__more'),
showTovars = document.getElementById('show__tovars'),
numberPage = document.querySelectorAll('.number__page'),
pages = document.querySelector('.pages'),
next = document.querySelector('.next'),
prev = document.querySelector('.prev');

let viewsMode = "rows";
let tovarCount = 0;
let tovarShows = 0;
let columnsMax = 8;
let rowsMax = 5;
let pagesLenght = 0;
let clumnsShow = 8;
let rowsShow = 5;

let tovarCut = () => {
    tovarShows = 0;
    if(viewsMode == "columns"){
        for(let i = 0; i<columnTovar.length; i++){
            if(i < columnsMax && i<tovarCount){
                columnTovar[i].style.display = "grid";
                tovarShows++;
            }
            else{
                columnTovar[i].style.display = "none";
            }
        }
    }
    else if(viewsMode == "rows"){
        for(let i = 0; i<rowTovar.length; i++){
            if(i < rowsMax && i<tovarCount){
                rowTovar[i].style.display = "grid";
                tovarShows++;
            }
            else{
                rowTovar[i].style.display = "none";
            }
        }
    }
    showTovars.textContent = tovarShows;
};





moreButton.addEventListener('click', () => {
    if(viewsMode == "rows"){
        rowsMax = rowsMax+5;
    }
    else if (viewsMode == "columns"){
        columnsMax = columnsMax+5;
    }
    tovarCut();
});

let page;
let indexPage = 0;

prev.addEventListener('click', () => {
    indexPage--;
    if(indexPage>=0){
        page[indexPage].click();
        for(let i=0; i<page.length;i++){
            if(i == indexPage){
                page[i].classList.add('active__page');
            }
            else{
                page[i].classList.remove('active__page');
            }
        }
    }
});
next.addEventListener('click', () => {
    indexPage++;
    console.log(indexPage);
    if(indexPage<=page.length){
        page[indexPage].click();
        for(let i=0; i<page.length;i++){
            if(i == indexPage){
                page[i].classList.add('active__page');
            }
            else{
                page[i].classList.remove('active__page');
            }
        }
    }
});

let pageClick = () => {
    page.forEach((element,index) => {
        element.addEventListener('click', () => {
            if(viewsMode == "rows"){
               let pageNumber = page[index].textContent;
               let tovarShowPage = pageNumber * rowsShow;
               for (let i = tovarShowPage-5; i<tovarShowPage; i++) {
                   if(i<tovarCount){
                    rowTovar[i].style.display = "grid";
                   }
                   else{
                       continue;
                   }  
                }
                for(let i = tovarShowPage - 5; i>0; i--){
                   rowTovar[i].style.display = "none";
                }
    
                for(let i = tovarShowPage; i<tovarCount; i++){
                    rowTovar[i].style.display = "none";
                 }
             console.log(tovarShowPage);
    
            }
            else if(viewsMode == "columns"){
                let pageNumber = page[index].textContent;
                let tovarShowPage = pageNumber * clumnsShow;
                for (let i = tovarShowPage-8; i<tovarShowPage; i++) {
                    if(i<tovarCount){
                        columnTovar[i].style.display = "grid";
                       }
                       else{
                           continue;
                       }
                 }
                 for(let i = tovarShowPage - 8; i>0; i--){
                    columnTovar[i].style.display = "none";
                 }
                 for(let i = tovarShowPage; i<tovarCount; i++){
                    columnTovar[i].style.display = "none";
                 }
    
             }
             for(let i=0; i<page.length;i++){
                if(i == index){
                    page[i].classList.add('active__page');
                }
                else{
                    page[i].classList.remove('active__page');
                }
            }
        });
    });
};

let pagesSet = () => {
    for (let index = 1; index <= pagesLenght ; index++) {
        if(index == 1){
            pages.insertAdjacentHTML('beforeend', `<span class="number__page active__page"> ${index} </span>`);
        }
        else{
            pages.insertAdjacentHTML('beforeend', `<span class="number__page"> ${index} </span>`);
        }
    }
    page = document.querySelectorAll('.number__page');
    pageClick();
};

let viewRotate = () => {
    pagesLenght = 0;
    tovarCount = 0;
    let pagesCount = document.querySelectorAll('.number__page');
    for(let index = 0; index < pagesCount.length; index++) {
        pagesCount[index].remove();
    }
    if(viewsMode == "columns"){
        viewContainer.classList.remove('catalog__containers__row');
        viewContainer.classList.add('catalog__containers__column');
        for(let i = 0; i<rowTovar.length; i++){
            rowTovar[i].style.display = "none";
        }
        for(let i = 0; i<columnTovar.length; i++){
            columnTovar[i].style.display = "grid";
            tovarCount++;
        }
        rows.classList.remove('active');
        column.classList.add('active');
        allTovars.textContent = tovarCount;
        pagesLenght = Math.ceil(tovarCount/columnsMax);
        tovarCut();
        pagesSet();
    }
    else if(viewsMode == "rows"){
        viewContainer.classList.remove('catalog__containers__column');
        viewContainer.classList.add('catalog__containers__row');
        for(let i = 0; i<columnTovar.length; i++){
            columnTovar[i].style.display = "none";
        }
        for(let i = 0; i<rowTovar.length; i++){
            rowTovar[i].style.display = "grid";
            tovarCount++;
        }
        rows.classList.add('active');
        column.classList.remove('active');
        console.log("row");
        allTovars.textContent = tovarCount;
        pagesLenght = Math.ceil(tovarCount/rowsMax);
        tovarCut();
        pagesSet();
    }
};


plu.forEach((element,index) => {
    element.addEventListener('click', () => {
        let kolichestvo = kolvo[index].value;
        kolichestvo++;
        kolvo[index].value = kolichestvo;
    });
});

min.forEach((element,index) => {
    element.addEventListener('click', () => {
        let kolichestvo = kolvo[index].value;
        if(kolichestvo > 0){
            kolichestvo--;
            kolvo[index].value = kolichestvo;
        }
    });
});
viewRotate();

rows.addEventListener('click', () => {
    viewsMode = "rows";
    viewRotate();
    indexPage = 0;
});

column.addEventListener('click', () => {
    viewsMode = "columns";
    viewRotate();
    indexPage = 0;
});

let showContent = [];

for(let i = 0; i<filterName.length; i++){
    showContent[i] = 0;
}

filterName.forEach((element,index) => {
    element.addEventListener('click',() => {
        if(showContent[index] == 0){
            sectionContent[index].style.display = "grid";
            showContent[index] = 1;
            treugolnik[index].classList.add('active');
        }
        else{
            sectionContent[index].style.display = "none";
            showContent[index] = 0;
            treugolnik[index].classList.remove('active');
        }
    });
});

clear.addEventListener('click', () => {
    $('#search__filter')[0].reset();
});

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