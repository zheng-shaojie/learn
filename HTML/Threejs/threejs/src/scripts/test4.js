window.onload = function () {

    /**
     * 定义渲染器
     */
    var renderer;
    function initThree() {
        width = document.getElementById('canvas-frame').clientWidth;
        height = document.getElementById('canvas-frame').clientHeight;
        renderer = new THREE.WebGLRenderer({
            antialias : true
        });
        renderer.setSize(width, height);
        document.getElementById('canvas-frame').appendChild(renderer.domElement);
        renderer.setClearColor(0xFFFFFF, 1.0);
    }


    var camera;

    /**
     * 初始化相机
     */
    function initCamera() {
        camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
        camera.position.x = 0;
        camera.position.y = 1000;
        camera.position.z = 0;
        camera.up.x = 0;
        camera.up.y = 0;
        camera.up.z = 1;
        camera.lookAt(0, 0, 0);
    }

    var scene;

    /**
     * 初始化场景
     */
    function initScene() {
        scene = new THREE.Scene();
    }

    var light;

    /**
     * 初始化灯光
     */
    function initLight() {
        light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
        light.position.set(100, 100, 200);
        scene.add(light);
    }

    var cube;

    /**
     * 画线
     */
    function initObject() {

        var geometry = new THREE.Geometry(); // 声明几何类型


        // 线的材质可以由2点的颜色决定
        var p1 = new THREE.Vector3( -500, 0, 0 );
        var p2 = new THREE.Vector3(  500, 0, 0 );
        geometry.vertices.push(p1);
        geometry.vertices.push(p2);

        for(var i = 0; i <= 20; i++){
            /**
             * 定义线条
             * @param geometry: 几何体类型
             * @param material: 线条材质
             * @param mode: 点的连接方式
             */
            var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.2 }));
            line.position.z = (i * 50) - 500;
            scene.add(line);

            var line1 = new THREE.Line(geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ))
            line1.position.x = (i * 50) - 500;
            line1.rotation.y = 90 * Math.PI / 180; // 旋转90度
            scene.add(line1);
        }





    }

    /**
     * 渲染
     */
    function render()
    {
        renderer.clear();
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }


    function threeStart() {
        initThree();
        initCamera();
        initScene();
        initLight();
        initObject();
        render();
    }
    threeStart();

};


