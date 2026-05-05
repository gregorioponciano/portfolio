(function () {
  'use strict';

  function showDiv(divId) {
    var currentActive = document.querySelector('.content.active');
    var targetDiv = document.getElementById(divId);

    if (!targetDiv || (currentActive && currentActive.id === divId)) return;

    document.querySelectorAll('.a-menu').forEach(function (item) {
      item.classList.remove('active');
    });

    document.querySelectorAll('.a-menu').forEach(function (item) {
      if (item.getAttribute('onclick') && item.getAttribute('onclick').indexOf(divId) !== -1) {
        item.classList.add('active');
      }
    });

    if (currentActive) {
      currentActive.style.opacity = '0';
      currentActive.style.transform = 'translateY(-20px)';
      currentActive.style.transition = 'opacity 300ms cubic-bezier(0.16, 1, 0.3, 1), transform 300ms cubic-bezier(0.16, 1, 0.3, 1)';

      setTimeout(function () {
        currentActive.classList.remove('active');
        currentActive.style.opacity = '';
        currentActive.style.transform = '';
        currentActive.style.transition = '';

        targetDiv.classList.add('active');
        targetDiv.style.opacity = '0';
        targetDiv.style.transform = 'translateY(20px)';
        targetDiv.style.transition = 'none';

        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            targetDiv.style.transition = 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
            targetDiv.style.opacity = '1';
            targetDiv.style.transform = 'translateY(0)';

            setTimeout(function () {
              targetDiv.style.opacity = '';
              targetDiv.style.transform = '';
              targetDiv.style.transition = '';
            }, 500);
          });
        });
      }, 300);
    } else {
      targetDiv.classList.add('active');
    }
  }

  window.showDiv = showDiv;

  document.addEventListener('DOMContentLoaded', function () {
    var firstDiv = document.getElementById('div1');
    if (firstDiv) firstDiv.classList.add('active');
    var firstMenu = document.querySelector('.a-menu.sobre');
    if (firstMenu) firstMenu.classList.add('active');

    // Animate SVGs on content change
    document.querySelectorAll('.a-menu').forEach(function (link) {
      link.addEventListener('click', function () {
        setTimeout(function () {
          var activeContent = document.querySelector('.content.active');
          if (activeContent) {
            activeContent.querySelectorAll('img, svg, .img-estou-fazendo, .img-portfolio').forEach(function (el, index) {
              el.style.opacity = '0';
              el.style.transform = 'scale(0.9) translateY(10px)';
              el.style.transition = 'none';

              setTimeout(function () {
                el.style.transition = 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)';
                el.style.opacity = '1';
                el.style.transform = 'scale(1) translateY(0)';
              }, 50 + (index * 80));
            });
          }
        }, 350);
      });
    });
  });
})();
