//restore previous options
chrome.storage.sync.get(["toggle"], function(result){
  if (result.toggle == "checked")
     {document.getElementById("toggle").checked = true;}
  else if (result.toggle == "unchecked"){
   document.getElementById("toggle").checked = false;
  }
  else {
    document.getElementById("toggle").checked = true;
  }
});


document.getElementById('toggle').addEventListener("click", function() {
    saveOptions(); //save any changes
});

function saveOptions() {
  var state = document.getElementById("toggle").checked ? "checked" : "unchecked";
  chrome.storage.sync.set({"toggle": state}, function(){
    console.log("saving it as " + state );
  });
}




