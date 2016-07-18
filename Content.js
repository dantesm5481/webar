
var scene, camera, renderer, light;
var earthRotY = 0, moonRotY = 0;
var radY = 0, radZ = -0.3;
var moonDist = 70;
var earthRadius = 25
var earthMesh, tmpMesh;
var moonMesh;
var mouse = {};


function getEarthSphere(){
          
          var sphere = new THREE.Mesh(
			new THREE.SphereGeometry(80, 48, 48),
			new THREE.MeshBasicMaterial({
				map: THREE.ImageUtils.loadTexture('earth.jpg')
			        })
		        );

                return sphere;
}

function getCube(){


        var cube  = new THREE.Mesh(
                        new THREE.CubeGeometry(100,100,100),
                        new THREE.MeshBasicMaterial({color: 0xff0000})
        );
         cube.position.z = -50;
                    
         return cube;


}