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
        /**
         * 定义线条类型
         * @type {LineBasicMaterial|LineDashedMaterial}
         * @param parameters
         * parameters {
         *     color: 定义线条的颜色,用16进制的颜色码表示，默认白色,
         *     linewidth: 线条宽度，默认一个单位宽度,
         *     Linecap: 线条两端到外观,默认圆角端点,
         *     Linejoin: 两个线条连接点的外观,默认round,
         *     VertexColors: 定义线条材质是否使用顶点颜色，这是一个boolean值。意思是，线条各部分的颜色会根据顶点的颜色来进行插值
         *     Fog: 定义材质的颜色是否受全局雾效的影响
         * }
         */
        var material = new THREE.LineBasicMaterial( {
            vertexColors: THREE.VertexColors
        } );


        var color1 = new THREE.Color( 0x000000 ),
            color2 = new THREE.Color( 0xFF0000 );

        // 线的材质可以由2点的颜色决定
        var p1 = new THREE.Vector3( -100, 0, 100 );
        var p2 = new THREE.Vector3(  100, 0, -100 );
        geometry.vertices.push(p1);
        geometry.vertices.push(p2);
        /**
         * geometry中colors表示顶点的颜色，必须材质中vertexColors等于THREE.VertexColors 时，颜色才有效，
         * 如果vertexColors等于THREE.NoColors时，颜色就没有效果了
         */
        geometry.colors.push( color1, color2 );

        /**
         * 定义线条
         * @param geometry: 几何体类型
         * @param material: 线条材质
         * @param mode: 点的连接方式
         */
        var line = new THREE.Line( geometry, material, THREE.LineSegments );
        scene.add(line);
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


