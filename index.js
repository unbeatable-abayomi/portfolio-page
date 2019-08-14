// console.log('hello wolrd')   



$(document).ready(function () {
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('body').toggleClass('night')
    })
})

new hoverEffect({
    parent : document.querySelector('#distoration'),
    intensity: 0.1,
    image1: './images/pic-one-edit-fig.png',
    image2: './images/pic-three-edit-figma.png',
    displacementImage: './images/heightMap.png'
  });
  $('.nav-item a').on('click', function (e){
      if(this.hash !== ''){
          e.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 1300);
      }
  });


  
    