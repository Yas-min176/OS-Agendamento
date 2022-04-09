function mensagem()
{
    var chat_id = 687820098;
    var bot_id = "5052096013:AAG-YM58pQZscUpLvMJS-DGwen5l6dC_6kA";
    var texto = "Solicitante: /nEmail: /nSolicitação: /nIrá utilizar: /nData limite: /nEmpresa: /nDestino do projeto: /nTelefone: /nMaterial utilizado no corte: ";
    texto = encodeURICompent(texto);
    var url = "https://api.telegram.org/bot" + bot_id + "/sendMessage?chat_id=-" + chat_id + "&text=" + texto;
    Logger.log(url);
}
