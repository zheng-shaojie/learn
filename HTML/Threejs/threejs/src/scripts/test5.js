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
        camera.position.x = 0;
        camera.position.y = 1000;
        camera.position.z = 0;
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
        light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
        light.position.set(100, 100, 200);
        scene.add(light);
    }

    // var cube;
    var mesh

    /**
     * 画线
     */
    function initObject() {

        var geometry = new THREE.CylinderGeometry(100, 150, 400);
        var meterial = new THREE.MeshLambertMaterial( {color: 0xffff00} );
        mesh = new THREE.Mesh(geometry, meterial);
        mesh.position = new THREE.Vector3(0, 0, 0);
        scene.add(mesh);


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
        animation();
    }
    threeStart();

};


