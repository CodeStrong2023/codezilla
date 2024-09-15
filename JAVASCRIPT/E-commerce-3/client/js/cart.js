const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cartBtn");

const displayCart = () => {
    modalContainer.innerHTML = ""; // Limpia el contenido del modal
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";

    // Modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❎";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Carrito de Compras";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    // Modal Body
    cart.forEach(product => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
            <div class="product">
                <img class="product-img" src="${product.img}" />
                <div class="product-info">
                    <h4>${product.productName}</h4>
                </div>
                <div class="quantity">
                    <span class="quantity-btn-decrease">-</span>
                    <span class="quantity-input">${product.quantity}</span>
                    <span class="quantity-btn-increase">+</span>
                </div>
                <div class="price">${product.price * product.quantity}</div>
                <div class="delete-product">❎</div>
            </div>
        `;
        modalContainer.append(modalBody);

        const decrease = modalBody.querySelector('.quantity-btn-decrease');
        decrease.addEventListener('click', () => {
            if(product.quantity > 1){
                product.quantity--;
                displayCart();
            }
        });

        const increase = modalBody.querySelector('.quantity-btn-increase');
        increase.addEventListener('click', () => {
            product.quantity++;
            displayCart();
        });

        const deleteProduct = modalBody.querySelector('.delete-product');
        deleteProduct.addEventListener('click', () => {
            deleteCartProduct(product.id)
            const index = cart.findIndex(item => item.id === product.id);
            if (index > -1) {
                cart.splice(index, 1);
                displayCart(); // Actualiza el carrito
            }
        });
    });

    // Modal Footer
    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    //const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    modalFooter.innerHTML = `<div class="total-price">Total: $${total}</div>`;
    modalContainer.append(modalFooter);
};

// Listener para el botón del carrito
cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element) => element.id === id);
    cart.splice(foundId, 1);
    displayCart();
};
