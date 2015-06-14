require.config({
  paths: {
    lib: '../../node_modulesa'
  }
});

require([
    '../lib/ModuleHello/index',
    '../lib/ModuleWorld/index',
    '../lib/ModuleExclamation/index'
  ],
  function(ModuleHello,
    ModuleWorld,
    ModuleExclamation) {

    "use strict";

    var div = document.createElement("div");
    div.innerHTML = "From Client:" + ModuleHello.value() + " " + 
      ModuleWorld.value() + ModuleExclamation.value();

    document.getElementsByTagName('body')[0].appendChild(div);
  }
);
