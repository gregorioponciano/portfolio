(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    // Avatar float animation
    var avatar = document.querySelector('.img-perfil');
    if (avatar) {
      setTimeout(function () {
        avatar.classList.add('float');
      }, 1400);
    }

    // Observe all reveal elements
    var elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-scale-up');
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var target = entry.target;
            var delay = (parseInt(target.getAttribute('data-delay')) || 0) * 120;

            (function (el, d) {
              setTimeout(function () {
                el.classList.add('visible');

                // Animate child elements with stagger
                var children = el.querySelectorAll('img, svg, .img-estou-fazendo, .img-portfolio, .icon, .material-icons');
                children.forEach(function (child, index) {
                  child.style.opacity = '0';
                  child.style.transform = 'scale(0.9) translateY(10px)';
                  child.style.transition = 'none';

                  setTimeout(function () {
                    child.style.transition = 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)';
                    child.style.opacity = '1';
                    child.style.transform = 'scale(1) translateY(0)';
                  }, 100 + (index * 80));
                });

                observer.unobserve(el);
              }, d);
            })(target, delay);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach(function (el) {
      // Set initial state for child elements
      var children = el.querySelectorAll('img, svg, .img-estou-fazendo, .img-portfolio, .icon, .material-icons');
      children.forEach(function (child) {
        child.style.opacity = '0';
        child.style.transform = 'scale(0.95) translateY(5px)';
        child.style.transition = 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)';
      });

      observer.observe(el);
    });

    // Add synchronized hover effects for boxes
    var boxes = document.querySelectorAll('.estou-fazendo, .link-loja, .div-info, .guia-link');
    boxes.forEach(function (box) {
      box.addEventListener('mouseenter', function () {
        var svgs = box.querySelectorAll('svg, img, .material-icons');
        svgs.forEach(function (svg, index) {
          setTimeout(function () {
            svg.style.transform = 'scale(1.08) translateY(-4px)';
            svg.style.filter = 'drop-shadow(0 8px 16px rgba(0, 212, 255, 0.3))';
          }, index * 50);
        });
      });

      box.addEventListener('mouseleave', function () {
        var svgs = box.querySelectorAll('svg, img, .material-icons');
        svgs.forEach(function (svg) {
          svg.style.transform = 'scale(1) translateY(0)';
          svg.style.filter = 'none';
        });
      });
    });
  });
})();
