var sendToCaret = function(command, argument) {
  var message = {
    command: command,
    argument: argument
  };
  ["nllpfnakhpmhjggbagjgemckanoangnd", "fljalecfjciodhpcledpamjachpmelml"].forEach(function(id) {
    chrome.runtime.sendMessage(id, message);
  });
}
function mainHandler(message, sender,c){
  console.log(message,sender,c);
}
chrome.runtime.onMessageExternal.addListener(function(message, sender, c) {
    mainHandler(message,sender,c);
  });
});
