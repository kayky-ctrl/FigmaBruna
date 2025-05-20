function menuClicavel() {
    const menu = document.getElementById('menuMobile');

    //LEMBRETEEE 1: Verifica se o estilo CSS 'display' desse elemento está definido como 'flex'
    if (menu.style.display === 'flex') {

      //LEMBRETEEEE 2: Se estiver visível (display flex), esconde o menu, mudando para 'none'
      menu.style.display = 'none';
    } 
    else {

      //LEMBRETEEEEE 3: Se estiver escondido (display diferente de flex), mostra o menu, mudando para 'flex'
      menu.style.display = 'flex';
    }
  }