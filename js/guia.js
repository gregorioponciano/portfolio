(function () {
  'use strict';

  function toggleContent(id) {
    var content = document.getElementById(id);
    if (!content) return;

    var allGuides = document.querySelectorAll('.guia');

    allGuides.forEach(function (guide) {
      if (guide !== content && guide.style.display === 'block') {
        guide.style.opacity = '0';
        guide.style.maxHeight = '0';
        guide.style.overflow = 'hidden';

        setTimeout(function () {
          guide.style.display = 'none';
          guide.style.opacity = '';
          guide.style.maxHeight = '';
          guide.style.overflow = '';
        }, 250);
      }
    });

    if (content.style.display === 'block') {
      content.style.opacity = '0';
      content.style.maxHeight = '0';
      content.style.overflow = 'hidden';

      setTimeout(function () {
        content.style.display = 'none';
        content.style.opacity = '';
        content.style.maxHeight = '';
        content.style.overflow = '';
      }, 250);
    } else {
      content.style.display = 'block';
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '0';
      content.style.overflow = 'hidden';

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          content.style.opacity = '1';
          content.style.maxHeight = content.scrollHeight + 100 + 'px';
        });
      });

      setTimeout(function () {
        content.style.opacity = '';
        content.style.maxHeight = '';
        content.style.overflow = '';
      }, 300);

      var items = content.querySelectorAll('a, p');
      items.forEach(function (item, index) {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-8px)';
        item.style.transition = 'none';

        requestAnimationFrame(function () {
          item.style.transition = 'opacity 300ms cubic-bezier(0.25, 1, 0.5, 1), transform 300ms cubic-bezier(0.25, 1, 0.5, 1)';
          item.style.transitionDelay = (index * 50 + 100) + 'ms';

          requestAnimationFrame(function () {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
          });
        });
      });
    }
  }

  window.toggleContent = toggleContent;
})();
