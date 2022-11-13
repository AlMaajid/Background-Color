const btn = document.querySelector('.click');
const bg = document.querySelector('.display');



btn.addEventListener('click', function () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgb = `rgb(${red + ',' + green + ',' + blue})`
  bg.textContent = `Background Color: ${rgb}`;
  document.body.style.backgroundColor = rgb;
})