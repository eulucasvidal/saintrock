export default function initTenisDestaque(){
const itens = document.querySelectorAll('.novidadesItens');
const img = document.getElementById('imgTenis')


itens.forEach(item => {
  item.addEventListener('mouseover', () => {
    const imgSrc = item.getAttribute('data-tenis');
    img.src = imgSrc;
  })
})
}