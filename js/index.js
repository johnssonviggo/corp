document.querySelector('#blackjack-btn').addEventListener('click', () => {
    const value = localStorage.getItem('blackjack-stats') || 0;
    localStorage.setItem('blackjack-stats', Number(value) + 1);
})

document.querySelector('#paint-btn').addEventListener('click', () => {
    const value = localStorage.getItem('paint-stats') || 0;
    localStorage.setItem('paint-stats', Number(value) + 1);
})