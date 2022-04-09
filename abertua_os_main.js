function abertura_os () {

    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var sh = planilha.getActiveSheet();
    var row = sh.getLastRow();

    var solicitacao = sh.getRange(row,13).getValue();
    var maquina = sh.getRange(row,16).getValue();
    var categoria = sh.getRange(row,2).getValue();
    var material = sh.getRange(row,17).getValue();
    var quantidade = sh.getRange(row,14).getValue();
    var destino = sh.getRange(row,15).getValue();


    if (categoria=="Funcionário") 
    {    
        var nome = sh.getRange(row,3).getValue();
        var empresa = sh.getRange(row,4).getValue();
        var telefone = sh.getRange(row,5).getValue();
        var email = sh.getRange(row,6).getValue();
        var data = sh.getRange(row,7).getValue();
        var texto = "Solicitante: "+ nome +"\nTelefone: "+ telefone +"\nEmail: "+ email +"\nSolicitação: "+ quantidade + " " + solicitacao + "\nIrá utilizar: "+ maquina +"\nData limite: "+ data +"\nEmpresa: "+ empresa +"\nDestino do projeto: "+ destino +"\nMaterial utilizado no corte: " + material;
        
        texto = encodeURIComponent(texto);

        mensagem(texto);
    }
    else if (categoria=="Aluno") 
    {    
        
        var nome = sh.getRange(row,8).getValue();
        var curso = sh.getRange(row,9).getValue();
        var telefone = sh.getRange(row,10).getValue();
        var email = sh.getRange(row,11).getValue();
        var data = sh.getRange(row,12).getValue();
        var texto = "Solicitante: "+ nome +"\nCurso: "+ curso +"\nTelefone: "+ telefone +"\nEmail: "+ email +"\nSolicitação: "+ quantidade + " " + solicitacao +"\nIrá utilizar: "+ maquina +"\nData de Agendamento: "+ data +"\nDestino do projeto: "+ destino +"\nMaterial utilizado no corte: " + material;
        
        texto = encodeURIComponent(texto);

        mensagem(texto)
        
    }

}
function mensagem(texto)
{
    var chat_id = 687820098;
    var bot_id = "5052096013:AAG-YM58pQZscUpLvMJS-DGwen5l6dC_6kA";
    var url = "https://api.telegram.org/bot" + bot_id + "/sendMessage?chat_id=-" + chat_id + "&text=" + texto;
    Logger.log(url);

    UrlFetchApp.fetch(url);
}