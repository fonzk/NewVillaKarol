$(function() {
  $(".p2").typed({
    strings: ["Matrimonios","Grados","Quinceañeros","Reuniones Sociales","Fiestas Infantiles","Reuniones Didácticas", "Buffet","Sonido","SALÓN DE EVENTOS"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 5000,
    showCursor: false,
    loop: false
  });
});

$('.hero-down').mousedown(function() {
  TweenMax.fromTo('.btn-react', 0.25, {
    opacity: 0,
    scale: 0
  }, {
    opacity: 0.25,
    scale: 1,
    onComplete: function() {
      TweenMax.to('.btn-react', 0.25, {
        opacity: 0,
        scale: 0
      });
    }
  });
});

// smooth scroll to div
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});