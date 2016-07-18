
    // todo test
    function getARtool(canvas) {
            var raster = new NyARRgbRaster_Canvas2D(canvas);
            var param = new FLARParam(320,240);
            var resultMat = new NyARTransMatResult();
            var detector = new FLARMultiIdMarkerDetector(param, 120);
            detector.setContinueMode(true);

            param.copyCameraMatrix(tmp, 10, 10000);
            camera.projectionMatrix.setFromArray(tmp);

    }
    // todo test
    function getRaster (canvas){
        var raster = new NyARRgbRaster_Canvas2D(canvas);
        return raster;
    }   
    //todo test
    function getResult(){
        var rasultMat = new NyARTransMatResult();
    }
    //todo test 
    function getDetector(params) {
    
    }

        //将glMatrix 矩阵转换成THREE.Matrix4矩阵
        THREE.Matrix4.prototype.setFromArray = function(m) {
            return this.set(
                    m[0], m[4], m[8], m[12],
                    m[1], m[5], m[9], m[13],
                    m[2], m[6], m[10], m[14],
                    m[3], m[7], m[11], m[15] 
            )
        };

        //以下代码用于将 JSARToolKit 矩阵复制转换成 glMatrix 矩阵（这些矩阵是 16 个元素的 FloatArrays，其中最后四个元素是转换列）。
        //这段代码十分奇妙,这个符号反转技巧让 JSARToolKit 矩阵的运行效果与 glMatrix 相同。
        function copyMatrix(mat, cm) {
            cm[0] = mat.m00;
            cm[1] = -mat.m10;
            cm[2] = mat.m20;
            cm[3] = 0;
            cm[4] = mat.m01;
            cm[5] = -mat.m11;
            cm[6] = mat.m21;
            cm[7] = 0;
            cm[8] = -mat.m02;
            cm[9] = mat.m12;
            cm[10] = -mat.m22;
            cm[11] = 0;
            cm[12] = mat.m03;
            cm[13] = -mat.m13;
            cm[14] = mat.m23;
            cm[15] = 1;
        }