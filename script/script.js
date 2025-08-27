
// make a function for getting id
function getId(id) {
  const element = document.getElementById(id);
  return element;
}

// delegation system of heart counting..

getId("cart-box").addEventListener("click", function (e) {
  if (e.target.className.includes("heart-btn")) {
    const totalHeart = getId("total-heart").innerText;
    const currentTotal = Number(totalHeart) + 1;
    getId("total-heart").innerText = currentTotal;
  }
});

// delegation system of copy counting

getId("cart-box").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-btn")) {
    const card = e.target.closest(".card");
    // selected line from where be copied
    const hotlineNumber = card.querySelector(".hotline-number").innerText;

    // do copy
    navigator.clipboard.writeText(hotlineNumber).then(() => {
      alert(" Number copied ! : " + hotlineNumber);
    });

    // count total copy in total copy 
    const totalCopy = getId("total-copy").innerText;
    const currentTotalCopy = Number(totalCopy) + 1;
    getId("total-copy").innerText = currentTotalCopy;
  }
});

// delegation system of calling .....

getId("cart-box").addEventListener("click", function (e) {
  const callBtn = e.target.closest(".call-btn");
  const cartTitle =
    callBtn.parentNode.parentNode.children[1].children[0].innerText;
  const hotlineNumber =
    callBtn.parentNode.parentNode.children[1].children[2].innerText;
  if (callBtn) {
    const totalCoin = getId("total-coin").innerText;
    const currentCoin = Number(totalCoin) - 20;

    if (currentCoin < 0) {
      alert("❌ Insufficient coins! Need 20 coins to make this call.");
    } else {
      alert(`📞 Calling ${cartTitle} ${hotlineNumber}`);
    }
    if (currentCoin < 0) {
      currentCoin = 0;
    }
    getId("total-coin").innerText = currentCoin;

    console.log(hotlineNumber);
    const cartContainer = getId("cart-container");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div
              class="h-[70px] shadow bg-[#fafafa] rounded-[13px]  mt-4 mb-2 flex justify-between items-center p-2"
            >
              <div>
                <h3 class="text-[16px] font-semibold">${cartTitle}</h3>
                <p class="text-[16px] text-gray-500 font-normal">${hotlineNumber}</p>
              </div>
              <p class="text-[12px] font-medium">${new Date().toLocaleTimeString()}</p>
        </div>
            `;
    cartContainer.append(newDiv);
  }
});


// clear button form history container
getId("clear-btn").addEventListener("click", function () {
  const history = getId("cart-container");
  history.innerHTML = " ";
});


