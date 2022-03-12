const button = document.getElementById('resizeButton');
const element = document.getElementById('html');

const sizeExpression = /([\d.]+)(.*)/;
button.addEventListener('click', () => {
  const style = getComputedStyle(element);
  const [size, value, unit] = sizeExpression.exec(style.fontSize);
  element.style.fontSize = `${parseFloat(value) + 5}${unit}`
});