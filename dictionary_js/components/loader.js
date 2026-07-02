document.onreadystatechange = function () {
    var state = document.readyState
    if (["uninitialized", "loading", "loaded", "interactive"].includes(state)) {
        document.getElementById('entry').style.visibility="hidden";
        document.getElementById('wheel').style.visibility="hidden";
        document.getElementById('wordBuilder').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('lds-grid').style.visibility="hidden";
           document.getElementById('entry').style.visibility="visible";
           document.getElementById('wheel').style.visibility="visible";
           document.getElementById('wordBuilder').style.visibility="visible";

        },1000);
    }
  }