exports.action = function(data, callback, config){

  // Retrieve config
  config = config.modules.wget;
  if (!config.api_url){
    return
  }

console.log("config.api_url: " + config.api_url);
 
if (data.action== 'fichier')
	{
	var url = config.api_url + '/'+data.fichier;
  callback({'tts': ""});
  }
   
if(data.action == 'chaine')
  {
	var url = config.api_url + '/'+data.chaine;
  	callback({'tts': "tout de suite"});
  }
  var request = require('request');
  request({ 'uri' : url }, function (err, response, body){
    
    if (err || response.statusCode != 200) {
      callback({'tts': "L'action a échoué"});
      return;
    }
	
  });
}
