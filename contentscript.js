
var audio = new Audio(chrome.runtime.getURL('audio/appointed-529.mp3'));

  function makeMessageObserver(DivThatHoldsMessages) {
    console.log("new message observer");
    var messageObserver = new MutationObserver(mutationHandler);
    messageObserver.observe(DivThatHoldsMessages, {childList: true});
  }


  function mutationHandler(mutationsList, observer) {
    chrome.storage.sync.get(['toggle'], function(result){
      if (result.toggle != "unchecked") { //only continue if not unchecked
        for (var mutation of mutationsList) {
          for (var node of mutation.addedNodes){ //for every added child node
            if (node.firstChild.className== "strangermsg") { //if the childnode was strangermsg
              audio.play(); //new stranger message: make the sound!
            }
          }
        }
      }
    });
  }

  var body = document.body;

  var watch = {attributeFilter: ["class"]};

  var callback = function(mutationsList, observer) {
      for(var mutation of mutationsList) {
              if (mutation.target.className == "inconversation"){
              makeMessageObserver(document.getElementsByClassName("logbox")[0].firstChild);
            }
          }
      };
      // Create an observer instance linked to the callback function
      var observer = new MutationObserver(callback);

      // Start observing the target node for configured mutations
      observer.observe(body, watch);
