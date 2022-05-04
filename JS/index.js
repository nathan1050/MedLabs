import {purchaseClicked, removeCartItem, quantityChanged, addToCartClicked} from './Modules/cart.js';

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

    let button = document.getElementsByClassName('btn-light')[0];
    button.addEventListener('click', () => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', output);
        xhr.open('GET', 'JS/AJAX_requests/More_Items.txt');
        xhr.send();
        console.log(xhr)
    })

    let description = document.getElementsByClassName('btn-outline-dark')
    for (let i = 0; i < description.length; i++) {
        let button = description[i]
        button.addEventListener('click', reqData)
    }
}

/* Functions to call xhr request */

function reqData(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement 
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', infoOutput);
    xhr.open('GET', `JS/AJAX_requests/${title}.txt`);
    xhr.send();
    console.log(xhr)
    
}

function output(data){
    let MoreItemsList = document.getElementsByClassName("moreItems")[0];
    MoreItemsList.innerHTML = this.responseText;
    
    let addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function infoOutput(data){
    let information = document.getElementsByClassName("info")[0];
    information.innerHTML = this.responseText;
}