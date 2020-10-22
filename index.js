var a = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll('img')[0].setAttribute('src', 'images/dice' + a + '.png ')
var b = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll('img')[1].setAttribute('src', 'images/dice' + b + '.png ')
if (a > b) {
    document.querySelector('h1').innerText = "Player 1 won";
} else if (a < b) {
    document.querySelector('h1').innerText = "Player 2 won";
} else {
    document.querySelector('h1').innerText = "Match tie";
}