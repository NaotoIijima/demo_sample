var sample = new CrossfadeSample();
window.addEventListener("click", function(){
    // 音を鳴らす
    sample.toggle(this);
}, { once: true});

addEventListener('mousemove', {sample, handleEvent: direction},false);
function direction(e) {
    var camera = document.getElementById('camera');
    var rotation = camera.getAttribute('rotation');
    //var rotation = document.querySelector('a-scene').camera.el.object3D.rotation;
    //document.write(rotation.y);
    //sample.crossfade(50);
    console.log(rotation.y);
    this.sample.crossfade(rotation.y);
    //if(rotation.y<0) document.write(rotation.y);
}
    