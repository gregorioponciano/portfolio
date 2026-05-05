(function () {
  'use strict';

  var isMobile = window.innerWidth <= 1025;
  var headerContacts = document.getElementById('header-contacts');
  var showButton = document.getElementById('show-contacts');

  // Initially visible on desktop, hidden on mobile
  if (headerContacts) {
    if (isMobile) {
      headerContacts.style.display = 'none';
      if (showButton) showButton.textContent = 'Show Contacts';
    } else {
      headerContacts.style.display = 'flex';
      if (showButton) showButton.textContent = 'Hide Contacts';
    }
  }

  window.addEventListener('resize', function () {
    var nowIsMobile = window.innerWidth <= 1025;
    if (isMobile !== nowIsMobile) {
      location.reload();
    }
    isMobile = nowIsMobile;
  });

  function showContacts() {
    if (!headerContacts) return;

    if (headerContacts.style.display === 'none' || headerContacts.style.display === '') {
      headerContacts.style.display = 'flex';
      if (showButton) showButton.textContent = 'Hide Contacts';
    } else {
      headerContacts.style.display = 'none';
      if (showButton) showButton.textContent = 'Show Contacts';
    }
  }

  window.showContacts = showContacts;
})();
