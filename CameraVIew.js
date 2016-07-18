
// get WebRTC camera view
function getCameraView() {

    var cameraview = document.createElement('video');
        cameraview.width = 640;
        cameraview.height = 480;
        cameraview.loop = true;
        cameraview.volume = 0;
        cameraview.autoplay = true;
        cameraview.style="visibility:hidden;display:none";
        

        var getUserMedia = function(t, onsuccess, onerror) {
            if (navigator.getUserMedia) {
                return navigator.getUserMedia(t, onsuccess, onerror);
            } else if (navigator.webkitGetUserMedia) {
                return navigator.webkitGetUserMedia(t, onsuccess, onerror);
            } else if (navigator.mozGetUserMedia) {
                return navigator.mozGetUserMedia(t, onsuccess, onerror);
            } else if (navigator.msGetUserMedia) {
                return navigator.msGetUserMedia(t, onsuccess, onerror);
            } else {
                onerror(new Error("No getUserMedia implementation found."));
            }
        };

        var URL = window.URL || window.webkitURL;
        var createObjectURL = URL.createObjectURL || webkitURL.createObjectURL;
        if (!createObjectURL) {
            throw new Error("URL.createObjectURL not found.");
        }

        var streaming =  function(stream) {cameraview.src = createObjectURL(stream);}
        var error     =  function(error){alert("Couldn't access webcam.");}       
        
        getUserMedia({'video':true} , streaming , error)

        return cameraview;
}
        