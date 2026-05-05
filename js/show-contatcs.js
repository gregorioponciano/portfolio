(function () {
  'use strict';

  var contactsVisible = false;
  var isMobile = window.innerWidth <= 1025;

  window.addEventListener('resize', function () {
    var nowIsMobile = window.innerWidth <= 1025;
    if (isMobile !== nowIsMobile) {
      location.reload();
    }
    isMobile = nowIsMobile;
  });

  function showContatcs() {
    var headerContacts = document.getElementById('header-contatcs');
    var showButton = document.getElementById('show-contatcs');
    if (!headerContacts) return;

    if (contactsVisible) {
      headerContacts.style.display = 'none';
      if (showButton) showButton.textContent = 'Show Contacts';
    } else {
      headerContacts.style.display = 'flex';
      if (showButton) showButton.textContent = 'Hide Contacts';
    }
    contactsVisible = !contactsVisible;
  }

  window.showContatcs = showContatcs;
})();
