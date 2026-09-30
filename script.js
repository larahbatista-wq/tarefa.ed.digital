const botoesCurtir = documents.queryselectorAll (".curtir");
botoesCurtir.foreach(function (botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventlistener("click",curtir);
    function curtir (){
        const contador = botaoCurtir.queryselector ("span");
        if (curtir === false){
            contador.textContent++;
            curtiu = true;
        }else{
            contador.textContent--;
            curtiu = false;
        }
    }
} )