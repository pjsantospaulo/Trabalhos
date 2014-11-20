function ajaxfunction(url){
    var xmlHttp;
    if (window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }
    else{
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //essa função captura o estado da conexão, atraves da propriedades readyState e Status
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 3) {
            document.getElementById("conteudo-detalhe").innerHTML = "Aguarde...";
        }
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            setTimeout(function () { }, 3000);
            document.getElementById("conteudo-detalhe").innerHTML = xmlHttp.responseText;
        }
        if (xmlHttp.readyState == 4 && xmlHttp.status == 404) {
            document.getElementById("conteudo-detalhe").innerHTML = "O conteudo Não foi Encontrado!!";
        }
    }
    //abrindo conexao para capturar o end no browser atraves da url 
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
document.addEventListener("DOMContentLoaded", function () {
    //Seleciona os links da Index  e conta quantos links tem
    var linkConteudo = document.querySelectorAll('.conteudo');
    var i = 0;
    var total = linkConteudo.length;
    for (i; i <= total; i++) {
        linkConteudo[i].addEventListener('click', function (event) {
            event.preventDefault();
            //Evento target captura o atributo de link href que é passado na index para chamar a pagina conteudo
            ajaxfunction(event.target.getAttribute("href"));
        });
    }

});
