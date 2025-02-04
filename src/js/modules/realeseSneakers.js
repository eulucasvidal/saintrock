export default function initTenisDestaque() {
  const itens = document.querySelectorAll('.realease-itens');
  const img = document.getElementById('img-tenis');
  if (itens && img) {
    itens.forEach((item) => {
      item.addEventListener('mouseover', () => {
        const imgSrc = item.getAttribute('data-tenis');
        img.src = imgSrc;
      });
    });
  }
}