(function () {
  'use strict';

  var form = document.querySelector('.interest-form');
  if (!form) return;

  var sectionA = form.querySelector('#form-section-a');
  var sectionB = form.querySelector('#form-section-b');
  var intentRadios = form.querySelectorAll('input[type="radio"][data-target]');

  function show(el) {
    if (!el) return;
    el.hidden = false;
    el.classList.add('is-visible');
  }
  function hide(el) {
    if (!el) return;
    el.hidden = true;
    el.classList.remove('is-visible');
    // Clear values from hidden section so we don't submit irrelevant data
    el.querySelectorAll('input, select, textarea').forEach(function (input) {
      if (input.type === 'checkbox' || input.type === 'radio') {
        input.checked = false;
      } else {
        input.value = '';
      }
    });
  }

  function update() {
    var selected = form.querySelector('input[type="radio"][data-target]:checked');
    if (!selected) {
      hide(sectionA);
      hide(sectionB);
      return;
    }
    var target = selected.getAttribute('data-target');
    if (target === 'form-section-a') {
      show(sectionA); hide(sectionB);
    } else if (target === 'form-section-b') {
      show(sectionB); hide(sectionA);
    }
  }

  intentRadios.forEach(function (r) {
    r.addEventListener('change', update);
  });
  update();

  // AJAX submit to Formspree → in-page thank-you message + redirect home.
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var action = form.getAttribute('action');
    var redirectUrl = form.getAttribute('data-redirect-url') || '/';
    var data = new FormData(form);
    var btn = form.querySelector('button[type="submit"]');
    var success = document.getElementById('form-success');
    var errorBox = document.getElementById('form-error');

    if (btn) btn.disabled = true;
    if (errorBox) errorBox.hidden = true;

    fetch(action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Submission failed');
        form.hidden = true;
        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        setTimeout(function () {
          window.location.href = redirectUrl;
        }, 7000);
      })
      .catch(function () {
        if (errorBox) errorBox.hidden = false;
        if (btn) btn.disabled = false;
      });
  });
})();
