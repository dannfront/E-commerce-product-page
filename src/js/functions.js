
export function hiddenNavMobil(ele1,ele2) {
    ele1.classList.toggle('hidden')
    ele2.classList.toggle('hidden')
    
}

export function handleQuantityVisibility(quantity,sumQuantities) {
    if (sumQuantities !== 0) {
        quantity.classList.remove('hidden')
    } else {
        quantity.classList.add('hidden')
    }
}

export function updateQuantities(eleDom) {
    const [amount,amountOfPieces,totalPrice,quantity,sumQuantities]=eleDom
    amount.textContent = sumQuantities
    amountOfPieces.textContent = sumQuantities
    totalPrice.textContent = sumQuantities * 125
    quantity.textContent = sumQuantities
}

export function SlidesTranslate(slides,porcentaje){
    slides.forEach(slide => {
        slide.style.transform = `translateX(${porcentaje}%)`;
    })
}