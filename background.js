var sendToCaret = function(command, argument) {
  var message = {
    command: command,
    argument: argument
  };
  ["nllpfnakhpmhjggbagjgemckanoangnd", "fljalecfjciodhpcledpamjachpmelml"].forEach(function(id) {
    chrome.runtime.sendMessage(id, message);
  });
}
