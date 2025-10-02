let currentCoin=document.getElementById('coin-number').innerText;
let currentHeart=parseInt(document.getElementById('heart-number').innerText)
let currentCopied=parseInt(document.getElementById('copy-number').innerText)
const loves=document.getElementsByClassName('loved')
for(love of loves)
{
    love.addEventListener('click', function(e) {
        if(e.target.dataset.clicked==='true'){
            alert("Already added to favourite")
            return;
        }
        e.target.dataset.clicked='true';
        currentHeart++;
        document.getElementById('heart-number').innerText=currentHeart;
        e.target.classList.add("love-hover");

    });

}
const dial=document.getElementsByClassName('dial');
for(call of dial){
    call.addEventListener("click",function(e){
        let balance=parseInt(currentCoin);
        if(balance<20){
            alert("Not enough coin!Please Recharge");
        }else{
            balance=balance-20;
            currentCoin=(balance);
            document.getElementById('coin-number').innerText=balance.toString();
            alert("Calling");
        }
    });
}