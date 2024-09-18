const emojis = ["😂","😂","😒","😒","👌","👌","🤦‍♂️","🤦‍♂️","🙌","🙌","🤑","🤑","😭","😭","💀","💀"];
const statusText = document.querySelector("#statusText");
const gameContainer = document.querySelector('.game');
const shuffle = emojis.sort(() => Math.random() > 0.5 ? 1 : -1);

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffle[i];

    box.onclick = function() {
        this.classList.add('boxOpen');
        
        setTimeout(function() {
            let openBoxes = document.querySelectorAll('.boxOpen');
            
            if (openBoxes.length > 1) {
                if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                    openBoxes[0].classList.add('boxMatch');
                    openBoxes[1].classList.add('boxMatch');
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');

                    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                        statusText.textContent = "You Win!";
                    }
                } else {
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');
                }
            }
        }, 500);
    };

    gameContainer.appendChild(box);
}
