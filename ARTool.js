

function getARaetector(canvas) {
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
}