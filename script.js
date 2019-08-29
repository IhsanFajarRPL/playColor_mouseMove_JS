document.body.addEventListener('mousemove', function(event){
    const posX = Math.round((event.clientX / innerWidth)*255);
    const posY = Math.round((event.clientY / innerHeight)*255);
    document.body.style.backgroundColor = 'rgb('+ posX +','+ posY +',100)';
});