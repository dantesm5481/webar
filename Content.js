
var scene, camera, renderer, light;
var earthRotY = 0, moonRotY = 0;
var radY = 0, radZ = -0.3;
var moonDist = 70;
var earthRadius = 25
var earthMesh, tmpMesh;
var moonMesh;
var mouse = {};



function get3Dcontent(){return ArVideo();}


function EarthSphere(){
          
          var sphere = new THREE.Mesh(
			new THREE.SphereGeometry(80, 48, 48),
			new THREE.MeshBasicMaterial({
				map: THREE.ImageUtils.loadTexture('earth.jpg')
			        })
		        );
                return sphere;
}
function Cube(){

        var cube  = new THREE.Mesh(
                        new THREE.CubeGeometry(100,100,100),
                        new THREE.MeshBasicMaterial({color: 0xff0000})
        );
         cube.position.z = -50;
         return cube;
}

function ArVideo(){


        var url	= 'classics.mp4'
  	var videoTexture= new THREEx.VideoTexture(url)
  	var video	= videoTexture.video
        updateFcts.push(function(delta, now){
			videoTexture.update(delta, now)
		})
        var plane = new THREE.Mesh(
                            new THREE.PlaneGeometry( 480, 400, 4),
                            new THREE.MeshBasicMaterial({ map	: videoTexture.texture})
                        );    
        return plane;

}





  