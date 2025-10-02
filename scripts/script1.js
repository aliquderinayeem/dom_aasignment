let currentCoin=parseInt(document.getElementById('coin-number').innerText)
let currentHeart=parseInt(document.getElementById('heart-number').innerText)
let currentCopied=parseInt(document.getElementById('copy-number').innerText)
const loves=document.getElementsByClassName('loved')
for(love of loves)
{
    love.addEventListener('click', function(e) {
        currentHeart++;
        document.getElementById('heart-number').innerText=currentHeart;
        e.target.classList.add("love-hover");
        
    });

}