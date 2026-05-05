(function () {
  'use strict';

  var modalContainer = document.getElementById('modal-container');
  var confirmBtn = document.getElementById('confirm-btn');
  var cancelBtn = document.getElementById('cancel-btn');
  var fileNameSpan = document.getElementById('file-name');
  var pendingUrl = null;

  function showModal() {
    if (!modalContainer) return;

    modalContainer.style.display = 'flex';
    modalContainer.style.opacity = '0';

    var modalContent = modalContainer.querySelector('.modal-content');
    if (modalContent) {
      modalContent.style.transform = 'scale(0.94) translateY(12px)';
      modalContent.style.opacity = '0';
    }

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        modalContainer.style.transition = 'opacity 250ms cubic-bezier(0.25, 1, 0.5, 1)';
        modalContainer.style.opacity = '1';

        if (modalContent) {
          modalContent.style.transition = 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 250ms cubic-bezier(0.25, 1, 0.5, 1)';
          modalContent.style.transform = 'scale(1) translateY(0)';
          modalContent.style.opacity = '1';
        }
      });
    });

    modalContainer.classList.add('active');
  }

  function hideModal() {
    if (!modalContainer) return;

    var modalContent = modalContainer.querySelector('.modal-content');

    modalContainer.style.opacity = '0';

    if (modalContent) {
      modalContent.style.transform = 'scale(0.96) translateY(8px)';
      modalContent.style.opacity = '0';
    }

    setTimeout(function () {
      modalContainer.style.display = 'none';
      modalContainer.style.opacity = '';
      modalContainer.style.transition = '';
      modalContainer.classList.remove('active');

      if (modalContent) {
        modalContent.style.transform = '';
        modalContent.style.opacity = '';
        modalContent.style.transition = '';
      }
    }, 300);
  }

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

  if (modalContainer) {
    modalContainer.addEventListener('click', function (event) {
      if (event.target === modalContainer) {
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
})();
