

function getARtool(canvas) {
     // 为Canvas创建光栅对象，JSAR用光栅对象读取每一帧画面的数据，切记要设置canvas.changed = true告知JSAR动态识别
            var raster = new NyARRgbRaster_Canvas2D(canvas);
            //设置摄像头参数，FLARParam是FLAR的方法
            var param = new FLARParam(320,240);
            //创建一个NyARTransMatResult对象来获取标记的转换矩阵
            var resultMat = new NyARTransMatResult();
            //FLARMultiIdMarkerDetector是一个侦测并捕捉标记点的检测引擎，他能够侦测出多种不同ID的标记点，标记点其实是一些数字的编码的二维码。
            var detector = new FLARMultiIdMarkerDetector(param, 120);
            //设置检测器持续循环捕捉
            detector.setContinueMode(true);

               // Next we need to make the Three.js camera use the FLARParam matrix.
            //从FLARParam复制摄像机透视矩阵到WEBGL摄像机矩阵库中，后两个参数表示在Z轴上的最近最远距离。
            param.copyCameraMatrix(tmp, 10, 10000);
            //设置相机的投影矩阵
            camera.projectionMatrix.setFromArray(tmp);
            //将摄像头的视频作为材质贴图
            var tmp = new Float32Array(16);


}

   THREE.Matrix4.prototype.setFromArray = function(m) {
            return this.set(
                    m[0], m[4], m[8], m[12],
                    m[1], m[5], m[9], m[13],
                    m[2], m[6], m[10], m[14],
                    m[3], m[7], m[11], m[15] 
            )
        };