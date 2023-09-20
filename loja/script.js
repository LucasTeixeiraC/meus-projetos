let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

cartIcon.onclick = () => {
    cart.classList.add ("active")
}
closeCart.onclick = () => {
    cart.classList.remove ("active")
}


if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready);
    ready();
}
function ready () {
    var reomveCartButtons = document.getElementsByClassName('cart-remove')
    console.log(reomveCartButtons)
    for (var i = 0; i < reomveCartButtons.length; i++) {
        var button = reomveCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}
