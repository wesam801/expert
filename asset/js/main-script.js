$(window).on('load',function(){
    gsap.to('#loader',1,{y:"-100%"});
    gsap.to('#loader',1,{opacity:0});
    gsap.to('#loader',0,{display:"none",delay:1});
    gsap.to('#header',0,{display:"block",delay:1})
    gsap.to('#navigation-content',0,{display:"none"});
    gsap.to('#navigation-content',0,{display:"flex",delay:1});
  });
  $(function(){
    var body =  document.querySelector('body');
    var $cursor = $('.cursor')
      function cursormover(e){
       
       gsap.to( $cursor, {
         x : e.clientX ,
         y : e.clientY,
         stagger:.002
        })
      }
      function cursorhover(e){
       gsap.to( $cursor,{
        scale:1.4,
        opacity:1
       })
       
     }
     function cursor(e){
       gsap.to( $cursor, {
        scale:1,
        opacity:.6
       }) 
     }
     $(window).on('mousemove',cursormover);
     $('.menubar').hover(cursorhover,cursor);
     $('a').hover(cursorhover,cursor);
     $('.navigation-close').hover(cursorhover,cursor);
   
   });
   $(function(){
    $('.menubar').on('click',function(){
        gsap.to('#navigation-content',.6,{y:0});
    })
    $('.navigation-close').on('click',function(){
       gsap.to('#navigation-content',.6,{y:"-100%"});
   });
  }); 

  particlesJS("particles", {"particles":{"number":{"value":200,"density":{"enable":true,"value_area":800}},"color":{"value":"#23ADD9"},"shape":{"type":"circle","stroke":{"width":0,"color":"#23ADD9"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#23ADD9","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


   // Get the button:
   let mybutton = document.getElementById("myBtn");
   window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   mybutton.style.display = "block";
   } else {
   mybutton.style.display = "none";
   }
   }
   function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   };