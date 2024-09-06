const modalContainer = document.getelementoById("modal-container");
const modalOverlay  = document.getelementoById("modal-Overlay");

const cartBtn= document.getElementById("cart-Btn");

const displaycart=() => {
    modalContainer.innerHTML ="";
    modalContainer.style.display= "block";
    modalOverlay.style.display="block";
    //modal header 
    const modalHeader=document.createElement("div");

    const modalclose= document.createElement("div");
    modalclose.innerText="❌"
    modalclose.className= "modal-close";
    modalHeader.append(modalclose);

    modalclose.addEventListener("click",() => {
        modalContainer.style.display="none";
        modalOverlay.style.display="none";

    });
      


    const modalTitle= document.createElement("div");
    modalTitle.innerText= "Cart";
    modalTitle.className= "modal-title";
    modalTitle.append("modal-title");

    modalContainer.append(modalHeader);


    cartBtn.addEventListener("click",displaycart)
};
