if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    window.onload = function () {
        const ham = document.querySelector('.ham');
        const mobile = document.querySelector('.mobile')
       
    
        ham.addEventListener("click", function() {
            ham.classList.toggle("active");
            mobile.classList.toggle("active");
            
        })
    };
    
    const shop = document.querySelector(".nana")
    const purchase = document.querySelector(".purchase")
    const close = document.querySelector(".close")
    const mobile = document.querySelector(".aquila")
    
    
    mobile.addEventListener("click", function() {
        purchase.classList.toggle("active");
    })
    
    shop.addEventListener("click", function() {
        purchase.classList.add("active");
    })
    close.addEventListener("click", function() {
        purchase.classList.remove("active");
       
    })
    
    
    //cart system
    var removeItem = document.getElementsByClassName('btn-remove')
    for (var i = 0; i < removeItem.length; i++) {
        var button = removeItem[i]
        button.addEventListener("click", removeCartItem)  
    }
    
    var quantityInput = document.getElementsByClassName('cart-item-input')
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener('change', quantityChanged)
    }
    
    var addToCart = document.getElementsByClassName('select')
    for (var i = 0; i < addToCart.length; i++) {
        var button = addToCart[i]
        button.addEventListener('click', addItemToCart)
    }
    
    document.getElementsByClassName('buy')[0].addEventListener('click', purchaseClicked)
    
    //login form
    
}

function purchaseClicked() {
    alert('Thank you for your purchase!')
    var purchase = document.getElementsByClassName('cart-item-sec')[0]
    while (purchase.hasChildNodes()) {
        purchase.removeChild(purchase.lastChild)
    }
    updateTotall()
}

function removeCartItem(event) {
    var button = event.target
    button.parentElement.parentElement.remove()
    updateTotall()
}

function quantityChanged(event) {
    input = event.target
    if (isNaN(input.value) || input.value <= 0 ) {
        input.value = 1
    }
    updateTotall()
}
function addItemToCart(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var name = shopItem.getElementsByClassName('name')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var img = shopItem.getElementsByClassName('image')[0].src
    var id = shopItem.getElementsByClassName('id')[0].innerText
    add(price, name, img, id)
    updateTotall()
}

function add(price, name, img, id) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-sec')
    cartItems = document.getElementsByClassName('cart-item-sec')[0]
    var checkId = document.getElementsByClassName('cart-id')
    for (var i = 0; i < checkId.length; i++) {
        if (checkId[i].innerText == id) {
            alert("Item has already been added to cart")
            return
        }
    }
    var cartContent = `
        <div class="cart-item">
            <img src="${img}" alt="watch" class="cart-img" width: 100 height: 100>
            <span class="cart-name">${name}</span>
            <span class="cart-id" style="display: none;">${id}</span>
        </div>
        <span class="cart-price">${price}</span>
        <div class="cart-quantity">
            <input type="number" class="cart-item-input" value="1">
            <button class="button btn-remove">Remove</button>
        </div>
    `
    cartRow.innerHTML = cartContent
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-item-input')[0].addEventListener('change', quantityChanged)
}

function updateTotall() {
    var cartItems = document.getElementsByClassName("cart-items")[0]
    var cartSec = document.getElementsByClassName("cart-sec")
    total = 0
    for (var i = 0; i < cartSec.length; i++) {
        var update = cartSec[i]
        var priceElement = update.getElementsByClassName('cart-price')[0]
        var quantityElement = update.getElementsByClassName('cart-item-input')[0]
        var price = parseFloat(priceElement.innerText.replace("k", ""))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('sum')[0].innerText =  'k' + total
    
}

//to login page

const get = document.querySelector('.login')
get.addEventListener("click", loadFile)

const getTwo = document.querySelector('.log')
getTwo.addEventListener('click', loadFile)

function load() {
    alert('God is great')
}


const target = document.querySelector(".target");



function loadFile() {
    fetch(`sign.html`)
    .then(res => {
        if(res.ok) {
            return res.text();
        }
    })
    .then(fetch => {
        target.innerHTML = fetch;
    });

    target.classList.add('active')
};

function exit() {
    const remove = document.querySelector('.exit')
    const target = document.querySelector('.target')
    remove.parentElement.parentElement.remove()
    target.classList.remove('active')
}

function checkInput() {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const userError = document.getElementById("user_error");
    const emailError = document.getElementById("email_error");
    const passwordError = document.getElementById("password_error");


    form.addEventListener("submit", (e) => {
        
        let msg1 = [];
        let msg2 = [];
        let msg3 = [];
        
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();


        if(usernameValue === "" || usernameValue === null) {
            msg1.push("Username cannot be empty!");
            username.classList.toggle("active");
        }
        if(emailValue === "" || emailValue === null) {
            msg2.push("email cannot be empty!");
            email.classList.toggle("active");
        }
        if(passwordValue === "" || passwordValue === null) {
            msg3.push("password cannot be empty!");
            password.classList.toggle("active");
            password2.classList.toggle("active");
        }
        if(passwordValue !== password2Value) {
            msg3.push("password does not match");
            password.classList.toggle("active")
            password2.classList.toggle("active")
        }
        if(msg1.length > 0 || msg2.length > 0 || msg3.length > 0) {
            e.preventDefault();
            userError.innerText = msg1;
            emailError.innerText = msg2;
            passwordError.innerText = msg3;
        }
    });
}




