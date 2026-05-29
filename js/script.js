document.documentElement.classList.add('js-enabled');

const reveals = document.querySelectorAll('.reveal');

const activateReveal = (element) => {
  element.classList.add('active');
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        activateReveal(entry.target);
        observer.unobserve(entry.target);
      }

    });

  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.01,
  });

  reveals.forEach((element) => {
    observer.observe(element);
  });
} else {
  reveals.forEach(activateReveal);
}

window.setTimeout(() => {
  reveals.forEach(activateReveal);
}, 1200);


const orbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('mousemove', (e) => {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  orbs.forEach((orb, index) => {

    const movement = (index + 1) * 30;

    orb.style.transform = `translate(${x * movement}px, ${y * movement}px)`;

  });

});


const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {

  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '80px';
    nav.style.right = '6%';
    nav.style.flexDirection = 'column';
    nav.style.padding = '1rem';
    nav.style.borderRadius = '18px';
    nav.style.background = 'rgba(20,20,24,0.95)';
    nav.style.border = '1px solid rgba(255,255,255,0.08)';
  }

});
