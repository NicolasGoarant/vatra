(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('nav-panel');
  if (!toggle || !panel) return;

  var labelOpen = toggle.getAttribute('data-label-open') || 'Open menu';
  var labelClose = toggle.getAttribute('data-label-close') || 'Close menu';

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? labelClose : labelOpen);
    panel.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  }

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when a link inside the panel is followed
  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // Reset panel state when viewport grows past the mobile breakpoint
  var mql = window.matchMedia('(min-width: 720px)');
  function onChange(e) {
    if (e.matches) setOpen(false);
  }
  if (mql.addEventListener) mql.addEventListener('change', onChange);
  else if (mql.addListener) mql.addListener(onChange);
})();
