(function () {
  'use strict';

  var MOBILE_BREAKPOINT = 1249;
  var RESIZE_DEBOUNCE_MS = 150;

  var headerContacts = document.getElementById('header-contacts');
  var showButton = document.getElementById('show-contacts');
  var resizeTimer;

  if (!headerContacts) return;

  function isMobile() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  function syncVisibility() {
    var mobile = isMobile();

    if (showButton) {
      showButton.style.display = mobile ? 'block' : 'none';
    }

    if (!mobile) {
      headerContacts.classList.remove('contacts-visible');
      headerContacts.style.display = '';
    } else {
      headerContacts.style.display = headerContacts.classList.contains('contacts-visible') ? '' : 'none';
    }
  }

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncVisibility, RESIZE_DEBOUNCE_MS);
  });

  window.showContacts = function () {
    if (!isMobile()) return;
    headerContacts.classList.toggle('contacts-visible');
    syncVisibility();
  };

  syncVisibility();
})();
