var slider = document.getElementById('myrange') ;
var output = document.getElementById('value') ;

output.innerHTML = 'Value: ' + slider.value ;
slider.addEventListener('input' , function(){
    output.innerHTML = 'Value: ' + this.value ;
});

slider.addEventListener('mousemove' , function(){
    var step = parseFloat(this.max)/100 ;
    var x = parseInt(this.value) ;
    var result = x/step ;
    var color = 'linear-gradient(90deg , red ' + result.toString() + '% , black ' + result.toString() +'%)';
    this.style.background = color ;
});