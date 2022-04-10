function mensagem()
{
    var chat_id = "" ;
    var bot_id = "";
    var texto = "Solicitante: /nEmail: /nSolicitação: /nIrá utilizar: /nData limite: /nEmpresa: /nDestino do projeto: /nTelefone: /nMaterial utilizado no corte: ";
    texto = encodeURICompent(texto);
    var url = "https://api.telegram.org/bot" + bot_id + "/sendMessage?chat_id=-" + chat_id + "&text=" + texto;
    Logger.log(url);
}
