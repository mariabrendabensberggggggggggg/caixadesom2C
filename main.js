//declaração/criando função tocasomPom

function tocaSomPom () {

    document. querySelector ( '#som tecla pom') .play( );
    
    }
    
    //chamando/invocando a função tocaSomPom pelo clique do botão
    
    document.querySelector('(teclapom').onclick=tocaSomPom;
    
    //referência constante listaDeTeclas, buscando todos os botões
    
    const listaDeTeclas = document. querySelectorAll ('. tecla');
    
    7/chamando a função tocaSomPom pela item "O' da listaDeTecla
    
    listaDeTeclas [0].onclick = tocaSomPom;