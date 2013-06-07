var WASVCS = (function () {
  
  var api = {
              context:null
            };
  

  api.init = function () {
    var contextClass =
      (
        window.AudioContext || 
        window.webkitAudioContext || 
        window.mozAudioContext || 
        window.oAudioContext || 
        window.msAudioContext
      );

      if (contextClass) {
        // Web Audio API is available.
        api.context = new contextClass();
      }
    
  };

  return api;
}());
