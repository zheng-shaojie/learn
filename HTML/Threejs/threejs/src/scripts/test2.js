window.onload = function () {
    var scence = new THREE.Scene(); //场景
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //相机
    var renderer = new THREE.WebGLRenderer(); // 渲染器
    renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器的宽高为浏览器的宽高
    document.body.appendChild(renderer.domElement); //画布

    var geometry = new THREE.CubeGeometry(1, 1, 1); //几何体
    var material = new THREE.MeshBasicMaterial();
    var cube = new THREE.Mesh(geometry, material);
    scence.add(cube);
    camera.position.z = 5;

    function render() {
        requestAnimationFrame(render);
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        renderer.render(scence, camera);
    }

    render();

};





