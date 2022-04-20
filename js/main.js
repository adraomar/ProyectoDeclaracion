const yesBtn = document.querySelector('#btnYes');
const noBtn = document.querySelector('#btnNo');

yesBtn.addEventListener('click', function() {
    alert('Ya sabía que ibas a decir que si UwU');
});

noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});

