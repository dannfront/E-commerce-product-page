'use strict'

import * as fn from './functions.js'

const menuMobil = document.querySelector('.menu-mobil')
const navMobil = document.querySelector('.nav-mobil')
const overlay = document.querySelector('.overlay')
const btnCloseMobil = document.querySelector('.btn-close-Mobil')
const btnCloseDesktop = document.querySelector('.btn-close-Desktop')
const partsContainer = document.querySelector('.parts-container')
const btnMinus = document.querySelector('.btn-minus')
const btnPlus = document.querySelector('.btn-plus')
const amount = document.querySelector('.amount')
const quantity = document.querySelector('.quantity')
const btnCart = document.querySelector('.btn-cart')
const fullCart = document.querySelector('.full-cart')
const emptyCart = document.querySelector('.empty-cart')
const totalPrice = document.querySelector('.total-price')
const amountOfPieces = document.querySelector('.amount-of-pieces')
const deleteCart = document.querySelector('.delete-cart')
const btnAddCart = document.querySelector('.btn-add-cart')
const imgPreview = document.querySelectorAll('.img-preview')

const slides = document.querySelectorAll('.slide-inner');
const slideImg = document.querySelectorAll('.silide-img');
const prevButton = document.querySelectorAll('.prev');
const nextButton = document.querySelectorAll('.next');

const desktopImageContainer = document.querySelector('.desktop--image--container');
const desktopTestImage = document.querySelector('.desktop--test--image');
const slideDesktop = document.querySelector('.slide--desktop');

let sumQuantities = 0
let index = 0

menuMobil.addEventListener('click', fn.hiddenNavMobil.bind(null, navMobil, overlay))
btnCloseMobil.addEventListener('click', fn.hiddenNavMobil.bind(null, navMobil, overlay))


//refactoeizar
partsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.btnParts')
    if (!btn) return

    btn.classList.contains('plus') ? sumQuantities++ : sumQuantities--
    sumQuantities<0?sumQuantities=0:""
    amount.textContent = sumQuantities
    btnPlus.disabled = sumQuantities === 3
    btnMinus.disabled = sumQuantities === 0
})


btnCart.addEventListener('click', () => sumQuantities != 0 ? fullCart.classList.toggle('hidden') : emptyCart.classList.toggle('hidden'))

deleteCart.addEventListener('click', () => {
    fn.hiddenNavMobil(emptyCart, fullCart)
    sumQuantities = 0

    fn.updateQuantities([amount, amountOfPieces, totalPrice, quantity, sumQuantities])
    fn.handleQuantityVisibility(quantity, sumQuantities)
    btnPlus.disabled = false
})

btnAddCart.addEventListener('click',()=>{
    fn.updateQuantities([amount, amountOfPieces, totalPrice, quantity, sumQuantities])
    fn.handleQuantityVisibility(quantity, sumQuantities)
})

desktopImageContainer.addEventListener('click', (e) => {
    const imageClick = e.target
    if (imageClick.tagName != 'IMG') return
    imgPreview.forEach(img=>{
        img.classList.remove('border-4','border-OrangePrimary')
    })
    imageClick.classList.add('border-4','border-OrangePrimary')
    desktopTestImage.setAttribute('src', imageClick.getAttribute('src'))
})

nextButton.forEach(e => {
    e.addEventListener('click', () => {
        index++
        if (index > (slideImg.length/2)-1) index = 0
        let porcentaje = index * -100
        fn.SlidesTranslate(slides,porcentaje)
    })
})
prevButton.forEach(e => {
    e.addEventListener('click', () => {
        index--
        if (index < 0) index = (slideImg.length/2)-1;
        let porcentaje = index * -100;
        fn.SlidesTranslate(slides,porcentaje)
    })
})
desktopTestImage.addEventListener('click', () => {
    overlay.classList.remove('hidden')
    slideDesktop.classList.toggle('hidden')
})
btnCloseDesktop.addEventListener('click',fn.hiddenNavMobil.bind(null,overlay,slideDesktop))
document.addEventListener('keydown',(e)=>{
    if(!(e.key==='Escape'))return
    overlay.classList.add('hidden')
    slideDesktop.classList.add('hidden')

})

