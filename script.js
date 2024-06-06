// Toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick  = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  // Sticky navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);


  // Remove toggle 
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// Type writter
const typed = new Typed('.multiple-text', {
  strings: ['BSIT Student', 'Graphic Designer', 'Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;
    
// Percentage Increment Animation
var PercentageID = $("#percent1"),
		start = 0,
		end = 100,
		durataion = time;
		animateValue(PercentageID, start, end, durataion);
		
function animateValue(id, start, end, duration) {
  
	var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    
	var timer = setInterval(function() {
		current += increment;
		$(obj).text(current + "%");
		$("#bar1").css('width', current+"%");
      //obj.innerHTML = current;
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
}

// Fading Out Loadbar on Finised
setTimeout(function(){
  $('.pre-loader').fadeOut(300);
}, time);