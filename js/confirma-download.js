(function () {
  'use strict';

  var modalContainer = document.getElementById('modal-container');
  var confirmBtn = document.getElementById('confirm-btn');
  var cancelBtn = document.getElementById('cancel-btn');
  var fileNameSpan = document.getElementById('file-name');
  var closeBtn = document.getElementById('modal-close-btn');
  var pendingUrl = null;

  function showModal() {
    if (!modalContainer) return;

    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden';

    var modalContent = modalContainer.querySelector('.modal-content');
    if (modalContent) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          modalContent.style.transform = 'scale(1) translateY(0)';
          modalContent.style.opacity = '1';
        });
      });
    }
  }

  function hideModal() {
    if (!modalContainer) return;

    var modalContent = modalContainer.querySelector('.modal-content');

    if (modalContent) {
      modalContent.style.transform = 'scale(0.94) translateY(10px)';
      modalContent.style.opacity = '0';
    }

    document.body.style.overflow = '';

    setTimeout(function () {
      modalContainer.classList.remove('active');
    }, 300);

    setTimeout(function () {
      if (modalContent) {
        modalContent.style.transform = '';
        modalContent.style.opacity = '';
      }
    }, 600);
  }

  function init() {
    document.querySelectorAll('.btn-download').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        pendingUrl = this.getAttribute('href');

        if (fileNameSpan) {
          fileNameSpan.textContent = pendingUrl.split('/').pop();
        }

        showModal();
      });
    });

    if (confirmBtn) {
      confirmBtn.addEventListener('click', function () {
        if (pendingUrl) {
          window.location.href = pendingUrl;
        }
        hideModal();
        pendingUrl = null;
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', function () {
        hideModal();
        pendingUrl = null;
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        hideModal();
        pendingUrl = null;
      });
    }

    if (modalContainer) {
      modalContainer.addEventListener('click', function (event) {
        if (event.target === modalContainer || event.target.classList.contains('modal-overlay')) {
          hideModal();
          pendingUrl = null;
        }
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modalContainer && modalContainer.classList.contains('active')) {
        hideModal();
        pendingUrl = null;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
