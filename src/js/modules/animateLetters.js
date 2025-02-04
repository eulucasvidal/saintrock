export default function initLetreiroAnimado(){
  const letrasLogo = document.querySelectorAll('[data-animate="letters"]');
  if(letrasLogo){
    function scrollPosition(event) {
      var scrollAltura = window.scrollY;
      letrasLogo.forEach((letras) => {
        if (scrollAltura > 10) {
          function sumirLogo() {
            letrasLogo.forEach((letra, index) => {
              setTimeout(() => {
                letra.classList.add('hidden');
              }, index * 80);
            });
          }
          sumirLogo();
        } else {
          function aparecerLogo() {
            letrasLogo.forEach((letra, index) => {
              setTimeout(() => {
                letra.classList.remove('hidden');
              }, index * 80);
            });
          }
          aparecerLogo();
        }
      });
    }
    document.addEventListener('scroll', scrollPosition);
  }
}
