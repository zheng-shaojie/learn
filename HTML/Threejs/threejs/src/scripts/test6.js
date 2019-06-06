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

    var stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
// 将stats的界面对应左上角
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild( stats.domElement );


    var camera;

    /**
     * 初始化相机
     */
    function initCamera() {
        camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
        camera.position.x = 600;
        camera.position.y = 0;
        camera.position.z = 600;
        camera.up.x = 0;
        camera.up.y = 1;
        camera.up.z = 0;
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
        light = new THREE.AmbientLight(0x00FF00);
        light.position.set(100, 100, 200);
        scene.add(light);


        // light = new THREE.DirectionalLight(0xFF0000, 1);
        // light.position.set(0, 0, 1);
        // scene.add(light);

        light = new THREE.PointLight(0xFF0000);
        light.position.set(0, 0, 25);
        scene.add(light);
    }

    // var cube;
    var mesh

    /**
     * 画线
     */
    function initObject() {

        var geometry = new THREE.CubeGeometry( 200, 100, 50, 4, 4);
        var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
        var mesh = new THREE.Mesh( geometry,material);
        mesh.position.set(0,0,0);
        scene.add(mesh);

        var geometry2 = new THREE.CubeGeometry( 200, 100, 50,4,4);
        var material2 = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
        var mesh2 = new THREE.Mesh( geometry2,material2);
        mesh2.position.set(-200,0,0);
        scene.add(mesh2);

        var geometry3 = new THREE.CubeGeometry( 200, 100, 50,4,4);
        var material3 = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
        var mesh3 = new THREE.Mesh( geometry3,material3);
        mesh3.position.set(0,-150,0);
        scene.add(mesh3);

        var mesh4 = new THREE.Mesh( geometry3,material3);
        mesh4.position.set(0,150,0);
        scene.add(mesh4);

        var mesh5 = new THREE.Mesh( geometry3,material3);
        mesh5.position.set(250,0,0);
        scene.add(mesh5);

        var mesh6 = new THREE.Mesh( geometry3,material3);
        mesh6.position.set(0,0,-100);
        scene.add(mesh6);


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

    function initTween()
    {
        new TWEEN.Tween( mesh.position)
            .to( { x: -400 }, 3000 ).repeat( Infinity ).start();
    }

    function animation()
    {

        // 你的每一帧的代码

        mesh.position.x =mesh.position.x - 1;
        renderer.render(scene, camera);
        requestAnimationFrame(animation);

        stats.update();
        TWEEN.update();

    }

    function threeStart() {
        initThree();
        initCamera();
        initScene();
        initLight();
        initObject();
        renderer.clear();
        renderer.render(scene, camera);
        // animation();
    }
    threeStart();

};


