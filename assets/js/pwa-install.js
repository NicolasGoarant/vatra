(function () {
  var banner = document.getElementById('install-banner');
  if (!banner) return;

  var STORAGE_KEY = 'vatra-install-dismissed';
  var isMobile = window.matchMedia('(max-width: 719px)').matches;
  var standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  var dismissed = false;
  try { dismissed = !!localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (!isMobile || standalone || dismissed) return;

  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  var deferredPrompt = null;
  var shown = false;

  function show(mode) {
    if (shown) return;
    shown = true;
    banner.dataset.mode = mode;
    setTimeout(function () {
      banner.hidden = false;
      requestAnimationFrame(function () { banner.classList.add('is-visible'); });
    }, 2400);
  }

  function hide() {
    banner.classList.remove('is-visible');
    setTimeout(function () { banner.hidden = true; }, 250);
  }

  function dismiss() {
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    hide();
  }

  banner.querySelector('.install-banner__close').addEventListener('click', dismiss);

  var installBtn = banner.querySelector('.install-banner__install');
  installBtn.addEventListener('click', function () {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(function () {
      deferredPrompt = null;
      hide();
    });
  });

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    show('android');
  });

  window.addEventListener('appinstalled', function () {
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    hide();
  });

  if (isIOS) show('ios');
})();
