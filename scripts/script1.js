let currentCoin = document.getElementById('coin-number').innerText;
let currentHeart = parseInt(document.getElementById('heart-number').innerText);
let currentCopied = document.getElementById('copy-number').innerText;
const loves = document.getElementsByClassName('loved')
for (love of loves) {
    love.addEventListener('click', function (e) {//question>what about the working procedure ?We have added eventListener to all individual elements by loop.It's a;ll the same if we added eventListener individually
        if (e.target.dataset.clicked === 'true') {//target er majhe kichu dataset ache jar majhe clicked ekta attribute
            alert("Already added to favourite")
            return;
        }
        e.target.dataset.clicked = 'true';
        currentHeart++;
        document.getElementById('heart-number').innerText = currentHeart.toString();
        e.target.classList.add("love-hover");
        // p1=e.target.parentNode.parentNode.parentNode;
        // console.log(p1);
        // aim=p1.querySelector(".yoyo");//Problem is heading tag there is something that is preventing from consoling the desired output
        // console.log(aim)
        p = e.target.closest('.bg-white');
        const recipient = p.querySelector('p');
        const text = recipient.innerText;
        alert(`added "${text}" to favourite list`)

    });

}
const dial = document.getElementsByClassName('dial');
for (call of dial) {
    call.addEventListener("click", function (e) {
        let balance = parseInt(currentCoin);
        if (balance < 20) {
            alert("You have spent all Coins!Coin Balance is zero\n\nKindly Recharge to call again\n\n\nThank You");
        } else {
            balance = balance - 20;
            currentCoin = (balance);
            document.getElementById('coin-number').innerText = balance.toString();

            p = e.target.closest('.bg-white');
            const num = p.querySelector('h2');
            const recipient = p.querySelector('p');
            const number = num.innerText;
            const text = recipient.innerText;
            alert("Calling number:  " + number+ "\n\n" + text)

            const h = document.getElementById('history');
            const child = document.createElement('div');
            const now = new Date();
            const date = now.toLocaleTimeString();
            child.innerHTML = `
            <div class="mt-[4px] md:mt-[8px] lg:mt-[12px] xl:mt-[16px] flex justify-between items-center rounded-[2px] md:rounded-[4px] lg:rounded-[6px] xl:rounded-[8px] special-color p-[4px] md:p-[8px] lg:p-[12px] xl:p-[16px]">
            <div class="flex flex-col gap-[1px] md:gap-[2px] lg:gap-[3px] xl:gap-[4px]">
                <h2 class="inter text-[9px] md:text-[13.5px] lg:text-[18px] xl:text-[18px] font-[600]">${text}</h2>
                <p class="hind-madurai text-[9px] md:text-[13.5px] lg:text-[18px] xl:text-[18px] font-[400] text-[#5c5c5c]">${number}</p>
            </div>
            <div>
                <p class="hind-madurai text-[9px] md:text-[13.5px] lg:text-[18px] xl:text-[18px] font-[400] lg:text-nowrap">${date}</p>
            </div>
        </div>
            `
            h.appendChild(child);
        }

    });
}
const hisCLR=document.getElementById('cleared-history');
hisCLR.classList.add("hovered")
hisCLR.addEventListener("click", function () {
    document.getElementById('history').innerHTML = ``;
    alert("Call history cleared");
    
});

//Totally copied
const copyButtons = document.getElementsByClassName('copied');
let copyN=parseInt(currentCopied);
for (let btn of copyButtons) {
    btn.addEventListener('click', function (e) {
        const card = e.target.closest('.bg-white');
        const num = card.querySelector('h2');
        const number = num.innerText;
        copyN++;
         document.getElementById('copy-number').innerText=copyN.toString();
        //taking to clipboard
        navigator.clipboard.writeText(number)
            .then(() => {
                alert(`Copied number: ${number}`);
            })
            .catch(err => {
                console.error('Failed to copy:', err);
            });
    });
}
