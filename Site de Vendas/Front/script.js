

// BARRA DE PESQUISA

searchForm = document.querySelector('.header .menu .lado-esquerdo-menu .barradeprocura');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

// NAVBAR 

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};



// HEADER

window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

        if (window.scrollY > 80) {
            document.querySelector('.header .menu').classList.add('active');
        } else {
            document.querySelector('.header .menu').classList.remove('active');
        }
    }

window.onload = () => {
    
        if (window.scrollY > 80) {
            document.querySelector('.header .menu').classList.add('active');
        } else {
            document.querySelector('.header .menu').classList.remove('active');
        }
    }


// ACABO


let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 8000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

document.addEventListener("DOMContentLoaded", function () {
   
    addEventListenersBasedOnWidth();

    
    window.addEventListener("resize", function () {
        
        removeEventListeners();

        
        addEventListenersBasedOnWidth();
    });

    function addEventListenersBasedOnWidth() {
        
        if (window.innerWidth > 768) {
            const blackFridayLink1 = document.querySelector('.menu-black');
            const sideBar1 = document.querySelector('.side-bar');

            const blackFridayLink2 = document.querySelector('.menu-fem');
            const sideBar2 = document.querySelector('.side-bar2');

            const blackFridayLink3 = document.querySelector('.menu-masc');
            const sideBar3 = document.querySelector('.side-bar3');

            const blackFridayLink4 = document.querySelector('.menu-infan');
            const sideBar4 = document.querySelector('.side-bar4');

            blackFridayLink1.addEventListener('click', function () {
                toggleSideBar(sideBar1);
            });

            blackFridayLink2.addEventListener('click', function () {
                toggleSideBar(sideBar2);
            });

            blackFridayLink3.addEventListener('click', function () {
                toggleSideBar(sideBar3);
            });

            blackFridayLink4.addEventListener('click', function () {
                toggleSideBar(sideBar4);
            });
        }
    }

    function toggleSideBar(sidebar) {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        } else {
            closeAllSideBars();
            sidebar.classList.add('active');
        }
    }

    function closeAllSideBars() {
        const sideBar1 = document.querySelector('.side-bar');
        const sideBar2 = document.querySelector('.side-bar2');
        const sideBar3 = document.querySelector('.side-bar3');
        const sideBar4 = document.querySelector('.side-bar4');

        sideBar1.classList.remove('active');
        sideBar2.classList.remove('active');
        sideBar3.classList.remove('active');
        sideBar4.classList.remove('active');
    }

    function handleLinkClick(event) {
       
        console.log('Link clicado:', event.target);
       
    }
    

    function removeEventListeners() {
        // Remove todos os ouvintes de eventos relacionados aos links
        const links = document.querySelectorAll('.menu-black, .menu-fem, .menu-masc, .menu-infan');
        links.forEach(link => {
            link.removeEventListener('click', handleLinkClick);
        });
    }
});


function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type ==='password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('fa-eye','fa-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('fa-eye-slash','fa-eye',)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById('overlay');
    const loginBtn = document.getElementById('login-btn');
    const loginBtn2 = document.getElementById('login-btn2');
    const closeLoginBtn = document.getElementById('close-login-btn');
    const cadastroBtn = document.querySelector('.cadastroBtn');
    const loginForm = document.getElementById('login-form-container');
    const cadastroForm = document.getElementById('form');
    const voltarBtn = document.getElementById('voltarBtn');

    loginBtn.addEventListener('click', function () {
        loginForm.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    loginBtn2.addEventListener('click', function () {
        loginForm.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    
    closeLoginBtn.addEventListener('click', function () { 
        loginForm.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    
    cadastroBtn.addEventListener('click', function () {
        loginForm.style.display = 'none';
        cadastroForm.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    
    voltarBtn.addEventListener('click', function () {
        cadastroForm.style.display = 'none';
        loginForm.style.display = 'block';
        overlay.style.display = 'block';
    });
});

document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); 

    if (!document.getElementById('form').classList.contains('active')) {
        document.getElementById('form').classList.add('active');
        document.getElementById('overlay').style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cadastroBtn = document.getElementById('cadastroBtn');

    if (cadastroBtn) {
        cadastroBtn.addEventListener('click', function (event) {
            event.preventDefault();

            const loginFormContainer = document.getElementById('login-form-container');
            const form = document.getElementById('form');
            const overlay = document.getElementById('overlay');

            if (loginFormContainer && form && overlay) {
                loginFormContainer.style.display = 'none';
                form.style.display = 'block';
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    }
});


document.getElementById('close-login-btn').addEventListener('click', function() {
    document.getElementById('form').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('voltarBtn').addEventListener('click', function() {
    document.getElementById('form').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
});

// ABRIR E FECHAR CARRINHO

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () =>{
    cart.classList.add("active");
})

closeCart.addEventListener("click", () => {
    cart.classList.remove("active")
})

// QUANDO DOCUMENTO ESTIVER PRONTO
if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', start);
}else{
    start();
}

// START
function start(){
    addEvents();
    updateTotal();
}

// UPDATE E RENDERIZAR
function update(){
    addEvents();
    updateTotal();
}

// ADICIONAR EVENTOS
function addEvents() {
    // REMOVER ITENS DO CARRINHO
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    // MUDAR QUANTIDADE ITEM
    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuantity);
    });

    // Adicionar pela primeira vez no carrinho
    let addCart_btns = document.querySelectorAll(".paracomprar");
    addCart_btns.forEach(btn => {
        btn.addEventListener("click", handle_addCartItem);
    })

    // COMPRAR PRODUTO
    const buy_btns = document.querySelectorAll(".btn-buy");
    buy_btns.forEach((btn) => {
        btn.addEventListener("click", handle_buyOrder);
    });
}
// EVENTOS MANUAIS
let itemsAdded = [];

function handle_addCartItem() {
    let product = this.parentElement; 
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;

    // Verifica se o item já está no carrinho
    let existingItem = itemsAdded.find((el) => el.title === title);

    if (existingItem) {
        alert("O item já está no carrinho");
        
        // Incrementa a quantidade em vez de adicionar novamente
        let cartQuantityInput = document.querySelector(`.cart-box[data-title="${title}"] .cart-quantity`);
        cartQuantityInput.value = parseInt(cartQuantityInput.value) + 1;

        // Atualiza total e contador
        update();
        updateCartCounter();
        
        return;
    }

    // Adiciona o novo item ao carrinho
    let newToAdd = {
        title,
        price,
        imgSrc,
    };

    itemsAdded.push(newToAdd);

    // Adiciona produto ao carrinho
    let cartboxElement = CartBoxComponent(title, price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartboxElement;
    newNode.setAttribute("data-title", title);  
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    // Atualiza total e contador
    update();
    updateCartCounter();
}


function handle_removeCartItem() {
    this.parentElement.remove(); 
    itemsAdded = itemsAdded.filter(
        (el) =>
        el.title !==
        this.parentElement.querySelector('.cart-product-title').innerHTML
    );

    update();
    updateCartCounter();
}

function handle_changeItemQuantity(){
    if(isNaN(this.value) || this.value < 1 ){
        this.value = 1;
    }
    this.value = Math.floor(this.value); // manter inteiro

    update();
}

function handle_buyOrder() {
    if (itemsAdded.length === 0) { 
        alert("Não Há Nenhum Pedido no Carrinho Ainda! \nFaça Um Pedido Primeiro. ");
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = '';
    alert("Seu Pedido Foi Realizado com Sucesso!");
    itemsAdded = [];

    updateCartCounter();
    update();
}

// UPDATE E RENDERIZAR FUNÇOES
function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = document.querySelector(".total-price"); 
    let total = 0;

    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("R$", "").replace(",", ".")); 
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    total = total.toFixed(2); 

    totalElement.innerHTML = "R$" + total; // Alteração aqui
}

function CartBoxComponent(title, price, imgSrc){
    return `
    <div class="cart-box">
                <img src=${imgSrc} alt="" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">${title}</div>
                    <div class="cart-price">${price}</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
                <!--REMOVER CARINHO-->
                <i class="fas fa-trash-alt cart-remove"></i>
            </div>
        </div>`;
}

function updateCartCounter() {
    const contador = document.getElementById("carrinho-contador");
    contador.textContent = itemsAdded.length;
  }

// SEARCH-BOX RESPONSIVO

