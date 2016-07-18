
var cameracanvas, debugcanvas;



function getCameraCanvas(){

    var cameracanvas = document.createElement('canvas');
    cameracanvas.width = 320;
    cameracanvas.height = 240;
    cameracanvas.style="visibility:hidden";

    return cameracanvas;

}

function getDebugCanvas(){

    var debugcanvas = document.createElement('canvas');
    
    debugcanvas.width = 320;
    debugcanvas.height = 240;
    debugcanvas.style = "visibility:hidden";

    return debugcanvas;

}
