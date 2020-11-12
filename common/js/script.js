var sample = new CrossfadeSample();
window.addEventListener("click", function(){
    // 音を鳴らす
    sample.toggle(this);
}, { once: true});

addEventListener('mousemove', {sample, handleEvent: direction},false);
function direction(e) {
    var camera = document.getElementById('camera');
    var rotation = camera.getAttribute('rotation');
    var position = document.getElementById('pos');
    console.log(rotation.y); 
    this.sample.crossfade(rotation.y,position.value);

}


    