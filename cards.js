const emojis = ["😂","😂","😒","😒","👌","👌","🤦‍♂️","🤦‍♂️","🙌","🙌","🤑","🤑","😭","😭","💀","💀"];
var shufflee = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);

for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shufflee[i];
    document.querySelector('.game').appendChild(box);
}