const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}




var mainImg = document.getElementById("MainImg")
var smallImg = document.getElementsByClassName("sm-img")


smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;
}





const knowmore = document.getElementById('showknowmorebtn');
const hidemore = document.getElementById('hideknowmorebtn');
const morefeatures = document.getElementById('more-features');
if (knowmore) {
    knowmore.addEventListener('click', () => {
        morefeatures.classList.add('showmorefeatures');
        knowmore.classList.add('hide');
        hidemore.classList.add('show');
        hidemore.classList.remove('hide');
        knowmore.classList.remove('show');
        
    })

}
if (hidemore) {
    hidemore.addEventListener('click', () => {
        morefeatures.classList.remove('showmorefeatures');
        hidemore.classList.remove('show');
        hidemore.classList.add('hide');
        knowmore.classList.add('show');
        
    })

}



const xxl = document.getElementById('xxl');
const xl = document.getElementById('xl');
const l = document.getElementById('l');
const m = document.getElementById('m');
const s = document.getElementById('s');
const sizexxl = document.getElementById('size-xxl');
const sizexl = document.getElementById('size-xl');
const sizel = document.getElementById('size-l');
const sizem = document.getElementById('size-m');
const sizes = document.getElementById('size-s');
const sizeBox = {
    1 : [s, sizes], 2 : [m, sizem], 3 : [l, sizel], 4 : [xl, sizexl], 5 : [xxl, sizexxl]
};
if (xxl) {
    xxl.addEventListener('click', () => {
    toggleSizeButtons();
    sizexxl.classList.toggle('show-size-box');
    xxl.classList.toggle('border');
    })
}

if (xl) {
    xl.addEventListener('click', () => {
        toggleSizeButtons();
        sizexl.classList.toggle('show-size-box');
        xl.classList.toggle('border');
    })
    
}
if (l) {
    l.addEventListener('click', () => {
        toggleSizeButtons();
        sizel.classList.toggle('show-size-box');
        l.classList.toggle('border');
    })
    
}
if (m) {
    m.addEventListener('click', () => {
        toggleSizeButtons();
        sizem.classList.toggle('show-size-box');
        m.classList.toggle('border');
    })
    
}
if (s) {
    s.addEventListener('click', () => {
        toggleSizeButtons();
        sizes.classList.toggle('show-size-box');
        s.classList.toggle('border');
  
    })
    
}
function toggleSizeButtons() {
    for (const key in sizeBox) {
        sizeBox[key].forEach(element => {
           element.classList.remove('border');
           element.classList.remove('show-size-box');
        });
    }
}

